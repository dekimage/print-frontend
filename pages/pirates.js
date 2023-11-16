import React from "react";
import withCardLayout from "../shared/hoc";
import { pirateCards } from "../projects/pirates/data";
import Card from "../projects/pirates/Card";

const cards = pirateCards;

const differentKeywords = cards.map((card) => card.keywords);
const uniqueKeywords = [...new Set(differentKeywords.flat())];

const filterConfig = {
  type: ["Pirate", "Trap", "Resource", "Command", "Boss"],
  cost: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  keywords: uniqueKeywords,
};

const sortConfig = [
  { key: "name", label: "Name A-Z" },
  { key: "cost", label: "Cost" },
];

const PiratesPage = (props) => {
  const { processedCards, isEditMode, handleAddCardToPrint, printCards } =
    props;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {processedCards.map((card, i) => {
        const isInPrint = printCards.some((c) => c.name === card.name);
        return (
          <Card
            card={card}
            isEditMode={isEditMode}
            handleAddCardToPrint={handleAddCardToPrint}
            isInPrint={isInPrint}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default withCardLayout({
  page: PiratesPage,
  title: "Wacky Pirates",
  filterConfig,
  sortConfig,
  Card,
  cards,
});
