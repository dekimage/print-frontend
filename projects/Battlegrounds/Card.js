import React from "react";
import styles from "../../styles/BattlegroundsCard.module.scss";
import { parseEffect, typeColors } from "./data";

// Global grayscale toggle - set to true to make ALL cards grayscale
const GLOBAL_GRAYSCALE = true;

const Card = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const {
    id,
    card: cardType,
    type,
    tier,
    image,
    url,
    effect,
    readableEffect,
    power,
    grayscale = false, // Default to false, can be overridden per card
  } = card;

  // Parse the effect string into renderable components
  const effectComponents = parseEffect(effect);

  // Separate trigger (first component) from effects
  const triggerComponent = effectComponents[0];
  const effectComponentsOnly = effectComponents.slice(1);

  // Helper function to get local API proxy URL
  const getLocalProxyUrl = (url) => {
    return `/api/image-proxy?url=${encodeURIComponent(url)}`;
  };

  // Determine if we're using an external URL or local image
  const isExternalImage = url && url.startsWith("http");

  // For external images, use the API proxy directly to avoid CORS issues
  const backgroundImagePath = isExternalImage
    ? getLocalProxyUrl(url)
    : `/battlegrounds/cards/${image}`;

  // State to track if we should use external image styling
  const [useExternalStyling, setUseExternalStyling] =
    React.useState(isExternalImage);

  // State to track proxy attempts
  const [proxyAttempt, setProxyAttempt] = React.useState(0);

  // Helper function to render effect components
  const renderEffectComponent = (component, index) => {
    if (component.type === "image") {
      const symbolPath = `/battlegrounds/symbols/${component.value}`;

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
            className={`${styles.backgroundImage} ${
              useExternalStyling ? styles.externalImage : ""
            } ${GLOBAL_GRAYSCALE || grayscale ? styles.grayscale : ""}`}
            onError={(e) => {
              console.error(
                `Failed to load background image for ${type} tier ${tier}:`,
                backgroundImagePath
              );

              // If API proxy fails, try to fall back to local image
              if (isExternalImage && image) {
                console.log(
                  `API proxy failed, falling back to local image: ${image}`
                );
                e.target.src = `/battlegrounds/cards/${image}`;
                setUseExternalStyling(false); // Switch to local image styling
                return; // Don't hide the image, let it try the fallback
              }

              // If both external and local fail, show placeholder
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
      <div
        className={styles.effectBox}
        style={{
          backgroundColor: GLOBAL_GRAYSCALE ? "white" : undefined,
        }}
      >
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

      {/* Tier symbol in top-left corner */}
      <div className={styles.tierSymbol}>
        <img
          src={`/battlegrounds/symbols/tier${tier}.png`}
          alt={`Tier ${tier}`}
          onError={(e) => {
            console.error(`Failed to load tier symbol: tier${tier}.png`);
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Tribe symbol in top-right corner */}
      <div className={styles.tribeSymbol}>
        <img
          src={`/battlegrounds/symbols/${type}.png`}
          alt={`${type} symbol`}
        />
      </div>

      {/* Power display in bottom-right corner - only for unit cards */}
      {cardType === "unit" && power !== undefined && (
        <div className={styles.powerDisplay}>
          <span className={styles.powerEmoji}>⚔️</span>
          <span className={styles.powerValue}>{power}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
