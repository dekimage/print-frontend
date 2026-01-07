import React from "react";
import withCardLayout from "../shared/hoc";

import Card from "../projects/Battlegrounds/Card";
import ZoneCard from "../projects/Battlegrounds/ZoneCard";
import LandCard from "../projects/Battlegrounds/LandCard";
import { allBattlegroundsCards } from "../projects/Battlegrounds/data";
import StatsDashboard from "../projects/Battlegrounds/StatsDashboard";

const cards = allBattlegroundsCards;

// Filter configuration for the card selection interface
const filterConfig = {
  type: ["cats", "moles", "boars", "birds", "frogs"],
  tier: [1, 2, 3, 4, 5, 6],
  age: [1, 2, 3, 4],
  card: ["unit", "zone", "land"],
};

// Sort options for the card interface
const sortConfig = [
  { key: "type", label: "Type A-Z" },
  { key: "tier", label: "Tier Low-High" },
  { key: "tier", label: "Tier High-Low" },
  { key: "age", label: "Age Low-High" },
  { key: "age", label: "Age High-Low" },
  { key: "card", label: "Card Type" },
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

// Main Battlegrounds page component
const BattlegroundsPage = (props) => {
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
              {card.card === "zone" ? (
                <ZoneCard
                  card={card}
                  isEditMode={isEditMode}
                  handleAddCardToPrint={handleAddCardToPrint}
                  isInPrint={isInPrint}
                />
              ) : card.card === "land" ? (
                <LandCard
                  card={card}
                  isEditMode={isEditMode}
                  handleAddCardToPrint={handleAddCardToPrint}
                  isInPrint={isInPrint}
                />
              ) : (
                <Card
                  card={card}
                  isEditMode={isEditMode}
                  handleAddCardToPrint={handleAddCardToPrint}
                  isInPrint={isInPrint}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withCardLayout({
  page: BattlegroundsPage,
  title: "Battlegrounds",
  filterConfig,
  sortConfig,
  Card,
  cards,
});
