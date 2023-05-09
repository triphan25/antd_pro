import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './chat.less';
import Message from './Message';
import { getMessages } from '@/firebase/firebaseService';

const MessageList = () => {
  const containerRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const userId = '321321w';

  useEffect(() => {
    const unsubscribe = getMessages('room1', setMessages);

    return unsubscribe;
  }, []);

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  });

  return (
    <div className={styles.message_list_container} ref={containerRef}>
      <div className={styles.message_body}>
        {messages.map((item) => (
          <Message key={item.id} message={item} isOwnMessage={item.uid === userId} />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
