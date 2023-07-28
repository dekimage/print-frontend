import { ActionType, RewardType, TileType, Phase } from "./rpgTypes.js";
// Helper function to generate a random integer between min and max (inclusive)

export const shuffle = (array) => {
  const newArray = array.slice(); // Create a copy of the original array

  for (let i = newArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
    // Swap elements at randomIndex and i
    [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
  }

  return newArray;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Helper function to generate a random subset of an array
function getRandomSubset(arr, numElements) {
  const shuffled = [...arr];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, numElements);
}

// Function to generate a deck of companion cards
export const generateCompanionCards = (numCards) => {
  const cards = [];
  for (let i = 0; i < numCards; i++) {
    const id = i.toString(); // Or replace with a proper UUID
    const name = `Companion ${i + 1}`; // Or replace with a fantasy name
    const attack = getRandomInt(0, 12);
    const cost = getRandomInt(0, 10);
    const dominance = getRandomInt(0, 5);
    const types = getRandomSubset(Object.values(TileType), getRandomInt(1, 2));
    const actions = getRandomSubset(
      Object.values(ActionType),
      getRandomInt(1, 3)
    );
    const card = {
      id,
      types,
      attack,
      cost,
      name,
      actions,
      dominance,
    };
    cards.push(card);
  }

  const shuffledCards = shuffle(cards);
  return shuffledCards;
};

// Function to generate tiles
function generateTiles() {
  const tiles = [];
  const numTilesPerType = 12;

  Object.values(TileType).forEach((type) => {
    for (let i = 0; i < numTilesPerType; i++) {
      const actions = getRandomSubset(Object.values(ActionType), 3);
      const tile = {
        id: `${type}-${i}`,
        type,
        actions,
      };
      tiles.push(tile);
    }
  });

  return tiles;
}

export const generateBoard = () => {
  // generate 48 tiles
  const tiles = generateTiles();
  // Create a 7x7 array filled with null
  const board = Array(7)
    .fill()
    .map(() => Array(7).fill(null));

  // Shuffle the tiles
  const shuffledTiles = shuffle(tiles);

  // Assign tiles to the board, skipping the center tile
  let tileIndex = 0;
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      if (i === 3 && j === 3) continue; // Skip the center tile
      board[i][j] = shuffledTiles[tileIndex];
      tileIndex++;
    }
  }

  // Create and assign the central starting tile
  const centralTile = {
    id: "center",
    type: "neutral",
    actions: ["special"],
  };

  board[3][3] = centralTile;

  return board;
};

// Generate an array of 48 tiles
