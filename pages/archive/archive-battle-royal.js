import styles from "../styles/BattleRoyal.module.scss";
import React, { useState } from "react";

import Card from "../../components/BattleRoyal/Card";
import Layout from "../../components/Home/Layout";
import { getCardMargin } from "../../shared/functions";
import { useFilterContainer } from "../hooks/main";
import { battleRoyalCards } from "../../projects/battleRoyal/data";

const cards = battleRoyalCards;

const techCards = cards.filter((card) => card.faction === "Technology");
const techUnits = techCards.filter((card) => card.type === "Unit");
const techStructures = techCards.filter((card) => card.type === "Structure");
const techSpells = techCards.filter((card) => card.type === "Spell");
const natureCards = cards.filter((card) => card.faction === "Nature");
const natureUnits = natureCards.filter((card) => card.type === "Unit");
const natureStructures = natureCards.filter(
  (card) => card.type === "Structure"
);
const natureSpells = natureCards.filter((card) => card.type === "Spell");

const differentKeywords = cards.map((card) => card.keywords);
const uniqueKeywords = [...new Set(differentKeywords.flat())];

const dashboardCount = {
  techCards: techCards.length,
  techUnits: techUnits.length,
  techStructures: techStructures.length,
  techSpells: techSpells.length,
  natureCards: natureCards.length,
  natureUnits: natureUnits.length,
  natureStructures: natureStructures.length,
  natureSpells: natureSpells.length,
};

const DashboardView = ({ dashboardCount }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {Object.keys(dashboardCount).map((key, i) => (
        <div
          key={i}
          style={{
            padding: ".25rem",
            border: "1px solid black",
            margin: ".25rem",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          {key}: {dashboardCount[key]}
        </div>
      ))}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {uniqueKeywords.map((keyword, i) => (
          <div
            key={i}
            style={{
              padding: ".25rem",
              border: "1px solid black",
              margin: ".25rem",
            }}
          >
            {keyword}
          </div>
        ))}
      </div>
    </div>
  );
};

const filterOptions = {
  type: ["Unit", "Structure", "Spell"],
  faction: ["Technology", "Nature"],
  cost: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  hp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  atk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  keywords: uniqueKeywords,
};

const sortConfig = [
  { key: "name", label: "Name A-Z" },
  { key: "cost", label: "Cost" },
  { key: "atk", label: "ATK" },
  { key: "hp", label: "HP" },
];

const BattleRoyal = () => {
  const {
    isPrint,
    setIsPrint,
    selectedFilters,
    setSelectedFilters,
    sortMethod,
    setSortMethod,
    printCards,
    isEditMode,
    setIsEditMode,
    handleAddCardToPrint,
  } = useFilterContainer();

  const sortCards = (cardsArray, sortMethod) => {
    return [...cardsArray].sort((a, b) => {
      const sortKey = sortMethod.endsWith("Desc")
        ? sortMethod.substring(0, sortMethod.length - 4)
        : sortMethod.substring(0, sortMethod.length - 3);
      const isAsc = sortMethod.endsWith("Asc");

      // Handle undefined attributes by assigning a default value
      const aValue = a[sortKey] !== undefined ? a[sortKey] : 0;
      const bValue = b[sortKey] !== undefined ? b[sortKey] : 0;

      if (typeof aValue === "string") {
        return isAsc
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return isAsc ? aValue - bValue : bValue - aValue;
    });
  };

  const filterCards = (cardsArray, filters) => {
    return cardsArray.filter((card) => {
      // Contains Filter
      if (filters.contains) {
        const searchTerm = filters.contains.toLowerCase();
        let matchFound = false;

        for (let value of Object.values(card)) {
          if (typeof value == "string" && value.includes("https")) continue;

          if (
            (typeof value === "string" &&
              value.toLowerCase().includes(searchTerm)) ||
            (typeof value === "object" && value.includes(searchTerm)) ||
            (typeof value === "number" && value == searchTerm) ||
            (Array.isArray(value) &&
              value.some((v) => v.toLowerCase().includes(searchTerm)))
          ) {
            matchFound = true;
            break;
          }
        }

        if (!matchFound) {
          return false;
        }
      }

      // Other Filters
      for (let filter in filters) {
        if (
          filter !== "contains" &&
          filters[filter].length &&
          !filters[filter].includes(card[filter])
        ) {
          return false;
        }
      }

      return true;
    });
  };

  const processedCards = sortCards(
    filterCards(cards, selectedFilters),
    sortMethod
  );

  if (isPrint) {
    const cardsForPrint = printCards.length ? printCards : cards;
    return (
      <div className={styles.cardsMapper}>
        {cardsForPrint
          .filter((c) => c.img)
          .map((card, i) => (
            <div
              key={i}
              //  style={{ marginBottom: getCardMargin(i) }}
            >
              <Card card={card} />
            </div>
          ))}
      </div>
    );
  }

  return (
    <Layout
      pageTitle="Battle Royal"
      filterOptions={filterOptions}
      selectedFilters={selectedFilters}
      setSelectedFilters={setSelectedFilters}
      setIsPrint={setIsPrint}
      sortConfig={sortConfig}
      sortMethod={sortMethod}
      setSortMethod={setSortMethod}
      isEditMode={isEditMode}
      setIsEditMode={setIsEditMode}
    >
      {/* <DashboardView dashboardCount={dashboardCount} /> */}

      <div className={styles.cardsMapper}>
        {processedCards.map((card, i) => {
          const isInPrint = printCards.some((c) => c.name === card.name);
          return (
            <Card
              card={card}
              isEditMode={isEditMode}
              handleAddCardToPrint={handleAddCardToPrint}
              isInPrint={isInPrint}
              key={i}
            />
          );
        })}
      </div>
    </Layout>
  );
};
export default BattleRoyal;
