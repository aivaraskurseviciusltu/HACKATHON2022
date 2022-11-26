import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/material";
import classes from "./MVPCard.module.css";

function MVPCard({title, hours, cssClass}) {
  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        height: 240,
      }}
      className={cssClass}
    >
      <Box sx={{ alignItems: "start" }}>
        <Typography color="white" sx={{ fontSize: 40, fontWeight: "800" }}>
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          alignItems: "start",
          justifyContent: "start",
          textAlign: "left",
          marginTop: "5rem",
        }}
      >
        <Typography className={classes.hours}  color="white" sx={{ fontSize: 50, fontWeight: "800" }}>
          {hours}
        </Typography>
        <Typography className={classes.timeType} color="white" sx={{ fontSize: 30, fontWeight: "800"}}>
          hrs
        </Typography>
      </Box>
    </Paper>
  );
}

export default MVPCard;
