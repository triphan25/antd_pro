import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { connect } from 'umi';
import styles from './chat.less';

const ChatRoom = ({ user }) => {
  return (
    <div className={styles.chat__room}>
      <MessageList user={user} />
      <MessageInput user={user} />
    </div>
  );
};

export default connect(({ user }) => ({
  user: user.currentUser,
}))(ChatRoom);
