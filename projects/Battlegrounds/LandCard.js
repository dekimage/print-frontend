import React from "react";
import styles from "../../styles/BattlegroundsLandCard.module.scss";

const LandCard = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const { id, card: cardType, age, section1, section2, section3 } = card;

  // Helper function to render tribe symbol
  const renderTribeSymbol = (tribe, index) => {
    // Map tribe names to land-specific images
    const tribeImageMap = {
      frogs: "frogsLand.png",
      birds: "birdsLand.png",
      insects: "insectsLand.png",
      boars: "boarsLand.png",
    };
    
    const imageName = tribeImageMap[tribe] || `${tribe}Land.png`;
    
    return (
      <img
        key={`tribe-${index}`}
        src={`/battlegrounds/symbols/${imageName}`}
        alt={`${tribe} symbol`}
        className={styles.tribeSymbol}
        onError={(e) => {
          console.error(`Failed to load tribe symbol: ${imageName}`);
          e.target.style.display = "none";
        }}
      />
    );
  };

  // Helper function to render effect symbol
  const renderEffectSymbol = (effect, index) => {
    const symbolMap = {
      gold: "gold.png",
      mirror: "mirror.png",
      refresh: "refresh.png",
      reputation: "star.png", // Using star for "all" reputation
      star: "star.png",
    };

    const symbolFile = symbolMap[effect.type] || "star.png";
    const value = effect.value || 1;

    return (
      <div key={`effect-${index}`} className={styles.effectContainer}>
        <img
          src={`/battlegrounds/symbols/${symbolFile}`}
          alt={`${effect.type} symbol`}
          className={styles.effectSymbol}
          onError={(e) => {
            console.error(`Failed to load effect symbol: ${symbolFile}`);
            e.target.style.display = "none";
          }}
        />
        {value > 1 && (
          <span className={styles.effectValue}>{value}</span>
        )}
      </div>
    );
  };

  // Get border color based on age
  const getAgeBorderColor = () => {
    switch (age) {
      case 1:
        return "rgba(34, 139, 34, 1)"; // Dark green
      case 2:
        return "rgba(101, 67, 33, 1)"; // Dark brown
      case 3:
        return "rgba(64, 64, 64, 1)"; // Dark grey
      case 4:
        return "rgba(139, 69, 19, 1)"; // Darker brown
      default:
        return "rgba(128, 128, 128, 1)";
    }
  };

  // Render section content (tribes and effects)
  const renderSectionContent = (section) => {
    if (!section) return <div className={styles.sectionContent}></div>;
    
    return (
      <div className={styles.sectionContent}>
        {/* Render tribes */}
        {section.tribes && Array.isArray(section.tribes) && section.tribes.length > 0 && section.tribes.map((tribe, index) =>
          renderTribeSymbol(tribe, index)
        )}
        {/* Render effects */}
        {section.effects && Array.isArray(section.effects) && section.effects.length > 0 && section.effects.map((effect, index) =>
          renderEffectSymbol(effect, index)
        )}
      </div>
    );
  };

  return (
    <div
      className={styles.landCard}
      style={{ 
        backgroundColor: "#ffffff",
        borderColor: getAgeBorderColor()
      }}
      onClick={() => {
        if (isEditMode) {
          handleAddCardToPrint(card);
        }
      }}
    >
      {isInPrint && <div className={styles.addedForPrint}>+</div>}

      {/* Section 1 - Top (I) */}
      <div className={styles.section}>
        <div className={styles.romanNumeral}>I</div>
        {renderSectionContent(section1)}
      </div>

      {/* Section 2 - Middle (II) */}
      <div className={styles.section}>
        <div className={styles.romanNumeral}>II</div>
        {renderSectionContent(section2)}
      </div>

      {/* Section 3 - Bottom (III) */}
      <div className={styles.section}>
        <div className={styles.romanNumeral}>III</div>
        {renderSectionContent(section3)}
      </div>
    </div>
  );
};

export default LandCard;
