import React, { useState } from "react";
import { observer } from "mobx-react";
import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import store from "../rpgStore";
import styles from "../rpg.module.scss";
import CardsWrapper from "./CardsWrapper";
import Deck from "./Deck";
import { CARD_ACTIONS } from "../rpgTypes";

const Market = observer(() => {
  const { marketDeck, marketPlace, dealMarketPlace } = store;
  const [isMarketOpen, setIsMarketOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "100%",
        height: "150px",
        backgroundColor: "background.paper",

        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <CardsWrapper cards={marketPlace} action={CARD_ACTIONS.BUY} />
      <Deck
        deck={marketDeck}
        name="Market Deck"
        action={() => dealMarketPlace()}
        btnLabel="deal 5"
        setView={() => setIsMarketOpen(true)}
      />

      <Dialog open={isMarketOpen} onClose={() => setIsMarketOpen(false)}>
        <DialogTitle>Market Deck</DialogTitle>
        <DialogContent>
          <CardsWrapper cards={marketDeck} />
        </DialogContent>
      </Dialog>
    </div>
  );
});

export default Market;
