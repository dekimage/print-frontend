import React from "react";
import withCardLayout from "../shared/hoc";
import Card from "../projects/miniBattles/Card";
import { miniCards } from "../projects/miniBattles/data";

const cards = miniCards;

const filterConfig = {
  rarity: ["Basic", "Super", "Mega"],
};

const sortConfig = [{ key: "name", label: "Name A-Z" }];

const MiniBattlesPage = (props) => {
  const { processedCards, isEditMode, handleAddCardToPrint, printCards } =
    props;

  return (
    <div>
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
    </div>
  );
};

export default withCardLayout({
  page: MiniBattlesPage,
  title: "Miniaturized Battles",
  filterConfig,
  sortConfig,
  Card,
  cards,
});
