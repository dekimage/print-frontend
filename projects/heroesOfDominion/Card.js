// import orcAvatar from "../../assets/heroesOfDominion/orcAvatar.png";
// import priestAvatar from "../../assets/heroesOfDominion/priestAvatar.png";
import monkeyAvatar from "../../assets/heroesOfDominion/monkeyAvatar.png";
import archerAvatar from "../../assets/heroesOfDominion/archerAvatar.png";
import blinkyAvatar from "../../assets/heroesOfDominion/blinkyAvatar.png";
import hecarimAvatar from "../../assets/heroesOfDominion/hecarimAvatar.png";
import goblinAvatar from "../../assets/heroesOfDominion/goblinAvatar.png";
import assasinAvatar from "../../assets/heroesOfDominion/assasinAvatar.png";
import warlockAvatar from "../../assets/heroesOfDominion/warlockAvatar.png";
import mantisAvatar from "../../assets/heroesOfDominion/mantisAvatar.png";
import demonAvatar from "../../assets/heroesOfDominion/demonAvatar.png";
import orcAvatar from "../../assets/heroesOfDominion/orcAvatar.png";

import basicIcon from "../../assets/heroesOfDominion/basic.png";
import superIcon from "../../assets/heroesOfDominion/super.png";
import megaIcon from "../../assets/heroesOfDominion/mega.png";

import mpIcon from "../../assets/heroesOfDominion/mp.png";
import cardIcon from "../../assets/heroesOfDominion/card.png";
import damageIcon from "../../assets/heroesOfDominion/damage.png";

import styles from "../../styles/HodCard.module.scss";
import { PlusShape, SingleSquare, ThreeSquaresLine } from "./tetris";

const renderRangeIcon = (range) => {
  switch (range) {
    case "self":
      return <SingleSquare />;
    case "any":
      return <PlusShape />;
    case "line":
      return <ThreeSquaresLine />;
    default:
      return <PlusShape />;
  }
};

const commonStyle = {
  borderRadius: "5px",
  padding: "0px 5px",
  fontWeight: "bold",
  border: "1px solid black",
};

const pushStyle = {
  ...commonStyle,
  backgroundColor: "#fff3b0",
};

const pullStyle = {
  ...commonStyle,
  backgroundColor: "#e86363",
};

const teleportStyle = {
  ...commonStyle,
  backgroundColor: "#78b2e8",
};

const jumpStyle = {
  ...commonStyle,
  backgroundColor: "#c17a68",
};

const swapStyle = {
  ...commonStyle,
  backgroundColor: "#bf8ddd",
};

function EffectText({ effect }) {
  const keywords = {
    "Gain 1 MP": (
      <span>
        Gain 1 <img src={mpIcon} alt="MP" />
      </span>
    ),
    "Gain 2 MP": (
      <span>
        Gain 2 <img src={mpIcon} alt="MP" />
      </span>
    ),
    "Gain 3 MP": (
      <span>
        Gain 3 <img src={mpIcon} alt="MP" />
      </span>
    ),
    "Draw 1 Card": (
      <span style={{ gap: "3px" }}>
        Draw 1 <img src={cardIcon} alt="MP" />
      </span>
    ),
    "Draw 2 Cards": (
      <span style={{ gap: "3px" }}>
        Draw 2 <img src={cardIcon} alt="MP" />
      </span>
    ),
    "Draw 3 Cards": (
      <span style={{ gap: "3px" }}>
        Draw 3 <img src={cardIcon} alt="MP" />
      </span>
    ),
    "Push 1": <span style={pushStyle}>Push 1</span>,
    "Push 2": <span style={pushStyle}>Push 2</span>,
    "Push 3": <span style={pushStyle}>Push 3</span>,
    "Pull 1": <span style={pullStyle}>Pull 1</span>,
    "Pull 2": <span style={pullStyle}>Pull 2</span>,
    "Pull 3": <span style={pullStyle}>Pull 3</span>,
    "Teleport 1": <span style={teleportStyle}>Teleport 1</span>,
    "Teleport 2": <span style={teleportStyle}>Teleport 2</span>,
    "Teleport 3": <span style={teleportStyle}>Teleport 3</span>,
    "Teleport 9": <span style={teleportStyle}>Teleport 9</span>,
    "Jump 1": <span style={jumpStyle}>Jump 1</span>,
    "Jump 2": <span style={jumpStyle}>Jump 2</span>,
    "Jump 3": <span style={jumpStyle}>Jump 3</span>,
    Swap: <span style={swapStyle}>Swap</span>,
    "Deal 1 Dmg": (
      <span style={{ gap: "3px" }}>
        Deal 1 <img src={damageIcon} alt="Dmg" />
      </span>
    ),
    "Deal 2 Dmg": (
      <span style={{ gap: "3px" }}>
        Deal 2 <img src={damageIcon} alt="Dmg" />
      </span>
    ),
    "Deal 3 Dmg": (
      <span style={{ gap: "3px" }}>
        Deal 3 <img src={damageIcon} alt="Dmg" />
      </span>
    ),
  };

  const regex = new RegExp(Object.keys(keywords).join("|"), "gi");

  const parts = effect.split(regex).reduce((acc, part, i, partsArray) => {
    if (i > 0) {
      const match = effect.match(regex)[i - 1];
      acc.push(keywords[match]);
    }
    acc.push(part);
    return acc;
  }, []);

  return <div className={styles.effect}>{parts}</div>;
}

const rarityCopies = {
  basic: 3,
  super: 2,
  mega: 1,
};

const getRarityIcon = (rarity) => {
  const rarityIcons = {
    basic: basicIcon,
    super: superIcon,
    mega: megaIcon,
  };

  return rarityIcons[rarity];
};

export const heroIcon = (type) => {
  const heroIcons = {
    // Orc: orcAvatar,
    // Priest: priestAvatar,
    Monkey: monkeyAvatar,
    Archer: archerAvatar,
    Blinky: blinkyAvatar,
    Hecarim: hecarimAvatar,
    Demon: demonAvatar,
    Goblin: goblinAvatar,
    Assasin: assasinAvatar,
    Warlock: warlockAvatar,
    Mantis: mantisAvatar,
    Orc: orcAvatar,
  };
  return heroIcons[type];
};

const getCardBgByType = (hero, isBody = false) => {
  //  FOOTER TRUE = ROW 1 = BODY | ROW 2 = RARITY BOX
  const colorsByType = {
    Monkey: isBody ? "#a2d2ff" : "#4394e0",
    Archer: isBody ? "#fff3b0" : "#fce97c ",
    Blinky: isBody ? "#AFDCFF" : "#657FB4",
    Demon: isBody ? "#c17a68" : "#916155",
    Hecarim: isBody ? "#b7b7a4" : "#6b705c",
    Goblin: isBody ? "#ff9c9c" : "#e75e5e",
    Assasin: isBody ? "#fff3b0" : "#e5b149",
    Warlock: isBody ? "#bf8ddd" : "#6F388F",
    Mantis: isBody ? "#BFD673" : "#01A664",
    Orc: isBody ? "#e8b399" : "#bc3636",
  };

  return colorsByType[hero];
};

const getBgByHero = (hero) => {
  // BORDER + TYPE BORDER
  const colorsByType = {
    Monkey: "#F4C100",
    Orc: "#ff9c9c",
    Demon: "#6e618e",
    Archer: "#9b5de5",
    Blinky: "#F98E28",
    Priest: "#b07d62",
    Hecarim: "#fcbf49",
    Goblin: "#f4a802",
    Assasin: "#686041",
    Warlock: "#bee530",
    Mantis: "#8B3000",
    Orc: "#637a01",
  };

  return colorsByType[hero];
};

const generateIcon = (card) => {
  return heroIcon(card.hero);
};

const Card = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const { name, type, effect, hero, rarity, range, img, rangeType } = card;

  return (
    <div
      className={styles.card}
      // style={{ border: `10px solid ${getCardBgByType(hero, true)}` }}
      onClick={() => {
        if (isEditMode) {
          handleAddCardToPrint(card);
        }
      }}
    >
      <div
        className={styles.header}
        style={{
          // backgroundImage: `url(${cardTypeImgCover(type)})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          // backgroundColor: getCardBgByType(hero),
        }}
      >
        {isInPrint && <div className={styles.addedForPrint}>+</div>}

        <div
          className={styles.type}
          style={{
            backgroundColor: getBgByHero(hero),
          }}
        >
          <img src={generateIcon(card)} height="30px" alt="" />
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

      <div
        style={{
          height: "80%",
          borderTop: `10px solid ${getBgByHero(hero)}`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: getCardBgByType(hero, true),
        }}
      >
        <div className={styles.body}>
          <div
            className={styles.rangeAndRarityBox}
            style={{
              backgroundColor: getCardBgByType(hero),
            }}
          >
            <div className={styles.range}>
              {range}
              {renderRangeIcon(rangeType)}
            </div>
            <div className={styles.rarity}>
              <img
                src={getRarityIcon(rarity)}
                height={16}
                width={16}
                style={{ marginRight: "2px", marginBottom: "5px" }}
              />
              {rarity} {`(x${rarityCopies[rarity]})`}
            </div>
          </div>
          {/* {effect && <div className={styles.effect}>{effect}</div>} */}
          <EffectText effect={effect} />
        </div>
      </div>
    </div>
  );
};

export default Card;
