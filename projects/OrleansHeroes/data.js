// Orleans Heroes Card Data

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

// Reward system with distinct shapes for print recognition
export const rewardShapes = {
  red: "■", // Red Square
  yellow: "●", // Yellow Circle
  blue: "▲", // Blue Triangle
  upgrade: "♦", // upgrade Diamond
  omni: "⬟", // omni Hexagon
};

// Reward colors for display
export const rewardColors = {
  red: "#FF4444",
  yellow: "#FFD700",
  blue: "#4444FF",
  upgrade: "#44AA44",
  omni: "#AA44AA",
};

// Age 1 Cards for Orleans Heroes
const age1Cards = [
  {
    id: "1",
    name: "Village Farmer",
    vp: 1,
    elements: ["earth"],
    type: "farm",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/a/a5/Lakkari_Sacrifice_full.jpg/revision/latest?cb=20170302150448",
    rewards: ["yellow"],
    cost: [1, 1],
    age: 1,
  },
  {
    id: "2",
    name: "Young Warrior",
    vp: 2,
    elements: ["fire"],
    type: "battle",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/f/fd/Stampede_full.jpg/revision/latest/scale-to-width-down/1000?cb=20170517135221",
    rewards: ["red", "blue", "upgrade"],
    cost: [2, 1, 2],
    age: 1,
  },
  {
    id: "3",
    name: "Forest Scout",
    vp: 1,
    elements: ["earth", "air"],
    type: "explore",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/e/e8/Biology_Project_full.jpg/revision/latest/scale-to-width-down/1000?cb=20180713120316",
    rewards: ["blue", "yellow"],
    cost: [2, 2],
    age: 1,
  },
  {
    id: "4",
    name: "Apprentice Mage",
    vp: 3,
    elements: ["water", "fire"],
    type: "epic",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/3/31/Gather_Your_Party_full.jpg/revision/latest/scale-to-width-down/1000?cb=20171105110325",
    rewards: ["omni", "red"],
    cost: [2, 3],
    age: 1,
  },
  {
    id: "5",
    name: "Town Guard",
    vp: 2,
    elements: ["earth"],
    type: "battle",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/d/df/Spider_Bomb_full.jpg/revision/latest/scale-to-width-down/1000?cb=20180711184908",
    rewards: ["yellow", "blue"],
    cost: [1, 1, 2],
    age: 1,
  },
  {
    id: "6",
    name: "Herb Gatherer",
    vp: 1,
    elements: ["earth", "water"],
    type: "farm",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/8/88/Rain_of_Toads_full.jpg/revision/latest/scale-to-width-down/1000?cb=20181104152432",
    rewards: ["upgrade", "blue"],
    cost: [1, 1, 1],
    age: 1,
  },
  {
    id: "7",
    name: "Wind Runner",
    vp: 2,
    elements: ["air"],
    type: "explore",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/d/d5/Plague_of_Death_full.jpg/revision/latest/scale-to-width-down/1000?cb=20191026081240",
    rewards: ["blue", "yellow"],
    cost: [1, 1, 2],
    age: 1,
  },
  {
    id: "8",
    name: "Fire Starter",
    vp: 1,
    elements: ["fire", "fire"],
    type: "battle",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/c/cb/Untapped_Potential_full.jpg/revision/latest/scale-to-width-down/1000?cb=20210528162130",
    rewards: ["omni", "upgrade"],
    cost: [1, 2],
    age: 1,
  },
  {
    id: "9",
    name: "River Fisher",
    vp: 1,
    elements: ["water"],
    type: "farm",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/b/bd/From_the_Depths_full.jpg/revision/latest/scale-to-width-down/1000?cb=20220408133836",
    rewards: ["blue", "omni"],
    cost: [1, 1, 3],
    age: 1,
  },
  {
    id: "10",
    name: "Mountain Climber",
    vp: 2,
    elements: ["earth", "air"],
    type: "explore",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/5/5b/Sinstone_Graveyard_full.jpg/revision/latest/scale-to-width-down/1000?cb=20220806175402",
    rewards: ["blue", "red", "yellow"],
    cost: [1, 2, 3],
    age: 1,
  },
  {
    id: "11",
    name: "Storm Caller",
    vp: 4,
    elements: ["air", "water", "fire"],
    type: "epic",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/f/f4/Frostwolf_Kennels_full.jpg/revision/latest/scale-to-width-down/1000?cb=20211205155302",
    rewards: ["blue"],
    cost: [1, 1],
    age: 1,
  },
  {
    id: "12",
    name: "Cave Explorer",
    vp: 2,
    elements: ["earth"],
    type: "explore",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/a/a0/Sanguine_Depths_full.jpg/revision/latest/scale-to-width-down/1000?cb=20220806175313",
    rewards: ["yellow", "upgrade"],
    cost: [1, 2],
    age: 1,
  },
  {
    id: "13",
    name: "Blacksmith",
    vp: 2,
    elements: ["fire", "earth"],
    type: "farm",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/c/c8/Prison_of_Yogg-Saron_full.jpg/revision/latest/scale-to-width-down/1000?cb=20230629185250",
    rewards: ["red", , "red"],
    cost: [2, 2],
    age: 1,
  },
  {
    id: "14",
    name: "Swift Archer",
    vp: 3,
    elements: ["air", "fire"],
    type: "battle",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/2/2b/Guff_Trips_full.jpg/revision/latest/scale-to-width-down/1000?cb=20210614093531",
    rewards: ["blue", "blue", "red"],
    cost: [1, 2, 3],
    age: 1,
  },
  {
    id: "15",
    name: "Water Bearer",
    vp: 1,
    elements: ["water", "water"],
    type: "farm",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/a/a8/Awaken_the_Makers_full.jpg/revision/latest/scale-to-width-down/1000?cb=20170320114506",
    rewards: ["blue", "yellow"],
    cost: [1, 1, 2],
    age: 1,
  },
  {
    id: "16",
    name: "Beast Tamer",
    vp: 3,
    elements: ["earth", "fire"],
    type: "epic",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/c/cc/Corrupting_Mist_full.jpg/revision/latest/scale-to-width-down/1000?cb=20170406182010",
    rewards: ["omni", "omni"],
    cost: [1, 2, 2],
    age: 1,
  },
  {
    id: "17",
    name: "Sky Watcher",
    vp: 2,
    elements: ["air", "water"],
    type: "explore",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/4/4f/Fire_Plume%27s_Heart_full.jpg/revision/latest/scale-to-width-down/1000?cb=20170406180450",
    rewards: ["blue", "red", "yellow"],
    cost: [1, 2, 3],
    age: 1,
  },
  {
    id: "18",
    name: "Earth Shaper",
    vp: 2,
    elements: ["earth", "earth"],
    type: "farm",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/6/6e/Hallucination_full.jpg/revision/latest/scale-to-width-down/1000?cb=20170517133831",
    rewards: ["upgrade", , "upgrade", "yellow"],
    cost: [2, 2],
    age: 1,
  },
  {
    id: "19",
    name: "Flame Dancer",
    vp: 3,
    elements: ["fire", "air"],
    type: "battle",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/0/0a/Open_the_Waygate_full.jpg/revision/latest?cb=20170402144853",
    rewards: ["red", "red", "omni"],
    cost: [1, 3, 3],
    age: 1,
  },
  {
    id: "20",
    name: "Mystic Wanderer",
    vp: 5,
    elements: ["water", "air", "earth"],
    type: "epic",
    image:
      "https://static.wikia.nocookie.net/hearthstone_gamepedia/images/e/e9/Jungle_Giants_full.jpg/revision/latest/scale-to-width-down/1000?cb=20170402075719",
    rewards: ["yellow", "yellow"],
    cost: [1, 3],
    age: 1,
  },
];

// Export all Orleans Heroes cards
export const orleansHeroesCards = [...age1Cards];
