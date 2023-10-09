import { Fragment, useEffect, useState } from "react";

import styles from "../styles/Egypt.module.scss";
import { OrderCard, StatComponent } from "../components/Egypt/OrderCard";
import { generateOrderCards, getStats } from "../gpt-functions/egypt";
import { Button, Autocomplete, TextField } from "@mui/material";

const Gpt = ({}) => {
  const [isPrint, setIsPrint] = useState(false);
  const data = generateOrderCards(60, 100);

  const [cards, setCards] = useState(data);
  const stats = getStats(cards);
  const refreshCards = () => {
    setCards(generateOrderCards(60, 100));
  };

  const getCardMargin = (index) => {
    // Calculate the card's position within the current set of 9 cards
    const positionWithinSet = index % 9;

    // Apply 15px margin to the 7th, 8th, and 9th cards within each set
    if (positionWithinSet >= 6 && positionWithinSet <= 8) {
      return "45px"; // Apply the special margin
    } else {
      return "0"; // Apply 0 margin to all other cases
    }
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

export default Gpt;
