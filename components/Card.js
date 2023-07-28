import Link from "next/link";
import ProgressBar from "./ProgressBar";
import styles from "../styles/Card.module.scss";
import cx from "classnames";

import iconCollection from "../assets/progress-collection-dark.svg";
import iconPlay from "../assets/progress-play-dark.svg";
import iconLock from "../assets/lock-white-border.svg";
import iconCommon from "../assets/common-rarity.svg";
import iconRare from "../assets/rare-rarity.svg";
import iconEpic from "../assets/epic-rarity.svg";
import iconLegendary from "../assets/legendary-rarity.svg";

const Card = ({ card }) => {
  console.log(card);
  return (
    <Link
      key={card.id}
      href={{ pathname: "/card/[id]", query: { id: card.id } }}
    >
      <div className={styles.card}>
        <div
          className={styles.background}
          style={{ "--background": card.realm.color }}
        ></div>
        <div
          className={styles.curve}
          style={{ "--background": card.realm.color }}
        ></div>
        <div className={styles.lock}>
          {/* <img src="http://localhost:1337/lock-white.png" /> */}
          <img src={iconLock} />
        </div>

        <div className={styles.realmLogo}>
          <img src={`http://localhost:1337${card.realm.background.url}`} />
        </div>

        <div className={styles.image}>
          <img src={`http://localhost:1337${card.image.url}`} />
        </div>

        <div className={styles.card_body}>
          {/* <div className={styles.lock}>
            <img src="http://localhost:1337/lock-black.png" />
          </div> */}
          <div className={styles.rarity_center}>
            {/* <div className={styles.type}>{card.type}</div> */}
            <div className={cx(styles.type, [styles[card.type]])}>
              {card.type}
            </div>
          </div>

          {/* <div className={styles.rarity}>
              {card.isOpen ? "open" : "collectable"}
            </div> */}

          {/* <div className={styles.rarity}>{card.type}</div> */}
          {/* 
          <div className={styles.rarity_center}>
            
            <div className={cx(styles.type, [styles[card.type]])}>
              {card.type}
            </div>
          </div> */}
          <div className={styles.name}>{card.name}</div>

          <div className={styles.progress_box}>
            <img src={iconPlay} height="10px" className={styles.progressIcon} />
            <ProgressBar progress={card.completed | 2} max={4} />

            <div className={styles.progressTextBox}>
              <div className={styles.progress_text}>{card.completed | 2}/4</div>
            </div>
          </div>
        </div>

        <div className={styles.progress_box}>
          <img
            src={iconCollection}
            height="10px"
            className={styles.progressIcon}
          />
          <ProgressBar progress={card.completed | 4} max={10} />
          <div className={styles.progressTextBox}>
            <div className={styles.progress_text}>{card.completed | 8}/10</div>
          </div>
        </div>
        <div className={styles.rarity}>
          {card.rarity === "common" && <img src={iconCommon} />}
          {card.rarity === "rare" && <img src={iconRare} />}
          {card.rarity === "epic" && <img src={iconEpic} />}
          {card.rarity === "legendary" && <img src={iconLegendary} />}
        </div>
      </div>
    </Link>
  );
};

export default Card;
