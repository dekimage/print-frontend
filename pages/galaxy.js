import { Fragment, useEffect, useState } from "react";

import styles from "../styles/Egypt.module.scss";
import { OrderCard, StatComponent } from "../components/Egypt/OrderCard";
import { generateOrderCards, getStats } from "../gpt-functions/egypt";
import { Button, Autocomplete, TextField } from "@mui/material";
import CardComponent from "../projects/galaxy/GalaxyCard";

const actionWords = [
  "draw",
  "energy",
  "mp",
  "gold",
  "vp",
  "influence",
  "damage",
  "teleport",
  "pull",
  "push",
];

const generateRandomActions = () => {
  const numActions = Math.floor(Math.random() * 3) + 1; // Random between 1 and 3
  const randomActions = [];
  for (let i = 0; i < numActions; i++) {
    const randomAction =
      actionWords[Math.floor(Math.random() * actionWords.length)];
    randomActions.push(randomAction);
  }
  return randomActions;
};

const generateRandomName = () => {
  const adjectives = ["Fierce", "Swift", "Mysterious", "Ancient", "Ethereal"];
  const nouns = ["Dragon", "Phoenix", "Serpent", "Star", "Relic"];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adjective} ${noun}`;
};

const generateRandomCards = (count) => {
  const cards = [];
  for (let i = 0; i < count; i++) {
    const actions = generateRandomActions();
    const name = generateRandomName();
    cards.push({ actions, name });
  }
  return cards;
};

const getCardMargin = (index) => {
  const positionWithinSet = index % 9;

  if (positionWithinSet >= 6 && positionWithinSet <= 8) {
    return "45px";
  } else {
    return "0";
  }
};

const Galaxy = ({}) => {
  const [isPrint, setIsPrint] = useState(false);

  const data = generateRandomCards(100);

  const [cards, setCards] = useState(data);

  return (
    <div className={styles.printPage}>
      {!isPrint && (
        <div>
          <div className={styles.buttons}>
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
        {cards.map((card, index) => (
          <div
            key={index}
            // style={{ marginBottom: getCardMargin(index) }}
          >
            <CardComponent
              title={card.name}
              imageUrl="https://example.com/card-image.jpg" // Replace with actual image URL
              actions={card.actions}
              cost={5} // Replace with the actual cost
            />
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

export default Galaxy;
