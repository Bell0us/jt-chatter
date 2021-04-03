import React, { useState } from 'react';

import { Avatar, Button, ButtonGroup, IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function MainChatHeader({ roomName, seed, messages, addUserPermition }) {
  const [popupVisibility, setPopupVisibility] = useState(false);
  const togglePopup = () => {
    if (popupVisibility === true) {
      setPopupVisibility(false);
    }
    if (popupVisibility === false) {
      setPopupVisibility(true);
    }
  };

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
        <IconButton onClick={togglePopup}>
          <MoreVertIcon style={{ fontSize: 30 }} />
        </IconButton>
      </div>
      <ButtonGroup orientation="vertical" variant="contained" disableElevation className="popup_btns" style={popupVisibility ? { zIndex: 1 } : { zIndex: -1 }}>
        <Button onClick={addUserPermition}>Add user</Button>
        <Button>Remove user</Button>
      </ButtonGroup>
    </div>
  );
}

export default MainChatHeader;
