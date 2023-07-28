import styles from "../styles/HeroCard.module.scss";
import cx from "classnames";

import iconCollection from "../assets/progress-collection-dark.svg";
import iconPlay from "../assets/progress-play-dark.svg";
import meleeIcon from "../assets/melee.png";
import rangeOmniIcon from "../assets/range-omni.png";
import rangeLinearIcon from "../assets/range-linear.png";
import goldIcon from "../assets/gold.png";
import mpIcon from "../assets/mp.png";

const Stat = ({ icon, stat, type }) => {
  let color = ["", ""];

  switch (type) {
    case "range":
      color = ["#cd84f1", "#c56cf0"];
      break;
    case "damage":
      color = ["#ff4d4d", "#ff3838"];
      break;
    case "mp":
      color = ["#CDFC7A", "#537E3F"];
      break;
    case "gold":
      color = ["#fffa65", "#fff200"];
      break;
    default:
      color = ["black", "white"];
  }

  return (
    <div className={styles.stat}>
      <div className={styles.stat_image}>
        <img src={icon} alt="" />
      </div>

      <div
        className={styles.damage}
        style={{
          backgroundImage: `linear-gradient(to right, ${color[0]} , ${color[1]})`,
        }}
      >
        {stat}
      </div>
    </div>
  );
};

const HeroCard = ({
  card: {
    id,
    name,
    range,
    range_type,
    image,
    damage,
    power,
    copies,
    effect,
    hero_face,
    gold,
    mp,
    rarity,
    description,
  },
}) => {
  // const rangeIcon =
  //   range_type === "omni"
  //     ? "/uploads/left_arrow_3885d74a24.png"
  //     : "/uploads/arrow_up_64f8e95829.png";
  const rangeIcon = range_type === "omni" ? rangeOmniIcon : rangeLinearIcon;
  const stats = [
    {
      stat: mp,
      type: "mp",
      icon: mpIcon,
    },
    {
      stat: range,
      type: "range",
      icon: rangeIcon,
    },
    {
      stat: damage,
      type: "damage",
      icon: meleeIcon,
    },
    {
      stat: gold,
      type: "gold",
      icon: goldIcon,
    },
  ];
  return (
    <div className={styles.card}>
      <div
        className={styles.header}
        style={{
          backgroundImage: `linear-gradient(to right, ${hero_face.color} , ${hero_face.background_color})`,
        }}
      >
        <div className={styles.profile}>
          <div className={styles.goldenBorder}>
            {hero_face.profile?.url && (
              <img
                src={`http://localhost:1337${hero_face.profile.url}`}
                style={{ height: "32px", width: "32px" }}
              />
            )}
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div
            className={styles.heroName}
            style={{ backgroundColor: hero_face.color }}
          >
            {hero_face.name}
            <div className={styles.copies}>
              {Array.from(Array(copies).keys()).map((c) => (
                <div
                  className={styles.copyBlock}
                  style={{ backgroundColor: `${hero_face.background_color}` }}
                ></div>
              ))}
            </div>
          </div>
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

      <div className={styles.borderMiddle}></div>

      <div className={styles.body}>{effect}</div>

      <div
        className={styles.id}
        style={{
          backgroundImage: `linear-gradient(to right, ${hero_face.color} , ${hero_face.background_color})`,
        }}
      >
        AA{id}
      </div>
      <div className={styles.power}>{power}</div>
      <div className={styles.stats}>
        {stats.map((s, i) => {
          return (
            <>
              {!!s.stat && <Stat stat={s.stat} icon={s.icon} type={s.type} />}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default HeroCard;
// #323178
// #6542ed
//#312633

// {range > 0 && (
//   <div className={styles.rangeOuter}>
//     <div className={styles.range}>{range}</div>
//     <div className={styles.range_typeOuter}>
//       <img src={`http://localhost:1337${range_image}`} style={{}} />
//     </div>
//   </div>
// )}
