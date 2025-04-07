import React from "react";
import withCardLayout from "../shared/hoc";

import Card from "../projects/ToyBattles/Card";
import { toyBattlesCards } from "../projects/ToyBattles/data";
import StatsDashboard from "../projects/ToyBattles/StatsDashboard";

const cards = toyBattlesCards;

const filterConfig = {
  faction: ["hellGnolls", "sporelings"],
  power: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  arrowTypes: ["left", "right", "up", "diagonalLeft", "diagonalRight"],
};

const sortConfig = [
  { key: "name", label: "Name A-Z" },
  { key: "power", label: "Power (Low to High)" },
  { key: "faction", label: "Faction" },
];

const cardContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  margin: 0,
  padding: 0,
  gap: 0,
};

const cardWrapperStyle = {
  padding: 0,
  margin: 0,
};

// In view mode (not print mode), add some spacing
const viewModeContainerStyle = {
  ...cardContainerStyle,
  gap: "10px",
  margin: "10px",
};

const ToyBattlesPage = (props) => {
  const { processedCards, isEditMode, handleAddCardToPrint, printCards } =
    props;

  return (
    <div>
      <StatsDashboard cards={cards} />

      <div style={isEditMode ? cardContainerStyle : viewModeContainerStyle}>
        {processedCards.map((card, i) => {
          const isInPrint = printCards.some((c) => c.name === card.name);

          return (
            <div style={cardWrapperStyle} key={i}>
              <Card
                card={card}
                isEditMode={isEditMode}
                handleAddCardToPrint={handleAddCardToPrint}
                isInPrint={isInPrint}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withCardLayout({
  page: ToyBattlesPage,
  title: "Toy Battles",
  filterConfig,
  sortConfig,
  Card,
  cards,
});
