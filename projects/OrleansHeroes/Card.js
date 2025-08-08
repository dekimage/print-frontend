import React from "react";
import styles from "../../styles/OrleansHeroesCard.module.scss";
import { rewardShapes, rewardColors } from "./data";

// Import rank images
import rank1Img from "../../assets/orleansHeroes/rank1.png";
import rank2Img from "../../assets/orleansHeroes/rank2.png";
import rank3Img from "../../assets/orleansHeroes/rank3.png";
import rank4Img from "../../assets/orleansHeroes/rank4.png";
import rank5Img from "../../assets/orleansHeroes/rank5.png";
import rank6Img from "../../assets/orleansHeroes/rank6.png";
import rank7Img from "../../assets/orleansHeroes/rank7.png";

// Element symbols mapping
const elementMap = {
  earth: "🌍",
  fire: "🔥",
  water: "💧",
  air: "💨",
};

// Type symbols mapping
const typeMap = {
  farm: "🌾",
  battle: "⚔️",
  epic: "⭐",
  explore: "🗺️",
};

// Type-based background colors
const typeBackgroundColors = {
  farm: "linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)", // Green
  battle: "linear-gradient(135deg, #F44336 0%, #EF5350 100%)", // Red
  epic: "linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)", // Purple
  explore: "linear-gradient(135deg, #2196F3 0%, #42A5F5 100%)", // Blue
};

// Rewards symbols mapping with distinct shapes for print recognition
const rewardsMap = {
  // whiteGem: "⚪",
  // redGem: "🔴",
  // blueGem: "🔵",
  // yellowGem: "🟡",
  // purpleGem: "🟣",
  // initiative: "⚡",
  // supply: "📦",
  // skill: "🎯",
  upgrade: "🟩",
  // joker: "🃏",
  red: "🔴",
  blue: "🔵",
  yellow: "🟡",
  omni: "🟣",
  // omni: "🃏",
  // joker: "⬆️",
  // red: "■", // Red Square
  // yellow: "⬟", // Yellow Circle
  // blue: "▲", // Blue Triangle
  // green: "♦", // Green Diamond
  // purple: "⬟", // Purple Hexagon
};

// Rank images mapping for cost
const rankImageMap = {
  1: rank1Img,
  2: rank2Img,
  3: rank3Img,
  4: rank4Img,
  5: rank5Img,
  6: rank6Img,
  7: rank7Img,
};

// Cost tier colors mapping (keeping as backup)
const costTierColors = {
  1: "#8B4513", // Brown
  2: "#A0522D", // Sienna
  3: "#CD853F", // Peru
  4: "#DAA520", // Goldenrod
  5: "#FFD700", // Gold
  6: "#FFA500", // Orange
  7: "#FF4500", // OrangeRed
};

// Roman numerals for age
const ageToRoman = {
  1: "I",
  2: "II",
  3: "III",
};

const Card = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const { id, name, vp, elements, type, image, rewards, cost, age } = card;

  // Function to handle CORS issues with external images
  const getProxiedImageUrl = (url) => {
    if (!url || url.trim() === "") return "";

    // Try different CORS proxy services for Wikia URLs
    if (url.includes("wikia.nocookie.net")) {
      // Use a simpler, more reliable proxy
      return `https://corsproxy.io/?${encodeURIComponent(url)}`;
    }

    // For other URLs, return as-is
    return url;
  };

  const proxiedImageUrl = getProxiedImageUrl(image);

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

      {/* Header */}
      <div
        className={styles.header}
        style={{
          background: typeBackgroundColors[type] || typeBackgroundColors.epic,
        }}
      >
        {/* VP Points - Top Left */}
        <div className={styles.vpPoints}>
          <span>{vp}</span>
        </div>

        {/* Elements - Middle */}
        {/* <div className={styles.elements}>
          {elements.map((element, index) => (
            <span key={index} className={styles.elementSymbol}>
              {elementMap[element] || "❓"}
            </span>
          ))}
        </div> */}

        {/* Type Symbol - Top Right */}
        {/* <div className={styles.typeSymbol}>
          <span>{typeMap[type] || "❓"}</span>
        </div> */}
      </div>

      {/* Card Name */}
      {/* <div className={styles.cardName}>{name}</div> */}

      {/* Artwork Area */}
      <div className={styles.artworkArea}>
        {proxiedImageUrl && proxiedImageUrl.trim() !== "" ? (
          <img
            src={proxiedImageUrl}
            alt={name}
            className={styles.artworkImage}
            onError={(e) => {
              console.error(
                `Failed to load image for ${name}:`,
                proxiedImageUrl
              );
              console.log("Trying fallback without proxy...");
              // Try without proxy as fallback
              if (proxiedImageUrl !== image) {
                e.target.src = image;
              } else {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }
            }}
            onLoad={() => {
              console.log(`Successfully loaded image for ${name}`);
            }}
          />
        ) : null}
        <div
          className={styles.placeholderText}
          style={{
            display:
              proxiedImageUrl && proxiedImageUrl.trim() !== ""
                ? "none"
                : "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          Artwork
        </div>
      </div>

      {/* Rewards Box */}
      <div className={styles.rewardsBox}>
        <div className={styles.rewardsContainer}>
          {rewards.map((reward, index) => (
            <span
              key={index}
              className={styles.rewardSymbol}
              style={{
                color: rewardColors[reward] || "#666",
                fontSize: "20px",
                fontWeight: "bold",
                width: "20px",
                height: "20px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "1",
              }}
            >
              {rewardsMap[reward] || "❓"}
            </span>
          ))}
        </div>
      </div>

      {/* Cost Box */}
      <div className={styles.costBox}>
        {type === "battle" && (
          <div className={styles.totalCostDisplay}>
            {cost.reduce((sum, tier) => sum + tier, 0)}
          </div>
        )}
        <div className={styles.costContainer}>
          {cost.map((tier, index) => {
            // Dynamic sizing based on cost array length
            const isLargeCostArray = cost.length >= 4;
            const tierStyle = isLargeCostArray
              ? {
                  width: "32px",
                  height: "32px",
                  padding: "6px",
                  border: "1px dotted #888",
                }
              : {};

            const imageStyle = isLargeCostArray
              ? {
                  width: "120%",
                  height: "120%",
                }
              : {};

            return (
              <div key={index} className={styles.costTier} style={tierStyle}>
                {type !== "battle" ? (
                  <img
                    src={rankImageMap[tier]}
                    alt={`Rank ${tier}`}
                    className={styles.rankImage}
                    style={imageStyle}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      {/* Age - Bottom Right */}
      <div className={styles.age}>{ageToRoman[age] || age}</div>
    </div>
  );
};

export default Card;
