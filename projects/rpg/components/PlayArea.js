import {
  Grid,
  Button,
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import CardsWrapper from "./CardsWrapper";
import { observer } from "mobx-react";
import Deck from "./Deck";
import { useState } from "react";

const PlayeArea = observer(({ player, drawCards }) => {
  const [isDiscardPileOpen, setIsDiscardPileOpen] = useState(false);
  const [isDeckOpen, setIsDeckOpen] = useState(false);

  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{
          position: "fixed",
          left: 0,
          bottom: 145,
          width: "100%",
          height: "140px",
          backgroundColor: "background.paper",
        }}
      >
        {/* First part */}
        <Grid item xs={1.5}>
          <Deck
            deck={player.discardPile}
            name="Discard Pile"
            setView={() => setIsDiscardPileOpen(true)}
          />
        </Grid>

        {/* Second part */}
        <Grid item xs={4.5}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              borderRadius: "10px",
            }}
          >
            <Box
              flexGrow={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CardsWrapper cards={player.hand} />
            </Box>
          </Box>
        </Grid>

        {/* Third part */}
        <Grid item xs={4.5}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            sx={{
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              borderRadius: "10px",
            }}
          >
            <Box
              flexGrow={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="subtitle1">
                <CardsWrapper cards={player.playArea} />
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Fourth part */}
        <Grid item xs={1.5}>
          <Deck
            deck={player.deck}
            name="Deck"
            action={() => drawCards(4)}
            btnLabel="draw"
            setView={() => setIsDeckOpen(true)}
          />
        </Grid>
      </Grid>
      <Dialog
        open={isDiscardPileOpen}
        onClose={() => setIsDiscardPileOpen(false)}
      >
        <DialogTitle>Discard Pile</DialogTitle>
        <DialogContent>
          <CardsWrapper cards={player.discardPile} />
        </DialogContent>
      </Dialog>

      <Dialog open={isDeckOpen} onClose={() => setIsDeckOpen(false)}>
        <DialogTitle>Deck</DialogTitle>
        <DialogContent>
          <CardsWrapper cards={player.deck} />
        </DialogContent>
      </Dialog>
    </>
  );
});

export default PlayeArea;
