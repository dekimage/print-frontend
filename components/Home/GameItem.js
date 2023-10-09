import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";

function GameItem({ game }) {
  return (
    <Card sx={{ width: "300px" }}>
      <Link href={game.link}>
        <a>
          <CardMedia
            component="img"
            height="300"
            image={game.image}
            alt={game.name}
          />
          <CardContent>
            <Typography variant="h6">{game.name}</Typography>
          </CardContent>
        </a>
      </Link>
    </Card>
  );
}

export default GameItem;
