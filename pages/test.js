import { useEffect, useState } from "react";
import { Button, Autocomplete, TextField } from "@mui/material";
import styles from "../styles/Egypt.module.scss";
import { OrderCard, StatComponent } from "../components/Egypt/OrderCard";
import { generateOrderCards, getStats } from "../gpt-functions/egypt";

const Gpt = ({}) => {
  // const data = generateOrderCards(60, 50);
  const data = generateOrderCards(60, 100);
  const stats = getStats(data);
  const [cards, setCards] = useState(data);

  const refreshCards = () => {
    setCards(generateOrderCards(60, 50));
  };

  return (
    <div>
      <StatComponent data={stats} type={"zone"} />
      <StatComponent data={stats} type={"resource"} />
      <div className={styles.buttons}>
        <Button variant="contained" onClick={() => refreshCards()}>
          Generate
        </Button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", margin: "1rem" }}>
        {data.map((card, i) => (
          <OrderCard order={card} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Gpt;
