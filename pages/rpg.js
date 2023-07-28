import React, { Component, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Button,
  Box,
  Typography,
  Tab,
  Tabs,
} from "@mui/material";
import { observer } from "mobx-react";
import store from "../projects/rpg/rpgStore";
import Footer from "../projects/rpg/components/Footer";
import PlayeArea from "../projects/rpg/components/PlayArea";
import Market from "../projects/rpg/components/Market";
import Board from "../projects/rpg/components/Board";

// const Card = ({ card }) => (
//   <Paper>
//     <h2>{card.name}</h2>
//     <p>Attack: {card.attack_power}</p>
//     <p>Cost: {card.cost}</p>
//     <p>Dominance: {card.dominance}</p>
//     {/* Display other card properties... */}
//   </Paper>
// );

const PlayerTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const activePlayer = store.players[store.currentPlayerIndex];
  const { drawCards } = store;

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div>
      <Tabs
        sx={{ position: "absolute", bottom: 290, zIndex: 2000 }}
        value={selectedTab}
        onChange={handleChange}
        centered
      >
        <Tab label="Play Area" />
        <Tab label="Quests" />
        <Tab label="Inventory" />
      </Tabs>

      {selectedTab === 0 && (
        <PlayeArea player={activePlayer} drawCards={drawCards} />
      )}
      {selectedTab === 1 && (
        <Box p={3}>
          <div>Content for Tab 2</div>
          {/* Add your custom div content here for Tab 2 */}
        </Box>
      )}
      {selectedTab === 2 && (
        <Box p={3}>
          <div>Content for Tab 3</div>
          {/* Add your custom div content here for Tab 3 */}
        </Box>
      )}
    </div>
  );
};

const Rpg = () => {
  const { board } = store;

  return (
    <div>
      {/* Display board, marketplace, etc... */}
      <Board board={board} />
      <Market />
      <PlayerTabs />

      <Footer />
    </div>
  );
};

export default observer(Rpg);
