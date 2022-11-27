import * as React from "react";
import { Box, Container, Toolbar } from "@mui/material";

const Challenges = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "#484848",
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="100%" sx={{ mt: 4, mb: 4 }}>
        My Challenges
      </Container>
    </Box>
  );
};

export default Challenges;
