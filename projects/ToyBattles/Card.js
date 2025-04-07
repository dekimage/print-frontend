import React from "react";
import styles from "../../styles/ToyBattleCard.module.scss";
import hBgImg from "../../assets/toyBattles/hbg.png";
import sBgImg from "../../assets/toyBattles/sbg.png";

// Arrow SVG components
const LeftArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className={styles.leftArrow}>
    <path
      d="M20 12H4M4 12L10 18M4 12L10 6"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RightArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className={styles.rightArrow}>
    <path
      d="M4 12H20M20 12L14 6M20 12L14 18"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UpArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className={styles.upArrow}>
    <path
      d="M12 4V20M12 4L6 10M12 4L18 10"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DiagonalLeftArrow = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={styles.diagonalLeftArrow}
  >
    <path
      d="M4 4L20 20M4 4V10M4 4H10"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DiagonalRightArrow = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={styles.diagonalRightArrow}
  >
    <path
      d="M20 4L4 20M20 4H14M20 4V10"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Faction background images - high quality subtle patterns
const factionBackgrounds = {
  hellGnolls: hBgImg, // Lava/fire pattern
  sporelings: sBgImg, // Mushroom/moss pattern
};

// Faction icons
const FactionIcon = ({ faction }) => {
  const hellGnollsIcon = (
    <span role="img" aria-label="hellGnolls" className={styles.factionIcon}>
      👹
    </span>
  );

  const sporelingsIcon = (
    <span role="img" aria-label="sporelings" className={styles.factionIcon}>
      🍄
    </span>
  );

  return faction === "hellGnolls" ? hellGnollsIcon : sporelingsIcon;
};

const getCardBgByFaction = (faction, isHeader = false) => {
  const colorsByFaction = {
    hellGnolls: isHeader ? "#ff7b54" : "#ffb26b",
    sporelings: isHeader ? "#7abd91" : "#a7e9af",
  };

  return colorsByFaction[faction];
};

const getBorderByFaction = (faction) => {
  const bordersByFaction = {
    hellGnolls: "5px solid #d00000",
    sporelings: "5px solid #2d6a4f",
  };

  return bordersByFaction[faction];
};

const Card = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const { name, power, arrowsConfig = [], faction, effect, img } = card;

  return (
    <div
      className={styles.card}
      onClick={() => {
        if (isEditMode) {
          handleAddCardToPrint(card);
        }
      }}
      // style={{
      //   border: getBorderByFaction(faction),
      // }}
    >
      <div
        className={styles.header}
        style={{
          backgroundColor: getCardBgByFaction(faction, true),
        }}
      >
        {isInPrint && <div className={styles.addedForPrint}>+</div>}

        <div className={styles.power}>{power}</div>

        {/* Arrows */}
        {arrowsConfig.includes("left") && (
          <div className={styles.leftArrowContainer}>
            <LeftArrow />
          </div>
        )}

        {arrowsConfig.includes("right") && (
          <div className={styles.rightArrowContainer}>
            <RightArrow />
          </div>
        )}

        {arrowsConfig.includes("up") && (
          <div className={styles.upArrowContainer}>
            <UpArrow />
          </div>
        )}

        {arrowsConfig.includes("diagonalLeft") && (
          <div className={styles.diagonalLeftArrowContainer}>
            <DiagonalLeftArrow />
          </div>
        )}

        {arrowsConfig.includes("diagonalRight") && (
          <div className={styles.diagonalRightArrowContainer}>
            <DiagonalRightArrow />
          </div>
        )}
      </div>

      <div
        className={styles.art}
        style={{
          backgroundImage: `
            url(${factionBackgrounds[faction]}),
            ${img ? `url(${img})` : "none"}
          `,
          backgroundSize: "cover, cover",
          backgroundPosition: "center center, center center",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundBlendMode: "soft-light, normal",
        }}
      >
        <div className={styles.name}>{name}</div>
      </div>

      <div
        className={styles.body}
        style={{
          backgroundColor: getCardBgByFaction(faction, false),
        }}
      >
        <div className={styles.effect}>{effect}</div>

        {/* <div className={styles.factionIconContainer}>
          <FactionIcon faction={faction} />
        </div> */}
      </div>
    </div>
  );
};

export default Card;
