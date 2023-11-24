import { Fragment, useEffect, useState } from "react";

import styles from "../styles/Egypt.module.scss";
import {
  OrderCard,
  StatComponent,
  UpgradeCard,
} from "../components/Egypt/OrderCard";
import { generateOrderCards, getStats } from "../gpt-functions/egypt";
import { Button, Autocomplete, TextField } from "@mui/material";
import { getCardMargin, getCardMarginTop } from "../shared/functions";
import withCardLayout from "../shared/hoc";

const upgradeCards = [
  {
    cost: 6,
    vp: 1,
    effectOne: ["deliver"],
    effectTwo: ["hex", "to", "heart"],
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
    effectOne: ["plus", "to", "portal"],
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

  {
    cost: 10,
    vp: 2,
    effectOne: ["deliver"],
    effectTwo: ["cost-2", "to", "any"],
    both: false,
  },
  {
    cost: 6,
    vp: 0,
    effectOne: ["cost-2", "to", "vp_2"],
    effectTwo: ["drop", "to", "plus"],
  },

  {
    cost: 12,
    vp: 6,
    effectOne: ["gem", "to", "star"],
    effectTwo: ["heart", "to", "hex"],
    both: true,
  },
  {
    cost: 12,
    vp: 5,
    effectOne: ["vp-1"],
    effectTwo: ["star"],
    both: false,
  },
  {
    cost: 10,
    vp: 0,
    effectOne: ["drop", "drop", "to", "vp_4"],
    effectTwo: ["cost_1", "to", "drop"],
    both: true,
  },
  {
    cost: 6,
    vp: 2,
    effectOne: ["cost_1", "any", "to", "any"],
    effectTwo: ["gem", "to", "hex"],
  },
  {
    cost: 8,
    vp: 3,
    effectOne: ["heart", "to", "gem"],
    effectTwo: ["gold_1"],
    both: true,
  },
  {
    cost: 10,
    vp: 3,
    effectOne: ["drop", "to", "any"],
    effectTwo: ["gold_2"],
    both: false,
  },
  {
    cost: 8,
    vp: 3,
    effectOne: ["vp_1"],
    effectTwo: ["star", "to", "hex"],
    both: false,
  },
  {
    cost: 8,
    vp: 1,
    effectOne: ["gold_1"],
    effectTwo: ["star"],
    both: true,
  },
  {
    cost: 6,
    vp: 0,
    effectOne: ["cost_1", "to", "any"],
    effectTwo: ["gem", "to", "drop"],
  },
  {
    cost: 10,
    vp: 2,
    effectOne: ["gold_1"],
    effectTwo: ["deliver"],
    both: true,
  },

  {
    cost: 12,
    vp: 3,
    effectOne: ["gold_1", "portal"],
    effectTwo: ["deliver"],
    both: false,
  },
  {
    cost: 6,
    vp: 1,
    effectOne: ["portal"],
    effectTwo: ["heart", "to", "drop"],
  },
  {
    cost: 12,
    vp: 3,
    effectOne: ["drop", "to", "portal", "portal"],
    effectTwo: ["cost-1", "to", "drop"],
    both: false,
  },

  {
    cost: 12,
    vp: 2,
    effectOne: ["portal"],
    effectTwo: ["hex"],
    both: true,
  },
  {
    cost: 12,
    vp: 3,
    effectOne: ["deliver"],
    effectTwo: ["portal"],
    both: false,
  },
  {
    cost: 12,
    vp: 3,
    effectOne: ["star", "to", "vp_2"],
    effectTwo: ["star"],
    both: false,
  },
  {
    cost: 10,
    vp: 4,
    effectOne: ["hex", "to", "any"],
    effectTwo: ["drop", "to", "star"],
    both: true,
  },
  {
    cost: 10,
    vp: 2,
    effectOne: ["vp_1"],
    effectTwo: ["plus"],
    both: true,
  },
  //not printed
  {
    cost: 10,
    vp: 1,
    effectOne: ["heart", "or", "drop"],
    effectTwo: ["portal"],
    both: false,
  },
  {
    cost: 8,
    vp: 1,
    effectOne: ["hex", "to", "vp_2"],
    effectTwo: ["hex"],
    both: false,
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
          {/* <div className={styles.buttons}>
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
          </div> */}
        </div>
      )}

      <h1>Order Cards</h1>

      <div className={styles.cardsForPrint}>
        {cards.map((card, i) => (
          <div key={i} style={{ marginBottom: getCardMargin(i) }}>
            <OrderCard order={card} />
          </div>
        ))}
      </div>

      <h1>Upgrade Cards</h1>

      <div className={styles.cardsForPrint}>
        {upgradeCards.map((card, i) => {
          return (
            <div
              key={i}
              style={{
                marginBottom: getCardMargin(i),
              }}
            >
              <UpgradeCard card={card} />
            </div>
          );
        })}
      </div>

      {/* <Button
        variant="contained"
        onClick={() => setIsPrint(false)}
        style={{ marginTop: "1rem" }}
      >
        Back
      </Button> */}
    </div>
  );
};

//FIX ADD LAYOUT TO HAVE MULTIPLE CARDS

export default withCardLayout({
  page: TradingTactics,
  title: "Trading Tactics",
  filterConfig,
  sortConfig,
  // Card: OrderCard,
  // cards: generateOrderCards(60, 100),
  Card: UpgradeCard,
  cards: upgradeCards,
});
