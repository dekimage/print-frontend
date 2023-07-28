import { Grid, Button, Box, Typography } from "@mui/material";
import { observer } from "mobx-react";

const Deck = ({ deck, name, btnLabel, action, setView }) => {
  return (
    <Box
      height={150}
      minWidth={120}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="subtitle1">({deck.length})</Typography>
      <Typography variant="subtitle1">{name}</Typography>
      {btnLabel && (
        <Button
          sx={{ marginBottom: ".5rem" }}
          variant="contained"
          color="primary"
          onClick={() => action()}
        >
          {btnLabel}
        </Button>
      )}
      <Button variant="contained" color="primary" onClick={() => setView()}>
        View
      </Button>
    </Box>
  );
};

export default observer(Deck);
