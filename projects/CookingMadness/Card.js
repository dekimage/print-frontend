import styles from "../../styles/CookingCard.module.scss";

import bodyCoverImg from "../../assets/battleRoyal/bodycover.png";

import techBorderImg from "../../assets/battleRoyal/borderblue.png";
import natureBorderImg from "../../assets/battleRoyal/bordergreen.png";

import fruitIcon from "../../assets/cookingMadness/fruit.png";
import vegetableIcon from "../../assets/cookingMadness/vegetable.png";
import meatIcon from "../../assets/cookingMadness/meat.png";
import dairyIcon from "../../assets/cookingMadness/dairy.png";
import nutsIcon from "../../assets/cookingMadness/nuts.png";
import spiceIcon from "../../assets/cookingMadness/spice.png";

import soupIcon from "../../assets/cookingMadness/soup.png";
import saladIcon from "../../assets/cookingMadness/salad.png";
import mainDishIcon from "../../assets/cookingMadness/main.png";
import dessertIcon from "../../assets/cookingMadness/dessert.png";

const ingridientIcon = (type) => {
  const ingridientsIcons = {
    Fruit: fruitIcon,
    Vegetable: vegetableIcon,
    Meat: meatIcon,
    Dairy: dairyIcon,
    Nuts: nutsIcon,
    Spice: spiceIcon,
  };
  return ingridientsIcons[type];
};

const recepieIcon = (type) => {
  const recepieIcons = {
    Soup: soupIcon,
    Salad: saladIcon,
    "Main Dish": mainDishIcon,
    Dessert: dessertIcon,
  };
  return recepieIcons[type];
};

const cardTypeImgCover = (type) => {
  const cardTypeImgCovers = {
    Customer: techBorderImg,
    Ingridient: bodyCoverImg,
    Recepie: natureBorderImg,
  };
  return cardTypeImgCovers[type];
};

const getCardBgByType = (type, isFooter = false) => {
  const colorsByType = {
    Customer: isFooter ? "#a2d2ff" : "#4394e0",
    Ingridient: isFooter ? "#fce97c" : "#fff3b0",
    Recepie: isFooter ? "#d9ed92" : "#b5e48c",
    Mishap: isFooter ? "#ff9c9c" : "#e75e5e",
  };

  return colorsByType[type];
};

const getBgByType = (type) => {
  const colorsByType = {
    Dairy: "#a2d2ff",
    Dessert: "#ff9c9c",
    Fruit: "#9b5de5",
    "Main Dish": "#9a031e",
    Meat: "#b07d62",
    Nuts: "#fcbf49",
    Salad: "#6a994e",
    Soup: "#fb8b24",
    Spice: "#4a4e69",
    Vegetable: "#99d98c",
  };

  return colorsByType[type];
};

const generateIcon = (card) => {
  if (card.type == "Ingridient") {
    return ingridientIcon(card.ingridientCategory);
  } else if (card.type == "Recepie") {
    return recepieIcon(card.recepieCategory);
  }
};

const renderIngridientCost = (ingridient) => {
  const ingridientTypeGeneric = [
    "Fruit",
    "Vegetable",
    "Meat",
    "Dairy",
    "Nuts",
    "Spice",
  ];
  if (ingridientTypeGeneric.includes(ingridient)) {
    return (
      <div
        className={styles.type}
        style={{
          backgroundColor: getBgByType(ingridient),
        }}
      >
        <img
          src={generateIcon({
            type: "Ingridient",
            ingridientCategory: ingridient,
          })}
          height="30px"
          alt=""
        />
      </div>
    );
  } else {
    return <div>{ingridient} +</div>;
  }
};

const Card = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const {
    name,
    type,
    ingridients,
    ingridientCategory,
    recepieCategory,
    effect,
    img,
    eats,
  } = card;

  return (
    <div
      className={styles.card}
      onClick={() => {
        if (isEditMode) {
          handleAddCardToPrint(card);
        }
      }}
    >
      <div
        className={styles.header}
        style={{
          // backgroundImage: `url(${cardTypeImgCover(type)})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: getCardBgByType(type),
          // opacity: "0.8",
        }}
      >
        {isInPrint && <div className={styles.addedForPrint}>+</div>}

        {type == "Customer" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              left: "5px",
              top: "10px",
              gap: ".5rem",
            }}
          >
            {eats.map((eat, i) => {
              return (
                <div
                  className={styles.type}
                  key={i}
                  style={{
                    backgroundColor: getBgByType(eat),
                  }}
                >
                  <img
                    src={generateIcon({
                      type: "Recepie",
                      recepieCategory: eat,
                    })}
                    height="40px"
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        )}

        {(type == "Ingridient" || type == "Recepie") && (
          <div
            className={styles.type}
            style={{
              backgroundColor: getBgByType(
                recepieCategory || ingridientCategory
              ),
              position: "absolute",
              left: "5px",
              top: "10px",
            }}
          >
            <img src={generateIcon(card)} height="40px" alt="" />
          </div>
        )}
        <div className={styles.name}>{name}</div>
      </div>

      <div
        className={styles.art}
        style={
          img
            ? {
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }
            : {}
        }
      ></div>
      <div className={styles.middleBorder}>
        <div className={styles.middleBorder_type}>{type}</div>
      </div>
      <div
        style={{
          // backgroundImage: `url(${bodyCoverImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: getCardBgByType(type, true),
        }}
      >
        <div className={styles.body}>
          {ingridients &&
            ingridients.map((ingridient, i) => (
              <div className={styles.ingridient} key={i}>
                {renderIngridientCost(ingridient)}
              </div>
            ))}
          {effect && <div className={styles.effect}>{effect}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
