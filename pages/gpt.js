import { useEffect, useState } from "react";
import { Button, Autocomplete, TextField } from "@mui/material";
import styles from "../styles/Home.module.scss";
import { OrderCard } from "../components/Egypt/OrderCard";
import { generateOrderCards } from "../gpt-functions/egypt";

const Gpt = () => {
  // const data = [];
  const data = generateOrderCards(60, 100);
  const [isPrintView, setIsPrintView] = useState(false);
  const [cards, setCards] = useState([]);
  const [cardsInCollection, setcardsInCollection] = useState([]);
  const [cardsForPrint, setCardsForPrint] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [pages, setPages] = useState(1);

  console.log(555);

  function formatPagination(cards) {
    var perChunk = 3; // items per chunk

    var inputArray = cards;

    var result = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);
    return result;
  }

  const handleChange = (event, value) => setSelectedOptions(value);
  const searchOptions =
    data && cards.map((card) => (card.name ? card.name : card.id));

  function addCardToCollection() {
    const cardToAdd = cards.filter(
      (card) => card.name === selectedOptions || card.id == selectedOptions
    )[0];
    if (!cardToAdd) {
      return;
    }
    setcardsInCollection([...cardsInCollection, cardToAdd]);
  }

  function removeFromCollection(card) {
    setcardsInCollection(cardsInCollection.filter((c) => c.id !== card.id));
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      addCardToCollection();
    }
  }

  return (
    <div>
      {!isPrintView ? (
        <div>
          <div className={styles.filters}>
            <Autocomplete
              disablePortal
              onChange={handleChange}
              onKeyPress={(e) => handleKeyDown(e, "card")}
              id="combo-box-demo"
              options={searchOptions}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Search Card..." />
              )}
            />
            <Button
              style={{ margin: "1rem" }}
              variant="contained"
              onClick={() => addCardToCollection()}
            >
              ADD
            </Button>
            <Button
              style={{ margin: "1rem" }}
              variant="contained"
              onClick={() => {
                setIsPrintView(true);
                setCardsForPrint(cardsInCollection);
              }}
            >
              PRINT SELECTED
            </Button>
            <Button
              style={{ margin: "1rem" }}
              variant="contained"
              onClick={() => {
                setIsPrintView(true);
                setCardsForPrint(cards);
              }}
            >
              PRINT ALL
            </Button>
          </div>
          Cards to add for print:
          <div className={styles.cardsInCollection}>
            {cardsInCollection.length !== 0 && (
              <div
                className={styles.removeCard}
                onClick={() => setcardsInCollection([])}
              >
                X
              </div>
            )}

            {cardsInCollection.map((card, i) => (
              <div className={styles.cardForPrint} key={i}>
                <OrderCard order={card} />
                <div
                  className={styles.removeCard}
                  onClick={() => removeFromCollection(card)}
                >
                  X
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.printPage}>
          <div className={styles.cardsForPrint}>
            {cardsForPrint.map((card, i) => (
              <div className={styles.cardForPrint} key={i}>
                <OrderCard order={card} />
              </div>
            ))}
          </div>
          <div>
            <Button
              variant="contained"
              onClick={() => setIsPrintView(false)}
              style={{ marginTop: "1rem" }}
            >
              Back
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gpt;
