import React from 'react';
import ChatRoom from './ChatRoom';

import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';
import { useStateValue } from '../StateProvider';

const SidebarChatRooms = ({ rooms }) => {
  const [{ user }] = useStateValue();
  const createChat = () => {
    const roomName = prompt('Enter name for the chat room');

    if (roomName) {
      db.collection('rooms').add({
        name: roomName,
        creator: user.uid,
      });
    }
  };
  console.log(rooms);
  return (
    <div className="sidebar__chat">
      <Button variant="contained" className="chat__add" disableElevation onClick={createChat}>
        <AddIcon /> Add new chat
      </Button>
      {rooms.map((room) => (
        <ChatRoom name={room.data.name} key={room.id} id={room.id} />
      ))}
    </div>
  );
};

export default SidebarChatRooms;
