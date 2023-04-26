import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Card } from 'antd';
import styles from './chat.less';

const ChatRoom = () => {
  const mesList = [
    {
      id: 'my69der7ppGLTvLa7wnX',
      displayName: '111111111',
      uid: '44fa5d5d-a32a-428f-a5a4-12ce0ef375fa',
      text: 'hello bạn',
      avatar:
        'https://firebasestorage.googleapis.com/v0/b/chat-room-f55c4.appspot.com/o/1215b2c7-5ddc-4a58-99e1-afa0ea806fdc?alt=media&token=508d2026-2f44-4ff8-a181-e0c305dcf8f6',
      timestamp: {
        seconds: 1682502439,
        nanoseconds: 167000000,
      },
    },
    {
      id: 'WzIr1L4YjUcaScVtoZGW',
      uid: '44fa5d5d-a32a-428f-a5a4-12ce0ef375fa',
      displayName: '111111111',
      timestamp: {
        seconds: 1682502451,
        nanoseconds: 813000000,
      },
      avatar:
        'https://firebasestorage.googleapis.com/v0/b/chat-room-f55c4.appspot.com/o/1215b2c7-5ddc-4a58-99e1-afa0ea806fdc?alt=media&token=508d2026-2f44-4ff8-a181-e0c305dcf8f6',
      text: 'bạn tên gì vậy',
    },
    {
      id: '8VqLYLqkNbdIIhmczGBG',
      uid: '55a155ac-44e8-4b21-b99c-0cf63e8bd1a6',
      timestamp: {
        seconds: 1682502458,
        nanoseconds: 887000000,
      },
      displayName: 'use01',
      text: 'cho xin link bạn êyyy',
    },
    {
      id: 'pEo4Gd9yoYJXOTBuc2JR',
      uid: '44fa5d5d-a32a-428f-a5a4-12ce0ef375fa',
      text: 'nè má',
      displayName: '111111111',
      timestamp: {
        seconds: 1682502468,
        nanoseconds: 302000000,
      },
      avatar:
        'https://firebasestorage.googleapis.com/v0/b/chat-room-f55c4.appspot.com/o/1215b2c7-5ddc-4a58-99e1-afa0ea806fdc?alt=media&token=508d2026-2f44-4ff8-a181-e0c305dcf8f6',
    },
    {
      id: 'UApJ5utgXbsyzNPwLOAi',
      uid: '44fa5d5d-a32a-428f-a5a4-12ce0ef375fa',
      avatar:
        'https://firebasestorage.googleapis.com/v0/b/chat-room-f55c4.appspot.com/o/1215b2c7-5ddc-4a58-99e1-afa0ea806fdc?alt=media&token=508d2026-2f44-4ff8-a181-e0c305dcf8f6',
      displayName: '111111111',
      timestamp: {
        seconds: 1682502469,
        nanoseconds: 745000000,
      },
      img: 'https://firebasestorage.googleapis.com/v0/b/chat-room-f55c4.appspot.com/o/e8fd22c2-5576-43d7-8ccd-de810be78091?alt=media&token=2e33323f-e957-4ee3-b705-d19755c64ca4',
    },
    {
      id: '6B8O8c9Ojw2u59rMvD4i',
      displayName: 'use01',
      text: 'ok bạn',
      timestamp: {
        seconds: 1682502479,
        nanoseconds: 289000000,
      },
      uid: '55a155ac-44e8-4b21-b99c-0cf63e8bd1a6',
    },
    {
      id: 'XwDUUOJmd36m0FoclEp9',
      timestamp: {
        seconds: 1682502481,
        nanoseconds: 807000000,
      },
      img: 'https://firebasestorage.googleapis.com/v0/b/chat-room-f55c4.appspot.com/o/c81dc087-8d2a-40b5-b8eb-d078de089f20?alt=media&token=5f9602ac-d0d8-4c5b-8e1b-0e514fa5455e',
      uid: '55a155ac-44e8-4b21-b99c-0cf63e8bd1a6',
      displayName: 'use01',
    },
    {
      id: 'ZSWrIyUiYteo6A5L0N6r',
      uid: '44fa5d5d-a32a-428f-a5a4-12ce0ef375fa',
      avatar:
        'https://firebasestorage.googleapis.com/v0/b/chat-room-f55c4.appspot.com/o/1215b2c7-5ddc-4a58-99e1-afa0ea806fdc?alt=media&token=508d2026-2f44-4ff8-a181-e0c305dcf8f6',
      text: 'hihi',
      timestamp: {
        seconds: 1682502490,
        nanoseconds: 998000000,
      },
      displayName: '111111111',
    },
    {
      id: 'ybcxq3xHJxCdV1GKTYRa',
      uid: '44fa5d5d-a32a-428f-a5a4-12ce0ef375fa',
      displayName: '111111111',
      timestamp: {
        seconds: 1682502495,
        nanoseconds: 319000000,
      },
      avatar:
        'https://firebasestorage.googleapis.com/v0/b/chat-room-f55c4.appspot.com/o/1215b2c7-5ddc-4a58-99e1-afa0ea806fdc?alt=media&token=508d2026-2f44-4ff8-a181-e0c305dcf8f6',
      video:
        'https://firebasestorage.googleapis.com/v0/b/chat-room-f55c4.appspot.com/o/4c5ffab5-b139-4df3-af98-cf6c939f46e0?alt=media&token=467988e6-a0ad-4add-8779-69ec168758ea',
    },
    {
      id: 'GzD4Enxz1bHV8BbmoUTu',
      text: 'haha',
      uid: '55a155ac-44e8-4b21-b99c-0cf63e8bd1a6',
      displayName: 'use01',
      timestamp: {
        seconds: 1682502533,
        nanoseconds: 338000000,
      },
    },
    {
      id: 'Fi5mhPvu6oRIp6PfXEmZ',
      video:
        'https://firebasestorage.googleapis.com/v0/b/chat-room-f55c4.appspot.com/o/9a11442b-de7e-4ea7-95a0-47366775aa0a?alt=media&token=710a974b-012c-485e-a081-c511db0dbb62',
      displayName: 'use01',
      uid: '55a155ac-44e8-4b21-b99c-0cf63e8bd1a6',
      timestamp: {
        seconds: 1682502537,
        nanoseconds: 5000000,
      },
    },
  ];

  return (
    <div className={styles.chat__room}>
      <MessageList messageList={mesList} />
      <MessageInput />
    </div>
  );
};

export default ChatRoom;
