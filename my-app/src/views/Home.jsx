
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MVPCard from "../dashboard/MVPCard";
import classes from "../dashboard/MVPCard.module.css"
import Challenges from "../Challenges/Challenges";
import LeaderboardTable from "../dashboard/LeaderboardTable";

const Home = () => {
    return <Box
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
              <Grid container spacing={2} >
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
                        <MVPCard title="2022 MVP" hours="5040" cssClass={classes.card1} />
                      </Grid>
                      <Grid item xs={4}>
                        <MVPCard title="Q3 MVP" hours="2011" cssClass={classes.card2} />
                      </Grid>
                      <Grid item xs={4}>
                        <MVPCard title="July MVP" hours="539" cssClass={classes.card3} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <LeaderboardTable />

              </Grid>
            </Container>
          </Box>
}

export default Home;