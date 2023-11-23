import { Fragment, useEffect, useState } from "react";

import styles from "../styles/Egypt.module.scss";
import {
  OrderCard,
  StatComponent,
  UpgradeCard,
} from "../components/Egypt/OrderCard";
import { generateOrderCards, getStats } from "../gpt-functions/egypt";
import { Button, Autocomplete, TextField } from "@mui/material";
import { getCardMargin } from "../shared/functions";
import withCardLayout from "../shared/hoc";

const upgradeCards = [
  {
    cost: 6,
    vp: 1,
    effectOne: ["deliver"],
  },
  {
    cost: 12,
    vp: 2,
    effectOne: ["plus", "or", "drop"],
    effectTwo: ["portal", "and", "gold_1"],
  },
  {
    cost: 8,
    vp: 3,
    effectOne: ["heart", "to", "plus"],
    effectTwo: ["portal", "and", "cost_1"],
    both: true,
  },
  {
    cost: 8,
    vp: 2,
    effectOne: ["deliver", "plus", "cost_1"],
    effectTwo: ["gold_1"],
  },
  {
    cost: 12,
    vp: 4,
    effectOne: ["heart", "to", "gold_3"],
    effectTwo: ["heart"],
  },
  {
    cost: 8,
    vp: 4,
    effectOne: ["hex", "to", "any"],
    effectTwo: ["gold_1"],
  },
  {
    cost: 10,
    vp: 2,
    effectOne: ["heart", "or", "drop", "to", "any"],
    effectTwo: ["gem"],
    both: true,
  },
];

const sortConfig = [
  { key: "name", label: "Name A-Z" },
  { key: "cost", label: "Cost" },
  { key: "vp", label: "Vp" },
];

const filterConfig = {
  type: ["Zone", "Resource"],
  cost: [1, 2, 3, 4, 5, 6, 7, 8],
  vp: [1, 2, 3, 4, 5, 6, 7, 8],
};

const TradingTactics = () => {
  const [isPrint, setIsPrint] = useState(false);
  const data = generateOrderCards(60, 100);

  const [cards, setCards] = useState(data);
  const stats = getStats(cards);
  const refreshCards = () => {
    setCards(generateOrderCards(60, 100));
  };

  return (
    <div className={styles.printPage}>
      {!isPrint && (
        <div>
          <StatComponent data={stats} type={"zone"} />
          <StatComponent data={stats} type={"resource"} />
          <div className={styles.buttons}>
            <Button variant="contained" onClick={() => refreshCards()}>
              Generate
            </Button>
            <Button
              variant="contained"
              onClick={() => setIsPrint(true)}
              style={{ marginTop: "1rem" }}
            >
              Print
            </Button>
          </div>
        </div>
      )}
      <div className="flex_center">
        {upgradeCards.map((card, i) => (
          <div key={i} style={{ marginBottom: getCardMargin(i) }}>
            <UpgradeCard card={card} />
          </div>
        ))}
      </div>

      <div className={styles.cardsForPrint}>
        {cards.map((card, i) => (
          <div key={i} style={{ marginBottom: getCardMargin(i) }}>
            <OrderCard order={card} />
          </div>
        ))}
      </div>
      <Button
        variant="contained"
        onClick={() => setIsPrint(false)}
        style={{ marginTop: "1rem" }}
      >
        Back
      </Button>
    </div>
  );
};

export default withCardLayout({
  page: TradingTactics,
  title: "Trading Tactics",
  filterConfig,
  sortConfig,
  Card: OrderCard,
  cards: generateOrderCards(60, 100),
});
