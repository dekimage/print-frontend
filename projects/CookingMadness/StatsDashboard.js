import { Button } from "@mui/material";
import { useState } from "react";
import { ingridientIcon } from "./Card";

const mapIngredientToGeneric = (ingredient) => {
  // Lists for each generic type
  const fruitList = ["Apple", "Banana", "Strawberry"];
  const vegetableList = ["Tomato", "Potato", "Mushrooms"];
  const meatList = ["Chicken", "Beef", "Fish"];
  const dairyList = ["Milk", "Cheese", "Butter"];
  const nutsList = ["Peanuts", "Cashew Nuts", "Hazlenuts"];
  const spiceList = ["Salt", "Sugar", "Cinnamon"];

  // Mapping specific ingredients to their generic types
  if (fruitList.includes(ingredient)) {
    return "Fruit";
  } else if (vegetableList.includes(ingredient)) {
    return "Vegetable";
  } else if (meatList.includes(ingredient)) {
    return "Meat";
  } else if (dairyList.includes(ingredient)) {
    return "Dairy";
  } else if (nutsList.includes(ingredient)) {
    return "Nuts";
  } else if (spiceList.includes(ingredient)) {
    return "Spice";
  }

  return null; // For unclassified ingredients
};

function countIngredients(recipes) {
  const ingredientCounts = {};
  const genericCounts = {};

  if (!recipes) {
    return { ingredientCounts, genericCounts };
  }

  recipes.forEach((recipe) => {
    if (!recipe.ingridients) {
      return;
    }

    recipe.ingridients.forEach((ingredient) => {
      // Count specific ingredients
      if (ingredientCounts[ingredient]) {
        ingredientCounts[ingredient]++;
      } else {
        ingredientCounts[ingredient] = 1;
      }

      // Count specific ingredients under their generic type
      const genericType = mapIngredientToGeneric(ingredient);
      if (genericType) {
        if (genericCounts[genericType]) {
          genericCounts[genericType]++;
        } else {
          genericCounts[genericType] = 1;
        }
      }
    });
  });

  return { ingredientCounts, genericCounts };
}

const generateIcon = (ingredient) => {
  return ingridientIcon(ingredient);
};

const StatsDashboard = ({ recipes }) => {
  const [isOpened, setIsOpened] = useState(false);
  const { ingredientCounts = {}, genericCounts = {} } =
    countIngredients(recipes);
  const genericTypes = ["Fruit", "Vegetable", "Meat", "Dairy", "Nuts", "Spice"];

  const isGeneric = (ingredient) => genericTypes.includes(ingredient);

  const ingredientStyle = {
    fontSize: "30px",
    border: "1px solid black",
    padding: "1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Ingredient Dashboard</h2>
      <Button variant="contained" onClick={() => setIsOpened(!isOpened)}>
        {isOpened ? "Hide" : "Show"}
      </Button>
      {isOpened && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            fontSize: "20px",
          }}
        >
          <div>
            <h3>Specific Ingredients</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                gap: "10px",
              }}
            >
              {Object.keys(ingredientCounts).map(
                (ingredient) =>
                  !isGeneric(ingredient) && (
                    <div key={ingredient} style={ingredientStyle}>
                      {ingredient}: {ingredientCounts[ingredient]}
                    </div>
                  )
              )}
            </div>
          </div>
          <div>
            <h3>Generic Ingredients</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto",
                gap: "10px",
              }}
            >
              {Object.keys(ingredientCounts).map(
                (ingredient) =>
                  isGeneric(ingredient) && (
                    <div key={ingredient} style={ingredientStyle}>
                      <img
                        src={generateIcon(ingredient)}
                        height="30px"
                        alt=""
                      />
                      {ingredient}: {ingredientCounts[ingredient]}
                    </div>
                  )
              )}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* ... existing sections */}
            <div>
              <h3>Aggregated Generic Ingredients</h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto auto",
                  gap: "10px",
                }}
              >
                {Object.keys(genericCounts).map((genericType) => (
                  <div key={genericType} style={ingredientStyle}>
                    <img src={generateIcon(genericType)} height="30px" alt="" />
                    {genericType}: {genericCounts[genericType]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsDashboard;
