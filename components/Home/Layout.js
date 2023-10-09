import React from "react";
import Link from "next/link";
import styles from "../../styles/Layout.module.scss";
import FilterComponent from "./FilterContainer";

function Layout({
  children,
  pageTitle,
  filterOptions,
  selectedFilters,
  setSelectedFilters,
  setIsPrint,
  showBackButton = true,
  sortConfig,
  sortMethod,
  setSortMethod,
  isEditMode,
  setIsEditMode,
}) {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.header}>
        {showBackButton && (
          <Link href="/">
            <a className={styles.backButton}>← Back to All Games</a>
          </Link>
        )}
        <h1 className={styles.pageTitle}>{pageTitle || "Default Title"}</h1>
        {/* Other header contents */}
      </header>
      <FilterComponent
        filterConfig={filterOptions}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        setIsPrint={setIsPrint}
        sortConfig={sortConfig}
        sortMethod={sortMethod}
        setSortMethod={setSortMethod}
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
      />
      <main className={styles.main}>{children}</main>

      {/* Optional footer */}
    </div>
  );
}

export default Layout;
