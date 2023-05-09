import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { v4 as uuid } from 'uuid';
import { firestore, storage } from './firebaseConfig';

const uploadFileToFirebase = async (file) => {
  const storageRef = ref(storage, uuid());
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      console.log('progress', progress);
    },
    (error) => {
      console.error('Failed to upload avatar:', error);
      throw error;
    },
  );

  await uploadTask;
  const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

  return downloadURL;
};

export const sendMessage = async (roomId, user, text, files) => {
  try {
    let document = {
      uid: user.userId,
      username: user.name,
      timestamp: serverTimestamp(),
    };

    if (user?.avatar) {
      document.avatar = user?.avatar;
    }

    if (text) {
      document.text = text.trim();
      await addDoc(collection(firestore, 'chat-rooms', roomId, 'messages'), document);
      delete document.text;
    }

    if (files?.length > 0) {
      let newFiles = files.map((item) => item.file);
      newFiles.map(async (fileItem) => {
        const downloadURL = await uploadFileToFirebase(fileItem);
        fileItem?.type.includes('image')
          ? (document.img = downloadURL)
          : (document.video = downloadURL);

        await addDoc(collection(firestore, 'chat-rooms', roomId, 'messages'), document);

        document.img && delete document.img;
        document.video && delete document.video;
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getMessages = (roomId, callback) => {
  return onSnapshot(
    query(collection(firestore, 'chat-rooms', roomId, 'messages'), orderBy('timestamp', 'asc')),
    (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      callback(messages);
    },
  );
};
