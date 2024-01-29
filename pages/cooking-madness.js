import React from "react";
import withCardLayout from "../shared/hoc";

import Card from "../projects/CookingMadness/Card";
import { cookingCards } from "../projects/CookingMadness/data";
import StatsDashboard from "../projects/CookingMadness/StatsDashboard";

const cards = cookingCards;
console.log(cards);

const filterConfig = {
  type: ["Recipe", "Ingridient", "Customer", "Mishap", "Equipment", "Cook"],
  ingridientCategory: ["Fruit", "Vegetable", "Meat", "Dairy", "Nuts", "Spice"],
  recepieCategory: ["Soup", "Salad", "Main Dish", "Dessert"],
};

const sortConfig = [{ key: "name", label: "Name A-Z" }];

const CookingMadnessPage = (props) => {
  const { processedCards, isEditMode, handleAddCardToPrint, printCards } =
    props;

  return (
    <div>
      <StatsDashboard
        recipes={cards.filter((card) => card.type === "Recipe")}
      />
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
  page: CookingMadnessPage,
  title: "Cooking Madness",
  filterConfig,
  sortConfig,
  Card,
  cards,
});
