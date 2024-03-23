import basicIcon from "../../assets/heroesOfDominion/basic.png";
import superIcon from "../../assets/heroesOfDominion/super.png";
import megaIcon from "../../assets/heroesOfDominion/mega.png";
import gigaIcon from "../../assets/heroesOfDominion/giga.png";
import eliteIcon from "../../assets/heroesOfDominion/elite.png";

import mpIcon from "../../assets/heroesOfDominion/mp.png";
import cardIcon from "../../assets/heroesOfDominion/card.png";
import damageIcon from "../../assets/heroesOfDominion/damage.png";
import heartIcon from "../../assets/heroesOfDominion/heart.png";
import diceIcon from "../../assets/heroesOfDominion/dice.png";
import shieldIcon from "../../assets/heroesOfDominion/shield.png";

import styles from "../../styles/minimizeCard.module.scss";

function calculateAtk(atkDice, atkJson) {
  const totalPossibleOutcomes = 6;

  let weightedAverageDamagePerDice = atkJson.reduce((sum, action) => {
    const [start, end] = action.on.split("-").map(Number);

    const outcomesInRange = end ? end - start + 1 : 1;

    const probability = outcomesInRange / totalPossibleOutcomes;

    const damageValue = parseInt(action.do.split(" ")[1], 10);

    return sum + probability * damageValue;
  }, 0);

  const totalAverageDamage = weightedAverageDamagePerDice * atkDice;
  return parseFloat(parseFloat(totalAverageDamage).toFixed(2));
}

function EffectText({ effect }) {
  const createSpan = ({ action, damage, imageSrc, altText }) => (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: "3px",
      }}
    >
      {action} {damage} <img src={imageSrc} height={"12px"} alt={altText} />
    </span>
  );

  const keywords = {
    "deal 1 dmg": createSpan({
      action: "Deal",
      damage: 1,
      imageSrc: damageIcon,
      altText: "Dmg",
    }),
    "deal 2 dmg": createSpan({
      action: "Deal",
      damage: 2,
      imageSrc: damageIcon,
      altText: "Dmg",
    }),
    "deal 3 dmg": createSpan({
      action: "Deal",
      damage: 3,
      imageSrc: damageIcon,
      altText: "Dmg",
    }),
    "block 1 dmg": createSpan({
      action: "Block",
      damage: 1,
      imageSrc: shieldIcon,
      altText: "Block",
    }),
    "block 2 dmg": createSpan({
      action: "Block",
      damage: 2,
      imageSrc: shieldIcon,
      altText: "Block",
    }),
    "block 3 dmg": createSpan({
      action: "Block",
      damage: 3,
      imageSrc: shieldIcon,
      altText: "Block",
    }),
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
  1: 6,
  2: 4,
  3: 3,
  4: 2,
  5: 1,
};

const getCopies = (tier) => {
  return rarityCopies[tier];
};

const getTierIcon = (tier) => {
  const tierIcons = {
    1: basicIcon,
    2: superIcon,
    3: megaIcon,
    4: gigaIcon,
    5: eliteIcon,
  };

  return tierIcons[tier];
};

const Card = ({ card, isEditMode, handleAddCardToPrint, isInPrint }) => {
  const {
    name,
    tier,
    hp,
    mp,
    heroImg,
    faction,
    atkDice,
    defDice,
    atkJson,
    defJson,
  } = card;

  const showCalculation = false;

  const uniqueId = Math.random().toString(36).substr(2, 9);
  const className = `${styles.art}-${uniqueId}`;

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
      <div className={styles.hpBox}>
        {hp}
        <img src={heartIcon} height={16} width={16} />
      </div>

      <div className={styles.mpBox}>
        {mp}
        <img src={mpIcon} height={16} width={16} />
      </div>
      <div
        className={styles.header}
        style={{
          backgroundColor: "black",
        }}
      >
        {isInPrint && <div className={styles.addedForPrint}>+</div>}

        <div className={styles.tier}>
          <img src={getTierIcon(tier)} height={16} width={16} />
          {tier}
        </div>

        <div className={styles.qty}>x{getCopies(tier)}</div>

        <div className={styles.name}>{name}</div>
      </div>

      <div className={`${styles.art} ${className}`}>
        {/* Inject a style tag to add styles specific to this component instance */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
      .${className}::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${faction.imgUrl});
        background-size: cover;
        background-position: center center;
        opacity: 0.8;
        z-index: -1;
      }
    `,
          }}
        />
        <img
          src={heroImg}
          alt="hero"
          height="150px"
          style={{ marginBottom: "2px" }}
        />
      </div>

      <div
        style={{
          height: "80%",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.body}>
          <div className={styles.horizontalLine}>
            <div
              className={styles.atkSymbol}
              style={{ backgroundColor: faction.color }}
            >
              <div className={styles.atklabel}>Attack</div>
              <div
                style={{ display: "flex", gap: "2px", alignItems: "center" }}
              >
                <div style={{ fontSize: "22px" }}>{atkDice}</div>
                <img src={diceIcon} height={"16px"} alt="dice" />
              </div>
            </div>
            <div
              className={styles.atkBox}
              style={{ backgroundColor: faction.secondaryColor }}
            >
              {atkJson.map((effect, i) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    padding: "0 0.25rem",
                  }}
                >
                  <div
                    className={styles.on}
                    style={{ backgroundColor: faction.color }}
                  >
                    {effect.on}
                  </div>
                  <EffectText key={i} effect={effect.do} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.horizontalLine}>
            <div
              className={styles.atkSymbol}
              style={{ backgroundColor: faction.color }}
            >
              <div className={styles.deflabel}>Defend</div>
              <div
                style={{ display: "flex", gap: "2px", alignItems: "center" }}
              >
                <div style={{ fontSize: "22px" }}>{defDice}</div>
                <img src={diceIcon} height={"16px"} alt="dice" />
              </div>
            </div>

            <div
              className={styles.atkBox}
              style={{ backgroundColor: faction.secondaryColor }}
            >
              {defJson.map((effect, i) => (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    padding: "0 0.25rem",
                  }}
                >
                  <div
                    className={styles.on}
                    style={{ backgroundColor: faction.color }}
                  >
                    {effect.on}
                  </div>
                  <EffectText key={i} effect={effect.do} />
                </div>
              ))}
              {showCalculation && (
                <>
                  <div className={styles.calculated}>
                    Attack: {calculateAtk(atkDice, atkJson)}
                  </div>
                  <div className={styles.calculated}>
                    Block: {calculateAtk(defDice, defJson)}
                  </div>
                  <div className={styles.calculated}>
                    Total Value:
                    {calculateAtk(defDice, defJson) +
                      calculateAtk(atkDice, atkJson)}
                    + {hp} =
                    {calculateAtk(defDice, defJson) +
                      calculateAtk(atkDice, atkJson) +
                      hp}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
