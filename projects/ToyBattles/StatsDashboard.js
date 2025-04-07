import React, { useState } from "react";
import { Button } from "@mui/material";

// Custom badge component for faction icons
const FactionBadge = ({ faction }) => {
  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 10px",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "bold",
    marginRight: "10px",
    color: "white",
    backgroundColor: faction === "hellGnolls" ? "#d00000" : "#2d6a4f",
  };

  const iconStyle = {
    marginRight: "5px",
    fontSize: "20px",
  };

  return (
    <div style={badgeStyle}>
      <span style={iconStyle}>{faction === "hellGnolls" ? "👹" : "🍄"}</span>
      {faction === "hellGnolls" ? "Hell Gnolls" : "Sporelings"}
    </div>
  );
};

// Arrow indicators for display
const ArrowIndicator = ({ type }) => {
  const arrowStyle = {
    display: "inline-block",
    margin: "0 3px",
    color: "#333",
    fontWeight: "bold",
  };

  const arrowMap = {
    left: "←",
    right: "→",
    up: "↑",
    diagonalLeft: "↖",
    diagonalRight: "↗",
  };

  return <span style={arrowStyle}>{arrowMap[type] || "?"}</span>;
};

const StatsDashboard = ({ cards }) => {
  const [isOpened, setIsOpened] = useState(false);

  // Count cards by faction
  const factionCounts = {
    hellGnolls: cards.filter((card) => card.faction === "hellGnolls").length,
    sporelings: cards.filter((card) => card.faction === "sporelings").length,
  };

  // Count cards by power range
  const powerRanges = {
    low: cards.filter((card) => card.power >= 1 && card.power <= 3).length,
    medium: cards.filter((card) => card.power >= 4 && card.power <= 6).length,
    high: cards.filter((card) => card.power >= 7 && card.power <= 10).length,
  };

  // Count cards by arrow configuration
  const arrowCounts = {
    noArrows: cards.filter(
      (card) => !card.arrowsConfig || card.arrowsConfig.length === 0
    ).length,
    oneArrow: cards.filter(
      (card) => card.arrowsConfig && card.arrowsConfig.length === 1
    ).length,
    twoArrows: cards.filter(
      (card) => card.arrowsConfig && card.arrowsConfig.length === 2
    ).length,
    threeArrows: cards.filter(
      (card) => card.arrowsConfig && card.arrowsConfig.length === 3
    ).length,
    fourOrMore: cards.filter(
      (card) => card.arrowsConfig && card.arrowsConfig.length >= 4
    ).length,
  };

  // Count specific arrow types
  const specificArrowCounts = {
    left: cards.filter(
      (card) => card.arrowsConfig && card.arrowsConfig.includes("left")
    ).length,
    right: cards.filter(
      (card) => card.arrowsConfig && card.arrowsConfig.includes("right")
    ).length,
    up: cards.filter(
      (card) => card.arrowsConfig && card.arrowsConfig.includes("up")
    ).length,
    diagonalLeft: cards.filter(
      (card) => card.arrowsConfig && card.arrowsConfig.includes("diagonalLeft")
    ).length,
    diagonalRight: cards.filter(
      (card) => card.arrowsConfig && card.arrowsConfig.includes("diagonalRight")
    ).length,
  };

  // Average power by faction
  const avgPowerHellGnolls =
    cards
      .filter((card) => card.faction === "hellGnolls")
      .reduce((sum, card) => sum + card.power, 0) / factionCounts.hellGnolls;

  const avgPowerSporelings =
    cards
      .filter((card) => card.faction === "sporelings")
      .reduce((sum, card) => sum + card.power, 0) / factionCounts.sporelings;

  const statBlockStyle = {
    backgroundColor: "#f5f5f5",
    padding: "15px",
    borderRadius: "8px",
    margin: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    width: "calc(50% - 20px)",
    minWidth: "300px",
  };

  const statTitleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    borderBottom: "2px solid #ccc",
    paddingBottom: "5px",
  };

  const statRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Toy Battles Dashboard</h2>
      <div style={{ display: "flex", marginBottom: "15px" }}>
        <FactionBadge faction="hellGnolls" />
        <FactionBadge faction="sporelings" />
      </div>
      <Button
        variant="contained"
        onClick={() => setIsOpened(!isOpened)}
        style={{
          marginBottom: "20px",
          backgroundColor: isOpened ? "#f44336" : "#4caf50",
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
            maxWidth: "1200px",
          }}
        >
          {/* Faction Distribution */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Faction Distribution</div>
            <div style={statRowStyle}>
              <span>Hell Gnolls:</span>
              <span>{factionCounts.hellGnolls} cards</span>
            </div>
            <div style={statRowStyle}>
              <span>Sporelings:</span>
              <span>{factionCounts.sporelings} cards</span>
            </div>
            <div style={statRowStyle}>
              <span>Total:</span>
              <span>{cards.length} cards</span>
            </div>
          </div>

          {/* Power Distribution */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Power Distribution</div>
            <div style={statRowStyle}>
              <span>Low Power (1-3):</span>
              <span>{powerRanges.low} cards</span>
            </div>
            <div style={statRowStyle}>
              <span>Medium Power (4-6):</span>
              <span>{powerRanges.medium} cards</span>
            </div>
            <div style={statRowStyle}>
              <span>High Power (7-10):</span>
              <span>{powerRanges.high} cards</span>
            </div>
            <div style={statRowStyle}>
              <span>Average (Hell Gnolls):</span>
              <span>{avgPowerHellGnolls.toFixed(1)}</span>
            </div>
            <div style={statRowStyle}>
              <span>Average (Sporelings):</span>
              <span>{avgPowerSporelings.toFixed(1)}</span>
            </div>
          </div>

          {/* Arrow Count Distribution */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Arrow Distribution</div>
            <div style={statRowStyle}>
              <span>No Arrows:</span>
              <span>{arrowCounts.noArrows} cards</span>
            </div>
            <div style={statRowStyle}>
              <span>1 Arrow:</span>
              <span>{arrowCounts.oneArrow} cards</span>
            </div>
            <div style={statRowStyle}>
              <span>2 Arrows:</span>
              <span>{arrowCounts.twoArrows} cards</span>
            </div>
            <div style={statRowStyle}>
              <span>3 Arrows:</span>
              <span>{arrowCounts.threeArrows} cards</span>
            </div>
            <div style={statRowStyle}>
              <span>4+ Arrows:</span>
              <span>{arrowCounts.fourOrMore} cards</span>
            </div>
          </div>

          {/* Specific Arrow Types */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Arrow Types</div>
            <div style={statRowStyle}>
              <span>
                <ArrowIndicator type="left" /> Left:
              </span>
              <span>{specificArrowCounts.left} cards</span>
            </div>
            <div style={statRowStyle}>
              <span>
                <ArrowIndicator type="right" /> Right:
              </span>
              <span>{specificArrowCounts.right} cards</span>
            </div>
            <div style={statRowStyle}>
              <span>
                <ArrowIndicator type="up" /> Up:
              </span>
              <span>{specificArrowCounts.up} cards</span>
            </div>
            <div style={statRowStyle}>
              <span>
                <ArrowIndicator type="diagonalLeft" /> Diagonal Left:
              </span>
              <span>{specificArrowCounts.diagonalLeft} cards</span>
            </div>
            <div style={statRowStyle}>
              <span>
                <ArrowIndicator type="diagonalRight" /> Diagonal Right:
              </span>
              <span>{specificArrowCounts.diagonalRight} cards</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsDashboard;
