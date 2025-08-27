import React, { useState } from "react";
import { Button } from "@mui/material";

// Type counter badge
const TypeCounter = ({ name, color, count }) => {
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

// Tier counter badge
const TierCounter = ({ tier, count }) => {
  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    padding: "4px 10px",
    borderRadius: "15px",
    margin: "4px",
    backgroundColor: "#333",
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

// Age counter badge
const AgeCounter = ({ age, count }) => {
  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    padding: "4px 10px",
    borderRadius: "15px",
    margin: "4px",
    backgroundColor: "#8e44ad",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
  };

  return (
    <div style={badgeStyle}>
      Age {age}: {count}
    </div>
  );
};

// Card type counter badge
const CardTypeCounter = ({ type, count }) => {
  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    padding: "4px 10px",
    borderRadius: "15px",
    margin: "4px",
    backgroundColor: "#16a085",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
  };

  return (
    <div style={badgeStyle}>
      {type}: {count}
    </div>
  );
};

const StatsDashboard = ({ cards }) => {
  const [isOpened, setIsOpened] = useState(false);

  // Count cards by type
  const countCardsByType = (typeName) => {
    return cards.filter((card) => card.type === typeName).length;
  };

  const typeCounts = {
    cats: countCardsByType("cats"),
    moles: countCardsByType("moles"),
    boars: countCardsByType("boars"),
    birds: countCardsByType("birds"),
    frogs: countCardsByType("frogs"),
  };

  // Count cards by tier (only for unit cards)
  const countCardsByTier = (tierNumber) => {
    return cards.filter(
      (card) => card.card === "unit" && card.tier === tierNumber
    ).length;
  };

  const tierCounts = {
    tier1: countCardsByTier(1),
    tier2: countCardsByTier(2),
    tier3: countCardsByTier(3),
    tier4: countCardsByTier(4),
    tier5: countCardsByTier(5),
    tier6: countCardsByTier(6),
  };

  // Count effects by trigger type (only for unit cards)
  const countEffectsByTrigger = (triggerType) => {
    return cards.filter(
      (card) =>
        card.card === "unit" && card.effect && card.effect.includes(triggerType)
    ).length;
  };

  const triggerCounts = {
    battlecry: countEffectsByTrigger("battlecry"),
    sell: countEffectsByTrigger("sell"),
    attack: countEffectsByTrigger("attack"),
    pray: countEffectsByTrigger("pray"),
    triggered: countEffectsByTrigger("triggered"),
    endOfTurn: countEffectsByTrigger("endOfTurn"),
  };

  // Count effects by symbol (only for unit cards)
  const countEffectsBySymbol = (symbol) => {
    return cards.filter(
      (card) =>
        card.card === "unit" && card.effect && card.effect.includes(symbol)
    ).length;
  };

  const symbolCounts = {
    star: countEffectsBySymbol("star"),
    reputation: countEffectsBySymbol("reputation"),
    initiative: countEffectsBySymbol("initiative"),
    vp: countEffectsBySymbol("vp"),
    influence: countEffectsBySymbol("influence"),
    steal: countEffectsBySymbol("steal"),
    boardSize: countEffectsBySymbol("boardSize"),
    gold: countEffectsBySymbol("gold"),
  };

  // Count cards by age (only for zone cards)
  const countCardsByAge = (ageNumber) => {
    return cards.filter(
      (card) => card.card === "zone" && card.age === ageNumber
    ).length;
  };

  const ageCounts = {
    age1: countCardsByAge(1),
    age2: countCardsByAge(2),
    age3: countCardsByAge(3),
  };

  // Count cards by card type
  const countCardsByCardType = (cardType) => {
    return cards.filter((card) => card.card === cardType).length;
  };

  const cardTypeCounts = {
    unit: countCardsByCardType("unit"),
    zone: countCardsByCardType("zone"),
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
      <h2 style={{ color: "#333" }}>Battlegrounds Card Stats</h2>

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

          {/* Type Distribution */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Type Distribution</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <TypeCounter
                name="Cats"
                color="rgba(76, 175, 80, 0.8)"
                count={typeCounts.cats}
              />
              <TypeCounter
                name="Moles"
                color="rgba(156, 39, 176, 0.8)"
                count={typeCounts.moles}
              />
              <TypeCounter
                name="Boars"
                color="rgba(255, 152, 0, 0.8)"
                count={typeCounts.boars}
              />
              <TypeCounter
                name="Birds"
                color="rgba(33, 150, 243, 0.8)"
                count={typeCounts.birds}
              />
              <TypeCounter
                name="Frogs"
                color="rgba(76, 175, 80, 0.8)"
                count={typeCounts.frogs}
              />
            </div>
          </div>

          {/* Tier Distribution */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Tier Distribution</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <TierCounter tier="1" count={tierCounts.tier1} />
              <TierCounter tier="2" count={tierCounts.tier2} />
              <TierCounter tier="3" count={tierCounts.tier3} />
              <TierCounter tier="4" count={tierCounts.tier4} />
              <TierCounter tier="5" count={tierCounts.tier5} />
              <TierCounter tier="6" count={tierCounts.tier6} />
            </div>
          </div>

          {/* Trigger Type Distribution */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Trigger Type Distribution</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <TypeCounter
                name="Battlecry"
                color="#e74c3c"
                count={triggerCounts.battlecry}
              />
              <TypeCounter
                name="Sell"
                color="#f39c12"
                count={triggerCounts.sell}
              />
              <TypeCounter
                name="Attack"
                color="#e67e22"
                count={triggerCounts.attack}
              />
              <TypeCounter
                name="Pray"
                color="#9b59b6"
                count={triggerCounts.pray}
              />
              <TypeCounter
                name="Triggered"
                color="#3498db"
                count={triggerCounts.triggered}
              />
              <TypeCounter
                name="End of Turn"
                color="#1abc9c"
                count={triggerCounts.endOfTurn}
              />
            </div>
          </div>

          {/* Effect Symbol Distribution */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Effect Symbol Distribution</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <TypeCounter
                name="Star"
                color="#f1c40f"
                count={symbolCounts.star}
              />
              <TypeCounter
                name="Reputation"
                color="#e74c3c"
                count={symbolCounts.reputation}
              />
              <TypeCounter
                name="Initiative"
                color="#3498db"
                count={symbolCounts.initiative}
              />
              <TypeCounter name="VP" color="#2ecc71" count={symbolCounts.vp} />
              <TypeCounter
                name="Influence"
                color="#9b59b6"
                count={symbolCounts.influence}
              />
              <TypeCounter
                name="Steal"
                color="#e67e22"
                count={symbolCounts.steal}
              />
              <TypeCounter
                name="Board Size"
                color="#34495e"
                count={symbolCounts.boardSize}
              />
              <TypeCounter
                name="Gold"
                color="#f39c12"
                count={symbolCounts.gold}
              />
            </div>
          </div>

          {/* Age Distribution (Zone Cards) */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Age Distribution (Zone Cards)</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <AgeCounter age="1" count={ageCounts.age1} />
              <AgeCounter age="2" count={ageCounts.age2} />
              <AgeCounter age="3" count={ageCounts.age3} />
            </div>
          </div>

          {/* Card Type Distribution */}
          <div style={statBlockStyle}>
            <div style={statTitleStyle}>Card Type Distribution</div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <CardTypeCounter type="Units" count={cardTypeCounts.unit} />
              <CardTypeCounter type="Zones" count={cardTypeCounts.zone} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsDashboard;
