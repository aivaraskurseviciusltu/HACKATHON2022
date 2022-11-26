import React from "react";
import ReusableModal from "../Modal";
import { TableContainer, TableBody, TableCell, TableHead, Table, TableRow, Grid, Paper, Typography, Box } from "@mui/material";

const AllOpenChallenges = (props) => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(props.data);
  const [progress, setProgress] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const calcStart = () => {
    const startDate = new Date(data.startDate).getTime();
    const today = new Date().getTime();

    return startDate > today;
  }

  const closeModal = () => {
    setOpen(false);
  }

  React.useEffect(() => {
    if(!calcStart()) {
      setProgress(true);
    }
  }, [props.data]);

  const calcDiff = () => {
    const startDate = new Date(data.startDate);
    const today = new Date().getTime();

    let Difference_In_Time = startDate.setDate(startDate.getDate() + data.duration) - today;
      
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return `Remaining Days: ${Math.floor(Difference_In_Days)}`;
  }

  const handleAddUser = (user) => {
    setData((prevState) => {
        const newState = {...prevState};
        newState.users.unshift(user)
        return newState;
    })
  }

  return (
    <Grid item className="card" xs={12} onClick={handleOpen}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          height: 240,
        }}
        className="raise"
      >
        <Grid container sx={{ borderBottom: "2px solid #2196f3", height: 48, padding: 1 }}>
          <Grid item xs={8}>
            <Typography
              sx={{height: "40px", textAlign: "start", fontWeight: 600 }}
              variant="h5"
              id="tableTitle"
              component="h5">
              {data.title}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              sx={{height: "40px", textAlign: "end", fontWeight: 600, paddingTop: "4px" }}
              variant="p"
              id="tableTitle"
              component="p">
              {
                calcStart() ? `Challenge Duration: ${data.duration}` : calcDiff()
              }
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ height: 192, p:2}}>
          <Grid item xs={8}>
          <TableContainer component={Paper} sx={{ maxHeight: "160px", overflowY: "auto"}}>
              <Table sx={{ minWidth: "100%",  }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#2196f3"}}>
                  <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Participant</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 600}}>Time Spent</TableCell>
                </TableRow>
              </TableHead>
                <TableBody>
                    {data.users.sort((a,b) => {
                      const prev = a.learnings.reduce((accumulator, object) => {
                        return accumulator + object.duration;
                        }, 0)
                        const next = b.learnings.reduce((accumulator, object) => {
                          return accumulator + object.duration;
                        }, 0)
                        return next - prev;
                    }).map((item, index) =>  
                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 },
                        '&:nth-child(odd) td': { backgroundColor: "#eeeeee" },
                        textTransform: "none"
                        }}
                        className="listItem"
                      >
                        <TableCell component="td" >
                          {`${item.name} ${item.surname}`}
                        </TableCell>
                        <TableCell component="td" >
                          { item.learnings.reduce((accumulator, object) => {
                              return accumulator + object.duration;
                            }, 0)
                          }
                        </TableCell>
                      </TableRow>
                    )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: "flex", height: "100%", alignItems: "flex-end", justifyContent: "flex-end", fontWeight: 600}}>
              { calcStart() ? `Start on: ${data.startDate}` : "Status: In Progess"}
            </Box>
          </Grid>
        </Grid>
        {open && (
          <ReusableModal open={open} data={data} handleClose={handleClose} onAddUser={handleAddUser} closeModal={closeModal} inProgress={progress}/>
        )}
      </Paper>
    </Grid>
  );
};

export default AllOpenChallenges;