import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GameItem from "../components/Home/GameItem";
import styles from "../styles/Index.module.scss";

import cover from "../assets/Home/sky.png";
import comingSoonImage from "../assets/Home/+7.png";
import logoImage from "../assets/Home/armana logo.png";
import battleRoyalCover from "../assets/Home/lane-royal-box.png";
import piratesCover from "../assets/Home/pirate-deception-box.png";
import egyptCover from "../assets/Home/trade-route-tactics-box.png";
import galaxyCover from "../assets/Home/galactic-spaceships-box.png";
import cookingCover from "../assets/Home/cooking-madness-box.png";
import hodCover from "../assets/Home/heroes-of-dominion-box.png";

import kickstarterImg from "../assets/Home/kickstarter.png";

import hypeImg from "../assets/Home/hype.png";

import { Alert, Card, CardContent, CardMedia } from "@mui/material";
import Link from "next/link";

export default function Home() {
  const games = [
    {
      id: 1,
      name: "Cooking Madness",
      image: cookingCover,
      link: "/cooking-madness",
      progress: 100,
    },
    {
      id: 2,
      name: "Pirate Deception",
      image: piratesCover,
      link: "/pirates",
      progress: 100,
    },
    {
      id: 3,
      name: "Lane Royale",
      image: battleRoyalCover,
      link: "/lane-royale",
      progress: 100,
    },
    {
      id: 4,
      name: "Trade Route Tactics",
      image: egyptCover,
      link: "/trt",
      progress: 100,
    },

    {
      id: 5,
      name: "Heroes of Dominion",
      image: hodCover,
      link: "/heroes-of-dominion",
      progress: 15,
    },

    {
      id: 6,
      name: "Galaxy Spaceships",
      image: galaxyCover,
      link: "/galaxy",
      progress: 15,
    },
  ];

  const [isGoogleFormOpen, setIsGoogleFormOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logoWrapper}>
          <img height="50px" src={logoImage} alt="logo" />
        </div>
        Armana Games
      </div>

      <div
        className={styles.headerContainer}
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className={styles.titleWrapper}>Our Games</div>
      </div>
      <div className={styles.alertContainer}>
        <div className={styles.hypeImg}>
          <img src={hypeImg} alt="hype img" height="180px" />
        </div>
        <div>
          <div className="flex_center mb1">
            <img src={kickstarterImg} alt="kickstarter" height="34px" />
          </div>

          <Alert
            severity="info"
            sx={{ marginBottom: "2rem", marginTop: "2rem", fontSize: "18px" }}
          >
            Kickstarter coming soon! Fill the one-question Google Form to get
            notified when it launches.
          </Alert>
          <div className={styles.ksBtn}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKi8rWYoQ1IVQaIsPUAicS8kNiskug1baUv5oICZkARg65kQ/viewform?usp=sf_link">
              <Button
                type="submit"
                sx={{
                  height: "48px",
                  backgroundColor: "#05ce78",
                }}
                variant="contained"
                disableElevation
                // onClick={() =>
                //   setIsGoogleFormOpen(isGoogleFormOpen ? false : true)
                // }
              >
                {isGoogleFormOpen
                  ? "Close Google Form"
                  : "I want to be notified"}
              </Button>
            </a>
            <div style={{ marginTop: ".5rem", fontStyle: "italic" }}>
              Opens Google Form with 1 Question
            </div>
          </div>

          {isGoogleFormOpen && (
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfKi8rWYoQ1IVQaIsPUAicS8kNiskug1baUv5oICZkARg65kQ/viewform?embedded=true"
              width="640"
              height="518"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          )}

          {/* <form action="">
            <TextField
              required
              id="filled-required"
              label="Email"
              variant="filled"
            />
            <Button
              type="submit"
              sx={{
                height: "56px",
                backgroundColor: "#05ce78",
                marginLeft: "1rem",
              }}
              variant="contained"
              disableElevation
            >
              Notify me
            </Button>
          </form> */}
        </div>
      </div>

      <div className={styles.gamesContainer}>
        {games.map((game) => (
          <GameItem key={game.id} game={game} />
        ))}
        <Card sx={{ width: "300px", height: "550px" }}>
          <div style={{ fontSize: "80px", textAlign: "center" }}>
            Coming Soon
          </div>
          {/* <CardMedia
            component="img"
            height="300"
            image={comingSoonImage}
            alt={"+7"}
          /> */}
          <CardContent sx={{ fontSize: "28px" }}>
            + 7 New Games Coming Soon...
          </CardContent>
        </Card>
      </div>
      <div className={styles.footer}>
        {/* <div className={styles.link}>Contact</div> */}
        <div className={styles.link}>Armana Solutions LLC &copy; 2023</div>
      </div>
    </div>
  );
}
