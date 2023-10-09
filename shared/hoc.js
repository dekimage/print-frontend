import React, { useState } from "react";
import Layout from "../components/Home/Layout";
import { getCardMargin } from "../shared/functions";
import styles from "../styles/BattleRoyal.module.scss";

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

const withCardLayout = (options) => {
  const {
    page: PageComponent,
    title: pageTitle,
    filterConfig,
    sortConfig,
    Card,
    cards,
  } = options;

  return function WrappedComponent(props) {
    const [isPrint, setIsPrint] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [sortMethod, setSortMethod] = useState("Sort By");
    const [printCards, setPrintCards] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);

    const handleAddCardToPrint = (card) => {
      if (printCards.includes(card)) {
        setPrintCards(printCards.filter((c) => c.name !== card.name));
      } else {
        setPrintCards([...printCards, card]);
      }
    };

    const processedCards = sortCards(
      filterCards(cards, selectedFilters),
      sortMethod
    );

    if (isPrint) {
      const cardsForPrint = printCards.length ? printCards : cards;
      return (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
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
        pageTitle={pageTitle}
        filterConfig={filterConfig}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        setIsPrint={setIsPrint}
        sortConfig={sortConfig}
        sortMethod={sortMethod}
        setSortMethod={setSortMethod}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      >
        <PageComponent
          processedCards={processedCards}
          isEditMode={isEditMode}
          handleAddCardToPrint={handleAddCardToPrint}
          printCards={printCards}
          {...props}
        />
      </Layout>
    );
  };
};

export default withCardLayout;
