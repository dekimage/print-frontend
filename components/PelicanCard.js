import React from "react";

import meleeIcon from "../assets/sword.png";
import rangeOmniIcon from "../assets/explore.png";
import goldIcon from "../assets/coin.png";
import mpIcon from "../assets/boots.png";

import styles from "../styles/PelicanCard.module.scss";
import ReactMarkdown from "react-markdown";

const Stat = ({ icon, stat, type }) => {
  let color = ["", ""];

  switch (type) {
    case "explore":
      color = ["#7cb5ff", "#4193ff"];
      break;
    case "attack":
      color = ["#ff8e8e", "#ff3838"];
      break;
    case "movement":
      color = ["#CDFC7A", "#537E3F"];
      break;
    case "gold":
      color = ["#fffb95", "#ffd900"];
      break;
    default:
      color = ["black", "white"];
  }

  return (
    <div
      className={styles.stat}
      style={{
        backgroundImage: `linear-gradient(to right, ${color[0]} , ${color[1]})`,
      }}
    >
      <div className={styles.stat_image}>
        <img src={icon} alt="" />
      </div>

      <div className={styles.damage}>{stat}</div>
    </div>
  );
};

const PelicanCard = ({
  card: {
    id,
    name,
    movement,
    explore,
    image,
    attack,
    effect,
    gold,
    tribe,
    proffesion,
    cost,
  },
}) => {
  const getColor = (tribe) => {
    let colors = { color: "#1F3B2E", background_color: "#95C72D" };

    switch (tribe) {
      case "reptile":
        colors = { color: "#498100", background_color: "#c9ff56" };
        break;
      case "bird":
        colors = { color: " #89b2ff ", background_color: "#327aff" };
        break;
      case "mole":
        colors = { color: "#1F3B2E", background_color: "#f3bc46" };
        break;
      case "goat":
        colors = { color: "#1F3B2E", background_color: "#DA7B0C" };
        break;
      default:
        colors = { color: "#1F3B2E", background_color: "#95C72D" };
    }
    return colors;
  };
  const hero_face = tribe && getColor(tribe);

  const stats = [
    {
      stat: attack,
      type: "attack",
      icon: meleeIcon,
    },
    {
      stat: movement,
      type: "movement",
      icon: mpIcon,
    },
    {
      stat: explore,
      type: "explore",
      icon: rangeOmniIcon,
    },
    {
      stat: gold,
      type: "gold",
      icon: goldIcon,
    },
  ];
  console.log(hero_face.color);
  return (
    <>
      {true ? (
        <div className={styles.aiCard}>
          <img
            src={`http://localhost:1337/uploads/card_template_2_0448a75776.png`}
            height
          />
          <div className={styles.aiCardArt}>
            <img src={`http://localhost:1337${image.url}`} />
          </div>
          <div className={styles.aiCost}>{cost}</div>
          <div className={styles.aiTribe}>
            <span
              style={{
                // transform: "rotate(20deg)",
                width: "100px",
                WebkitTextFillColor: hero_face.background_color,
              }}
            >
              {tribe}
            </span>
            &#x2022;
            {proffesion}
          </div>
          <div className={styles.aiEffect}>{effect}</div>
          <div className={styles.stats}>
            {stats.map((s, i) => {
              return (
                <>
                  {!!s.stat && (
                    <Stat stat={s.stat} icon={s.icon} type={s.type} />
                  )}
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <div className={styles.card}>
          <div
            className={styles.header}
            style={{
              backgroundImage: `linear-gradient(to right, ${hero_face.color} , ${hero_face.background_color})`,
            }}
          >
            <div style={{ width: "100%" }}>
              <div className={styles.name}>{name}</div>
            </div>
          </div>

          <div style={{ width: "220px", minHeight: "160px" }}>
            {image && (
              <img
                src={`http://localhost:1337${image.url}`}
                style={{ width: "100%", height: "160px" }}
              />
            )}
          </div>

          {/* <div className={styles.borderMiddle}></div> */}

          <div className={styles.body}>
            <div className={styles.tribe}>
              {tribe} &#x2022; {proffesion}
            </div>
            <ReactMarkdown>{effect}</ReactMarkdown>
          </div>

          <div
            className={styles.id}
            style={{
              backgroundImage: `linear-gradient(to right, ${hero_face.color} , ${hero_face.background_color})`,
            }}
          >
            AA{id}
          </div>
          <div className={styles.cost}>{cost}</div>
          <div className={styles.stats}>
            {stats.map((s, i) => {
              return (
                <>
                  {!!s.stat && (
                    <Stat stat={s.stat} icon={s.icon} type={s.type} />
                  )}
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default PelicanCard;
