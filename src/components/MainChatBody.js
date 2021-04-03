import React, { useEffect } from 'react';
import { useStateValue } from '../StateProvider';

function MainChatBody({ messages }) {
  const [{ user }] = useStateValue();

  const body = document.querySelector('.main__body');
  useEffect(() => {
    body != null && (body.scrollTop = body.scrollHeight);
  }, [messages]);

  return (
    <div className="main__body" id="main_body">
      <p className={`body__msg`}>
        You can start chatting!
        <span className="msg__name">
          Server <span className="msg__time">{new Date().toUTCString()}</span>
        </span>
      </p>
      {messages.map((msg) => (
        <p key={msg.message} className={`body__msg ${msg.name === user.displayName && 'msg__send'}`}>
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
