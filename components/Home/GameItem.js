import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import styles from "../../styles/Index.module.scss";
import { LinearProgress } from "@mui/material";

function GameItem({ game }) {
  return (
    <Card sx={{ width: "300px", height: "550px" }}>
      <Link href={game.link}>
        <a>
          <div className={styles.boxCover}>
            <img height="220px" src={game.image} alt={game.name} />
          </div>

          <CardContent>
            <div style={{ fontSize: "28px" }}>{game.name}</div>
          </CardContent>
          <div style={{ margin: "0 1rem" }}>
            Game Progress
            <div>
              <LinearProgress value={game.progress} variant="determinate" />
              <div>{game.progress}%</div>
            </div>
            <div className={styles.kickstarterLink}>View Game</div>
            <div className={styles.kickstarterLinkDisabled}>
              Kickstarter Link
            </div>
            <div style={{ fontStyle: "italic", color: "#8a8a8a" }}>
              When progress is at 100% the Kickstarter Link will be available
            </div>
          </div>
        </a>
      </Link>
    </Card>
  );
}

export default GameItem;
