import { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import cx from "classnames";
import { Button, Autocomplete, TextField } from "@mui/material";

import HeroCard from "../components/HeroCard";
import PelicanCard from "../components/PelicanCard";

import styles from "../styles/Home.module.scss";

const GET_UNIFORGE = gql`
  {
    uniforges {
      id
      name
      mana
      power
      image {
        url
      }
      type
      subType
      faction
      keywords
      trigger
      effect
    }
  }
`;

const GET_UNIHERO = gql`
  {
    uniheroes(start: 176) {
      id
      name
      power
      image {
        url
      }
      type
      faction
      trigger
      effect
    }
  }
`;

const GET_DRAGONS = gql`
  {
    dragons {
      id
      name
      stats
      image {
        url
      }
    }
  }
`;

const GET_HEROES = gql`
  {
    heroes {
      id
      name
      range
      range_type
      copies
      damage
      power
      rarity
      gold
      mp
      image {
        url
      }
      hero_face {
        id
        name
        profile {
          url
        }
        color
        background_color
      }
      description
      effect
    }
  }
`;

const GET_PELICANS = gql`
  {
    pelicans {
      id
      name
      attack
      gold
      movement
      explore
      image {
        url
      }
      effect
      tribe
      proffesion
      cost
    }
  }
`;

const Home = () => {
  const [isPrintView, setIsPrintView] = useState(false);
  const [cards, setCards] = useState([]);
  const [cardsInCollection, setcardsInCollection] = useState([]);
  const [cardsForPrint, setCardsForPrint] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [pages, setPages] = useState(1);

  // set for game->
  // 1. GET_UNIFORGE
  // 2. GET_UNIHERO
  // 3. GET_YUMEDO
  // 4. GET_DOMINION
  // 5. GET_PELICANS

  const { data, error, loading } = useQuery(GET_PELICANS);

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

  useEffect(() => {
    if (data) {
      // set for game->
      // 1. uniforges
      // 2. uniheroes
      // 3. yumedos
      // 4. dominions
      // 5. heroes
      // 6. pelicans
      console.log(data);
      setCards(data["pelicans"]);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>error fetching cards...</div>;

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

  const Card = ({
    card: {
      id,
      name,
      mana,
      power,
      image,
      type,
      subType,
      faction,
      keywords,
      trigger,
      effect,
    },
  }) => {
    return (
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.mana}>{power ? power : 0}</div>
          <div className={styles.name}> {name}</div>
        </div>
        <div className={styles.image}>
          {image && (
            <img
              src={`http://localhost:1337${image.url}`}
              style={{ height: "150px", marginBottom: "10px" }}
            />
          )}
        </div>

        <div className={styles.body}>
          <div className={styles.type}>{type}</div>
          <div className={styles.id}>{id}</div>
          <div className={styles.subType}>{faction}</div>
          <span className={styles.trigger}>{trigger}:</span> {effect}
        </div>
      </div>
    );
  };

  // const Card = ({ card: { id, name, image, stats } }) => {
  //   return (
  //     <div className={styles.card}>
  //       <div className={styles.header}>
  //         <div className={styles.mana}>{power ? power : 0}</div>
  //         <div className={styles.name}> {name}</div>
  //       </div>
  //       <div className={styles.image}>
  //         {image && (
  //           <img
  //             src={`http://localhost:1337${image.url}`}
  //             style={{ height: "150px", marginBottom: "10px" }}
  //           />
  //         )}
  //       </div>

  //       <div className={styles.body}>
  //         <div className={styles.type}>{type}</div>
  //         <div className={styles.id}>{id}</div>
  //         <div className={styles.subType}>{faction}</div>
  //         <span className={styles.trigger}>{trigger}:</span> {effect}
  //       </div>
  //     </div>
  //   );
  // };

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
                {/* <Card card={card} /> */}
                {/* <HeroCard card={card} /> */}
                <PelicanCard card={card} />
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
                {/* <Card card={card} /> */}
                {/* <HeroCard card={card} /> */}
                <PelicanCard card={card} />
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

export default Home;
