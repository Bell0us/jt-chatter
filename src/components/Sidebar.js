import React, { useEffect } from 'react';
import SidebarHeader from './SidebarHeader';

import SearchIcon from '@material-ui/icons/Search';
import SidebarChatRooms from './SidebarChatRooms';
import db from '../firebase';

const Sidebar = ({ darkMode, setDM, rooms, setRooms }) => {
  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="app__sidebar">
      {/* Sidebar header */}
      <SidebarHeader darkMode={darkMode} setDM={setDM} />
      {/* Sidebar search */}
      <div className="sidebar__search">
        <SearchIcon />
        <input type="text" className="search__int" placeholder="Search or start new chat" />
      </div>
      {/* All chat rooms */}
      <SidebarChatRooms rooms={rooms} />
    </div>
  );
};

export default Sidebar;
