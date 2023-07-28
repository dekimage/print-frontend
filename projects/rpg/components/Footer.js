import React from "react";
import { observer } from "mobx-react";
import { Grid, Button } from "@mui/material";
import store from "../rpgStore";
import styles from "../rpg.module.scss";

const Footer = observer(() => {
  const {
    currentPlayerIndex,
    currentPhase,
    nextPhase,
    nextPlayer,
    initialize,
  } = store;
  const activePlayer = store.players[currentPlayerIndex];

  return (
    <Grid
      container
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        height: "120px",
        backgroundColor: "background.paper",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        borderRadius: "10px",
      }}
    >
      <Grid item>
        <h3>Player {currentPlayerIndex + 1}'s turn</h3>
        <h3>Phase: {currentPhase}</h3>
      </Grid>

      <div className={styles.stats}>
        <Grid container spacing={0}>
          {/* First row */}
          <Grid item xs={12} sm={4}>
            <div className={styles.stat}>
              Gold: {activePlayer.resources.gold}
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={styles.stat}>VP: {activePlayer.resources.vp}</div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={styles.stat}>
              Wheat: {activePlayer.resources.wheat}
            </div>
          </Grid>

          {/* Second row */}
          <Grid item xs={12} sm={4}>
            <div className={styles.stat}>Ore: {activePlayer.resources.ore}</div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={styles.stat}>
              Pearl: {activePlayer.resources.pearl}
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={styles.stat}>
              Wood: {activePlayer.resources.wood}
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={styles.controlButtons}>
        <Button variant="contained" color="primary" onClick={nextPhase}>
          Next Phase
        </Button>
        <Button variant="contained" color="primary" onClick={nextPlayer}>
          Next Player
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => initialize(2)}
        >
          Restart
        </Button>
      </div>
    </Grid>
  );
});

export default Footer;
