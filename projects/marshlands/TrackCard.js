import React from "react";
import styles from "../../styles/TrackCard.module.scss";
import { ASSETS } from "./data";

const UPGRADE_KEYS = ["worker", "evolve", "action"];
const COLUMN_COUNT = 11; // symbol col + 11 data cols = numbers 0-10

// Row 1 (worker): symbols at columns 2, 4, 6, 8, 10
const WORKER_ROW_SLOTS = {
  2: "worker",
  4: "worker",
  6: "base",
  8: "worker",
  10: "worker",
};

// Row 2 (evolve): evolve (worker + chevrons) at 3, 6, 10; tempWorker at 5, 9
const EVOLVE_ROW_SLOTS = {
  2: "evolve",
  4: "tempWorker",
  5: "evolve",
  7: "tempWorker",
  8: "evolve",
};

// Row 3 (action): symbols at columns 4, 8, 10 (4th, 8th, 11th place)
const ACTION_ROW_SLOTS = { 3: "action", 6: "action", 9: "action" };

const ACTIONS = [
  { name: "Move", text: "Move all friendly units from a hex to adjacent hex" },
  {
    name: "Deploy",
    text: "Place an exiled friendly unit to a hex you control",
  },
  {
    name: "Conquer",
    text: "Play a card from a matching faction's column for a cost",
  },
  { name: "Extract", text: "Collect a card from a matching faction's column." },
  {
    name: "Exile",
    text: "Remove friendly unit to perform 1 additional action",
  },
  {
    name: "Build",
    text: "Remove 3 control tokens from a single hex and put a base token instead.",
  },
];

const TrackCard = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const creditsVariant = card?.creditsVariant || "purple";
  const isBlueVariant = creditsVariant === "blue";
  const getCellContent = (rowKey, columnNumber) => {
    if (rowKey === "worker" && WORKER_ROW_SLOTS[columnNumber]) {
      const slot = WORKER_ROW_SLOTS[columnNumber];
      const url =
        slot === "worker" ? ASSETS.workers.worker : ASSETS.upgradeSymbols.base;
      return { url, slot };
    }
    if (rowKey === "evolve" && EVOLVE_ROW_SLOTS[columnNumber]) {
      const slot = EVOLVE_ROW_SLOTS[columnNumber];
      return slot === "evolve"
        ? { url: ASSETS.workers.worker, slot: "evolve" }
        : { url: ASSETS.tempWorker, slot: "tempWorker" };
    }
    if (rowKey === "action" && ACTION_ROW_SLOTS[columnNumber]) {
      return { url: ASSETS.actionPoints, slot: "action" };
    }
    return null;
  };

  return (
    <div
      className={`${styles.card} ${isBlueVariant ? styles.card_creditsBlue : ""}`}
      onClick={() => {
        if (isEditMode) {
          handleAddCardToPrint(card);
        }
      }}
    >
      {isInPrint && <div className={styles.addedForPrint}>+</div>}

      {/* Top section: actions table (left) + rewards table (right) */}
      <div className={styles.topSection}>
        <div className={styles.actionsTable}>
          {ACTIONS.map(({ name, text }) => (
            <div key={name} className={styles.actionsRow}>
              <span className={styles.actionsName}>{name}:</span>
              <span className={styles.actionsText}>{text}</span>
            </div>
          ))}
          <div className={styles.actionsPerTurn}>
            <span className={styles.actionsPerTurnLabel}>
              Actions per turn:
            </span>
            <div className={styles.actionsPerTurnSymbols}>
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={ASSETS.actionPoints}
                  alt="action"
                  className={styles.actionSymbol}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.rewardsTableWrapper}>
          <div className={styles.rewardsTable}>
            <div
              className={`${styles.rewardsRow} ${styles.rewardsRow_control}`}
            >
              <div
                className={`${styles.rewardsCell} ${styles.rewardsCell_label} ${styles.rewardsCell_label_control}`}
              >
                <div className={styles.rewardsSymbolBox}>
                  <img
                    src={ASSETS.controlToken}
                    alt="control"
                    className={styles.rewardsSymbol}
                  />
                </div>
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`${styles.rewardsCell} ${styles.rewardsCell_control}`}
                >
                  <div className={styles.rewardsSymbolBox}>
                    <img
                      src={ASSETS.controlToken}
                      alt="control"
                      className={styles.rewardsSymbol}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className={`${styles.rewardsRow} ${styles.rewardsRow_credit}`}>
              <div
                className={`${styles.rewardsCell} ${styles.rewardsCell_label} ${styles.rewardsCell_label_credit}`}
              >
                <div className={styles.rewardsSymbolBox}>
                  <span className={styles.rewardsValue}>3</span>
                  <img
                    src={ASSETS.credit}
                    alt="credit"
                    className={styles.rewardsSymbol}
                  />
                </div>
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`${styles.rewardsCell} ${styles.rewardsCell_credit}`}
                >
                  <div className={styles.rewardsSymbolBox}>
                    <span className={styles.rewardsValue}>3</span>
                    <img
                      src={ASSETS.credit}
                      alt="credit"
                      className={styles.rewardsSymbol}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`${styles.rewardsRow} ${styles.rewardsRow_upgrade}`}
            >
              <div
                className={`${styles.rewardsCell} ${styles.rewardsCell_label} ${styles.rewardsCell_label_upgrade}`}
              >
                <img
                  src={ASSETS.upgradeSymbols.worker}
                  alt="upgrade"
                  className={styles.rewardsLabelSymbol}
                />
              </div>
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`${styles.rewardsCell} ${styles.rewardsCell_upgrade}`}
                />
              ))}
            </div>
          </div>
          {/* Upgrade boxes: absolute positioned below table, each below its column; label column has nothing */}
          <div className={styles.rewardsUpgradeBoxes}>
            <div className={styles.rewardsUpgradeBox_spacer} />
            <div className={styles.rewardsUpgradeBox}>
              {[1, 2].map((i) => (
                <img
                  key={i}
                  src={ASSETS.upgradeSymbols.worker}
                  alt="worker"
                  className={styles.rewardsSymbol}
                />
              ))}
            </div>
            <div className={styles.rewardsUpgradeBox}>
              {[1, 2].map((i) => (
                <img
                  key={i}
                  src={ASSETS.upgradeSymbols.evolve}
                  alt="evolve"
                  className={styles.rewardsSymbol}
                />
              ))}
            </div>
            <div className={styles.rewardsUpgradeBox}>
              {[1, 2].map((i) => (
                <img
                  key={i}
                  src={ASSETS.upgradeSymbols.action}
                  alt="action"
                  className={styles.rewardsSymbol}
                />
              ))}
            </div>
            <div className={styles.rewardsUpgradeBox}>
              <img
                src={ASSETS.upgradeSymbols.worker}
                alt="worker"
                className={styles.rewardsSymbol}
              />
              <img
                src={ASSETS.upgradeSymbols.evolve}
                alt="evolve"
                className={styles.rewardsSymbol}
              />
              <img
                src={ASSETS.upgradeSymbols.action}
                alt="action"
                className={styles.rewardsSymbol}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Middle section: starting stuff */}
      <div className={styles.startingSectionWrapper}>
        <h3 className={styles.startingTitle}>Starting Resources:</h3>
        <div className={styles.startingSection}>
          {/* 2 separate worker squares */}
          {[1, 2].map((i) => (
            <div
              key={`worker-${i}`}
              className={`${styles.startingItem} ${styles.startingItem_worker}`}
            >
              <img
                src={ASSETS.workers.worker}
                alt="worker"
                className={styles.startingSymbol}
              />
            </div>
          ))}
          <div
            className={`${styles.startingItem} ${styles.startingItem_credit}`}
          >
            <span className={styles.startingValue}>2</span>
            <img
              src={ASSETS.credit}
              alt="credit"
              className={styles.startingSymbol}
            />
          </div>
          <div
            className={`${styles.startingItem} ${styles.startingItem_upgrade}`}
          >
            <img
              src={ASSETS.upgradeSymbols.worker}
              alt="worker"
              className={styles.startingSymbol}
            />
            <img
              src={ASSETS.upgradeSymbols.evolve}
              alt="evolve"
              className={styles.startingSymbol}
            />
          </div>
          <div className={`${styles.startingItem} ${styles.startingItem_card}`}>
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={ASSETS.cardSymbol}
                alt="card"
                className={styles.startingSymbol}
              />
            ))}
          </div>
          <div
            className={`${styles.startingItem} ${styles.startingItem_reputation}`}
          >
            <span className={styles.startingValue}>2</span>
            <img
              src={ASSETS.reputation}
              alt="reputation"
              className={styles.startingSymbol}
            />
          </div>
        </div>
      </div>

      {/* Bottom section: upgrade table */}
      <div className={styles.bottomSection}>
        <div className={styles.upgradeTable}>
          <div className={styles.tableHeader}>
            {Array.from({ length: COLUMN_COUNT }, (_, i) => (
              <div key={i} className={styles.headerCell}>
                {i}
              </div>
            ))}
          </div>
          {UPGRADE_KEYS.map((key) => (
            <div key={key} className={styles.tableRow}>
              <div className={styles.symbolCell}>
                <img
                  src={ASSETS.upgradeSymbols[key]}
                  alt={key}
                  className={styles.upgradeSymbol}
                />
              </div>
              {Array.from({ length: COLUMN_COUNT - 1 }, (_, i) => {
                const columnNumber = i;
                const content = getCellContent(key, columnNumber);
                return (
                  <div key={i} className={styles.dataCell}>
                    {content && (
                      <div
                        className={`${styles.cellSymbolBox} ${content.slot === "base" ? styles.cellSymbolBox_base : ""} ${content.slot === "action" ? styles.cellSymbolBox_action : ""} ${content.slot === "tempWorker" ? styles.cellSymbolBox_tempWorker : ""} ${content.slot === "evolve" ? styles.cellSymbolBox_evolve : ""}`}
                      >
                        {content.slot === "worker" && (
                          <span className={styles.plusOverlay}>+</span>
                        )}
                        {content.slot === "evolve" && (
                          <span className={styles.chevronUpOverlay}>▲▲</span>
                        )}
                        <img
                          src={content.url}
                          alt={content.slot}
                          className={styles.cellSymbol}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackCard;
