// New Game Card Data

// Helper function to generate copies of cards if needed
export const generateCopies = (cards) => {
  const result = [];
  cards.forEach((card) => {
    for (let i = 0; i < (card.quantity || 1); i++) {
      result.push({ ...card });
    }
  });
  return result;
};

// Resource symbols mapping
export const resourceSymbols = {
  stone: "🪨",
  wood: "🪵",
  wheat: "🌾",
  water: "💧",
};

// Resource colors for display
export const resourceColors = {
  stone: "#8B4513",
  wood: "#8FBC8F",
  wheat: "#FFD700",
  water: "#4169E1",
};

// Tier point colors
export const tierColors = {
  tier1: "#FF4444", // Red
  tier2: "#8B4513", // Brown
  tier3: "#8A2BE2", // Purple
};

// Tier point symbols
export const tierSymbols = {
  tier1: "●",
  tier2: "●",
  tier3: "●",
};

// New Game Cards
const gameCards = [
  {
    id: "1",
    name: "Stone Quarry",
    cost: { water: 2, wheat: 1 },
    tier1Points: 2,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/a/a5/Lakkari_Sacrifice_full.jpg/revision/latest?cb=20170302150448",
    rewards: { stone: 3 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "2",
    name: "Lumber Mill",
    cost: { stone: 1, water: 2 },
    tier1Points: 1,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/f/fd/Stampede_full.jpg/revision/latest/scale-to-width-down/1000?cb=20170517135221",
    rewards: { wood: 4 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "3",
    name: "Farm Field",
    cost: { wood: 2, water: 1 },
    tier1Points: 2,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/e/e8/Biology_Project_full.jpg/revision/latest/scale-to-width-down/1000?cb=20180713120316",
    rewards: { wheat: 3, water: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "4",
    name: "Water Well",
    cost: { stone: 2, wheat: 1 },
    tier1Points: 1,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/3/31/Gather_Your_Party_full.jpg/revision/latest/scale-to-width-down/1000?cb=20171105110325",
    rewards: { water: 4 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "5",
    name: "Mining Camp",
    cost: { wood: 3, water: 1 },
    tier1Points: 3,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/d/df/Spider_Bomb_full.jpg/revision/latest/scale-to-width-down/1000?cb=20180711184908",
    rewards: { stone: 2, wood: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "6",
    name: "Forest Grove",
    cost: { stone: 1, wheat: 2 },
    tier1Points: 2,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/8/88/Rain_of_Toads_full.jpg/revision/latest/scale-to-width-down/1000?cb=20181104152432",
    rewards: { wood: 3, water: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "7",
    name: "Grain Farm",
    cost: { wood: 2, stone: 1 },
    tier1Points: 1,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/d/d5/Plague_of_Death_full.jpg/revision/latest/scale-to-width-down/1000?cb=20191026081240",
    rewards: { wheat: 4 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "8",
    name: "Spring Source",
    cost: { wheat: 3, stone: 1 },
    tier1Points: 2,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/c/cb/Untapped_Potential_full.jpg/revision/latest/scale-to-width-down/1000?cb=20210528162130",
    rewards: { water: 3, wheat: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "9",
    name: "Rock Formation",
    cost: { water: 3, wood: 1 },
    tier1Points: 2,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/b/bd/From_the_Depths_full.jpg/revision/latest/scale-to-width-down/1000?cb=20220408133836",
    rewards: { stone: 4 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "10",
    name: "Timber Forest",
    cost: { wheat: 2, water: 2 },
    tier1Points: 3,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/5/5b/Sinstone_Graveyard_full.jpg/revision/latest/scale-to-width-down/1000?cb=20220806175402",
    rewards: { wood: 2, stone: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "11",
    name: "Wheat Field",
    cost: { stone: 2, wood: 2 },
    tier1Points: 2,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/f/f4/Frostwolf_Kennels_full.jpg/revision/latest/scale-to-width-down/1000?cb=20211205155302",
    rewards: { wheat: 3, water: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "12",
    name: "Water Reservoir",
    cost: { wood: 3, wheat: 1 },
    tier1Points: 1,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/a/a0/Sanguine_Depths_full.jpg/revision/latest/scale-to-width-down/1000?cb=20220806175313",
    rewards: { water: 4 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "13",
    name: "Granite Mine",
    cost: { water: 2, wheat: 2 },
    tier1Points: 2,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/c/c8/Prison_of_Yogg-Saron_full.jpg/revision/latest/scale-to-width-down/1000?cb=20230629185250",
    rewards: { stone: 3, wood: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "14",
    name: "Oak Grove",
    cost: { stone: 3, water: 1 },
    tier1Points: 3,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/2/2b/Guff_Trips_full.jpg/revision/latest/scale-to-width-down/1000?cb=20210614093531",
    rewards: { wood: 4 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "15",
    name: "Barley Farm",
    cost: { wood: 2, stone: 2 },
    tier1Points: 2,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/a/a8/Awaken_the_Makers_full.jpg/revision/latest/scale-to-width-down/1000?cb=20170320114506",
    rewards: { wheat: 3, water: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "16",
    name: "Crystal Spring",
    cost: { wheat: 3, wood: 1 },
    tier1Points: 1,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/c/cc/Corrupting_Mist_full.jpg/revision/latest/scale-to-width-down/1000?cb=20170406182010",
    rewards: { water: 3, stone: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "17",
    name: "Marble Quarry",
    cost: { water: 3, wheat: 2 },
    tier1Points: 3,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/4/4f/Fire_Plume%27s_Heart_full.jpg/revision/latest/scale-to-width-down/1000?cb=20170406180450",
    rewards: { stone: 4 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "18",
    name: "Pine Forest",
    cost: { stone: 2, wheat: 3 },
    tier1Points: 2,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/6/6e/Hallucination_full.jpg/revision/latest/scale-to-width-down/1000?cb=20170517133831",
    rewards: { wood: 3, water: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "19",
    name: "Corn Field",
    cost: { water: 2, stone: 3 },
    tier1Points: 2,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/0/0a/Open_the_Waygate_full.jpg/revision/latest?cb=20170402144853",
    rewards: { wheat: 4 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "20",
    name: "Aquifer",
    cost: { wood: 3, stone: 2 },
    tier1Points: 3,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/e/e9/Jungle_Giants_full.jpg/revision/latest/scale-to-width-down/1000?cb=20170402075719",
    rewards: { water: 3, wheat: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "21",
    name: "Limestone Mine",
    cost: { wheat: 3, water: 3 },
    tier1Points: 3,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/f/f4/Frostwolf_Kennels_full.jpg/revision/latest/scale-to-width-down/1000?cb=20211205155302",
    rewards: { stone: 2, wood: 2 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "22",
    name: "Cedar Woods",
    cost: { stone: 3, wheat: 2 },
    tier1Points: 2,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/a/a0/Sanguine_Depths_full.jpg/revision/latest/scale-to-width-down/1000?cb=20220806175313",
    rewards: { wood: 3, stone: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "23",
    name: "Rice Paddy",
    cost: { water: 3, stone: 3 },
    tier1Points: 3,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/c/c8/Prison_of_Yogg-Saron_full.jpg/revision/latest/scale-to-width-down/1000?cb=20230629185250",
    rewards: { wheat: 3, water: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "24",
    name: "Mineral Spring",
    cost: { wood: 2, wheat: 3 },
    tier1Points: 2,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/2/2b/Guff_Trips_full.jpg/revision/latest/scale-to-width-down/1000?cb=20210614093531",
    rewards: { water: 4 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "25",
    name: "Basalt Quarry",
    cost: { wheat: 2, wood: 3 },
    tier1Points: 2,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/a/a8/Awaken_the_Makers_full.jpg/revision/latest/scale-to-width-down/1000?cb=20170320114506",
    rewards: { stone: 3, wheat: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "26",
    name: "Maple Grove",
    cost: { stone: 2, water: 3 },
    tier1Points: 2,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/c/cc/Corrupting_Mist_full.jpg/revision/latest/scale-to-width-down/1000?cb=20170406182010",
    rewards: { wood: 3, stone: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
  {
    id: "27",
    name: "Sorghum Field",
    cost: { water: 2, wood: 3 },
    tier1Points: 2,
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/4/4f/Fire_Plume%27s_Heart_full.jpg/revision/latest/scale-to-width-down/1000?cb=20170406180450",
    rewards: { wheat: 3, water: 1 },
    footer: { stone: 1, wood: 1, wheat: 1, tier3Points: 1 },
  },
];

// Export all New Game cards
export const newGameCards = [...gameCards];
