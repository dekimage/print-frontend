import React from "react";
import styles from "../../styles/MajorCard.module.scss";
import { ASSETS } from "./data";

const REP_COUNT = 14; // reputation sections: 1-14, VP at 14th
const VP_COUNT = 12; // VP section: 1-12, trophy at 12th

// Reputation: 4,7,10 = 2 credits each; 14th = VP
const REP_CREDIT_CELLS = [3, 6, 9]; // 4th, 7th, 10th (0-indexed)
const REP_VP_CELL = 13; // 14th slot (0-indexed)

const renderRepCellContent = (j) => {
  if (j === REP_VP_CELL) {
    return <img src={ASSETS.vp} alt="VP" className={styles.cellSymbol} />;
  }
  if (REP_CREDIT_CELLS.includes(j)) {
    return (
      <div className={styles.cellContent}>
        <img src={ASSETS.credit} alt="credit" className={styles.cellSymbol} />
        <span className={styles.cellBadge}>2</span>
      </div>
    );
  }
  return null;
};

const MajorCard = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
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

      <div className={styles.columnsRow}>
        {/* Blue section: numbers + rep + credits (14 rows) */}
        <div className={styles.section}>
          <div className={`${styles.factionColumn} ${styles.factionColumn_numbers}`}>
            <div className={styles.columnHeader} />
            {Array.from({ length: REP_COUNT }, (_, j) => (
              <div key={j} className={styles.factionCell}>
                <span className={styles.cellNumber}>{j + 1}</span>
              </div>
            ))}
          </div>
          <div className={`${styles.factionColumn} ${styles.factionColumn_blue}`}>
            <div className={styles.columnHeader}>
              <img src={ASSETS.reputationSymbols.blue} alt="blue" className={styles.headerSymbol} />
            </div>
            {Array.from({ length: REP_COUNT }, (_, j) => (
              <div key={j} className={`${styles.factionCell} ${styles.factionCell_withContent}`}>
                {renderRepCellContent(j)}
              </div>
            ))}
          </div>
          <div className={`${styles.factionColumn} ${styles.factionColumn_blue}`}>
            <div className={styles.columnHeader}>
              <img src={ASSETS.credit} alt="credit" className={styles.headerSymbol} />
            </div>
            {Array.from({ length: REP_COUNT }, (_, j) => (
              <div key={j} className={styles.factionCell} />
            ))}
          </div>
        </div>
        <div className={styles.columnGap} />

        {/* Purple section: numbers + rep + credits (14 rows) */}
        <div className={styles.section}>
          <div className={`${styles.factionColumn} ${styles.factionColumn_numbers}`}>
            <div className={styles.columnHeader} />
            {Array.from({ length: REP_COUNT }, (_, j) => (
              <div key={j} className={styles.factionCell}>
                <span className={styles.cellNumber}>{j + 1}</span>
              </div>
            ))}
          </div>
          <div className={`${styles.factionColumn} ${styles.factionColumn_purple}`}>
            <div className={styles.columnHeader}>
              <img src={ASSETS.reputationSymbols.purple} alt="purple" className={styles.headerSymbol} />
            </div>
            {Array.from({ length: REP_COUNT }, (_, j) => (
              <div key={j} className={`${styles.factionCell} ${styles.factionCell_withContent}`}>
                {renderRepCellContent(j)}
              </div>
            ))}
          </div>
          <div className={`${styles.factionColumn} ${styles.factionColumn_purple}`}>
            <div className={styles.columnHeader}>
              <img src={ASSETS.credit} alt="credit" className={styles.headerSymbol} />
            </div>
            {Array.from({ length: REP_COUNT }, (_, j) => (
              <div key={j} className={styles.factionCell} />
            ))}
          </div>
        </div>
        <div className={styles.columnGap} />

        {/* Grey section: numbers + rep + credits (14 rows) */}
        <div className={styles.section}>
          <div className={`${styles.factionColumn} ${styles.factionColumn_numbers}`}>
            <div className={styles.columnHeader} />
            {Array.from({ length: REP_COUNT }, (_, j) => (
              <div key={j} className={styles.factionCell}>
                <span className={styles.cellNumber}>{j + 1}</span>
              </div>
            ))}
          </div>
          <div className={`${styles.factionColumn} ${styles.factionColumn_grey}`}>
            <div className={styles.columnHeader}>
              <img src={ASSETS.reputationSymbols.grey} alt="grey" className={styles.headerSymbol} />
            </div>
            {Array.from({ length: REP_COUNT }, (_, j) => (
              <div key={j} className={`${styles.factionCell} ${styles.factionCell_withContent}`}>
                {renderRepCellContent(j)}
              </div>
            ))}
          </div>
          <div className={`${styles.factionColumn} ${styles.factionColumn_grey}`}>
            <div className={styles.columnHeader}>
              <img src={ASSETS.credit} alt="credit" className={styles.headerSymbol} />
            </div>
            {Array.from({ length: REP_COUNT }, (_, j) => (
              <div key={j} className={styles.factionCell} />
            ))}
          </div>
        </div>
        <div className={styles.columnGap} />

        {/* VP section: numbers + VP column (12 rows, trophy at 12th) */}
        <div className={styles.section}>
          <div className={`${styles.factionColumn} ${styles.factionColumn_numbers} ${styles.factionColumn_vpNumbers}`}>
            <div className={styles.columnHeader} />
            {Array.from({ length: VP_COUNT }, (_, j) => (
              <div key={j} className={styles.factionCell}>
                <span className={styles.cellNumber}>{j + 1}</span>
              </div>
            ))}
          </div>
          <div className={styles.vpColumn}>
            <div className={styles.vpHeader}>
              <img src={ASSETS.vp} alt="VP" className={styles.headerSymbol} />
            </div>
            {Array.from({ length: VP_COUNT }, (_, j) => (
              <div key={j} className={styles.vpCell}>
                {j === VP_COUNT - 1 ? (
                  <img src={ASSETS.trophy} alt="trophy" className={styles.trophySymbol} />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorCard;
