import styles from "../../styles/PirateCard.module.scss";
import goldIcon from "../../assets/pirates/gold.png";
import techBorderImg from "../../assets/battleRoyal/borderblue.png";
import natureBorderImg from "../../assets/battleRoyal/bordergreen.png";
import bodyCoverImg from "../../assets/battleRoyal/bodycover.png";
import { KeywordRenderer } from "./KeywordRenderer";

const Card = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const { name, faction, type, cost, hp, atk, keywords, effect, img } = card;

  return (
    <div
      className={`${styles.card} ${faction}`}
      onClick={() => {
        if (isEditMode) {
          handleAddCardToPrint(card);
        }
      }}
    >
      <div
        className={styles.header}
        style={{
          backgroundImage: `url(${bodyCoverImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          opacity: "0.8",
        }}
      >
        {isInPrint && <div className={styles.addedForPrint}>+</div>}
        {type == "Pirate" && (
          <div className="flex_center" style={{ position: "relative" }}>
            <img src={goldIcon} height="40px" alt="" />
            <div className={styles.stat}>{cost}</div>
          </div>
        )}
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
          {keywords && (
            <div className={styles["card-keywords"]}>
              <KeywordRenderer keywords={keywords} />
            </div>
          )}
          {effect && <div className={styles.effect}>{effect}</div>}
        </div>
      </div>
    </div>
  );
};

export default Card;
