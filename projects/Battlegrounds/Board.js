import React from "react";
import styles from "../../styles/BattlegroundsBoard.module.scss";
import { symbolMappings } from "./data";

const Board = () => {
  // Calculate cell size to fit exactly 100 VP cells around the perimeter
  // A4 landscape: 297mm x 210mm (1123px x 794px at 96dpi)
  // We want 100 cells total, so roughly 25 per side
  // Top/Bottom: 1123px / 25 = ~45px per cell
  // Left/Right: 794px / 25 = ~32px per cell
  // Let's use a compromise size that works for both
  const vpCellSize = 35; // px

  const topBottomCells = Math.floor(1123 / vpCellSize); // ~32
  const leftRightCells = Math.floor(794 / vpCellSize); // ~22

  // Adjust to get as close to 100 total as possible
  const totalVPCells = topBottomCells * 2 + leftRightCells * 2;

  // Generate VP cells for each side
  const generateVPCells = (startIndex, count) => {
    const cells = [];
    for (let i = 0; i < count; i++) {
      cells.push(startIndex + i);
    }
    return cells;
  };

  const topCells = generateVPCells(0, topBottomCells);
  const rightCells = generateVPCells(topBottomCells, leftRightCells);
  const bottomCells = generateVPCells(
    topBottomCells + leftRightCells,
    topBottomCells
  ).reverse(); // Reverse bottom row to go right-to-left
  const leftCells = generateVPCells(
    topBottomCells * 2 + leftRightCells,
    leftRightCells
  ).reverse(); // Reverse left column to go bottom-to-top

  // Tribe popularity cells - calculate size to fit exactly 25 cells
  // Available width: 1123px - 35px (tribe icon) - 20px (padding) = ~1068px
  // We want 25 cells, so: 1068px / 25 = ~43px per cell
  const popularityCellSize = 43; // px
  const popularityCells = 18;

  const tribes = [
    { name: "birds", symbol: symbolMappings.birds },
    { name: "insects", symbol: symbolMappings.insects },
    { name: "boars", symbol: symbolMappings.boars },
    { name: "frogs", symbol: symbolMappings.frogs },
  ];

  return (
    <div className={styles.boardContainer}>
      <div
        className={styles.board}
        style={{
          "--vp-cell-size": `${vpCellSize}px`,
          "--popularity-cell-size": `${popularityCellSize}px`,
          "--tribe-icon-size": `${popularityCellSize}px`,
        }}
      >
        {/* Victory Point Tracker - Corners */}
        <div className={styles.vpTracker}>
          {/* Top side */}
          <div className={styles.vpSide + " " + styles.vpTop}>
            {topCells.map((value) => (
              <div key={`top-${value}`} className={styles.vpCell}>
                {value}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className={styles.vpSide + " " + styles.vpRight}>
            {rightCells.map((value) => (
              <div key={`right-${value}`} className={styles.vpCell}>
                {value}
              </div>
            ))}
          </div>

          {/* Bottom side */}
          <div className={styles.vpSide + " " + styles.vpBottom}>
            {bottomCells.map((value) => (
              <div key={`bottom-${value}`} className={styles.vpCell}>
                {value}
              </div>
            ))}
          </div>

          {/* Left side */}
          <div className={styles.vpSide + " " + styles.vpLeft}>
            {leftCells.map((value) => (
              <div key={`left-${value}`} className={styles.vpCell}>
                {value}
              </div>
            ))}
          </div>
        </div>

        {/* Tribe Popularity Section - Upper 65% */}
        <div className={styles.tribeSection}>
          <h2 className={styles.sectionTitle}>Tribe Popularity</h2>
          {tribes.map((tribe) => (
            <div key={tribe.name} className={styles.tribeRow}>
              <div className={styles.tribeIcon}>
                <img
                  src={`/battlegrounds/symbols/${tribe.symbol}`}
                  alt={`${tribe.name} symbol`}
                  onError={(e) => {
                    console.error(`Failed to load tribe symbol: ${tribe.name}`);
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className={styles.popularityTracker}>
                {Array.from({ length: popularityCells }, (_, i) => (
                  <div key={i} className={styles.popularityCell}>
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty Space - Bottom 35% */}
        <div className={styles.emptySpace}>
          <div className={styles.upgradeColumns}>
            {/* Hand Size Column */}
            <div className={styles.upgradeColumn}>
              <div className={styles.upgradeHeader}>
                <img
                  src={`/battlegrounds/symbols/${symbolMappings.handSize}`}
                  alt="Hand Size"
                  className={styles.upgradeIcon}
                />
              </div>
              <div className={styles.upgradeCell}>1</div>
              <div className={styles.upgradeCost}>
                <span className={styles.costValue}>2</span>
                <img
                  src={`/battlegrounds/symbols/${symbolMappings.gold}`}
                  alt="Gold"
                  className={styles.costIcon}
                />
              </div>
              <div className={styles.upgradeCell}>2</div>
              <div className={styles.upgradeCost}>
                <span className={styles.costValue}>2</span>
                <img
                  src={`/battlegrounds/symbols/${symbolMappings.gold}`}
                  alt="Gold"
                  className={styles.costIcon}
                />
              </div>
              <div className={styles.upgradeCell}>3</div>
              <div className={styles.upgradeCost}>
                <span className={styles.costValue}>2</span>
                <img
                  src={`/battlegrounds/symbols/${symbolMappings.gold}`}
                  alt="Gold"
                  className={styles.costIcon}
                />
              </div>
              <div className={styles.upgradeCell}>4</div>
              <div className={styles.upgradeCost}>
                <span className={styles.costValue}>3</span>
                <img
                  src={`/battlegrounds/symbols/${symbolMappings.gold}`}
                  alt="Gold"
                  className={styles.costIcon}
                />
              </div>
              <div className={styles.upgradeCell}>5</div>
              <div className={styles.upgradeCost}>
                <span className={styles.costValue}>4</span>
                <img
                  src={`/battlegrounds/symbols/${symbolMappings.gold}`}
                  alt="Gold"
                  className={styles.costIcon}
                />
              </div>
              <div className={styles.upgradeCell}>6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
