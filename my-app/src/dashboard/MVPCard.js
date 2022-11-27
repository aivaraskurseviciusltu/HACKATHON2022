import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/material";
import classes from "./MVPCard.module.css";
import Lottie from "react-lottie";
import { animationWidth } from "../utils/Constants";

const animationStyle = {
  position: "relative",
  // top: "530px",
  // left: "830px",
  bottom: "10px",
  margin: 0,
};

function MVPCard({ title, hours, cssClass, animation }) {
  const defaultAnimation = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        height: 270,
      }}
      className={cssClass}
    >
     <Box  sx={{ display: "flex", width: "100%", flexDirection: "row" }}>
        <Box  sx={{ display: "flex", width: "75%" }}>
          <Typography color="white" sx={{ fontSize: 40, fontWeight: "800" }}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", width: "25%" }}>
          <Lottie
            style={animationStyle}
            options={defaultAnimation}
            height={animationWidth}
            width={animationWidth}
          /> 
      </Box>
        </Box>
      <Box
        sx={{
          alignItems: "start",
          justifyContent: "start",
          textAlign: "left",
          marginTop: "5rem",
        }}
      >
        <Typography
          className={classes.hours}
          color="white"
          sx={{ fontSize: 50, fontWeight: "800" }}
        >
          {hours}
        </Typography>
        <Typography
          className={classes.timeType}
          color="white"
          sx={{ fontSize: 30, fontWeight: "800" }}
        >
          pts
        </Typography>
      </Box>
    </Paper>
  );
}

export default MVPCard;
