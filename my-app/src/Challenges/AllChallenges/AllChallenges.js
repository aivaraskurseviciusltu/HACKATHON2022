import React from "react";
import ReusableModal from "../Modal";
import { TableContainer, TableBody, TableCell, TableHead, Table, TableRow, Grid, Paper, Typography, Box, Button } from "@mui/material";
import styled from "@emotion/styled";

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
    if (!calcStart()) {
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
      const newState = { ...prevState };
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
          color: "#fff",
          background: props.color === 'pink' ? 'linear-gradient(125deg, rgba(125,18,255,1) 0%, rgba(125,18,255,0.3604035364145658) 100%)' : 'linear-gradient(90deg, rgba(255,53,98,1) 0%, rgba(228,4,54,1) 100%)',
          boxShadow: props.color === 'pink' ? "0px 0px 5px 4px #7d12ff" : "0px 0px 5px 3px #ff3562",
          '&:hover': {
            border: props.color === 'pink' ? "3px solid #7d12ff" : "3px solid #db254e",
            background: props.color === 'pink' ? 'linear-gradient(125deg, rgba(125,18,255,1) 0%, rgba(125,18,255,0.3604035364145658) 100%)' : 'linear-gradient(90deg, rgba(255,53,98,1) 0%, rgba(228,4,54,1) 100%)',
            boxShadow: 'none'
          },
        }}
        className="raise"
      >
        <Grid container sx={{ borderBottom: `2px solid ${props.color === 'pink' ? "#6000d4" : "#db254e"}`, height: 48, padding: 1 }}>
          <Grid item xs={8}>
            <Typography
              sx={{ height: "40px", textAlign: "start", fontWeight: 600 }}
              variant="h5"
              id="tableTitle"
              component="h5">
              {data.title}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              sx={{ height: "40px", textAlign: "end", fontWeight: 600, paddingTop: "4px" }}
              variant="p"
              id="tableTitle"
              component="p">
              {
                calcStart() ? `Challenge Duration: ${data.duration}` : calcDiff()
              }
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{ height: 192, p: 2 }}>
          <Grid item xs={9.5}>
            <TableContainer component={Paper} sx={{ maxHeight: "160px", overflowY: "auto", background: props.color === 'pink' ? "#a154ff" : "#ff547a" }}>
              <Table sx={{ minWidth: "100%", }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: props.color === 'pink' ? "#8928ff" : "#ff3562" }}>
                    <TableCell sx={{
                      color: "#fff", fontWeight: 700, borderColor:
                        props.color === 'pink'
                          ? "#7d12ff" : "#db254e"
                    }}>Participant</TableCell>
                    <TableCell sx={{
                      color: "#fff", fontWeight: 700, borderColor:
                        props.color === 'pink'
                          ? "#7d12ff" : "#db254e"
                    }}>Time Spent</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.users.sort((a, b) => {
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
                      sx={{
                        backgroundColor: props.color === 'pink' ? "#a154ff" : "#ff547a",
                        '&:last-child td, &:last-child th': { border: 0 },
                        textTransform: "none"
                      }}
                      className="listItem"
                    >
                      <StyledTableCell component="td" sx={{
                        borderColor:
                          props.color === 'pink'
                            ? "#7d12ff" : "#db254e"
                      }}>
                        {`${item.name} ${item.surname}`}
                      </StyledTableCell>
                      <StyledTableCell component="td" sx={{
                        borderColor:
                          props.color === 'pink'
                            ? "#7d12ff" : "#db254e"
                      }}>
                        {item.learnings.reduce((accumulator, object) => {
                          return accumulator + object.duration;
                        }, 0)
                        }
                      </StyledTableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={2.5}>
            <Box sx={{ display: "flex", flexDirection: "column", height: "100%", alignItems: "center", justifyContent: props.color === 'pink' ? "flex-end" : "space-between", fontWeight: 600 }}>
              <Box sx={{ display: props.color === 'pink' ? "none" : "flex", flexGrow: 1, justifyContent: 'center', alignItems: 'center', pl: 3 }}>
                <Button variant="outlined" sx={{ width: "10vw", height: '70%', color: '#fff', fontWeight: 700, border: "4px solid #ff3562", fontSize: '26px', '&:hover': { border: "4px solid #ff3562", background: "#ff3562" } }}>Join</Button>
              </Box>
              <Box sx={{ display: "flex", alignSelf: "end" }}>
                {calcStart() ? `Start on: ${data.startDate}` : "Status: In Progess"}
              </Box>
            </Box>
          </Grid>
        </Grid>
        {open && (
          <ReusableModal open={open} data={data} handleClose={handleClose} onAddUser={handleAddUser} closeModal={closeModal} inProgress={progress} />
        )}
      </Paper>
    </Grid>
  );
};

export default AllOpenChallenges;

const StyledTableCell = styled(TableCell)({
  color: "#fff",
  fontWeight: 600,
});