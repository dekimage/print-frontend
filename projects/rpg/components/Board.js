import React from "react";
import { IconButton, Paper, Grid } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";

const tileColors = {
  water: "#3a86ff",
  fire: "#ef233c",
  air: "#bce784",
  earth: "#fcbf49",
};

const actionIcons = {
  explore: <ExploreIcon sx={{ fontSize: 16 }} />,
  farm: <MonetizationOnIcon sx={{ fontSize: 16 }} />,
  fight: <SportsKabaddiIcon sx={{ fontSize: 16 }} />,
};

const Tile = ({ tile }) => (
  <Paper
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: 90,
      width: 90,
      backgroundColor: tileColors[tile.type],
    }}
  >
    {tile.actions.map((action, i) => (
      <IconButton key={i} color="inherit">
        {actionIcons[action]}
      </IconButton>
    ))}
  </Paper>
);

const Board = ({ board }) => (
  <Grid container spacing={1}>
    {board.map((row, i) => (
      <Grid container item xs={12} key={i} justifyContent="center">
        {row.map((tile, j) => (
          <Grid item key={j}>
            <Tile tile={tile} />
          </Grid>
        ))}
      </Grid>
    ))}
  </Grid>
);

export default Board;
