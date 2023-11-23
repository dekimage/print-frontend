import styles from "../../styles/Egypt.module.scss";

import arabiaIcon from "../../assets/Egypt/arabia.png";
import egyptIcon from "../../assets/Egypt/egypt.png";
import peruIcon from "../../assets/Egypt/peru.png";
import japanIcon from "../../assets/Egypt/japan.png";
import romeIcon from "../../assets/Egypt/rome.png";
import indiaIcon from "../../assets/Egypt/india.png";

import dropIcon from "../../assets/Egypt/drop.png";
import hexIcon from "../../assets/Egypt/hex.png";
import gemsIcon from "../../assets/Egypt/gem.png";
import plusIcon from "../../assets/Egypt/plus.png";
import starIcon from "../../assets/Egypt/star.png";
import heartIcon from "../../assets/Egypt/heart.png";

import deliverIcon from "../../assets/Egypt/deliver.png";

const iconMap = {
  arabia: arabiaIcon,
  egypt: egyptIcon,
  peru: peruIcon,
  japan: japanIcon,
  rome: romeIcon,
  india: indiaIcon,
};

const resourceIconMap = {
  drop: dropIcon,
  hex: hexIcon,
  gems: gemsIcon,
  plus: plusIcon,
  star: starIcon,
  heart: heartIcon,
  deliver: deliverIcon,
};

const calculateZoneColor = (zone) => {
  switch (zone) {
    case "egypt":
      return "#f4d03f";
    case "peru":
      return "#43aa8b";
    case "arabia":
      return "#e67e22";
    case "rome":
      return "#7293A0";
    case "japan":
      return "#e74c3c";
    case "india":
      return "#DBBEA1";
    default:
      return "#000000";
  }
};

const Zone = ({ zone }) => {
  const zoneColor = calculateZoneColor(zone);
  return (
    <div className={styles.zone} style={{ backgroundColor: zoneColor }}>
      <img src={iconMap[zone]} height="30px" />
    </div>
  );
};

const Resource = ({ resource }) => {
  return (
    <div className={styles.resource}>
      <img src={resourceIconMap[resource]} height="30px" />
    </div>
  );
};

export const OrderCard = ({ order, style }) => {
  return (
    <div className={styles.card} style={style}>
      <div className={styles.header}>
        <div className={styles.name}>{order.name}</div>
        <div className={styles.vp}>{order.vp}</div>
      </div>
      <div className={styles.destinations}>
        {order.destinations.map((destination, i) => {
          return (
            <div className={styles.destination} key={i}>
              <Zone zone={destination.zone} />
              <div className={styles.resources}>
                {destination.resources.map((resource, i) => (
                  <Resource resource={resource} key={i} />
                ))}
              </div>
            </div>
          );
        })}

        <div className={styles.gold}>{order.gold}</div>
      </div>
    </div>
  );
};

export const StatComponent = ({ data, type }) => {
  const stats = type == "zone" ? data.zones : data.resources;
  return (
    <div className={styles.statsBox}>
      {Object.entries(stats).map(
        ([keyword, stat]) =>
          stat > 0 && (
            <div className={styles.statContainer} key={keyword}>
              <span>
                {type == "zone" ? (
                  <Zone zone={keyword} />
                ) : (
                  <Resource resource={keyword} />
                )}
              </span>
              <span>{stat}</span>
            </div>
          )
      )}
      Total: {type == "zone" ? data.totalZones : data.totalResources}
    </div>
  );
};

export const UpgradeCard = ({ card }) => {
  const { cost, vp, effectOne, effectTwo } = card;
  const renderEffects = (effects) => {
    return effects.map((effect) => {
      switch (effect) {
        case "to":
          return <span>&rarr;</span>;
        case "or":
          return <span>/</span>;
        case "and":
          return <span>&amp;</span>;
        default:
          const imgSrc = resourceIconMap[effect];
          return <img height="40px" src={imgSrc} alt={effect} />;
      }
    });
  };

  return (
    <div className={styles.card}>
      <div
        style={{ borderBottom: "10px solid black" }}
        className={styles.effectContainer}
      >
        {renderEffects(effectOne)}
      </div>
      {effectTwo && (
        <div className={styles.effectContainer}>{renderEffects(effectTwo)}</div>
      )}
      <div className={styles.cost}>{cost}</div>
      <div className={styles.upgradeVp}>{vp}</div>
    </div>
  );
};
