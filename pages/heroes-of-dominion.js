import React from "react";
import withCardLayout from "../shared/hoc";
import Card from "../projects/heroesOfDominion/Card";
import { hodCards } from "../projects/heroesOfDominion/data";
// import StatsDashboard from "../projects/CookingMadness/StatsDashboard";

const cards = hodCards;

const filterConfig = {
  rarity: ["Basic", "Super", "Mega"],
};

const sortConfig = [{ key: "name", label: "Name A-Z" }];

const HeroesOfDominionPage = (props) => {
  const { processedCards, isEditMode, handleAddCardToPrint, printCards } =
    props;

  return (
    <div>
      {/* <StatsDashboard
        recipes={cards.filter((card) => card.type === "Recipe")}
      /> */}
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
  page: HeroesOfDominionPage,
  title: "Heroes of Dominion",
  filterConfig,
  sortConfig,
  Card,
  cards,
});
