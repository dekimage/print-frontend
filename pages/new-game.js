import React from "react";
import withCardLayout from "../shared/hoc";

import Card from "../projects/NewGame/Card";
import { newGameCards } from "../projects/NewGame/data";
import StatsDashboard from "../projects/NewGame/StatsDashboard";

const cards = newGameCards;

// Filter configuration for the card selection interface
const filterConfig = {
  tier1Points: [1, 2, 3],
  cost: ["stone", "wood", "wheat", "water"],
  rewards: ["stone", "wood", "wheat", "water"],
  footer: ["stone", "wood", "wheat", "tier3Points"],
};

// Sort options for the card interface
const sortConfig = [
  { key: "name", label: "Name A-Z" },
  { key: "tier1Points", label: "Tier 1 Points" },
];

// Card container styling to ensure proper grid layout
const cardContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  margin: 0,
  padding: 0,
  gap: 0,
};

// Individual card wrapper styling
const cardWrapperStyle = {
  padding: 0,
  margin: 0,
};

// View mode styling (not print mode) with spacing between cards
const viewModeContainerStyle = {
  ...cardContainerStyle,
  gap: "10px",
  margin: "10px",
};

// Main New Game page component
const NewGamePage = (props) => {
  const { processedCards, isEditMode, handleAddCardToPrint, printCards } =
    props;

  return (
    <div>
      <StatsDashboard cards={cards} />

      <div style={isEditMode ? cardContainerStyle : viewModeContainerStyle}>
        {processedCards.map((card, i) => {
          const isInPrint = printCards.some((c) => c.id === card.id);

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
  page: NewGamePage,
  title: "New Game",
  filterConfig,
  sortConfig,
  Card,
  cards,
});
