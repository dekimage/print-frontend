import React, { useState } from "react";
import { Button } from "@mui/material";

// Custom badge component for type display
const TypeBadge = ({ type, count }) => {
  const typeData = {
    farm: {
      emoji: "🌾",
      color: "#27ae60",
      borderColor: "#229954",
      name: "Farm",
    },
    battle: {
      emoji: "⚔️",
      color: "#e74c3c",
      borderColor: "#c0392b",
      name: "Battle",
    },
    epic: {
      emoji: "⭐",
      color: "#f39c12",
      borderColor: "#e67e22",
      name: "Epic",
    },
    explore: {
      emoji: "🗺️",
      color: "#3498db",
      borderColor: "#2980b9",
      name: "Explore",
    },
  };

  const info = typeData[type];

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

  // Count cards per type
  const typeCounts = {
    farm: cards.filter((card) => card.type === "farm").length,
    battle: cards.filter((card) => card.type === "battle").length,
    epic: cards.filter((card) => card.type === "epic").length,
    explore: cards.filter((card) => card.type === "explore").length,
  };

  // VP distribution
  const vpCounts = {
    vp1: cards.filter((card) => card.vp === 1).length,
    vp2: cards.filter((card) => card.vp === 2).length,
    vp3: cards.filter((card) => card.vp === 3).length,
    vp4: cards.filter((card) => card.vp === 4).length,
    vp5: cards.filter((card) => card.vp === 5).length,
  };

  // Age distribution
  const ageCounts = {
    age1: cards.filter((card) => card.age === 1).length,
    age2: cards.filter((card) => card.age === 2).length,
    age3: cards.filter((card) => card.age === 3).length,
  };

  // Element count in cards
  const countElementInCards = (elementName) => {
    let count = 0;
    cards.forEach((card) => {
      if (card.elements && card.elements.includes(elementName)) {
        const matches = card.elements.filter((el) => el === elementName);
        count += matches.length;
      }
    });
    return count;
  };

  const elementCounts = {
    earth: countElementInCards("earth"),
    fire: countElementInCards("fire"),
    water: countElementInCards("water"),
    air: countElementInCards("air"),
  };

  // Reward count in cards
  const countRewardInCards = (rewardName) => {
    let count = 0;
    cards.forEach((card) => {
      if (card.rewards && card.rewards.includes(rewardName)) {
        const matches = card.rewards.filter((reward) => reward === rewardName);
        count += matches.length;
      }
    });
    return count;
  };

  const rewardCounts = {
    whiteGem: countRewardInCards("whiteGem"),
    redGem: countRewardInCards("redGem"),
    blueGem: countRewardInCards("blueGem"),
    yellowGem: countRewardInCards("yellowGem"),
    purpleGem: countRewardInCards("purpleGem"),
    initiative: countRewardInCards("initiative"),
    supply: countRewardInCards("supply"),
    skill: countRewardInCards("skill"),
    upgrade: countRewardInCards("upgrade"),
    joker: countRewardInCards("joker"),
  };

  // Cost tier distribution
  const countCostTier = (tier) => {
    let count = 0;
    cards.forEach((card) => {
      if (card.cost && card.cost.includes(tier)) {
        const matches = card.cost.filter((costTier) => costTier === tier);
        count += matches.length;
      }
    });
    return count;
  };

  const costTierCounts = {
    tier1: countCostTier(1),
    tier2: countCostTier(2),
    tier3: countCostTier(3),
    tier4: countCostTier(4),
    tier5: countCostTier(5),
    tier6: countCostTier(6),
    tier7: countCostTier(7),
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
      <h2 style={{ color: "#333" }}>Orleans Heroes Card Stats</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "15px",
        }}
      >
        <TypeBadge type="farm" count={typeCounts.farm} />
        <TypeBadge type="battle" count={typeCounts.battle} />
        <TypeBadge type="epic" count={typeCounts.epic} />
        <TypeBadge type="explore" count={typeCounts.explore} />
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
                <strong>Farm:</strong> {typeCounts.farm} cards (
                {Math.round((typeCounts.farm / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Battle:</strong> {typeCounts.battle} cards (
                {Math.round((typeCounts.battle / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Epic:</strong> {typeCounts.epic} cards (
                {Math.round((typeCounts.epic / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Explore:</strong> {typeCounts.explore} cards (
                {Math.round((typeCounts.explore / cards.length) * 100)}%)
              </div>
            </div>
          </div>

          {/* VP Distribution */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Victory Points Distribution</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: "8px" }}>
                <strong>1 VP:</strong> {vpCounts.vp1} cards (
                {Math.round((vpCounts.vp1 / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>2 VP:</strong> {vpCounts.vp2} cards (
                {Math.round((vpCounts.vp2 / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>3 VP:</strong> {vpCounts.vp3} cards (
                {Math.round((vpCounts.vp3 / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>4 VP:</strong> {vpCounts.vp4} cards (
                {Math.round((vpCounts.vp4 / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>5 VP:</strong> {vpCounts.vp5} cards (
                {Math.round((vpCounts.vp5 / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Average VP:</strong>{" "}
                {(
                  cards.reduce((acc, card) => acc + card.vp, 0) / cards.length
                ).toFixed(1)}
              </div>
            </div>
          </div>

          {/* Age Distribution */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Age Distribution</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: "8px" }}>
                <strong>Age I:</strong> {ageCounts.age1} cards (
                {Math.round((ageCounts.age1 / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Age II:</strong> {ageCounts.age2} cards (
                {Math.round((ageCounts.age2 / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Age III:</strong> {ageCounts.age3} cards (
                {Math.round((ageCounts.age3 / cards.length) * 100)}%)
              </div>
            </div>
          </div>

          {/* Elements */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Elements in Cards</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <ResourceCounter
                name="Earth 🌍"
                color="#8b4513"
                count={elementCounts.earth}
              />
              <ResourceCounter
                name="Fire 🔥"
                color="#e74c3c"
                count={elementCounts.fire}
              />
              <ResourceCounter
                name="Water 💧"
                color="#3498db"
                count={elementCounts.water}
              />
              <ResourceCounter
                name="Air 💨"
                color="#95a5a6"
                count={elementCounts.air}
              />
            </div>
          </div>

          {/* Rewards */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Rewards in Cards</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <ResourceCounter
                name="White Gem"
                color="#bdc3c7"
                count={rewardCounts.whiteGem}
              />
              <ResourceCounter
                name="Red Gem"
                color="#e74c3c"
                count={rewardCounts.redGem}
              />
              <ResourceCounter
                name="Blue Gem"
                color="#3498db"
                count={rewardCounts.blueGem}
              />
              <ResourceCounter
                name="Yellow Gem"
                color="#f1c40f"
                count={rewardCounts.yellowGem}
              />
              <ResourceCounter
                name="Purple Gem"
                color="#9b59b6"
                count={rewardCounts.purpleGem}
              />
              <ResourceCounter
                name="Initiative"
                color="#e67e22"
                count={rewardCounts.initiative}
              />
              <ResourceCounter
                name="Supply"
                color="#27ae60"
                count={rewardCounts.supply}
              />
              <ResourceCounter
                name="Skill"
                color="#2c3e50"
                count={rewardCounts.skill}
              />
              <ResourceCounter
                name="Upgrade"
                color="#8e44ad"
                count={rewardCounts.upgrade}
              />
              <ResourceCounter
                name="Joker"
                color="#34495e"
                count={rewardCounts.joker}
              />
            </div>
          </div>

          {/* Cost Tiers */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Cost Tier Distribution</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <ResourceCounter
                name="Tier 1"
                color="#8B4513"
                count={costTierCounts.tier1}
              />
              <ResourceCounter
                name="Tier 2"
                color="#A0522D"
                count={costTierCounts.tier2}
              />
              <ResourceCounter
                name="Tier 3"
                color="#CD853F"
                count={costTierCounts.tier3}
              />
              <ResourceCounter
                name="Tier 4"
                color="#DAA520"
                count={costTierCounts.tier4}
              />
              <ResourceCounter
                name="Tier 5"
                color="#FFD700"
                count={costTierCounts.tier5}
              />
              <ResourceCounter
                name="Tier 6"
                color="#FFA500"
                count={costTierCounts.tier6}
              />
              <ResourceCounter
                name="Tier 7"
                color="#FF4500"
                count={costTierCounts.tier7}
              />
            </div>
            <div style={{ marginTop: "15px", fontSize: "14px", color: "#666" }}>
              <em>
                These counts represent how many times each cost tier appears
                across all cards.
              </em>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsDashboard;
