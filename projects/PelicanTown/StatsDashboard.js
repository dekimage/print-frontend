import React, { useState } from "react";
import { Button } from "@mui/material";

// Custom badge component for faction display
const FactionBadge = ({ faction, count }) => {
  const factionData = {
    birds: {
      emoji: "🦅",
      color: "#3498db",
      borderColor: "#2980b9",
      name: "Birds",
    },
    moles: {
      emoji: "🐹",
      color: "#8e44ad",
      borderColor: "#7d3c98",
      name: "Moles",
    },
    insects: {
      emoji: "🐝",
      color: "#e74c3c",
      borderColor: "#c0392b",
      name: "Insects",
    },
    goats: {
      emoji: "🐐",
      color: "#27ae60",
      borderColor: "#229954",
      name: "Goats",
    },
  };

  const info = factionData[faction];

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    padding: "6px 12px",
    borderRadius: "5px",
    margin: "0 8px 8px 0",
    backgroundColor: info.color,
    border: `2px solid ${info.borderColor}`,
    color: "white",
    fontWeight: "bold",
  };

  const emojiStyle = {
    fontSize: "20px",
    marginRight: "8px",
  };

  const countStyle = {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
    marginLeft: "8px",
  };

  return (
    <div style={badgeStyle}>
      <span style={emojiStyle}>{info.emoji}</span>
      {info.name}
      <span style={countStyle}>{count}</span>
    </div>
  );
};

// Resource counter badge
const ResourceCounter = ({ name, color, count }) => {
  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    padding: "4px 10px",
    borderRadius: "15px",
    margin: "4px",
    backgroundColor: color,
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
  };

  return (
    <div style={badgeStyle}>
      {name}: {count}
    </div>
  );
};

const StatsDashboard = ({ cards }) => {
  const [isOpened, setIsOpened] = useState(false);

  // Count cards per faction
  const factionCounts = {
    birds: cards.filter((card) => card.faction === "birds").length,
    moles: cards.filter((card) => card.faction === "moles").length,
    insects: cards.filter((card) => card.faction === "insects").length,
    goats: cards.filter((card) => card.faction === "goats").length,
  };

  // Count cards by cost range
  const costRanges = {
    low: cards.filter((card) => card.cost >= 1 && card.cost <= 3).length,
    medium: cards.filter((card) => card.cost >= 4 && card.cost <= 6).length,
    high: cards.filter((card) => card.cost >= 7 && card.cost <= 9).length,
  };

  // Movement point distribution
  const mpCounts = {
    mp1: cards.filter((card) => card.mp === 1).length,
    mp2: cards.filter((card) => card.mp === 2).length,
    mp3: cards.filter((card) => card.mp === 3).length,
  };

  // Resource count in effects
  const countResourceInEffects = (resourceName) => {
    let count = 0;
    cards.forEach((card) => {
      // Count in main effect
      if (card.effect && card.effect.includes(`[${resourceName}]`)) {
        const matches = card.effect.match(
          new RegExp(`\\[${resourceName}\\]`, "g")
        );
        count += matches ? matches.length : 0;
      }

      // Count in tuck effect
      if (card.tuckEffect && card.tuckEffect.includes(`[${resourceName}]`)) {
        const matches = card.tuckEffect.match(
          new RegExp(`\\[${resourceName}\\]`, "g")
        );
        count += matches ? matches.length : 0;
      }
    });
    return count;
  };

  const resourceCounts = {
    gold: countResourceInEffects("gold"),
    wood: countResourceInEffects("wood"),
    stone: countResourceInEffects("stone"),
    move: countResourceInEffects("move"),
    mana: countResourceInEffects("mana"),
    vp: countResourceInEffects("vp"),
  };

  // Styling
  const statBlockStyle = {
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    flex: "1 0 45%",
    minWidth: "300px",
  };

  const statTitleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    borderBottom: "2px solid #ddd",
    paddingBottom: "8px",
    marginBottom: "12px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: "15px",
        borderRadius: "10px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ color: "#333" }}>Pelican Town Card Stats</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "15px",
        }}
      >
        <FactionBadge faction="birds" count={factionCounts.birds} />
        <FactionBadge faction="moles" count={factionCounts.moles} />
        <FactionBadge faction="insects" count={factionCounts.insects} />
        <FactionBadge faction="goats" count={factionCounts.goats} />
      </div>

      <Button
        variant="contained"
        onClick={() => setIsOpened(!isOpened)}
        style={{
          marginBottom: "15px",
          backgroundColor: isOpened ? "#e74c3c" : "#2ecc71",
          color: "white",
        }}
      >
        {isOpened ? "Hide Stats" : "Show Stats"}
      </Button>

      {isOpened && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* Card Distribution */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Card Distribution</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: "8px" }}>
                <strong>Total Cards:</strong> {cards.length}
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Birds:</strong> {factionCounts.birds} cards (
                {Math.round((factionCounts.birds / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Moles:</strong> {factionCounts.moles} cards (
                {Math.round((factionCounts.moles / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Insects:</strong> {factionCounts.insects} cards (
                {Math.round((factionCounts.insects / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Goats:</strong> {factionCounts.goats} cards (
                {Math.round((factionCounts.goats / cards.length) * 100)}%)
              </div>
            </div>
          </div>

          {/* Cost Distribution */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Cost Distribution</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: "8px" }}>
                <strong>Low Cost (1-3):</strong> {costRanges.low} cards (
                {Math.round((costRanges.low / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Medium Cost (4-6):</strong> {costRanges.medium} cards (
                {Math.round((costRanges.medium / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>High Cost (7-9):</strong> {costRanges.high} cards (
                {Math.round((costRanges.high / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Average Cost:</strong>{" "}
                {(
                  cards.reduce((acc, card) => acc + card.cost, 0) / cards.length
                ).toFixed(1)}
              </div>
            </div>
          </div>

          {/* Movement Points */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Movement Points</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: "8px" }}>
                <strong>MP 1:</strong> {mpCounts.mp1} cards (
                {Math.round((mpCounts.mp1 / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>MP 2:</strong> {mpCounts.mp2} cards (
                {Math.round((mpCounts.mp2 / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>MP 3:</strong> {mpCounts.mp3} cards (
                {Math.round((mpCounts.mp3 / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Average MP:</strong>{" "}
                {(
                  cards.reduce((acc, card) => acc + card.mp, 0) / cards.length
                ).toFixed(1)}
              </div>
            </div>
          </div>

          {/* Resource Icons in Effects */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Resources in Effects</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <ResourceCounter
                name="Gold"
                color="#f1c40f"
                count={resourceCounts.gold}
              />
              <ResourceCounter
                name="Wood"
                color="#8b4513"
                count={resourceCounts.wood}
              />
              <ResourceCounter
                name="Stone"
                color="#7f8c8d"
                count={resourceCounts.stone}
              />
              <ResourceCounter
                name="Move"
                color="#3498db"
                count={resourceCounts.move}
              />
              <ResourceCounter
                name="Mana"
                color="#9b59b6"
                count={resourceCounts.mana}
              />
              <ResourceCounter
                name="VP"
                color="#2ecc71"
                count={resourceCounts.vp}
              />
            </div>
            <div style={{ marginTop: "15px", fontSize: "14px", color: "#666" }}>
              <em>
                These counts represent how many times each resource appears in
                effects and tuck effects.
              </em>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsDashboard;
