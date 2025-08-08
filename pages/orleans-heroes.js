import React from "react";
import withCardLayout from "../shared/hoc";

import Card from "../projects/OrleansHeroes/Card";
import { orleansHeroesCards } from "../projects/OrleansHeroes/data";
import StatsDashboard from "../projects/OrleansHeroes/StatsDashboard";

const cards = orleansHeroesCards;

// Filter configuration for the card selection interface
const filterConfig = {
  type: ["farm", "battle", "epic", "explore"],
  vp: [1, 2, 3, 4, 5],
  age: [1, 2, 3],
  elements: ["earth", "fire", "water", "air"],
  rewards: [
    "whiteGem",
    "redGem",
    "blueGem",
    "yellowGem",
    "purpleGem",
    "initiative",
    "supply",
    "skill",
    "upgrade",
    "joker",
  ],
  cost: [1, 2, 3, 4, 5, 6, 7],
};

// Sort options for the card interface
const sortConfig = [
  { key: "name", label: "Name A-Z" },
  { key: "vp", label: "Victory Points" },
  { key: "type", label: "Type" },
  { key: "age", label: "Age" },
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

// Main Orleans Heroes page component
const OrleansHeroesPage = (props) => {
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
  page: OrleansHeroesPage,
  title: "Orleans Heroes",
  filterConfig,
  sortConfig,
  Card,
  cards,
});
