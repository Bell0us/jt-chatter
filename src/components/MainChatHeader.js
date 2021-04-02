import React from 'react';

import { Avatar, IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function MainChatHeader({ roomName, seed, messages }) {
  return (
    <div className="main__header">
      <div className="main__info">
        <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
        <div className="chat__info">
          <h4>{roomName}</h4>
          {messages.length >= 1 ? <p>Last message {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p> : <p>Start chatting...</p>}
        </div>
      </div>
      <div className="main__controls">
        <IconButton>
          <AttachFileIcon style={{ fontSize: 30 }} />
        </IconButton>
        <IconButton>
          <MoreVertIcon style={{ fontSize: 30 }} />
        </IconButton>
      </div>
    </div>
  );
}

export default MainChatHeader;
