import * as React from "react";
import { Box, Container, Toolbar } from "@mui/material";

const About = () => {
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
        About us
      </Container>
    </Box>
  );
};

export default About;
