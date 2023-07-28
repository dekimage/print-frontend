import React from "react";
import Card from "./Card";
import { observer } from "mobx-react";

const CardsWrapper = observer(({ cards, action }) => {
  return (
    <div style={{ height: "100%", display: "flex", overflowX: "auto" }}>
      {cards.map((card, colIndex) => (
        <Card card={card} key={colIndex} action={action} />
      ))}
    </div>
  );
});

export default CardsWrapper;
