import React from "react";
import styles from "../../styles/HeroesDominionToken.module.scss";

const Token = ({ token, isKeyword = false }) => {
  if (isKeyword) {
    // For keyword tokens, create 3 small cells
    return (
      <div className={styles.keywordTokenSet}>
        <div
          className={styles.keywordToken}
          style={{ backgroundColor: token.color }}
        >
          <span className={styles.keywordText}>{token.name}</span>
        </div>
        <div
          className={styles.keywordToken}
          style={{ backgroundColor: token.color }}
        >
          <span className={styles.keywordText}>{token.name}</span>
        </div>
        <div
          className={styles.keywordToken}
          style={{ backgroundColor: token.color }}
        >
          <span className={styles.keywordText}>{token.name}</span>
        </div>
      </div>
    );
  }

  // For regular tokens, create multiple cells based on quantity
  const { name, image, effect, description, quantity = 3 } = token;

  // Define token styles
  const getTokenStyle = (tokenName) => {
    switch (tokenName.toLowerCase()) {
      case "trap":
        return {
          border: "3px solid #8B4513", // Dark brown
          backgroundColor: "#D2B48C", // Light brown
          emoji: "🪤",
        };
      case "bomb":
        return {
          border: "3px solid #8B0000", // Dark red
          backgroundColor: "#FFB6C1", // Light red
          emoji: "💣",
        };
      case "poison":
        return {
          border: "3px solid #4B0082", // Dark purple
          backgroundColor: "#DDA0DD", // Light purple
          emoji: "☠️",
        };
      case "bounty":
        return {
          border: "3px solid #B8860B", // Golden
          backgroundColor: "#FFFACD", // Light yellow
          emoji: "💰",
        };
      default:
        return {
          border: "1px solid #333",
          backgroundColor: "white",
          emoji: "❓",
        };
    }
  };

  const tokenStyle = getTokenStyle(name);
  const tokens = [];

  for (let i = 0; i < quantity; i++) {
    tokens.push(
      <div key={i} className={styles.token} style={tokenStyle}>
        <div className={styles.tokenEmoji}>{tokenStyle.emoji}</div>
        <div className={styles.tokenName}>
          <span>{name}</span>
        </div>
      </div>
    );
  }

  return <div className={styles.tokenSet}>{tokens}</div>;
};

export default Token;
