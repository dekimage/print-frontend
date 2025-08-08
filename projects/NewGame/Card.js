import React from "react";
import styles from "../../styles/NewGameCard.module.scss";
import {
  resourceSymbols,
  resourceColors,
  tierColors,
  tierSymbols,
} from "./data";

const Card = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const { id, name, cost, tier1Points, image, rewards, footer } = card;

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

  // Helper function to render resource costs
  const renderResources = (resources) => {
    return Object.entries(resources).map(([resource, amount]) => (
      <span
        key={resource}
        style={{
          color: resourceColors[resource] || "#666",
          fontSize: "16px",
          marginRight: "4px",
        }}
      >
        {resourceSymbols[resource] || "❓"} {amount}
      </span>
    ));
  };

  // Helper function to render tier points
  const renderTierPoints = (tier, points) => {
    return (
      <span
        style={{
          backgroundColor: tierColors[tier] || "#666",
          color: "white",
          borderRadius: "50%",
          width: "24px",
          height: "24px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          fontWeight: "bold",
          border: "2px solid #333",
        }}
      >
        {points}
      </span>
    );
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

      {/* Header Section - 20% height */}
      <div className={styles.header}>
        <div className={styles.costSection}>{renderResources(cost)}</div>
        <div className={styles.arrow}>→</div>
        <div className={styles.tierPoints}>
          {renderTierPoints("tier1", tier1Points)}
        </div>
      </div>

      {/* Middle Section - 60% height */}
      <div className={styles.middle}>
        <div className={styles.imageSection}>
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
        <div className={styles.rewardsSection}>{renderResources(rewards)}</div>
      </div>

      {/* Footer Section - 20% height */}
      <div className={styles.footer}>
        {Object.entries(footer).map(([resource, amount], index) => {
          if (resource === "tier3Points") {
            return (
              <div key={resource} className={styles.footerItem}>
                {renderTierPoints("tier3", amount)}
              </div>
            );
          } else {
            return (
              <div key={resource} className={styles.footerItem}>
                <span
                  style={{
                    color: resourceColors[resource] || "#666",
                    fontSize: "18px",
                  }}
                >
                  {resourceSymbols[resource] || "❓"}
                </span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Card;
