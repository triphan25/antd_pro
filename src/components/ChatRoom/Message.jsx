import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import styles from './chat.less';

const Message = ({ key, message, isOwnMessage }) => {
  const { text, img, video, oldValues, avatar } = message;

  const viewFileDetail = (imgUrl) => {
    window.open(imgUrl, '_blank', 'noreferrer');
  };

  return (
    <div className={`${styles.message_box} ${isOwnMessage && styles.own}`} key={key}>
      {avatar ? (
        <Avatar size={20} src={<img src={avatar} alt="avatar" />} className={styles.avatar} />
      ) : (
        <Avatar className={styles.avatar} size={20} icon={<UserOutlined />} />
      )}
      <div className={styles.content}>
        {text && (
          <div className={styles.text_container}>
            {oldValues && (
              <EditOutlined className={`${styles.edit_icon} ${!isOwnMessage && styles.not_own}`} />
            )}
            <div className={`${styles.text_message} ${isOwnMessage && styles.edit}`}>{text}</div>
          </div>
        )}

        {img && (
          <div className={styles.message_media} onClick={(e) => viewFileDetail(img)}>
            <img src={img} alt="message-img" />
          </div>
        )}

        {video && (
          <div className={styles.message_media} onClick={(e) => viewFileDetail(video)}>
            <video controls>
              <source src={video} />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
