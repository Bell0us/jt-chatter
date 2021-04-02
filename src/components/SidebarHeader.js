import React from 'react';

import { Avatar, IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { useStateValue } from '../StateProvider';

const SidebarHeader = ({ darkMode, setDM }) => {
  const [{ user }] = useStateValue();
  return (
    <div className="sidebar__header">
      <Avatar variant="rounded" src={user?.photoURL} />
      <div className="header__controls">
        <IconButton>
          <SettingsIcon style={{ fontSize: 30 }} />
        </IconButton>
        {!darkMode ? (
          <IconButton onClick={() => setDM(true)}>
            <BrightnessHighIcon style={{ fontSize: 30 }} />
          </IconButton>
        ) : (
          <IconButton onClick={() => setDM(false)}>
            <Brightness4Icon style={{ fontSize: 30 }} />
          </IconButton>
        )}
        <IconButton>
          <InfoIcon style={{ fontSize: 30 }} />
        </IconButton>
      </div>
    </div>
  );
};

export default SidebarHeader;
