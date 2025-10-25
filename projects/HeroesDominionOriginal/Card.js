import React from "react";
import styles from "../../styles/HeroesDominionCard.module.scss";
import {
  parseAbilityEffect,
  parseRange,
  parseReadableEffect,
  symbolMappings,
} from "./data";

const Card = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const { id, name, hp, image, imageUrl, abilities } = card;

  // Helper function to render ability effect components
  const renderEffectComponent = (component, index) => {
    if (component.type === "image") {
      const symbolPath = `/heroes-dominion/symbols/${component.value}`;

      return (
        <img
          key={index}
          src={symbolPath}
          alt={component.value}
          className={styles.effectSymbol}
          onError={(e) => {
            console.error(
              `Failed to load symbol: ${component.value} from ${symbolPath}`
            );
            e.target.style.display = "none";
          }}
        />
      );
    } else if (component.type === "keyword") {
      return (
        <span
          key={index}
          className={styles.keywordTag}
          style={{
            backgroundColor: component.style.backgroundColor,
            color: component.style.color,
            borderColor: component.style.borderColor,
          }}
        >
          {component.value}
        </span>
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

  // Helper function to render ability stats
  const renderAbilityStats = (ability) => {
    const rangeInfo = parseRange(ability.range);
    const stats = [];

    // Range indicator - always show as text for now
    stats.push(
      <span key="range" className={styles.rangeText}>
        {ability.range}
      </span>
    );

    // Linear indicator
    if (ability.isLinear !== undefined) {
      const linearIcon = ability.isLinear ? "linear.png" : "noLinear.png";
      stats.push(
        <img
          key="linear"
          src={`/heroes-dominion/symbols/${linearIcon}`}
          alt={ability.isLinear ? "Linear" : "Non-linear"}
          className={styles.statIcon}
        />
      );
    }

    // Sight indicator
    if (ability.isSight !== undefined) {
      const sightIcon = ability.isSight ? "sight.png" : "noSight.png";
      stats.push(
        <img
          key="sight"
          src={`/heroes-dominion/symbols/${sightIcon}`}
          alt={ability.isSight ? "Requires sight" : "No sight required"}
          className={styles.statIcon}
        />
      );
    }

    // Max target indicator
    if (ability.maxTarget && ability.maxTarget > 1) {
      stats.push(
        <span key="maxTarget" className={styles.maxTargetText}>
          Max: {ability.maxTarget}
        </span>
      );
    }

    // Uses per turn indicator
    if (ability.usesPerTurn && ability.usesPerTurn > 1) {
      stats.push(
        <span key="usesPerTurn" className={styles.usesPerTurnText}>
          {ability.usesPerTurn}/turn
        </span>
      );
    }

    // Area of effect indicator
    if (ability.areaOfEffect) {
      stats.push(
        <img
          key="aoe"
          src={`/heroes-dominion/symbols/aoe_${ability.areaOfEffect}.png`}
          alt={`${ability.areaOfEffect} AoE`}
          className={styles.statIcon}
        />
      );
    }

    return stats;
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

      {/* Hero Image Section - 30% width */}
      <div className={styles.imageSection}>
        <img
          // src={`/heroes-dominion/heroes/${image}`}
          src={imageUrl || ""}
          alt={name}
          className={styles.heroImage}
          onError={(e) => {
            console.error(`Failed to load hero image: ${image}`);
            e.target.style.display = "none";
          }}
        />

        {/* HP Display - Top Left */}
        <div className={styles.hpDisplay}>
          <img
            src="/heroes-dominion/symbols/heart.png"
            alt="HP"
            className={styles.heartIcon}
          />
          <span className={styles.hpText}>{hp}</span>
        </div>

        {/* Hero Name - Bottom of Image */}
        <div className={styles.heroName}>
          <span>{name}</span>
        </div>
      </div>

      {/* Abilities Section - 70% width */}
      <div className={styles.abilitiesSection}>
        {/* First Ability - Top 50% */}
        <div className={styles.ability}>
          {/* Ability Name Header */}
          <div className={styles.abilityHeader}>
            <span className={styles.abilityName}>
              {abilities[0]?.name || "Ability 1"}
            </span>
          </div>

          <div className={styles.abilityBody}>
            <div className={styles.abilityIcon}>
              <img
                src={`/heroes-dominion/abilities/${abilities[0]?.icon}`}
                alt={abilities[0]?.name}
                className={styles.abilityImage}
                onError={(e) => {
                  console.error(
                    `Failed to load ability icon: ${abilities[0]?.icon}`
                  );
                  e.target.style.display = "none";
                }}
              />
            </div>

            <div className={styles.abilityContent}>
              <div className={styles.abilityEffect}>
                {abilities[0] &&
                  parseReadableEffect(abilities[0].readableEffect).map(
                    (component, index) =>
                      renderEffectComponent(component, index)
                  )}
              </div>
            </div>

            <div className={styles.abilityStats}>
              {abilities[0] && renderAbilityStats(abilities[0])}
            </div>
          </div>
        </div>

        {/* Second Ability - Bottom 50% */}
        <div className={styles.ability}>
          {/* Ability Name Header */}
          <div className={styles.abilityHeader}>
            <span className={styles.abilityName}>
              {abilities[1]?.name || "Ability 2"}
            </span>
          </div>

          <div className={styles.abilityBody}>
            <div className={styles.abilityIcon}>
              <img
                src={`/heroes-dominion/abilities/${abilities[1]?.icon}`}
                alt={abilities[1]?.name}
                className={styles.abilityImage}
                onError={(e) => {
                  console.error(
                    `Failed to load ability icon: ${abilities[1]?.icon}`
                  );
                  e.target.style.display = "none";
                }}
              />
            </div>

            <div className={styles.abilityContent}>
              <div className={styles.abilityEffect}>
                {abilities[1] &&
                  parseReadableEffect(abilities[1].readableEffect).map(
                    (component, index) =>
                      renderEffectComponent(component, index)
                  )}
              </div>
            </div>

            <div className={styles.abilityStats}>
              {abilities[1] && renderAbilityStats(abilities[1])}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
