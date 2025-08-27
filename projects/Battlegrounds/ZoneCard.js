import React from "react";
import styles from "../../styles/BattlegroundsZoneCard.module.scss";
import { calculateDefense, ageToRoman } from "./data";

const ZoneCard = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const { id, card: cardType, type, age, otherTribes, backgroundImage } = card;

  // Calculate defense dynamically
  const defense = calculateDefense(otherTribes);
  const ageRoman = ageToRoman(age);

  // Get the background image path from public directory
  const backgroundImagePath = `/battlegrounds/zones/${backgroundImage}`;

  // Helper function to render other tribe icons
  const renderOtherTribes = () => {
    return otherTribes.map((tribe, index) => (
      <img
        key={index}
        src={`/battlegrounds/symbols/${tribe}.png`}
        alt={`${tribe} symbol`}
        className={styles.otherTribeIcon}
        onError={(e) => {
          console.error(`Failed to load tribe symbol: ${tribe}`);
          e.target.style.display = "none";
        }}
      />
    ));
  };

  return (
    <div
      className={styles.zoneCard}
      onClick={() => {
        if (isEditMode) {
          handleAddCardToPrint(card);
        }
      }}
    >
      {isInPrint && <div className={styles.addedForPrint}>+</div>}

      {/* Zone Background Image */}
      <div className={styles.zoneBackground}>
        <img
          src={backgroundImagePath}
          alt={`${type} zone background`}
          className={styles.backgroundImage}
          onError={(e) => {
            console.error(
              `Failed to load zone background image for ${type}:`,
              backgroundImagePath
            );
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div
          className={styles.placeholderText}
          style={{
            display: backgroundImagePath ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          {type} Zone Age {age}
        </div>
      </div>

      {/* Other Tribes Container - Top */}
      <div className={styles.otherTribesContainer}>{renderOtherTribes()}</div>

      {/* Main Tribe Symbol - Bottom Center */}
      <div className={styles.mainTribeSymbol}>
        <img
          src={`/battlegrounds/symbols/${type}.png`}
          alt={`${type} symbol`}
          onError={(e) => {
            console.error(`Failed to load main tribe symbol: ${type}`);
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Age Badge - Bottom Left */}
      <div className={styles.ageBadge}>
        <span>{ageRoman}</span>
      </div>

      {/* Defense Badge - Bottom Right */}
      <div className={styles.defenseBadge}>
        <span>{defense}</span>
      </div>
    </div>
  );
};

export default ZoneCard;
