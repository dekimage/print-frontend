import styles from "../../styles/BattleRoyal.module.scss";
import atkIcon from "../../assets/battleRoyal/atk.png";
import hpIcon from "../../assets/battleRoyal/hp.png";
import costIcon from "../../assets/battleRoyal/cost.png";
import techBorderImg from "../../assets/battleRoyal/borderblue.png";
import natureBorderImg from "../../assets/battleRoyal/bordergreen.png";
import bodyCoverImg from "../../assets/battleRoyal/bodycover.png";

const Card = ({ card }) => {
  const { name, faction, type, cost, hp, atk, keywords, effect, img } = card;

  // Define the CSS class based on faction
  // const factionClass =
  //   faction === "Technology" ? styles.technology : styles.nature;
  let factionColor = { color: "", img: "" };
  switch (faction) {
    case "Technology":
      factionColor.color = "#3498db";
      factionColor.img = techBorderImg;
      break;
    case "Nature":
      factionColor.color = "#27ae60";
      factionColor.img = natureBorderImg;
    default:
      break;
  }
  return (
    <div className={`${styles.card} ${faction}`}>
      <div
        className={styles.header}
        style={{
          backgroundImage: `url(${factionColor.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          opacity: "0.8",
          // backgroundColor: factionColor
        }}
      >
        <div className="flex_center" style={{ position: "relative" }}>
          <img src={costIcon} height="40px" alt="" />
          <div className={styles.stat}>{cost}</div>
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
      <div className={styles.middleBorder}>
        <div className={styles.middleBorder_type}>{type}</div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bodyCoverImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          opacity: ".8",
        }}
      >
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
              <div className={styles.stat}>{atk}</div>
            </div>
          ) : (
            <div style={{ width: "40px" }}></div>
          )}

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
    </div>
  );
};

export default Card;
