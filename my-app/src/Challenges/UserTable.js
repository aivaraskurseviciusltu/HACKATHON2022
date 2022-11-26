import React, { useEffect }  from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DenseTable(props) {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "290px", overflowY: "auto" }}>
      <Table sx={{ maxWidth: 650, maxHeight: "500px", overflowY: "auto" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#2196f3"}}>
          <TableCell sx={{ color: "#fff", fontWeight: 600 }}>No.</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: 600}}>Name</TableCell>
              {
                props.inProgress && 
              <TableCell sx={{ color: "#fff", fontWeight: 600}}>Time Spent</TableCell>
              } 
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.sort((a,b) => {
            const prev = a.learnings.reduce((accumulator, object) => {
              return accumulator + object.duration;
              }, 0)
              const next = b.learnings.reduce((accumulator, object) => {
                return accumulator + object.duration;
              }, 0)
              return next - prev;
          }).map((user, id) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 },
              '&:nth-child(odd) td': { backgroundColor: "#eeeeee" },
            }}
            className="listItem"
            >
              <TableCell component="td" scope="row">
                {id + 1}
              </TableCell>
              <TableCell component="td" scope="row">
                {user.name + ' ' + user.surname}
              </TableCell>
              {
                props.inProgress && 
                <TableCell component="td" scope="row">
                  { user.learnings.reduce((accumulator, object) => {
                      return accumulator + object.duration;
                    }, 0)
                  }
                </TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}