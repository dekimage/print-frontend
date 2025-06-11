import React from "react";
import withCardLayout from "../shared/hoc";

import Card from "../projects/PelicanTown/Card";
import { pelicanTownCards } from "../projects/PelicanTown/data";
import StatsDashboard from "../projects/PelicanTown/StatsDashboard";

const cards = pelicanTownCards;

// Filter configuration for the card selection interface
const filterConfig = {
  faction: ["birds", "moles", "insects", "goats"],
  cost: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  mp: [1, 2, 3],
};

// Sort options for the card interface
const sortConfig = [
  { key: "name", label: "Name A-Z" },
  { key: "cost", label: "Cost (Low to High)" },
  { key: "mp", label: "Movement Points" },
  { key: "faction", label: "Faction" },
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

// Main Pelican Town page component
const PelicanTownPage = (props) => {
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
  page: PelicanTownPage,
  title: "Pelican Town",
  filterConfig,
  sortConfig,
  Card,
  cards,
});
