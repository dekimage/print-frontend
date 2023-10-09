import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GameItem from "../components/Home/GameItem";
import styles from "../styles/Index.module.scss";

import cover from "../assets/Home/allgamescover.png";
import battleRoyalCover from "../assets/Home/battleRoyalCover.png";
import egyptCover from "../assets/Home/egyptCover.png";
import galaxyCover from "../assets/Home/galaxyCover.png";

export default function Home() {
  const games = [
    {
      id: 1,
      name: "Battle Royal",
      image: battleRoyalCover,
      link: "/battle-royal",
    },
    { id: 1, name: "Egypt Merchants", image: egyptCover, link: "/egypt" },
    {
      id: 1,
      name: "Galaxy Spaceships",
      image: galaxyCover,
      link: "/galaxy",
    },
  ];

  return (
    <div className={styles.container}>
      <div
        className={styles.headerContainer}
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className={styles.titleWrapper}>My Games</div>
      </div>

      <div className={styles.gamesContainer}>
        {games.map((game) => (
          <GameItem key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
