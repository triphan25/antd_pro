import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDIC-utJD7hX8fU0rTMW2S2wG9tECZkAf0',
  authDomain: 'ecowashpro-e74b5.firebaseapp.com',
  projectId: 'ecowashpro-e74b5',
  storageBucket: 'ecowashpro-e74b5.appspot.com',
  messagingSenderId: '112304621546',
  appId: '1:112304621546:web:b22c7c4dd421e7b6935493',
  measurementId: 'G-JHBE1NJQJD',
};

export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
