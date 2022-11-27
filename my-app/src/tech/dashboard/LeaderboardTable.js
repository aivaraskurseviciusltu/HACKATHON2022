import React from "react";
import "./table.css";
import {
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  Table,
  TableRow,
  Grid,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import styled from "@emotion/styled";
import Lottie from "react-lottie";
import goldMedal from "./assets/lottie/gold-medal.json";
import silverMedal from "./assets/lottie/silver-medal.json";
import bronzeMedal from "./assets/lottie/bronze-medal.json";
import classes from "./LeaderboardTable.module.css";
import { animationWidth } from '../utils/Constants'

function createData(number, name, hours) {
  return { number, name, hours };
}

const rows = [
  createData(1, "Alius", 21),
  createData(2, "Linas", 17),
  createData(3, "Aivaras R.", 13),
  createData(4, "Mindaugas", 12),
  createData(5, "Nikolajus", 12),
  createData(6, "Donatas", 10),
  createData(7, "Zilvinas", 8),
  createData(8, "Aurimas", 7),
  createData(9, "Aivaras K.", 4),
  createData(10, "Mantas", 4),
  createData(11, "Algirdas", 4),
  createData(12, "Audrius", 3),
  createData(13, "Aurimas", 3),
  createData(14, "Robertas", 3),
  createData(15, "Jevgenij", 1),

];

const defaultGoldMeal = {
  loop: true,
  autoplay: true,
  animationData: goldMedal,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultSilver = {
  loop: true,
  autoplay: true,
  animationData: silverMedal,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultBronze = {
  loop: true,
  autoplay: true,
  animationData: bronzeMedal,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const animationStyle = {
  margin: 0,
  position: "relative",
  right: "10px",
};

const renderLeaderboardSwitch = (param) => {
  switch (param) {
    case 1:
      return (
        <Lottie
          style={animationStyle}
          className={classes.animation}
          options={defaultGoldMeal}
          height={animationWidth}
          width={animationWidth}
        />
      );

    case 2:
      return (
        <Lottie
          style={animationStyle}
          className={classes.animation}
          options={defaultSilver}
          height={animationWidth}
          width={animationWidth}
        />
      );

    case 3:
      return (
        <Lottie
          style={animationStyle}
          className={classes.animation}
          options={defaultBronze}
          height={animationWidth}
          width={animationWidth}
        />
      );

    default:
      return param;
  }
};

const LeaderboardTable = () => {
  return (
    <Grid item xs={4}>
      <Box sx={{ height: '795px' }} className="gradient">
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "785px",
            width: "calc(100% - 10px)",
            left: 5,
            top: 5,
            background:
              "linear-gradient(331deg, rgba(36,161,72,1) 0%, rgba(100,232,138,1) 56%, rgba(36,161,72,1) 100%)",
          }}
          className="border-custom"
        >
          <Box>
            <Typography
              sx={{
                height: "60px",
                textAlign: "left",
                fontWeight: 700,
                textTransform: "none",
                color: "white",
                p: 2,
              }}
              variant="h5"
              id="tableTitle"
            >
              Top Learners - 2022
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ boxShadow: "none", maxHeight: "675px", overflowY: "auto" }}
            >
              <Table
                stickyHeader
                sx={{ minWidth: "100%" }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#24a148", mt: "60px" }}>
                    <TableCell
                      sx={{
                        color: "#fff",
                        fontWeight: 700,
                        borderColor: "#81d699",
                        backgroundColor: "#24a148",
                      }}
                    >
                      Number
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#fff",
                        fontWeight: 700,
                        borderColor: "#81d699",
                        backgroundColor: "#24a148",
                      }}
                    >
                      Name
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#fff",
                        fontWeight: 700,
                        borderColor: "#81d699",
                        backgroundColor: "#24a148",
                      }}
                      align="right"
                    >
                      Score
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .sort((a, b) => a.number - b.number)
                    .map((row, index) => (
                      <TableRow
                        key={row.number}
                        sx={{
                          background:
                            index === 0
                              ? "linear-gradient(90deg, rgba(212,175,55,1) 0%, rgba(255,215,0,0.8) 100%)"
                              : index === 1
                                ? "linear-gradient(90deg, rgba(152,152,152,1) 0%, rgba(205,205,205,0.8) 100%)"
                                : index === 2
                                  ? "linear-gradient(90deg, rgba(193,108,24,1) 0%, rgba(205,127,50,0.6) 100%)"
                                  : "linear-gradient(90deg, rgba(36,161,72,1) 0%, rgba(100,232,138,1) 100%)",
                          "&:last-child td, &:last-child th": { border: 0 },
                          textTransform: "none",
                        }}
                      >
                        <StyledTableCell
                          component="td"
                          sx={{
                            borderColor:
                              index === 0
                                ? "#f5da4c"
                                : index === 1
                                  ? "#d9d9d9"
                                  : index === 2
                                    ? "#d18e4b"
                                    : "#81d699",
                          }}
                        >
                          {renderLeaderboardSwitch(row.number)}
                        </StyledTableCell>
                        <StyledTableCell
                          component="td"
                          sx={{
                            borderColor:
                              index === 0
                                ? "#f5da4c"
                                : index === 1
                                  ? "#d9d9d9"
                                  : index === 2
                                    ? "#d18e4b"
                                    : "#81d699",
                          }}
                        >
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell
                          component="td"
                          align="right"
                          sx={{
                            borderColor:
                              index === 0
                                ? "#f5da4c"
                                : index === 1
                                  ? "#d9d9d9"
                                  : index === 2
                                    ? "#d18e4b"
                                    : "#81d699",
                          }}
                        >
                          {row.hours}
                        </StyledTableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ width: "100%", display: "flex" }}>
              <StyledRow
                component="td"
                sx={{
                  display: "flex",
                  backgroundColor: "#24a148",
                  justifyContent: "center",
                  alignItems: "center",
                  pl: 2,
                }}
              >
                9
              </StyledRow>
              <StyledRow
                component="td"
                sx={{
                  display: "flex",
                  backgroundColor: "#24a148",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 1,
                  pr: 8,
                }}
              >
                You
              </StyledRow>
              <StyledRow
                component="td"
                align="right"
                sx={{
                  display: "flex",
                  backgroundColor: "#24a148",
                  justifyContent: "center",
                  alignItems: "center",
                  pr: 2,
                }}
              >
                4
              </StyledRow>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default LeaderboardTable;

const StyledTableCell = styled(TableCell)({
  height: "50px",
  color: "#fff",
  fontSize: "20px",
  fontWeight: 600,
});

const StyledRow = styled(Box)({
  height: "50px",
  color: "#fff",
  borderColor: "#81d699",
  fontSize: "20px",
  fontWeight: 600,
});
