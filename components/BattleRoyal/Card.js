import styles from "../../styles/BattleRoyal.module.scss";
import atkIcon from "../../assets/battleRoyal/atk.png";
import hpIcon from "../../assets/battleRoyal/hp.png";
import costIcon from "../../assets/battleRoyal/cost.png";
const Card = ({ card }) => {
  const {
    name,
    faction,
    type,
    manaCost,
    hp,
    attackPower,
    keywords,
    effect,
    img,
  } = card;

  // Define the CSS class based on faction
  // const factionClass =
  //   faction === "Technology" ? styles.technology : styles.nature;
  let factionColor;
  switch (faction) {
    case "Technology":
      factionColor = "#3498db";
      break;
    case "Nature":
      factionColor = "#27ae60";
    default:
      break;
  }
  return (
    <div className={`${styles.card} ${faction}`}>
      <div className={styles.header} style={{ backgroundColor: factionColor }}>
        <div className="flex_center" style={{ position: "relative" }}>
          <img src={costIcon} height="40px" alt="" />
          <div className={styles.stat}>{manaCost}</div>
        </div>
        <div className={styles.name}>{name}</div>
      </div>
      <div
        className={styles.art}
        style={
          img
            ? {
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }
            : {}
        }
      ></div>
      <div className={styles.body}>
        {keywords && keywords.length > 0 && (
          <div className={styles["card-keywords"]}>{keywords.join(", ")}</div>
        )}
        <div className={styles["card-description"]}>{effect}</div>
      </div>

      <div className={styles.footer}>
        {type == "Unit" ? (
          <div className="flex_center" style={{ position: "relative" }}>
            <img src={atkIcon} height="40px" alt="" />
            <div className={styles.stat}>{attackPower}</div>
          </div>
        ) : (
          <div style={{ width: "40px" }}></div>
        )}

        <div className={styles["card-type"]}>{type}</div>
        {type == "Unit" || type == "Structure" ? (
          <div className="flex_center" style={{ position: "relative" }}>
            <img src={hpIcon} height="40px" alt="" />
            <div className={styles.stat}>{hp}</div>
          </div>
        ) : (
          <div style={{ width: "40px" }}></div>
        )}
      </div>
    </div>
  );
};

export default Card;
