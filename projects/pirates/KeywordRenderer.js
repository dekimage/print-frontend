import React from "react";

import styles from "../../styles/PirateCard.module.scss";

import SwordIcon from "../../assets/pirates/sword.png";

import GoldIcon from "../../assets/pirates/gold.png";

const renderIcons = (keyword) => {
  const [type, count] = keyword.split("-");
  const icons = [];

  for (let i = 0; i < parseInt(count, 10); i++) {
    switch (type) {
      case "atk":
        icons.push(<img src={SwordIcon} height="36px" alt="" />);
        break;
      case "gold":
        icons.push(<img src={GoldIcon} height="40px" alt="" />);
        break;
      default:
        break;
    }
  }

  return icons;
};

export const KeywordRenderer = ({ keywords }) => {
  return (
    <div className={styles.keywordsWrapper}>
      {keywords.map((keyword, index) => {
        if (keyword === "or") {
          return (
            <span
              style={{
                fontSize: "28px",
                width: "20px",
                textAlign: "center",
              }}
              key={index}
            >
              /
            </span>
          );
        } else if (keyword !== "and") {
          return renderIcons(keyword);
        }
        return null;
      })}
    </div>
  );
};

export function generateCopies(config) {
  const copies = [];

  // Iterate over each resource type in the config
  for (const resourceConfig of config) {
    for (let i = 0; i < resourceConfig.quantity; i++) {
      copies.push({
        type: "Resource",
        name: resourceConfig.name,
        keywords: resourceConfig.keywords,
        img: resourceConfig.img,
      });
    }
  }

  return copies;
}
