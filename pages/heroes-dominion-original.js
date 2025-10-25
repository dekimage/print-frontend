import React from "react";
import withCardLayout from "../shared/hoc";

import Card from "../projects/HeroesDominionOriginal/Card";
import { allHeroesDominionCards } from "../projects/HeroesDominionOriginal/data";

const cards = allHeroesDominionCards;

// Filter configuration for the hero card selection interface
const filterConfig = {
  hp: [15, 20, 25, 30, 35], // HP ranges for filtering
  abilities: ["damage", "heal", "shield", "teleport", "lock", "stun"], // Ability types
  range: ["self", "melee", "ranged"], // Range types
};

// Sort options for the card interface
const sortConfig = [
  { key: "name", label: "Name A-Z" },
  { key: "hp", label: "HP Low-High" },
  { key: "hp", label: "HP High-Low" },
  { key: "abilities", label: "Ability Count" },
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
  gap: "15px",
  margin: "15px",
};

// Main Heroes Dominion Original page component
const HeroesDominionOriginalPage = (props) => {
  const { processedCards, isEditMode, handleAddCardToPrint, printCards } =
    props;

  return (
    <div>
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
  page: HeroesDominionOriginalPage,
  title: "Heroes Dominion Original",
  filterConfig,
  sortConfig,
  Card,
  cards,
});
