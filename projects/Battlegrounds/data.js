// Battlegrounds Card Data

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

// Card type colors for effect box backgrounds
export const typeColors = {
  cats: "rgba(76, 175, 80, 0.8)", // Green
  moles: "rgba(156, 39, 176, 0.8)", // Purple
  boars: "rgba(255, 152, 0, 0.8)", // Orange
  birds: "rgba(33, 150, 243, 0.8)", // Blue
  frogs: "rgba(76, 175, 80, 0.8)", // Green (different shade)
};

// Symbol mappings for effects
export const symbolMappings = {
  // Trigger types
  battlecry: "battlecry.png",
  sell: "sell.png",
  attack: "attack.png",
  pray: "pray.png",
  triggered: "triggered.png",
  endOfTurn: "endOfTurn.png",
  buy: "buy.png",
  merge: "merge.png",

  // Effect symbols
  income: "income.png",
  boardSize: "boardSize.png",
  handSize: "handSize.png",
  reserve: "reserve.png",
  steal: "steal.png",
  refresh: "refresh.png",
  influence: "influence.png",
  initiative: "initiative.png",
  gold: "gold.png",
  discover: "discover.png",
  mutate: "mutate.png",
  vp: "vp.png",
  star: "star.png",
  mirror: "mirror.png",
  fragment: "fragment.png",
  bounce: "bounce.png",
  freeze: "freeze.png",

  // Tribe-specific reputation symbols
  cats: "cats.png",
  boars: "boars.png",
  moles: "moles.png",
  birds: "birds.png",
  frogs: "frogs.png",

  // Special symbols
  arrow: "arrow.png",
  colon: ":",
  plus: "+",
  minus: "-",
  or: "OR",
  choose: "choose",
  x2: "x2",
  golden: "gold.png", // Using gold.png for golden effect
  all: "star.png", // Using star.png for "all" effect
  upgrade: "boardSize.png", // Using boardSize.png for upgrade effect
  board: "boardSize.png", // Using boardSize.png for board effect
};

// Helper function to parse effect string and return renderable components
export const parseEffect = (effectString) => {
  if (!effectString) return [];

  const parts = effectString.split(",").map((part) => part.trim());
  const components = [];

  parts.forEach((part, index) => {
    if (part === ":") {
      components.push({
        type: "text",
        value: ":",
        style: { fontSize: "60px", fontWeight: "bold", color: "black" },
      });
    } else if (part === "+") {
      components.push({
        type: "text",
        value: "+",
        style: { fontSize: "24px", fontWeight: "bold", color: "black" },
      });
    } else if (part === "-") {
      components.push({
        type: "text",
        value: "-",
        style: { fontSize: "24px", fontWeight: "bold", color: "black" },
      });
    } else if (part === "OR") {
      components.push({
        type: "text",
        value: "OR",
        style: { fontSize: "20px", fontWeight: "bold", color: "black" },
      });
    } else if (part.includes("_")) {
      // Handle repetition (e.g., gold_2)
      const [symbol, count] = part.split("_");
      const imageName = symbolMappings[symbol];
      if (imageName && imageName.endsWith(".png")) {
        const repeatCount = parseInt(count) || 1;
        for (let i = 0; i < repeatCount; i++) {
          components.push({ type: "image", value: imageName });
        }
      } else {
        components.push({
          type: "text",
          value: part,
          style: { fontSize: "18px", color: "black" },
        });
      }
    } else {
      // Check if it's a symbol
      const imageName = symbolMappings[part];
      if (imageName && imageName.endsWith(".png")) {
        components.push({ type: "image", value: imageName });
      } else {
        components.push({
          type: "text",
          value: part,
          style: { fontSize: "18px", color: "black" },
        });
      }
    }

    // Mark the first component as trigger (no divider/spacing needed)
    if (index === 0) {
      components.push({ type: "trigger", value: "trigger" });
    }
  });

  return components;
};

// Helper function to get card image based on type and index
export const getCardImage = (type, index) => {
  const typePrefix = {
    cats: "d",
    moles: "p",
    boars: "q",
    birds: "e",
    frogs: "r",
  };

  const prefix = typePrefix[type];
  return `${prefix}${index}.png`;
};

// Helper function to determine tier based on index
export const getTierFromIndex = (index) => {
  if (index <= 3) return 1;
  if (index <= 6) return 2;
  if (index <= 9) return 3;
  if (index <= 12) return 4;
  if (index <= 15) return 5;
  return 6;
};

// cats Cards
const catsCards = [
  {
    id: "cats_1",
    card: "unit",
    type: "cats",
    tier: 1,
    image: "d1.png",
    effect: "battlecry,star_1",
    readableEffect: "Gain 1 Star",
  },
  {
    id: "cats_2",
    card: "unit",
    type: "cats",
    tier: 1,
    image: "d2.png",
    effect: "battlecry,boardSize,-2",
    readableEffect: "Next board upgrade costs 2 gold less",
  },
  {
    id: "cats_3",
    card: "unit",
    type: "cats",
    tier: 1,
    image: "d3.png",
    effect: "sell,initiative_1",
    readableEffect: "Gain 1 Initiative",
  },
  {
    id: "cats_4",
    card: "unit",
    type: "cats",
    tier: 2,
    image: "d4.png",
    effect: "battlecry,cats_2",
    readableEffect: "Gain 2 Insect Reputation",
  },
  {
    id: "cats_5",
    card: "unit",
    type: "cats",
    tier: 2,
    image: "d5.png",
    effect: "battlecry,initiative_1",
    readableEffect: "Gain 1 Initiative",
  },
  {
    id: "cats_6",
    card: "unit",
    type: "cats",
    tier: 2,
    image: "d6.png",
    effect: "sell,cats_1,star_1",
    readableEffect: "Gain 1 Insect Reputation and 1 Star",
  },
  {
    id: "cats_7",
    card: "unit",
    type: "cats",
    tier: 3,
    image: "d7.png",
    effect: "battlecry,steal",
    readableEffect: "Steal a random minion",
  },
  {
    id: "cats_8",
    card: "unit",
    type: "cats",
    tier: 3,
    image: "d8.png",
    effect: "pray,star_1",
    readableEffect: "Gain 1 Star",
  },
  {
    id: "cats_9",
    card: "unit",
    type: "cats",
    tier: 3,
    image: "d9.png",
    effect: "battlecry,boardSize,-4",
    readableEffect: "Next board upgrade costs 4 gold less",
  },
  {
    id: "cats_10",
    card: "unit",
    type: "cats",
    tier: 4,
    image: "d10.png",
    effect: "triggered,star_1",
    readableEffect: "When a non-insect is played, gain 1 Star",
  },
  {
    id: "cats_11",
    card: "unit",
    type: "cats",
    tier: 4,
    image: "d11.png",
    effect: "endOfTurn,steal",
    readableEffect: "At end of turn, steal a random minion",
  },
  {
    id: "cats_12",
    card: "unit",
    type: "cats",
    tier: 4,
    image: "d12.png",
    effect: "attack,star_1",
    readableEffect: "Gain 1 Star",
  },
  {
    id: "cats_13",
    card: "unit",
    type: "cats",
    tier: 5,
    image: "d13.png",
    effect: "sell,steal_2",
    readableEffect: "Steal 2 random minions",
  },
  {
    id: "cats_14",
    card: "unit",
    type: "cats",
    tier: 5,
    image: "d14.png",
    effect: "battlecry,initiative_2,cats_2",
    readableEffect: "Gain 2 Initiative and 2 Insect Reputation",
  },
  {
    id: "cats_15",
    card: "unit",
    type: "cats",
    tier: 6,
    image: "d15.png",
    effect: "attack,initiative_2,OR,cats_2",
    readableEffect: "Gain 2 Initiative OR 2 Insect Reputation",
  },
  {
    id: "cats_16",
    card: "unit",
    type: "cats",
    tier: 6,
    image: "d16.png",
    effect: "battlecry,star_1,all",
    readableEffect: "All minions gain 1 Star",
  },
  {
    id: "cats_17",
    card: "unit",
    type: "cats",
    tier: 6,
    image: "d17.png",
    effect: "battlecry,boardSize,1",
    readableEffect: "Upgrade your board +1 slot",
  },
  {
    id: "cats_18",
    card: "unit",
    type: "cats",
    tier: 6,
    image: "d18.png",
    effect: "battlecry,upgrade,board",
    readableEffect: "Upgrade your board +1 slot",
  },
];

// boars Cards
const boarsCards = [
  {
    id: "boars_1",
    card: "unit",
    type: "boars",
    tier: 1,
    image: "q1.png",
    effect: "sell,influence_1",
    readableEffect: "Gain 1 Influence",
  },
  {
    id: "boars_2",
    card: "unit",
    type: "boars",
    tier: 1,
    image: "q2.png",
    effect: "battlecry,boars_1",
    readableEffect: "Gain 1 Fox Reputation",
  },
  {
    id: "boars_3",
    card: "unit",
    type: "boars",
    tier: 1,
    image: "q2.png", // Using q2.png as fallback since q3.png is missing
    effect: "battlecry,vp_1",
    readableEffect: "Gain 1 Victory Point",
  },
  {
    id: "boars_4",
    card: "unit",
    type: "boars",
    tier: 2,
    image: "q4.png",
    effect: "sell,vp_2",
    readableEffect: "Gain 2 Victory Points",
  },
  {
    id: "boars_5",
    card: "unit",
    type: "boars",
    tier: 2,
    image: "q5.png",
    effect: "pray,vp_1",
    readableEffect: "Gain 1 Victory Point",
  },
  {
    id: "boars_6",
    card: "unit",
    type: "boars",
    tier: 2,
    image: "q6.png",
    effect: "battlecry,star_2",
    readableEffect: "Gain 2 Stars",
  },
  {
    id: "boars_7",
    card: "unit",
    type: "boars",
    tier: 3,
    image: "q7.png",
    effect: "battlecry,boars_3",
    readableEffect: "Gain 3 Fox Reputation",
  },
  {
    id: "boars_8",
    card: "unit",
    type: "boars",
    tier: 3,
    image: "q8.png",
    effect: "sell,star_2,influence_1",
    readableEffect: "Gain 2 Stars and 1 Influence",
  },
  {
    id: "boars_9",
    card: "unit",
    type: "boars",
    tier: 3,
    image: "q9.png",
    effect: "attack,vp_1",
    readableEffect: "Gain 1 Victory Point",
  },
  {
    id: "boars_10",
    card: "unit",
    type: "boars",
    tier: 4,
    image: "q10.png",
    effect: "attack,boars_1",
    readableEffect: "Gain 1 Fox Reputation",
  },
  {
    id: "boars_11",
    card: "unit",
    type: "boars",
    tier: 4,
    image: "q11.png",
    effect: "endOfTurn,boars_1",
    readableEffect: "At end of turn, gain 1 Fox Reputation",
  },
  {
    id: "boars_12",
    card: "unit",
    type: "boars",
    tier: 4,
    image: "q12.png",
    effect: "battlecry,influence_2,boars_2",
    readableEffect: "Gain 2 Influence and 2 Fox Reputation",
  },
  {
    id: "boars_13",
    card: "unit",
    type: "boars",
    tier: 5,
    image: "q13.png",
    effect: "triggered,vp,gold",
    readableEffect: "When you gain VP, gain that much gold",
  },
  {
    id: "boars_14",
    card: "unit",
    type: "boars",
    tier: 5,
    image: "q14.png",
    effect: "battlecry,golden",
    readableEffect: "Make a minion golden",
  },
  {
    id: "boars_15",
    card: "unit",
    type: "boars",
    tier: 5,
    image: "q15.png",
    effect: "triggered,vp,x2",
    readableEffect: "Gain x2 VP from all sources except end game",
  },
  {
    id: "boars_16",
    card: "unit",
    type: "boars",
    tier: 6,
    image: "q16.png",
    effect: "triggered,sell,boars_1",
    readableEffect:
      "When you sell a different type, gain 1 reputation of that type",
  },
  {
    id: "boars_17",
    card: "unit",
    type: "boars",
    tier: 6,
    image: "q17.png",
    effect: "triggered,boars,vp_1",
    readableEffect: "When you play a fox, gain 1 VP for each other fox",
  },
  {
    id: "boars_18",
    card: "unit",
    type: "boars",
    tier: 6,
    image: "q18.png",
    effect: "battlecry,choose,2,vp_2,boars_2,influence_2,star_2",
    readableEffect:
      "Choose 2: Gain 2 VP, 2 Fox Reputation, 2 Influence, or 2 Stars",
  },
];

// Helper function to calculate defense based on other tribes
export const calculateDefense = (otherTribes) => {
  return 2 + otherTribes.length * 2;
};

// Helper function to get age range based on age
export const getAgeRange = (age) => {
  switch (age) {
    case 1:
      return { min: 1, max: 3 };
    case 2:
      return { min: 4, max: 6 };
    case 3:
      return { min: 7, max: 10 };
    default:
      return { min: 1, max: 3 };
  }
};

// Helper function to convert age to roman numeral
export const ageToRoman = (age) => {
  switch (age) {
    case 1:
      return "I";
    case 2:
      return "II";
    case 3:
      return "III";
    default:
      return "I";
  }
};

// Zone Cards Data
const catsZoneCards = [
  {
    id: "cats_zone_1",
    card: "zone",
    type: "cats",
    age: 1,
    otherTribes: ["moles", "boars"],
    backgroundImage: "catsBackground.png",
  },
  {
    id: "cats_zone_2",
    card: "zone",
    type: "cats",
    age: 1,
    otherTribes: ["birds", "frogs"],
    backgroundImage: "catsBackground.png",
  },
  {
    id: "cats_zone_3",
    card: "zone",
    type: "cats",
    age: 1,
    otherTribes: ["moles", "boars", "birds"],
    backgroundImage: "catsBackground.png",
  },
  {
    id: "cats_zone_4",
    card: "zone",
    type: "cats",
    age: 1,
    otherTribes: ["frogs"],
    backgroundImage: "catsBackground.png",
  },
  {
    id: "cats_zone_5",
    card: "zone",
    type: "cats",
    age: 2,
    otherTribes: ["moles", "boars", "birds", "frogs"],
    backgroundImage: "catsBackground.png",
  },
  {
    id: "cats_zone_6",
    card: "zone",
    type: "cats",
    age: 2,
    otherTribes: ["moles", "boars", "birds", "frogs", "cats"],
    backgroundImage: "catsBackground.png",
  },
  {
    id: "cats_zone_7",
    card: "zone",
    type: "cats",
    age: 2,
    otherTribes: ["moles", "boars", "birds", "frogs", "cats", "moles"],
    backgroundImage: "catsBackground.png",
  },
  {
    id: "cats_zone_8",
    card: "zone",
    type: "cats",
    age: 3,
    otherTribes: ["moles", "boars", "birds", "frogs", "cats", "moles", "boars"],
    backgroundImage: "catsBackground.png",
  },
  {
    id: "cats_zone_9",
    card: "zone",
    type: "cats",
    age: 3,
    otherTribes: [
      "moles",
      "boars",
      "birds",
      "frogs",
      "cats",
      "moles",
      "boars",
      "birds",
    ],
    backgroundImage: "catsBackground.png",
  },
  {
    id: "cats_zone_10",
    card: "zone",
    type: "cats",
    age: 3,
    otherTribes: [
      "moles",
      "boars",
      "birds",
      "frogs",
      "cats",
      "moles",
      "boars",
      "birds",
      "frogs",
      "cats",
    ],
    backgroundImage: "catsBackground.png",
  },
];

const molesZoneCards = [
  {
    id: "moles_zone_1",
    card: "zone",
    type: "moles",
    age: 1,
    otherTribes: ["cats", "boars"],
    backgroundImage: "molesBackground.png",
  },
  {
    id: "moles_zone_2",
    card: "zone",
    type: "moles",
    age: 1,
    otherTribes: ["birds", "frogs"],
    backgroundImage: "molesBackground.png",
  },
  {
    id: "moles_zone_3",
    card: "zone",
    type: "moles",
    age: 1,
    otherTribes: ["cats", "boars", "birds"],
    backgroundImage: "molesBackground.png",
  },
  {
    id: "moles_zone_4",
    card: "zone",
    type: "moles",
    age: 1,
    otherTribes: ["frogs"],
    backgroundImage: "molesBackground.png",
  },
  {
    id: "moles_zone_5",
    card: "zone",
    type: "moles",
    age: 2,
    otherTribes: ["cats", "boars", "birds", "frogs"],
    backgroundImage: "molesBackground.png",
  },
  {
    id: "moles_zone_6",
    card: "zone",
    type: "moles",
    age: 2,
    otherTribes: ["cats", "boars", "birds", "frogs", "moles"],
    backgroundImage: "molesBackground.png",
  },
  {
    id: "moles_zone_7",
    card: "zone",
    type: "moles",
    age: 2,
    otherTribes: ["cats", "boars", "birds", "frogs", "moles", "cats"],
    backgroundImage: "molesBackground.png",
  },
  {
    id: "moles_zone_8",
    card: "zone",
    type: "moles",
    age: 3,
    otherTribes: ["cats", "boars", "birds", "frogs", "moles", "cats", "boars"],
    backgroundImage: "molesBackground.png",
  },
  {
    id: "moles_zone_9",
    card: "zone",
    type: "moles",
    age: 3,
    otherTribes: [
      "cats",
      "boars",
      "birds",
      "frogs",
      "moles",
      "cats",
      "boars",
      "birds",
    ],
    backgroundImage: "molesBackground.png",
  },
  {
    id: "moles_zone_10",
    card: "zone",
    type: "moles",
    age: 3,
    otherTribes: [
      "cats",
      "boars",
      "birds",
      "frogs",
      "moles",
      "cats",
      "boars",
      "birds",
      "frogs",
      "moles",
    ],
    backgroundImage: "molesBackground.png",
  },
];

const boarsZoneCards = [
  {
    id: "boars_zone_1",
    card: "zone",
    type: "boars",
    age: 1,
    otherTribes: ["cats", "moles"],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_2",
    card: "zone",
    type: "boars",
    age: 1,
    otherTribes: ["birds", "frogs"],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_3",
    card: "zone",
    type: "boars",
    age: 1,
    otherTribes: ["cats", "moles", "birds"],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_4",
    card: "zone",
    type: "boars",
    age: 1,
    otherTribes: ["frogs"],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_5",
    card: "zone",
    type: "boars",
    age: 2,
    otherTribes: ["cats", "moles", "birds", "frogs"],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_6",
    card: "zone",
    type: "boars",
    age: 2,
    otherTribes: ["cats", "moles", "birds", "frogs", "boars"],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_7",
    card: "zone",
    type: "boars",
    age: 2,
    otherTribes: ["cats", "moles", "birds", "frogs", "boars", "cats"],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_8",
    card: "zone",
    type: "boars",
    age: 3,
    otherTribes: ["cats", "moles", "birds", "frogs", "boars", "cats", "moles"],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_9",
    card: "zone",
    type: "boars",
    age: 3,
    otherTribes: [
      "cats",
      "moles",
      "birds",
      "frogs",
      "boars",
      "cats",
      "moles",
      "birds",
    ],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_10",
    card: "zone",
    type: "boars",
    age: 3,
    otherTribes: [
      "cats",
      "moles",
      "birds",
      "frogs",
      "boars",
      "cats",
      "moles",
      "birds",
      "frogs",
      "boars",
    ],
    backgroundImage: "boarsBackground.png",
  },
];

const birdsZoneCards = [
  {
    id: "birds_zone_1",
    card: "zone",
    type: "birds",
    age: 1,
    otherTribes: ["cats", "moles"],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_2",
    card: "zone",
    type: "birds",
    age: 1,
    otherTribes: ["boars", "frogs"],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_3",
    card: "zone",
    type: "birds",
    age: 1,
    otherTribes: ["cats", "moles", "boars"],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_4",
    card: "zone",
    type: "birds",
    age: 1,
    otherTribes: ["frogs"],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_5",
    card: "zone",
    type: "birds",
    age: 2,
    otherTribes: ["cats", "moles", "boars", "frogs"],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_6",
    card: "zone",
    type: "birds",
    age: 2,
    otherTribes: ["cats", "moles", "boars", "frogs", "birds"],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_7",
    card: "zone",
    type: "birds",
    age: 2,
    otherTribes: ["cats", "moles", "boars", "frogs", "birds", "cats"],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_8",
    card: "zone",
    type: "birds",
    age: 3,
    otherTribes: ["cats", "moles", "boars", "frogs", "birds", "cats", "moles"],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_9",
    card: "zone",
    type: "birds",
    age: 3,
    otherTribes: [
      "cats",
      "moles",
      "boars",
      "frogs",
      "birds",
      "cats",
      "moles",
      "boars",
    ],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_10",
    card: "zone",
    type: "birds",
    age: 3,
    otherTribes: [
      "cats",
      "moles",
      "boars",
      "frogs",
      "birds",
      "cats",
      "moles",
      "boars",
      "frogs",
      "birds",
    ],
    backgroundImage: "birdsBackground.png",
  },
];

const frogsZoneCards = [
  {
    id: "frogs_zone_1",
    card: "zone",
    type: "frogs",
    age: 1,
    otherTribes: ["cats", "moles"],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_2",
    card: "zone",
    type: "frogs",
    age: 1,
    otherTribes: ["boars", "birds"],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_3",
    card: "zone",
    type: "frogs",
    age: 1,
    otherTribes: ["cats", "moles", "boars"],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_4",
    card: "zone",
    type: "frogs",
    age: 1,
    otherTribes: ["birds"],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_5",
    card: "zone",
    type: "frogs",
    age: 2,
    otherTribes: ["cats", "moles", "boars", "birds"],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_6",
    card: "zone",
    type: "frogs",
    age: 2,
    otherTribes: ["cats", "moles", "boars", "birds", "frogs"],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_7",
    card: "zone",
    type: "frogs",
    age: 2,
    otherTribes: ["cats", "moles", "boars", "birds", "frogs", "cats"],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_8",
    card: "zone",
    type: "frogs",
    age: 3,
    otherTribes: ["cats", "moles", "boars", "birds", "frogs", "cats", "moles"],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_9",
    card: "zone",
    type: "frogs",
    age: 3,
    otherTribes: [
      "cats",
      "moles",
      "boars",
      "birds",
      "frogs",
      "cats",
      "moles",
      "boars",
    ],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_10",
    card: "zone",
    type: "frogs",
    age: 3,
    otherTribes: [
      "cats",
      "moles",
      "boars",
      "birds",
      "frogs",
      "cats",
      "moles",
      "boars",
      "birds",
      "frogs",
    ],
    backgroundImage: "frogsBackground.png",
  },
];

// Export all Battlegrounds cards
export const battlegroundsCards = [...catsCards, ...boarsCards];

// Export all zone cards
export const zoneCards = [
  ...catsZoneCards,
  ...molesZoneCards,
  ...boarsZoneCards,
  ...birdsZoneCards,
  ...frogsZoneCards,
];

// Export all cards (units + zones)
export const allBattlegroundsCards = [...battlegroundsCards, ...zoneCards];
