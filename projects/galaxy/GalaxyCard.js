import React from "react";
import styles from "../../styles/galaxy.module.scss";

const actionToIconTable = {
  draw: "drawIcon",
  energy: "energyIcon",
  // ... Define more action to icon mappings
};

const CardComponent = ({ title, imageUrl, actions, cost }) => {
  return (
    <div className={styles.card}>
      <div className={styles.name}>{title}</div>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles.actions}>
        {actions.map((action, index) => (
          <div key={index} className={styles.action}>
            {/* Use actionToIconTable to map action name to icon */}
            <div className={styles.actionIcon}>{actionToIconTable[action]}</div>
          </div>
        ))}
      </div>
      <div className={styles.cost}>{cost}</div>
    </div>
  );
};

export default CardComponent;
