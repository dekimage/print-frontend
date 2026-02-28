import React from "react";
import styles from "../../styles/FactionCard.module.scss";
import { ASSETS } from "./data";

const FactionCard = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const { id, name, imageUrl, factionColor, costCredits, effect } = card;
  const symbolImg = ASSETS.reputationSymbols?.[factionColor];

  return (
    <div
      className={styles.card}
      onClick={() => {
        if (isEditMode) {
          handleAddCardToPrint(card);
        }
      }}
    >
      {isInPrint && <div className={styles.addedForPrint}>+</div>}

      {/* Faction square + hex symbol - top left */}
      <div
        className={`${styles.factionBox} ${styles[`factionBox_${factionColor}`]}`}
      >
        {symbolImg && (
          <img
            src={symbolImg}
            alt={factionColor}
            title={`${factionColor} faction`}
          />
        )}
      </div>

      {/* Cost in credits - top right */}
      {costCredits != null && (
        <div
          className={`${styles.costBox} ${styles[`costBox_${factionColor}`]}`}
        >
          <span className={styles.costAmount}>{costCredits}</span>
          <img src={ASSETS.credit} alt="credit" className={styles.costIcon} />
        </div>
      )}

      {/* Upper half: Image */}
      <div className={styles.imageSection}>
        {imageUrl && <img src={imageUrl} alt={name} />}
      </div>

      {/* Bottom half: Effect body with faction color */}
      <div
        className={`${styles.effectSection} ${styles[`effectSection_${factionColor}`]}`}
      >
        <div className={styles.effectContent}>
          {effect || <span className={styles.placeholder}>—</span>}
        </div>
      </div>
    </div>
  );
};

export default FactionCard;
