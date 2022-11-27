import * as React from "react";
import { Box, Container, Toolbar } from "@mui/material";

const Home = () => {
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
        Home
      </Container>
    </Box>
  );
};

export default Home;
