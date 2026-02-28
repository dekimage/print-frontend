import React from "react";
import styles from "../../styles/BattleCard.module.scss";
import { ASSETS } from "./data";

const TIER_ROMAN = { 1: "I", 2: "II" };

const BattleCard = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const {
    id,
    tier,
    condition,
    conditionType,
    conditionColor,
    rewards,
  } = card;

  const { first, second, third } = rewards;

  // Reputation: use generic reputation icon; Hexes: use colored symbol
  const isReputation = conditionType?.includes("reputation");
  const isHexes = conditionType?.includes("hexes");
  const conditionSymbol = isReputation
    ? ASSETS.reputation
    : isHexes && conditionColor !== "omni"
      ? ASSETS.reputationSymbols?.[conditionColor]
      : null;

  // Render reward symbols: VP (no value for tier 1 first), or N× card symbols
  const renderFirstReward = () => {
    if (!first) return null;
    if (tier === 1) {
      return <img src={ASSETS.vp} alt="VP" className={styles.rewardIcon} />;
    }
    // Tier 2: 2x VP symbol
    return (
      <>
        {[1, 2].map((i) => (
          <img key={i} src={ASSETS.vp} alt="VP" className={styles.rewardIcon} />
        ))}
      </>
    );
  };

  const renderSecondReward = () => {
    if (!second) return null;
    const count = second.cards || 0;
    return Array.from({ length: count }, (_, i) => (
      <img key={i} src={ASSETS.cardSymbol} alt="card" className={styles.rewardIcon} />
    ));
  };

  const renderThirdReward = () => {
    if (!third) return null;
    const count = third.cards || 0;
    return Array.from({ length: count }, (_, i) => (
      <img key={i} src={ASSETS.cardSymbol} alt="card" className={styles.rewardIcon} />
    ));
  };

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

      {/* Header: Condition image (left) + Condition string */}
      <div className={styles.header}>
        <div
          className={`${styles.conditionImage} ${styles[`conditionColor_${conditionColor}`]} ${isHexes && conditionColor !== "omni" ? styles.conditionImage_hex : ""}`}
        >
          {conditionColor === "omni" ? (
            <div className={styles.omniColors}>
              <div className={styles.omniGrey} />
              <div className={styles.omniPurple} />
              <div className={styles.omniBlue} />
            </div>
          ) : conditionSymbol ? (
            <img
              src={conditionSymbol}
              alt={conditionColor}
              className={styles.conditionSymbol}
            />
          ) : null}
        </div>
        <div className={styles.conditionText}>{condition}</div>
      </div>

      {/* 3 Reward sections */}
      <div className={styles.rewardSections}>
        <div className={styles.rewardBox}>
          <div className={styles.placeLabel}>1st</div>
          <div className={styles.rewardContent}>{renderFirstReward()}</div>
        </div>
        <div className={styles.rewardBox}>
          <div className={styles.placeLabel}>2nd</div>
          <div className={styles.rewardContent}>{renderSecondReward()}</div>
        </div>
        <div className={styles.rewardBox}>
          <div className={styles.placeLabel}>3rd</div>
          <div className={styles.rewardContent}>{renderThirdReward()}</div>
        </div>
      </div>

      {/* Tier badge: Roman numerals */}
      <div className={styles.tierBadge}>{TIER_ROMAN[tier] ?? tier}</div>
    </div>
  );
};

export default BattleCard;
