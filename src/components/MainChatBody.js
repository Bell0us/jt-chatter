import React from 'react';
import { useStateValue } from '../StateProvider';

function MainChatBody({ messages }) {
  const [{ user }] = useStateValue();
  return (
    <div className="main__body">
      <p className={`body__msg`}>
        You can start chatting!
        <span className="msg__name">
          Server <span className="msg__time">{new Date().toUTCString()}</span>
        </span>
      </p>
      {messages.map((msg) => (
        <p className={`body__msg ${msg.name === user.displayName && 'msg__send'}`}>
          {msg.message}
          <span className="msg__name">
            {msg.name} <span className="msg__time">{new Date(msg.timestamp?.toDate()).toUTCString()}</span>
          </span>
        </p>
      ))}
    </div>
  );
}

export default MainChatBody;
