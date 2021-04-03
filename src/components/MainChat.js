import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { useStateValue } from '../StateProvider';
import firebase from 'firebase';
import MainChatBody from './MainChatBody';
import MainChatFooter from './MainChatFooter';
import MainChatHeader from './MainChatHeader';

const MainChat = ({ creator }) => {
  const [msgValue, setMsgValue] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');
  const [permitedUsers, setPermitedUsers] = useState([]);
  const [seed, setSeed] = useState('');
  const [messages, setMessages] = useState([]);
  const [{ user }] = useStateValue();

  const addUserPermition = () => {
    const addUser = prompt("Enter the user's ID");
    if (addUser) {
      db.collection('rooms').doc(roomId).collection('permitedUsers').add({
        userId: addUser,
      });
    }
  };

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
      db.collection('rooms')
        .doc(roomId)
        .collection('permitedUsers')
        .onSnapshot((snapshot) => setPermitedUsers(snapshot.docs.map((doc) => doc.data())));
    }
    setSeed(Math.floor(Math.random() * 10000));
  }, [roomId]);

  const sendMsg = (e) => {
    e.preventDefault();
    db.collection('rooms').doc(roomId).collection('messages').add({
      message: msgValue,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMsgValue('');
  };

  const userId = permitedUsers.map((user) => user.userId);

  return (
    <div className="main__chat">
      {creator === user.uid || userId == user.uid ? (
        <div className="chat__private">
          {/* Chat header */}
          <MainChatHeader roomName={roomName} seed={seed} messages={messages} addUserPermition={addUserPermition} />
          {/* Chat body */}
          <MainChatBody messages={messages} />
          {/* Chat footer */}
          <MainChatFooter msgValue={msgValue} setMsgValue={setMsgValue} sendMsg={sendMsg} />
        </div>
      ) : (
        <h1>Acces denied</h1>
      )}
    </div>
  );
};

export default MainChat;
