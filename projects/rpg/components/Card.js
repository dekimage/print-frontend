import {
  Card as MuiCard,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import ReactDOM from "react-dom";
import store from "../rpgStore";
import { CARD_ACTIONS } from "../rpgTypes";

import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const CloseButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} color="secondary">
      <ClearIcon />
    </IconButton>
  );
};
{
  /* <CloseButton onClick={handleClose} /> */
}
const Card = ({ card }) => (
  <MuiCard
    sx={{
      width: 80,
      height: 140,
      m: 0.5,
      p: 0,
      minWidth: "80px",
      cursor: "pointer",
    }}
  >
    <CardContent sx={{ padding: 0.5 }}>
      <Typography variant="h5" component="div">
        {card.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Attack: {card.attack_power}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Cost: {card.cost}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Dominance: {card.dominance}
      </Typography>
      {/* Display other card properties... */}
    </CardContent>
  </MuiCard>
);

const CardWithZoom = ({ card, action = CARD_ACTIONS.PLAY }) => {
  const { playCard, discardCard, buyCard } = store;
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleHover = (hovered) => {
    setIsHovered(hovered);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handlePlay = (cardId) => {
    if (action == "play") {
      playCard(cardId);
    }
    if (action == "buy") {
      buyCard(cardId);
    }
    if (action == "discard") {
      discardCard(cardId);
    }
  };

  const zoomedCard = (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1500,
        transform: "scale(3)",
        transformOrigin: "top left",
      }}
    >
      <Card card={card} />
      {isClicked && (
        <Button variant="contained" onClick={() => handlePlay(card.id)}>
          {action}
        </Button>
      )}
    </div>
  );

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      onClick={() => handleClick()}
    >
      {(isHovered || isClicked) &&
        ReactDOM.createPortal(zoomedCard, document.body)}
      <Card card={card} />
    </div>
  );
};

export default CardWithZoom;
