import React, { useState } from "react";
import { Button } from "@mui/material";

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

// Tier points counter badge
const TierCounter = ({ tier, color, count }) => {
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
      Tier {tier}: {count}
    </div>
  );
};

const StatsDashboard = ({ cards }) => {
  const [isOpened, setIsOpened] = useState(false);

  // Count resources in costs
  const countResourceInCosts = (resourceName) => {
    let count = 0;
    cards.forEach((card) => {
      if (card.cost && card.cost[resourceName]) {
        count += card.cost[resourceName];
      }
    });
    return count;
  };

  const costResourceCounts = {
    stone: countResourceInCosts("stone"),
    wood: countResourceInCosts("wood"),
    wheat: countResourceInCosts("wheat"),
    water: countResourceInCosts("water"),
  };

  // Count resources in rewards
  const countResourceInRewards = (resourceName) => {
    let count = 0;
    cards.forEach((card) => {
      if (card.rewards && card.rewards[resourceName]) {
        count += card.rewards[resourceName];
      }
    });
    return count;
  };

  const rewardResourceCounts = {
    stone: countResourceInRewards("stone"),
    wood: countResourceInRewards("wood"),
    wheat: countResourceInRewards("wheat"),
    water: countResourceInRewards("water"),
  };

  // Count resources in footer
  const countResourceInFooter = (resourceName) => {
    let count = 0;
    cards.forEach((card) => {
      if (card.footer && card.footer[resourceName]) {
        count += card.footer[resourceName];
      }
    });
    return count;
  };

  const footerResourceCounts = {
    stone: countResourceInFooter("stone"),
    wood: countResourceInFooter("wood"),
    wheat: countResourceInFooter("wheat"),
    water: countResourceInFooter("water"),
  };

  // Tier 1 points distribution
  const tier1PointsCounts = {
    points1: cards.filter((card) => card.tier1Points === 1).length,
    points2: cards.filter((card) => card.tier1Points === 2).length,
    points3: cards.filter((card) => card.tier1Points === 3).length,
  };

  // Total tier 1 points
  const totalTier1Points = cards.reduce(
    (acc, card) => acc + card.tier1Points,
    0
  );

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
      <h2 style={{ color: "#333" }}>New Game Card Stats</h2>

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
            </div>
          </div>

          {/* Tier 1 Points Distribution */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Tier 1 Points Distribution</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: "8px" }}>
                <strong>1 Point:</strong> {tier1PointsCounts.points1} cards (
                {Math.round((tier1PointsCounts.points1 / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>2 Points:</strong> {tier1PointsCounts.points2} cards (
                {Math.round((tier1PointsCounts.points2 / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>3 Points:</strong> {tier1PointsCounts.points3} cards (
                {Math.round((tier1PointsCounts.points3 / cards.length) * 100)}%)
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Total Tier 1 Points:</strong> {totalTier1Points}
              </div>
              <div style={{ marginBottom: "8px" }}>
                <strong>Average Tier 1 Points:</strong>{" "}
                {(totalTier1Points / cards.length).toFixed(1)}
              </div>
            </div>
          </div>

          {/* Resources in Costs */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Resources Required (Costs)</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <ResourceCounter
                name="Stone 🪨"
                color="#8B4513"
                count={costResourceCounts.stone}
              />
              <ResourceCounter
                name="Wood 🪵"
                color="#8FBC8F"
                count={costResourceCounts.wood}
              />
              <ResourceCounter
                name="Wheat 🌾"
                color="#FFD700"
                count={costResourceCounts.wheat}
              />
              <ResourceCounter
                name="Water 💧"
                color="#4169E1"
                count={costResourceCounts.water}
              />
            </div>
          </div>

          {/* Resources in Rewards */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Resources Gained (Rewards)</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <ResourceCounter
                name="Stone 🪨"
                color="#8B4513"
                count={rewardResourceCounts.stone}
              />
              <ResourceCounter
                name="Wood 🪵"
                color="#8FBC8F"
                count={rewardResourceCounts.wood}
              />
              <ResourceCounter
                name="Wheat 🌾"
                color="#FFD700"
                count={rewardResourceCounts.wheat}
              />
              <ResourceCounter
                name="Water 💧"
                color="#4169E1"
                count={rewardResourceCounts.water}
              />
            </div>
          </div>

          {/* Resources in Footer */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Resources in Footer</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <ResourceCounter
                name="Stone 🪨"
                color="#8B4513"
                count={footerResourceCounts.stone}
              />
              <ResourceCounter
                name="Wood 🪵"
                color="#8FBC8F"
                count={footerResourceCounts.wood}
              />
              <ResourceCounter
                name="Wheat 🌾"
                color="#FFD700"
                count={footerResourceCounts.wheat}
              />
              <ResourceCounter
                name="Water 💧"
                color="#4169E1"
                count={footerResourceCounts.water}
              />
            </div>
          </div>

          {/* Tier 3 Points */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Tier 3 Points</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: "8px" }}>
                <strong>Total Tier 3 Points:</strong> {cards.length} (1 per
                card)
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsDashboard;
