import React from 'react'
import "./table.css";
import { TableContainer, TableBody, TableCell, TableHead, Table, TableRow, Grid, Paper, Typography, Box } from "@mui/material";
import styled from '@emotion/styled';


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
          display: "flex",
          flexDirection: "column",
          maxHeight: "700px",
          background: "linear-gradient(331deg, rgba(36,161,72,1) 0%, rgba(100,232,138,1) 56%, rgba(36,161,72,1) 100%)",
        }}
        className="border-custom"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <Box>
          <Typography
            sx={{ height: "60px", textAlign: 'left', fontWeight: 700, textTransform: 'none', color: 'white', p: 2 }}
            variant="h5"
            id="tableTitle"
          >
            Top Learners
          </Typography>
          <TableContainer component={Paper} sx={{ boxShadow: "none", maxHeight: "640px", overflowY: "auto" }}>
            <Table sx={{ minWidth: "100%" }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#24a148" }}>
                  <TableCell sx={{ color: "#fff", fontWeight: 600, borderColor: "#81d699" }}>Number</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 600, borderColor: "#81d699" }}>Name</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 600, borderColor: "#81d699" }} align="right">Score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.sort((a, b) => a.number - b.number).map((row) => (
                  <TableRow
                    key={row.number}
                    sx={{
                      background: "linear-gradient(90deg, rgba(36,161,72,1) 0%, rgba(100,232,138,1) 100%)",
                      '&:last-child td, &:last-child th': { border: 0 },
                      textTransform: "none"
                    }}
                  >
                    <StyledTableCell component="td" >
                      {row.number}
                    </StyledTableCell>
                    <StyledTableCell component="td" >
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell component="td" align="right">
                      {row.hours}
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </Grid>
  )
}

export default LeaderboardTable;

const StyledTableCell = styled(TableCell)({
  height: "50px",
  color: "#fff",
  borderColor: "#81d699",
  fontSize: "20px",
  fontWeight: 600,
});