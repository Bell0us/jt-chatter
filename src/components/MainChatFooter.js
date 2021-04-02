import React from 'react';

import { IconButton } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';

function MainChatFooter({ setMsgValue, msgValue, sendMsg }) {
  return (
    <div className="main__footer">
      <IconButton>
        <InsertEmoticonIcon style={{ fontSize: 25 }} />
      </IconButton>
      <form className="footer__form">
        <input type="text" className="form__int" placeholder="Enter your message..." value={msgValue} onChange={(e) => setMsgValue(e.target.value)} />
        <button className="form__btn" type="submit" onClick={sendMsg}>
          Send <SendIcon className="send__icon" />
        </button>
      </form>
    </div>
  );
}

export default MainChatFooter;
