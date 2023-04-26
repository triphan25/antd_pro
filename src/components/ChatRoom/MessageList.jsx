import React, { useLayoutEffect, useRef } from 'react';
import styles from './chat.less';
import Message from './Message';

const MessageList = ({ messageList }) => {
  const containerRef = useRef(null);
  const userId = '44fa5d5d-a32a-428f-a5a4-12ce0ef375fa';

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });

  return (
    <div className={styles.message_list_container} ref={containerRef}>
      <div className={styles.message_body}>
        {messageList.map((item) => (
          <Message
            key={item.id}
            message={item}
            isOwnMessage={item.uid === userId}
            // avartar={item.avartar}
            // getEditMessage={getEditMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
