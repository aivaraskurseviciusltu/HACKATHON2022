import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import CrisisAlertRoundedIcon from '@mui/icons-material/CrisisAlertRounded';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <HomeRoundedIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CrisisAlertRoundedIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="My Challenges" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <HistoryRoundedIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItemButton>
  </React.Fragment>
);
