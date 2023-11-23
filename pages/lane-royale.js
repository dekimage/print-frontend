import React from "react";
import withCardLayout from "../shared/hoc";
import { battleRoyalCards } from "../projects/battleRoyal/data";
import Card from "../components/BattleRoyal/Card";

const cards = battleRoyalCards;
console.log(cards);

const differentKeywords = cards.map((card) => card.keywords);
const uniqueKeywords = [...new Set(differentKeywords.flat())];

const filterConfig = {
  type: ["Unit", "Structure", "Spell"],
  faction: ["Technology", "Nature"],
  cost: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  hp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  atk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  keywords: uniqueKeywords,
};

const sortConfig = [
  { key: "name", label: "Name A-Z" },
  { key: "cost", label: "Cost" },
  { key: "atk", label: "ATK" },
  { key: "hp", label: "HP" },
];

const BattleRoyalPage = (props) => {
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
  page: BattleRoyalPage,
  title: "Battle Royal",
  filterConfig,
  sortConfig,
  Card,
  cards,
});
