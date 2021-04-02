import React, { useState, useEffect } from 'react';

import { Avatar } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import db from '../firebase';

const ChatRoom = ({ name, id }) => {
  const [seed, setSeed] = useState('');
  const [messages, setMessages] = useState('');
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 10000));
  }, []);
  useEffect(() => {
    if (id) {
      db.collection('rooms')
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
    }
  });
  return (
    <Link to={`/rooms/${id}`}>
      <div className="chat__room">
        <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
        <div className="chat__info">
          <h4>{name}</h4>
          {messages.length >= 1 ? <p id="wrap">{messages[0]?.message}</p> : <p id="wrap">You can start chatting!</p>}
        </div>
        <ChevronRightIcon className="chat-arrow" />
      </div>
    </Link>
  );
};

export default ChatRoom;
