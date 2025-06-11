import React from "react";
import styles from "../../styles/PelicanTownCard.module.scss";

// Faction symbols and colors
const getFactionInfo = (faction) => {
  const factionData = {
    birds: {
      emoji: "🦅",
      color: "#3498db", // Blue
      borderColor: "#2980b9",
      name: "Birds",
    },
    moles: {
      emoji: "🐹",
      color: "#8e44ad", // Purple
      borderColor: "#7d3c98",
      name: "Moles",
    },
    insects: {
      emoji: "🐝",
      color: "#e74c3c", // Red
      borderColor: "#c0392b",
      name: "Insects",
    },
    goats: {
      emoji: "🐐",
      color: "#27ae60", // Green
      borderColor: "#229954",
      name: "Goats",
    },
  };

  return factionData[faction] || factionData.birds; // Default to birds if faction not found
};

// Symbol dictionary for effects
const symbolMap = {
  gold: "../../assets/pelicanTown/gold.png",
  stone: "../../assets/pelicanTown/stone.png",
  wood: "../../assets/pelicanTown/wood.png",
  move: "../../assets/pelicanTown/move.png",
  mana: "../../assets/pelicanTown/mana.png",
  vp: "../../assets/pelicanTown/vp.png",
  // Add more symbols as needed
};

// Parses effects text and replaces [symbol] with image elements
const parseEffectText = (text) => {
  if (!text) return [];

  // Split by [] markers
  const parts = text.split(/(\[[^\]]+\])/g);

  return parts.map((part, index) => {
    // Check if this part is a symbol reference
    if (part.startsWith("[") && part.endsWith("]")) {
      const symbolName = part.slice(1, -1).trim().toLowerCase();
      const symbolSrc = symbolMap[symbolName];

      if (symbolSrc) {
        return (
          <img
            key={index}
            src={symbolSrc}
            alt={symbolName}
            className={styles.effectSymbol}
          />
        );
      }
      return <span key={index}>{part}</span>;
    }
    return <span key={index}>{part}</span>;
  });
};

const Card = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const { id, name, faction, cost, effect, tuckEffect, mp, image } = card;
  const factionInfo = getFactionInfo(faction);

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

      <div className={styles.header}>
        {/* Faction symbol */}
        <div
          className={styles.factionSymbol}
          style={{
            backgroundColor: factionInfo.color,
            borderColor: factionInfo.borderColor,
          }}
        >
          <span role="img" aria-label={faction}>
            {factionInfo.emoji}
          </span>
        </div>

        {/* Card name */}
        <div className={styles.name}>{name}</div>
      </div>

      {/* Image placeholder */}
      <div
        className={styles.imageArea}
        style={image ? { backgroundImage: `url(${image})` } : {}}
      />

      {/* Effect areas */}
      <div className={styles.effectsContainer}>
        <div className={styles.mainEffect}>{parseEffectText(effect)}</div>
        <div className={styles.divider}></div>
        <div className={styles.tuckEffect}>{parseEffectText(tuckEffect)}</div>
      </div>

      {/* Cost circle */}
      <div className={styles.costCircle}>
        <span>{cost}</span>
      </div>

      {/* MP circle */}
      <div className={styles.mpCircle}>
        <span>{mp}</span>
      </div>
    </div>
  );
};

export default Card;
