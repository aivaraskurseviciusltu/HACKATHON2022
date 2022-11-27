import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import CrisisAlertRoundedIcon from "@mui/icons-material/CrisisAlertRounded";
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import { Link } from "react-router-dom";
import { Diversity3, Info } from "@mui/icons-material";
import CastForEducationIcon from '@mui/icons-material/CastForEducation';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <HomeRoundedIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <CrisisAlertRoundedIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="My Challenges" />
    </ListItemButton>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <HistoryRoundedIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItemButton>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <Info sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="About us" />
    </ListItemButton>
    <ListItemButton component={Link} to="/buddy">
      <ListItemIcon>
        <Diversity3 sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="Buddy" />
    </ListItemButton>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <CastForEducationIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText primary="YourLearning" />
    </ListItemButton>
  </React.Fragment>
);