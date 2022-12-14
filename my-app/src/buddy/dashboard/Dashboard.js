import * as React from "react";
import { styled, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems } from "./listItems";
import Button from "@mui/material/Button";
import MVPCard from "./MVPCard";
import classes from "./MVPCard.module.css";
import theme from "../styles/theme";
import logo from "../images/logo.svg";
import UserInfo from "./UserInfo";
import Challenges from "../Challenges/Challenges";
import LeaderboardTable from "./LeaderboardTable";
import fire from "./assets/lottie/fire.json";
import trophy from "./assets/lottie/trophy.json";
import arrowUp from "./assets/lottie/rocket.json";
import buttonClasses from "./Dashboard.module.css";
import backgroundImg from './assets/background.png';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
                backgroundColor: "#000",
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Box
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <img alt="" src={logo} height="48px" />
                <Typography component="h1" variant="h6" color="inherit" noWrap>
                  Buddy Challenges
                </Typography>
              </Box>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            open={open}
            PaperProps={{
              sx: {
                background: "#262626",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              },
            }}
          >
            <Box>
              <Toolbar
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  px: [1],
                }}
              >
                <IconButton onClick={toggleDrawer}>
                  <ChevronLeftIcon sx={{ color: "white" }} />
                </IconButton>
              </Toolbar>
              <UserInfo display={open} />
              <Divider sx={{ borderColor: "rgba(180, 180, 180,  0.22)" }} />
              <List component="nav">
                {mainListItems}
                <Divider
                  sx={{ my: 1, borderColor: "rgba(180, 180, 180,  0.22)" }}
                />
              </List>
            </Box>
            <Box sx={{ py: 10 }}>
              <Button
                className={buttonClasses.createButton}
                variant="contained"
                color="warning"
                sx={{ fontWeight: 700 }}
              >
                {open ? (
                  <div>
                    Create <br /> new challenge{" "}
                  </div>
                ) : (
                  "+"
                )}
              </Button>
            </Box>
          </Drawer>

          <Box
            component="main"
            // style={{backgroundImage: backgroundImg}}
            sx={{
              background: `url(${backgroundImg})`,
              // backgroundColor: "#484848",
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="100%" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={2}>
                {/* challenge */}
                <Grid item xs={8}>
                  <Grid container spacing={2} flexDirection="column">
                    <Grid item xs={12}>
                      <Grid container spacing={3}>
                        <Challenges />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sx={{ paddingTop: "12px" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <MVPCard
                          title="2021 MVP"
                          hours="504"
                          cssClass={classes.card1}
                          animation={trophy}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <MVPCard
                          title="Q3 MVP"
                          hours="224"
                          cssClass={classes.card2}
                          animation={arrowUp}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <MVPCard
                          title="July MVP"
                          hours="102"
                          cssClass={classes.card3}
                          animation={fire}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <LeaderboardTable />
              </Grid>
            </Container>   
          </Box>
        </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
