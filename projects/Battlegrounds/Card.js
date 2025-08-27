import React from "react";
import styles from "../../styles/BattlegroundsCard.module.scss";
import { parseEffect, typeColors } from "./data";

const Card = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const {
    id,
    card: cardType,
    type,
    tier,
    image,
    effect,
    readableEffect,
  } = card;

  // Parse the effect string into renderable components
  const effectComponents = parseEffect(effect);

  // Separate trigger (first component) from effects
  const triggerComponent = effectComponents[0];
  const effectComponentsOnly = effectComponents.slice(1);

  // Get the background image path from public directory
  const backgroundImagePath = `/battlegrounds/cards/${image}`;

  // Debug logging
  console.log(`Card ${id}:`, {
    type,
    tier,
    image,
    backgroundImagePath,
    effect,
    effectComponents,
  });

  // Helper function to render effect components
  const renderEffectComponent = (component, index) => {
    if (component.type === "image") {
      const symbolPath = `/battlegrounds/symbols/${component.value}`;
      console.log(`Loading symbol: ${symbolPath}`);
      return (
        <img
          key={index}
          src={symbolPath}
          alt={component.value}
          onError={(e) => {
            console.error(
              `Failed to load symbol: ${component.value} from ${symbolPath}`
            );
            e.target.style.display = "none";
          }}
          onLoad={() => {
            console.log(`Successfully loaded symbol: ${component.value}`);
          }}
        />
      );
    } else if (component.type === "text") {
      return (
        <span key={index} style={component.style}>
          {component.value}
        </span>
      );
    }
    return null;
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

      {/* Card Background Image */}
      <div className={styles.cardBackground}>
        {backgroundImagePath ? (
          <img
            src={backgroundImagePath}
            alt={`${type} tier ${tier}`}
            className={styles.backgroundImage}
            onError={(e) => {
              console.error(
                `Failed to load background image for ${type} tier ${tier}:`,
                backgroundImagePath
              );
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
            onLoad={() => {
              console.log(
                `Successfully loaded background image for ${type} tier ${tier}`
              );
            }}
          />
        ) : null}
        <div
          className={styles.placeholderText}
          style={{
            display: backgroundImagePath ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          {type} Tier {tier}
        </div>
      </div>

      {/* Effect Box Overlay - 40% height from bottom */}
      <div className={styles.effectBox}>
        {/* Trigger background - black circle behind trigger */}
        {triggerComponent && <div className={styles.triggerBackground}></div>}

        {/* Trigger positioned above the effect box */}
        {triggerComponent && (
          <div className={styles.triggerContainer}>
            {renderEffectComponent(triggerComponent, 0)}
          </div>
        )}

        {/* Effects centered in the effect box */}
        <div className={styles.effectContent}>
          {/* Symbols area - upper 67% */}
          <div className={styles.symbolsArea}>
            {effectComponentsOnly.map((component, index) =>
              renderEffectComponent(component, index + 1)
            )}
          </div>

          {/* Text area - lower 33% */}
          <div className={styles.textArea}>
            <span>{readableEffect || effect}</span>
          </div>
        </div>
      </div>

      {/* Tribe symbol in top-right corner */}
      <div className={styles.tribeSymbol}>
        <img
          src={`/battlegrounds/symbols/${type}.png`}
          alt={`${type} symbol`}
        />
      </div>
    </div>
  );
};

export default Card;
