import React from "react";
import withCardLayout from "../shared/hoc";
import {
  marshlandsCards,
  battleCards,
  factionCards,
  trackCards,
  RESOURCES,
  ARTIFACTS,
} from "../projects/marshlands/data";
import Card from "../projects/marshlands/Card";
import BattleCard from "../projects/marshlands/BattleCard";
import FactionCard from "../projects/marshlands/FactionCard";
import TrackCard from "../projects/marshlands/TrackCard";

const cards = [...marshlandsCards, ...battleCards, ...factionCards, ...trackCards];

const MarshlandsCard = (props) => {
  const { card } = props;
  if (card.cardType === "battle") return <BattleCard {...props} />;
  if (card.cardType === "faction") return <FactionCard {...props} />;
  if (card.cardType === "track") return <TrackCard {...props} />;
  return <Card {...props} />;
};

const filterConfig = {
  cardType: ["regular", "battle", "faction", "track"],
  regularCardType: ["upgrade", "combat", "event", "questline"],
  factionColor: ["grey", "blue", "purple"],
  resourceYielded: RESOURCES,
  artifactYielded: ARTIFACTS,
  costWorkers: [1, 2, 3],
  costResourceCount: [1, 2, 3],
  tier: [1, 2, 3],
};

const sortConfig = [
  { key: "name", label: "Name" },
  { key: "tier", label: "Tier" },
  { key: "factionColor", label: "Faction" },
  { key: "costWorkers", label: "Workers" },
  { key: "costResourceCount", label: "Resource Count" },
  { key: "resourceYielded", label: "Resource" },
  { key: "artifactYielded", label: "Artifact" },
];

const MarshlandsPage = (props) => {
  const { processedCards, isEditMode, handleAddCardToPrint, printCards } = props;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "12px",
        padding: "12px",
      }}
    >
      {processedCards.map((card, i) => {
        const isInPrint = printCards.some((c) => c.id === card.id);

        return (
          <MarshlandsCard
            key={card.id}
            card={card}
            isEditMode={isEditMode}
            handleAddCardToPrint={handleAddCardToPrint}
            isInPrint={isInPrint}
          />
        );
      })}
    </div>
  );
};

export default withCardLayout({
  page: MarshlandsPage,
  title: "Marshlands",
  filterConfig,
  sortConfig,
  Card: MarshlandsCard,
  cards,
});
