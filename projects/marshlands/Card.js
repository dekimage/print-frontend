import React from "react";
import styles from "../../styles/MarshlandsCard.module.scss";
import { ASSETS, parseMarshlandsEffect } from "./data";

const UPGRADE_KEYS = ["worker", "evolve", "action"];

const Card = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const {
    id,
    name,
    resourceYielded,
    artifactYielded,
    cost,
    imageUrl,
    effect,
    regularCardType,
    upgrades,
    rewards,
    eventRewards,
    reputationColor,
  } = card;

  const isUpgradeCard = regularCardType === "upgrade";
  const isCombatCard = regularCardType === "combat";
  const isEventCard = regularCardType === "event";
  const isQuestlineCard = regularCardType === "questline";
  const resourceImg = ASSETS.resources[resourceYielded];
  const artifactImg = ASSETS.artifacts[artifactYielded];
  const effectParts = parseMarshlandsEffect(effect || "");

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

      {/* Reputation color symbol - top left */}
      {reputationColor && (
        <div
          className={`${styles.reputationBox} ${styles[`reputationBox_${reputationColor}`]}`}
        >
          <img
            src={ASSETS.reputationSymbols[reputationColor]}
            alt={reputationColor}
            title={`${reputationColor} reputation`}
          />
        </div>
      )}

      {/* Resource yielded - bottom right corner overlay */}
      <div className={styles.resourceYieldedBox}>
        <img src={resourceImg} alt={resourceYielded} title={resourceYielded} />
      </div>

      {/* Artifact gained - bottom left corner overlay */}
      <div className={styles.artifactBox}>
        <img src={artifactImg} alt={artifactYielded} title={artifactYielded} />
      </div>

      {/* Body: Image (140px) + Effect box (cost row on top, effect text on bottom) */}
      <div className={styles.body}>
        <div className={styles.imageSection}>
          {imageUrl && <img src={imageUrl} alt={name} />}
        </div>
        <div
          className={`${styles.effectSection} ${isUpgradeCard ? styles.effectSectionUpgrade : ""} ${isCombatCard ? styles.effectSectionCombat : ""} ${isEventCard ? styles.effectSectionEvent : ""} ${isQuestlineCard ? styles.effectSectionQuestline : ""}`}
        >
          <div className={styles.costBox}>
            <div className={styles.costWorkers}>
              {Array.from({ length: cost.workers }, (_, i) => (
                <div
                  key={`w-${i}`}
                  className={`${styles.costIconBox} ${styles.costIconBoxWorker}`}
                >
                  <img
                    src={ASSETS.workers.worker}
                    alt="worker"
                    className={styles.costIcon}
                  />
                </div>
              ))}
            </div>
            {isQuestlineCard && cost.artifacts ? (
              <div className={styles.costArtifacts}>
                {cost.artifacts.map((a, i) => (
                  <React.Fragment key={a}>
                    <div
                      className={`${styles.costIconBox} ${styles.costIconBoxArtifact}`}
                    >
                      <img
                        src={ASSETS.artifacts[a]}
                        alt={a}
                        title={a}
                        className={styles.costIcon}
                      />
                    </div>
                    {i < cost.artifacts.length - 1 && (
                      <span className={styles.costChevron}>›</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <div className={styles.costResources}>
                {cost.resources?.map((r) => (
                  <div
                    key={r}
                    className={`${styles.costIconBox} ${styles.costIconBoxResource}`}
                  >
                    <img
                      src={ASSETS.resources[r]}
                      alt={r}
                      title={r}
                      className={styles.costIcon}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.effectContent}>
            {isCombatCard && rewards ? (
              <div className={styles.combatRewards}>
                {rewards.credits > 0 && (
                  <div
                    className={`${styles.combatColorBox} ${styles[`combatColor_${rewards.color}`]}`}
                  >
                    <span className={styles.combatRewardValue}>
                      {rewards.credits}
                    </span>
                    <img
                      src={ASSETS.credit}
                      alt="credit"
                      className={styles.combatRewardIcon}
                    />
                  </div>
                )}
                {rewards.reputation > 0 && (
                  <div
                    className={`${styles.combatColorBox} ${styles[`combatColor_${rewards.color}`]}`}
                  >
                    <span className={styles.combatRewardValue}>
                      {rewards.reputation}
                    </span>
                    <img
                      src={ASSETS.reputation}
                      alt="reputation"
                      className={styles.combatRewardIcon}
                    />
                  </div>
                )}
              </div>
            ) : isEventCard && eventRewards ? (
              <div className={styles.eventRewards}>
                {eventRewards.tempWorkers && (
                  <div
                    className={`${styles.eventRewardBox} ${styles.eventRewardBoxTempWorker}`}
                  >
                    <img
                      src={ASSETS.tempWorker}
                      alt="temp worker"
                      className={styles.eventRewardIcon}
                    />
                    <span className={styles.eventRewardText}>
                      Lvl. {eventRewards.tempWorkers.level}
                    </span>
                  </div>
                )}
                {eventRewards.controlToken && (
                  <div
                    className={`${styles.eventRewardBox} ${styles.eventRewardBoxControlToken}`}
                  >
                    <img
                      src={ASSETS.controlToken}
                      alt="control token"
                      className={styles.eventRewardIcon}
                    />
                    <span className={styles.eventRewardText}>
                      Lvl. {eventRewards.controlToken.level}
                    </span>
                  </div>
                )}
                {eventRewards.specialEffects?.map((eff, i) =>
                  typeof eff === "string" ? (
                    <div key={i} className={styles.eventEffectText}>
                      {eff}
                    </div>
                  ) : eff?.type === "actions" &&
                    ASSETS.eventActions?.[eff.actionType] ? (
                    <div key={i} className={styles.eventRewardItem}>
                      <span className={styles.eventRewardText}>
                        Gain {eff.count}
                      </span>
                      <img
                        src={ASSETS.eventActions[eff.actionType]}
                        alt={eff.actionType}
                        className={styles.eventRewardIcon}
                      />
                      <span className={styles.eventRewardText}>
                        {eff.actionType} actions
                      </span>
                    </div>
                  ) : null,
                )}
              </div>
            ) : isQuestlineCard ? (
              <div className={styles.questlineContent}>
                {effect && (
                  <div className={styles.questlineEffect}>{effect}</div>
                )}
                <div className={styles.questlineReward}>
                  <img src={ASSETS.vp} alt="VP" />
                </div>
              </div>
            ) : isUpgradeCard && upgrades ? (
              <div className={styles.upgradeRow}>
                {UPGRADE_KEYS.map((key) => (
                  <div key={key} className={styles.upgradeSection}>
                    <img
                      src={ASSETS.upgradeSymbols[key]}
                      alt={key}
                      className={styles.upgradeSymbol}
                    />
                    <span className={styles.upgradeValue}>{upgrades[key]}</span>
                  </div>
                ))}
              </div>
            ) : effectParts.length > 0 ? (
              effectParts.map((part, i) =>
                part.type === "text" ? (
                  <span key={i}>{part.value}</span>
                ) : part.value ? (
                  <img
                    key={i}
                    src={part.value}
                    alt={part.symbolKey}
                    className={styles.effectSymbol}
                  />
                ) : null,
              )
            ) : (
              <span style={{ color: "#999", fontStyle: "italic" }}>
                {effect || "—"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
