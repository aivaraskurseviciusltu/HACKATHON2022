import React from 'react'
import { TableContainer, TableBody, TableCell, TableHead, Table, TableRow, Grid, Paper, Typography } from "@mui/material";


function createData(number, name, hours) {
  return { number, name, hours };
}

const rows = [
  createData(1, "Petras", 69),
  createData(2, "Jonas", 19),
  createData(3, "Kazys", 30),
  createData(4, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
  createData(5, "Kazys", 30),
];

const LeaderboardTable = () => {
  return (
    <Grid item xs={4}>
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        maxnHeight: "500px",
      }} 
      className="border-custom"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <Typography
        sx={{height: "40px", alignSelf: "center" }}
        variant="h5"
        id="tableTitle"
        component="h5"
      >
        Leaderboard
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: "none", maxHeight: "700px", overflowY: "auto"}}>
        <Table sx={{ minWidth: "100%",  }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#2196f3"}}>
              <TableCell sx={{ color: "#fff", fontWeight: 600 }}>Number</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: 600}}>Name</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: 600}} align="right">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.sort((a,b) => a.number - b.number).map((row) => (
              <TableRow
                key={row.number}
                sx={{ '&:last-child td, &:last-child th': { border: 0 },
                '&:nth-child(even) td': { backgroundColor: "#eeeeee" },
                textTransform: "none"
                }}
              >
                <TableCell component="td" >
                  {row.number}
                </TableCell>
                <TableCell component="td" >
                  {row.name}
                </TableCell>
                <TableCell component="td" align="right">
                  {row.hours}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  </Grid>
  )
}

export default LeaderboardTable;