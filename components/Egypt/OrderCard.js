import styles from "../../styles/Egypt.module.scss";

import arabiaIcon from "../../assets/Egypt/arabia.png";
import egyptIcon from "../../assets/Egypt/egypt.png";
import peruIcon from "../../assets/Egypt/peru.png";
import japanIcon from "../../assets/Egypt/japan.png";
import romeIcon from "../../assets/Egypt/rome.png";
import indiaIcon from "../../assets/Egypt/india.png";
import woodIcon from "../../assets/Egypt/wood.png";
import stoneIcon from "../../assets/Egypt/stone.png";
import gemsIcon from "../../assets/Egypt/gems.png";
import foodIcon from "../../assets/Egypt/food.png";
import herbsIcon from "../../assets/Egypt/herbs.png";
import spiceIcon from "../../assets/Egypt/spices.png";

const iconMap = {
  arabia: arabiaIcon,
  egypt: egyptIcon,
  peru: peruIcon,
  japan: japanIcon,
  rome: romeIcon,
  india: indiaIcon,
};

const resourceIconMap = {
  wood: woodIcon,
  stone: stoneIcon,
  gems: gemsIcon,
  food: foodIcon,
  herbs: herbsIcon,
  spice: spiceIcon,
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

export const OrderCard = ({ order }) => {
  return (
    <div className={styles.card}>
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

// const order = {
//   name: "Thebes",
//   vp: 3,
//   destinations: [
//     {
//       zone: "Thebes",
//       resources: ["Wood", "Stone"],
//     },
//     {
//       zone: "Memphis",
//       resources: ["Wood", "Stone"],
//     },
//     {
//       zone: "Heliopolis",
//       resources: ["Wood", "Stone"],
//     },
//   ],
//   gold: 1,
// };
