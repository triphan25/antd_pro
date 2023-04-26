import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import styles from './chat.less';

const Message = ({ key, message, isOwnMessage }) => {
  const { text, img, video, oldValues, avartar } = message;

  return (
    <div className={`${styles.message_box} ${isOwnMessage && styles.own}`}>
      {avartar ? (
        <Avatar size={20} src={<img src={avartar} alt="avatar" />} className={styles.avatar} />
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
          <div className={styles.message_media}>
            <img src={img} alt="message-img" />
          </div>
        )}

        {video && (
          <div className={styles.message_media}>
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
