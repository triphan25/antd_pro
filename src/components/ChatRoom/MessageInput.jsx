import React, { useRef, useState } from 'react';
import Styles from './chat.less';
import { v4 as uuid } from 'uuid';
import { Button, Input } from 'antd';
import { PictureOutlined, SendOutlined, YoutubeOutlined } from '@ant-design/icons';
import PrviewFilePopup from './PrviewFilePopup';
import { sendMessage } from '@/firebase/firebaseService';

const MessageInput = ({ user }) => {
  const imgRef = useRef(null);
  const videoRef = useRef(null);
  const [textMessage, setTextMessage] = useState('');
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage('room1', user, textMessage, files);
    setTextMessage('');
    setFiles([]);
  };

  const onChangeTextMessage = (e) => {
    setTextMessage(e.target.value);
  };

  const handleChangeFile = (e) => {
    if (e) {
      let newFiles = files.length > 0 ? [...files] : [];

      for (let file of e.target.files) {
        newFiles.push({
          id: uuid(),
          file: file,
          type: file.type,
          previewUrl: URL.createObjectURL(file),
        });
      }

      setFiles(newFiles);
    }
  };

  const deletePreviewFile = (file) => {
    let newFiles = files.filter((item) => item.id !== file.id);

    setFiles(newFiles);
  };

  return (
    <form onSubmit={handleSubmit} className={Styles.message_input_container}>
      <div className={Styles.input_text_box}>
        <Input
          className={Styles.inputText}
          value={textMessage}
          onChange={onChangeTextMessage}
          allowClear
          type="text"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        {files.length > 0 && (
          <PrviewFilePopup filesPreview={files} deleteFile={deletePreviewFile} />
        )}
      </div>

      <div className={Styles.action_group}>
        <PictureOutlined onClick={() => imgRef.current.click()} className={Styles.action_img} />
        <YoutubeOutlined onClick={() => videoRef.current.click()} className={Styles.action_video} />
        <SendOutlined onClick={handleSubmit} className={Styles.action_send} />
      </div>

      <input
        hidden
        accept="image/*"
        type="file"
        multiple
        ref={imgRef}
        onChange={handleChangeFile}
      />
      <input
        hidden
        accept="video/*"
        type="file"
        multiple
        ref={videoRef}
        onChange={handleChangeFile}
      />
    </form>
  );
};

export default MessageInput;
