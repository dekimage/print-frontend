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
  insects: "rgba(76, 175, 80, 0.8)", // Green
  birds: "rgba(156, 39, 176, 0.8)", // Purple
  boars: "rgba(255, 152, 0, 0.8)", // Orange
  foxes: "rgba(33, 150, 243, 0.8)", // Blue
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
  insects: "insects.png",
  boars: "boars.png",
  birds: "birds.png",
  foxes: "foxes.png",
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
  mirror: "mirror.png",
  bounce: "bounce.png",
  fragment: "fragment.png",
  refresh: "refresh.png",

  // Tier symbols
  tier1: "tier1.png",
  tier2: "tier2.png",
  tier3: "tier3.png",
  tier4: "tier4.png",
  tier5: "tier5.png",
  tier6: "tier6.png",

  // Building symbols
  tavern: "tavern.png",
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
    insects: "d",
    birds: "p",
    boars: "q",
    foxes: "e",
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

// insects Cards
const insectsCards = [
  {
    id: "insects_1",
    card: "unit",
    type: "insects",
    tier: 1,
    image: "d1.png",
    effect: "battlecry,star_1",
    readableEffect: "Gain 1 Star",
    power: 1,
  },
  {
    id: "insects_2",
    card: "unit",
    type: "insects",
    tier: 1,
    image: "d2.png",
    effect: "battlecry,boardSize,-2",
    readableEffect: "Next board upgrade costs 2 gold less",
    power: 1,
  },
  {
    id: "insects_3",
    card: "unit",
    type: "insects",
    tier: 1,
    image: "d3.png",
    effect: "sell,initiative_1",
    readableEffect: "Gain 1 Initiative",
    power: 1,
  },
  {
    id: "insects_4",
    card: "unit",
    type: "insects",
    tier: 2,
    image: "d4.png",
    effect: "battlecry,insects_2",
    readableEffect: "Gain 2 Insect Reputation",
    power: 1,
  },
  {
    id: "insects_5",
    card: "unit",
    type: "insects",
    tier: 2,
    image: "d5.png",
    effect: "battlecry,initiative_1",
    readableEffect: "Gain 1 Initiative",
    power: 1,
  },
  {
    id: "insects_6",
    card: "unit",
    type: "insects",
    tier: 2,
    image: "d6.png",
    effect: "sell,insects_1,star_1",
    readableEffect: "Gain 1 Insect Reputation and 1 Star",
    power: 1,
  },
  {
    id: "insects_7",
    card: "unit",
    type: "insects",
    tier: 3,
    image: "d7.png",
    effect: "battlecry,steal",
    readableEffect: "Steal a random minion",
    power: 2,
  },
  {
    id: "insects_8",
    card: "unit",
    type: "insects",
    tier: 3,
    image: "d8.png",
    effect: "pray,star_1",
    readableEffect: "Gain 1 Star",
    power: 2,
  },
  {
    id: "insects_9",
    card: "unit",
    type: "insects",
    tier: 3,
    image: "d9.png",
    effect: "battlecry,boardSize,-4",
    readableEffect: "Next board upgrade costs 4 gold less",
    power: 2,
  },
  {
    id: "insects_10",
    card: "unit",
    type: "insects",
    tier: 4,
    image: "d10.png",
    effect: "triggered,star_1",
    readableEffect: "When a non-insect is played, gain 1 Star",
    power: 2,
  },
  {
    id: "insects_11",
    card: "unit",
    type: "insects",
    tier: 4,
    image: "d11.png",
    effect: "endOfTurn,steal",
    readableEffect: "At end of turn, steal a random minion",
    power: 2,
  },
  {
    id: "insects_12",
    card: "unit",
    type: "insects",
    tier: 4,
    image: "d12.png",
    effect: "attack,star_1",
    readableEffect: "Gain 1 Star",
    power: 2,
  },
  {
    id: "insects_13",
    card: "unit",
    type: "insects",
    tier: 5,
    image: "d13.png",
    effect: "sell,steal_2",
    readableEffect: "Steal 2 random minions",
    power: 3,
  },
  {
    id: "insects_14",
    card: "unit",
    type: "insects",
    tier: 5,
    image: "d14.png",
    effect: "battlecry,initiative_2,insects_2",
    readableEffect: "Gain 2 Initiative and 2 Insect Reputation",
    power: 3,
  },
  {
    id: "insects_15",
    card: "unit",
    type: "insects",
    tier: 6,
    image: "d15.png",
    effect: "attack,initiative_2,OR,insects_2",
    readableEffect: "Gain 2 Initiative OR 2 Insect Reputation",
    power: 3,
  },
  {
    id: "insects_16",
    card: "unit",
    type: "insects",
    tier: 6,
    image: "d16.png",
    effect: "battlecry,star_1,all",
    readableEffect: "All minions gain 1 Star",
    power: 3,
  },
  {
    id: "insects_17",
    card: "unit",
    type: "insects",
    tier: 6,
    image: "d17.png",
    effect: "battlecry,boardSize,1",
    readableEffect: "Upgrade your board +1 slot",
    power: 3,
  },
  {
    id: "insects_18",
    card: "unit",
    type: "insects",
    tier: 6,
    image: "d18.png",
    effect: "battlecry,upgrade,board",
    readableEffect: "Upgrade your board +1 slot",
    power: 3,
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
    power: 1,
  },
  {
    id: "boars_2",
    card: "unit",
    type: "boars",
    tier: 1,
    image: "q2.png",
    effect: "battlecry,boars_1",
    readableEffect: "Gain 1 Fox Reputation",
    power: 1,
  },
  {
    id: "boars_3",
    card: "unit",
    type: "boars",
    tier: 1,
    image: "q2.png", // Using q2.png as fallback since q3.png is missing
    effect: "battlecry,vp_1",
    readableEffect: "Gain 1 Victory Point",
    power: 1,
  },
  {
    id: "boars_4",
    card: "unit",
    type: "boars",
    tier: 2,
    image: "q4.png",
    effect: "sell,vp_2",
    readableEffect: "Gain 2 Victory Points",
    power: 1,
  },
  {
    id: "boars_5",
    card: "unit",
    type: "boars",
    tier: 2,
    image: "q5.png",
    effect: "pray,vp_1",
    readableEffect: "Gain 1 Victory Point",
    power: 1,
  },
  {
    id: "boars_6",
    card: "unit",
    type: "boars",
    tier: 2,
    image: "q6.png",
    effect: "battlecry,star_2",
    readableEffect: "Gain 2 Stars",
    power: 1,
  },
  {
    id: "boars_7",
    card: "unit",
    type: "boars",
    tier: 3,
    image: "q7.png",
    effect: "battlecry,boars_3",
    readableEffect: "Gain 3 Fox Reputation",
    power: 2,
  },
  {
    id: "boars_8",
    card: "unit",
    type: "boars",
    tier: 3,
    image: "q8.png",
    effect: "sell,star_2,influence_1",
    readableEffect: "Gain 2 Stars and 1 Influence",
    power: 2,
  },
  {
    id: "boars_9",
    card: "unit",
    type: "boars",
    tier: 3,
    image: "q9.png",
    effect: "attack,vp_1",
    readableEffect: "Gain 1 Victory Point",
    power: 2,
  },
  {
    id: "boars_10",
    card: "unit",
    type: "boars",
    tier: 4,
    image: "q10.png",
    effect: "attack,boars_1",
    readableEffect: "Gain 1 Fox Reputation",
    power: 2,
  },
  {
    id: "boars_11",
    card: "unit",
    type: "boars",
    tier: 4,
    image: "q11.png",
    effect: "endOfTurn,boars_1",
    readableEffect: "At end of turn, gain 1 Fox Reputation",
    power: 2,
  },
  {
    id: "boars_12",
    card: "unit",
    type: "boars",
    tier: 4,
    image: "q12.png",
    effect: "battlecry,influence_2,boars_2",
    readableEffect: "Gain 2 Influence and 2 Fox Reputation",
    power: 2,
  },
  {
    id: "boars_13",
    card: "unit",
    type: "boars",
    tier: 5,
    image: "q13.png",
    effect: "triggered,vp,gold",
    readableEffect: "When you gain VP, gain that much gold",
    power: 3,
  },
  {
    id: "boars_14",
    card: "unit",
    type: "boars",
    tier: 5,
    image: "q14.png",
    effect: "battlecry,golden",
    readableEffect: "Make a minion golden",
    power: 3,
  },
  {
    id: "boars_15",
    card: "unit",
    type: "boars",
    tier: 5,
    image: "q15.png",
    effect: "triggered,vp,x2",
    readableEffect: "Gain x2 VP from all sources except end game",
    power: 3,
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
    power: 3,
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
    power: 3,
  },
];

// birds Cards
const birdsCards = [
  {
    id: "birds_1",
    card: "unit",
    type: "birds",
    tier: 1,

    image: "p1.png", // Local fallback image
    effect: "battlecry,gold_1",
    readableEffect: "Gain 1 Gold",
    power: 1,
  },
  {
    id: "birds_2",
    card: "unit",
    type: "birds",
    tier: 1,

    image: "p2.png",
    effect: "",
    readableEffect: "Effect to be implemented",
    power: 1,
  },
  {
    id: "birds_3",
    card: "unit",
    type: "birds",
    tier: 1,

    image: "p3.png",
    effect: "",
    readableEffect: "Effect to be implemented",
    power: 1,
  },
  {
    id: "birds_4",
    card: "unit",
    type: "birds",
    tier: 2,
    // url: "https://static.wikia.nocookie.net/dofus/images/4/48/Kamikabz.png/revision/latest/scale-to-width-down/100?cb=20250727153607", FOR WHEN I HAVE CDN WORKING!!!
    image: "p4.png",
    effect: "sell,income_1",
    readableEffect: "Increase your income by 1",
    power: 1,
  },
  {
    id: "birds_5",
    card: "unit",
    type: "birds",
    tier: 2,
    image: "p5.png",
    effect: "battlecry,boardSize,-3",
    readableEffect: "Your board upgrade this turn costs 3 gold less",
    power: 1,
  },
  {
    id: "birds_6",
    card: "unit",
    type: "birds",
    tier: 2,
    image: "p6.png",
    effect: "",
    readableEffect: "Effect to be implemented",
    power: 1,
  },
  {
    id: "birds_7",
    card: "unit",
    type: "birds",
    tier: 3,
    image: "p7.png",
    effect: "attack,gold_1",
    readableEffect: "Gain 1 Gold",
    power: 2,
  },
  {
    id: "birds_8",
    card: "unit",
    type: "birds",
    tier: 3,
    image: "p8.png",
    effect: "battlecry,income_1",
    readableEffect: "Gain 1 Income",
    power: 2,
  },
  {
    id: "birds_9",
    card: "unit",
    type: "birds",
    tier: 3,
    image: "p9.png",
    effect: "triggered,upgrade,gold_2",
    readableEffect: "When you upgrade the tavern, gain 2 gold",
    power: 2,
  },
  {
    id: "birds_10",
    card: "unit",
    type: "birds",
    tier: 4,
    image: "p10.png",
    effect: "attack,handSize,1",
    readableEffect: "Upgrade your hand size limit +1",
    power: 2,
  },
  {
    id: "birds_11",
    card: "unit",
    type: "birds",
    tier: 4,
    image: "p11.png",
    effect: "triggered,birds,gold_1,OR,star_1",
    readableEffect: "When you play a mole, gain 1 gold OR 1 star",
    power: 2,
  },
  {
    id: "birds_12",
    card: "unit",
    type: "birds",
    tier: 4,
    image: "p12.png",
    effect: "battlecry,birds_3,gold_3",
    readableEffect:
      "Lose 3 reputation with any other tribe, gain 3 reputation with birds + 3 gold",
    power: 2,
  },
  {
    id: "birds_13",
    card: "unit",
    type: "birds",
    tier: 5,
    image: "p13.png",
    effect: "",
    readableEffect: "Effect to be implemented",
    power: 3,
  },
  {
    id: "birds_14",
    card: "unit",
    type: "birds",
    tier: 5,
    image: "p14.png",
    effect: "",
    readableEffect: "Effect to be implemented",
    power: 3,
  },
  {
    id: "birds_15",
    card: "unit",
    type: "birds",
    tier: 5,
    image: "p15.png",
    effect: "",
    readableEffect: "Effect to be implemented",
    power: 3,
  },
  {
    id: "birds_16",
    card: "unit",
    type: "birds",
    tier: 6,
    image: "p16.png",
    effect: "",
    readableEffect: "Effect to be implemented",
    power: 3,
  },
  {
    id: "birds_17",
    card: "unit",
    type: "birds",
    tier: 6,
    image: "p17.png",
    effect: "",
    readableEffect: "Effect to be implemented",
  },
  {
    id: "birds_18",
    card: "unit",
    type: "birds",
    tier: 6,
    image: "p18.png",
    effect: "",
    readableEffect: "Effect to be implemented",
    power: 3,
  },
];

// frogs Cards
const frogsCards = [
  {
    id: "frogs_1",
    card: "unit",
    type: "frogs",
    tier: 1,
    image: "r1.png",
    effect: "battlecry,sell,upgrade",
    readableEffect:
      "Sell one unit, get another unit of the same tier with +1 star",
    power: 1,
  },
  {
    id: "frogs_2",
    card: "unit",
    type: "frogs",
    tier: 1,
    image: "r2.png",
    effect: "battlecry,mirror_1",
    readableEffect: "Gain 1 Mirror",
    power: 1,
  },
  {
    id: "frogs_3",
    card: "unit",
    type: "frogs",
    tier: 1,
    image: "r3.png",
    effect: "battlecry,refresh_2",
    readableEffect: "Gain 2 Refreshes",
    power: 1,
  },
  {
    id: "frogs_4",
    card: "unit",
    type: "frogs",
    tier: 2,
    image: "r4.png",
    effect: "battlecry,handSize,1",
    readableEffect: "Upgrade your hand size +1",
    power: 1,
  },
  {
    id: "frogs_5",
    card: "unit",
    type: "frogs",
    tier: 2,
    image: "r5.png",
    effect: "triggered,upgrade,mirror_1",
    readableEffect: "When you upgrade the tavern, gain 1 mirror",
    power: 1,
  },
  {
    id: "frogs_6",
    card: "unit",
    type: "frogs",
    tier: 2,
    image: "r6.png",
    effect: "sell,mirror_1",
    readableEffect: "Gain 1 mirror token",
    power: 1,
  },
  {
    id: "frogs_7",
    card: "unit",
    type: "frogs",
    tier: 3,
    image: "r7.png",
    effect: "battlecry,upgrade,upgrade",
    readableEffect: "Upgrade minion, upgrade minion",
    power: 2,
  },
  {
    id: "frogs_8",
    card: "unit",
    type: "frogs",
    tier: 3,
    image: "r8.png",
    effect: "triggered,upgrade,frogs_2",
    readableEffect: "When you upgrade tavern, gain 2 reputation",
    power: 2,
  },
  {
    id: "frogs_9",
    card: "unit",
    type: "frogs",
    tier: 3,
    image: "r9.png",
    effect: "battlecry,bounce",
    readableEffect: "Bounce",
    power: 2,
  },
  {
    id: "frogs_10",
    card: "unit",
    type: "frogs",
    tier: 4,
    image: "r10.png",
    effect: "battlecry,discover_1",
    readableEffect: "Discover 1 minion (look at 3 random, take 1)",
    power: 2,
  },
  {
    id: "frogs_11",
    card: "unit",
    type: "frogs",
    tier: 4,
    image: "r11.png",
    effect: "attack,mirror_1",
    readableEffect: "If matching, gain 1 mirror",
    power: 2,
  },
  {
    id: "frogs_12",
    card: "unit",
    type: "frogs",
    tier: 4,
    image: "r12.png",
    effect: "attack,refresh_2",
    readableEffect: "Gain 2 refreshes",
    power: 2,
  },
  {
    id: "frogs_13",
    card: "unit",
    type: "frogs",
    tier: 5,
    image: "r13.png",
    effect: "battlecry,discover_1",
    readableEffect: "Discover 1 of the highest tier not in play",
    power: 3,
  },
  {
    id: "frogs_14",
    card: "unit",
    type: "frogs",
    tier: 5,
    image: "r14.png",
    effect: "endOfTurn,bounce",
    readableEffect: "At end of turn, bounce a unit",
    power: 3,
  },
  {
    id: "frogs_15",
    card: "unit",
    type: "frogs",
    tier: 5,
    image: "r15.png",
    effect: "",
    readableEffect: "Effect to be implemented",
    power: 3,
  },
  {
    id: "frogs_16",
    card: "unit",
    type: "frogs",
    tier: 6,
    image: "r16.png",
    effect: "battlecry,fragment_1",
    readableEffect: "Gain 1 Fragment",
  },
  {
    id: "frogs_17",
    card: "unit",
    type: "frogs",
    tier: 6,
    image: "r17.png",
    effect: "triggered,golden,frogs_3",
    readableEffect: "When you make unit golden, gain 3 reputation with any",
    power: 3,
  },
  {
    id: "frogs_18",
    card: "unit",
    type: "frogs",
    tier: 6,
    image: "r18.png",
    effect: "attack,mirror_1",
    readableEffect: "Gain 1 mirror token",
    power: 3,
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
const insectsZoneCards = [
  // 4 cards with 1 main + 1 other
  {
    id: "insects_zone_1",
    card: "zone",
    type: "insects",
    age: 1,
    mainTribes: ["frogs"],
    otherTribes: ["boars"],
    backgroundImage: "insectsBackground.png",
  },
  {
    id: "insects_zone_2",
    card: "zone",
    type: "insects",
    age: 1,
    mainTribes: ["boars"],
    otherTribes: ["birds"],
    backgroundImage: "insectsBackground.png",
  },
  {
    id: "insects_zone_3",
    card: "zone",
    type: "insects",
    age: 1,
    mainTribes: ["birds"],
    otherTribes: ["frogs"],
    backgroundImage: "insectsBackground.png",
  },
  {
    id: "insects_zone_4",
    card: "zone",
    type: "insects",
    age: 1,
    mainTribes: ["frogs"],
    otherTribes: ["birds"],
    backgroundImage: "insectsBackground.png",
  },
  // 3 cards with 2 main + 2 other
  {
    id: "insects_zone_5",
    card: "zone",
    type: "insects",
    age: 2,
    mainTribes: ["frogs", "boars"],
    otherTribes: ["birds", "frogs"],
    backgroundImage: "insectsBackground.png",
  },
  {
    id: "insects_zone_6",
    card: "zone",
    type: "insects",
    age: 2,
    mainTribes: ["birds", "frogs"],
    otherTribes: ["boars", "birds"],
    backgroundImage: "insectsBackground.png",
  },
  {
    id: "insects_zone_7",
    card: "zone",
    type: "insects",
    age: 2,
    mainTribes: ["boars", "birds"],
    otherTribes: ["frogs", "boars"],
    backgroundImage: "insectsBackground.png",
  },
  // 3 cards with 3 main + 3 other
  {
    id: "insects_zone_8",
    card: "zone",
    type: "insects",
    age: 3,
    mainTribes: ["frogs", "boars", "birds"],
    otherTribes: ["birds", "frogs", "boars"],
    backgroundImage: "insectsBackground.png",
  },
  {
    id: "insects_zone_9",
    card: "zone",
    type: "insects",
    age: 3,
    mainTribes: ["birds", "frogs", "boars"],
    otherTribes: ["boars", "birds", "frogs"],
    backgroundImage: "insectsBackground.png",
  },
  {
    id: "insects_zone_10",
    card: "zone",
    type: "insects",
    age: 3,
    mainTribes: ["boars", "birds", "frogs"],
    otherTribes: ["frogs", "boars", "birds"],
    backgroundImage: "insectsBackground.png",
  },
];

const birdsZoneCards = [
  {
    id: "birds_zone_1",
    card: "zone",
    type: "birds",
    age: 1,
    otherTribes: ["insects", "boars"],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_2",
    card: "zone",
    type: "birds",
    age: 1,
    otherTribes: ["foxes", "frogs"],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_3",
    card: "zone",
    type: "birds",
    age: 1,
    otherTribes: ["insects", "boars", "foxes"],
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
    otherTribes: ["insects", "boars", "foxes", "frogs"],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_6",
    card: "zone",
    type: "birds",
    age: 2,
    otherTribes: ["insects", "boars", "foxes", "frogs", "birds"],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_7",
    card: "zone",
    type: "birds",
    age: 2,
    otherTribes: ["insects", "boars", "foxes", "frogs", "birds", "insects"],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_8",
    card: "zone",
    type: "birds",
    age: 3,
    otherTribes: [
      "insects",
      "boars",
      "foxes",
      "frogs",
      "birds",
      "insects",
      "boars",
    ],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_9",
    card: "zone",
    type: "birds",
    age: 3,
    otherTribes: [
      "insects",
      "boars",
      "foxes",
      "frogs",
      "birds",
      "insects",
      "boars",
      "foxes",
    ],
    backgroundImage: "birdsBackground.png",
  },
  {
    id: "birds_zone_10",
    card: "zone",
    type: "birds",
    age: 3,
    otherTribes: [
      "insects",
      "boars",
      "foxes",
      "frogs",
      "birds",
      "insects",
      "boars",
      "foxes",
      "frogs",
      "birds",
    ],
    backgroundImage: "birdsBackground.png",
  },
];

const boarsZoneCards = [
  {
    id: "boars_zone_1",
    card: "zone",
    type: "boars",
    age: 1,
    otherTribes: ["insects", "birds"],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_2",
    card: "zone",
    type: "boars",
    age: 1,
    otherTribes: ["foxes", "frogs"],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_3",
    card: "zone",
    type: "boars",
    age: 1,
    otherTribes: ["insects", "birds", "foxes"],
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
    otherTribes: ["insects", "birds", "foxes", "frogs"],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_6",
    card: "zone",
    type: "boars",
    age: 2,
    otherTribes: ["insects", "birds", "foxes", "frogs", "boars"],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_7",
    card: "zone",
    type: "boars",
    age: 2,
    otherTribes: ["insects", "birds", "foxes", "frogs", "boars", "insects"],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_8",
    card: "zone",
    type: "boars",
    age: 3,
    otherTribes: [
      "insects",
      "birds",
      "foxes",
      "frogs",
      "boars",
      "insects",
      "birds",
    ],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_9",
    card: "zone",
    type: "boars",
    age: 3,
    otherTribes: [
      "insects",
      "birds",
      "foxes",
      "frogs",
      "boars",
      "insects",
      "birds",
      "foxes",
    ],
    backgroundImage: "boarsBackground.png",
  },
  {
    id: "boars_zone_10",
    card: "zone",
    type: "boars",
    age: 3,
    otherTribes: [
      "insects",
      "birds",
      "foxes",
      "frogs",
      "boars",
      "insects",
      "birds",
      "foxes",
      "frogs",
      "boars",
    ],
    backgroundImage: "boarsBackground.png",
  },
];

const foxesZoneCards = [
  {
    id: "foxes_zone_1",
    card: "zone",
    type: "foxes",
    age: 1,
    otherTribes: ["insects", "birds"],
    backgroundImage: "foxesBackground.png",
  },
  {
    id: "foxes_zone_2",
    card: "zone",
    type: "foxes",
    age: 1,
    otherTribes: ["boars", "frogs"],
    backgroundImage: "foxesBackground.png",
  },
  {
    id: "foxes_zone_3",
    card: "zone",
    type: "foxes",
    age: 1,
    otherTribes: ["insects", "birds", "boars"],
    backgroundImage: "foxesBackground.png",
  },
  {
    id: "foxes_zone_4",
    card: "zone",
    type: "foxes",
    age: 1,
    otherTribes: ["frogs"],
    backgroundImage: "foxesBackground.png",
  },
  {
    id: "foxes_zone_5",
    card: "zone",
    type: "foxes",
    age: 2,
    otherTribes: ["insects", "birds", "boars", "frogs"],
    backgroundImage: "foxesBackground.png",
  },
  {
    id: "foxes_zone_6",
    card: "zone",
    type: "foxes",
    age: 2,
    otherTribes: ["insects", "birds", "boars", "frogs", "foxes"],
    backgroundImage: "foxesBackground.png",
  },
  {
    id: "foxes_zone_7",
    card: "zone",
    type: "foxes",
    age: 2,
    otherTribes: ["insects", "birds", "boars", "frogs", "foxes", "insects"],
    backgroundImage: "foxesBackground.png",
  },
  {
    id: "foxes_zone_8",
    card: "zone",
    type: "foxes",
    age: 3,
    otherTribes: [
      "insects",
      "birds",
      "boars",
      "frogs",
      "foxes",
      "insects",
      "birds",
    ],
    backgroundImage: "foxesBackground.png",
  },
  {
    id: "foxes_zone_9",
    card: "zone",
    type: "foxes",
    age: 3,
    otherTribes: [
      "insects",
      "birds",
      "boars",
      "frogs",
      "foxes",
      "insects",
      "birds",
      "boars",
    ],
    backgroundImage: "foxesBackground.png",
  },
  {
    id: "foxes_zone_10",
    card: "zone",
    type: "foxes",
    age: 3,
    otherTribes: [
      "insects",
      "birds",
      "boars",
      "frogs",
      "foxes",
      "insects",
      "birds",
      "boars",
      "frogs",
      "foxes",
    ],
    backgroundImage: "foxesBackground.png",
  },
];

const frogsZoneCards = [
  {
    id: "frogs_zone_1",
    card: "zone",
    type: "frogs",
    age: 1,
    otherTribes: ["insects", "birds"],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_2",
    card: "zone",
    type: "frogs",
    age: 1,
    otherTribes: ["boars", "foxes"],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_3",
    card: "zone",
    type: "frogs",
    age: 1,
    otherTribes: ["insects", "birds", "boars"],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_4",
    card: "zone",
    type: "frogs",
    age: 1,
    otherTribes: ["foxes"],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_5",
    card: "zone",
    type: "frogs",
    age: 2,
    otherTribes: ["insects", "birds", "boars", "foxes"],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_6",
    card: "zone",
    type: "frogs",
    age: 2,
    otherTribes: ["insects", "birds", "boars", "foxes", "frogs"],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_7",
    card: "zone",
    type: "frogs",
    age: 2,
    otherTribes: ["insects", "birds", "boars", "foxes", "frogs", "insects"],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_8",
    card: "zone",
    type: "frogs",
    age: 3,
    otherTribes: [
      "insects",
      "birds",
      "boars",
      "foxes",
      "frogs",
      "insects",
      "birds",
    ],
    backgroundImage: "frogsBackground.png",
  },
  {
    id: "frogs_zone_9",
    card: "zone",
    type: "frogs",
    age: 3,
    otherTribes: [
      "insects",
      "birds",
      "boars",
      "foxes",
      "frogs",
      "insects",
      "birds",
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
      "insects",
      "birds",
      "boars",
      "foxes",
      "frogs",
      "insects",
      "birds",
      "boars",
      "foxes",
      "frogs",
    ],
    backgroundImage: "frogsBackground.png",
  },
];

// Simple Zone Cards - 1 main + 1 other tribe combinations
const simpleZoneCards = [
  // Frogs as main tribe
  {
    id: "simple_zone_1",
    card: "zone",
    age: 1,
    mainTribes: ["frogs"],
    otherTribes: ["boars"],
  },
  {
    id: "simple_zone_2",
    card: "zone",
    age: 1,
    mainTribes: ["frogs"],
    otherTribes: ["birds"],
  },
  {
    id: "simple_zone_3",
    card: "zone",
    age: 1,
    mainTribes: ["frogs"],
    otherTribes: ["insects"],
  },
  // Boars as main tribe
  {
    id: "simple_zone_4",
    card: "zone",
    age: 1,
    mainTribes: ["boars"],
    otherTribes: ["frogs"],
  },
  {
    id: "simple_zone_5",
    card: "zone",
    age: 1,
    mainTribes: ["boars"],
    otherTribes: ["birds"],
  },
  {
    id: "simple_zone_6",
    card: "zone",
    age: 1,
    mainTribes: ["boars"],
    otherTribes: ["insects"],
  },
  // Birds as main tribe
  {
    id: "simple_zone_7",
    card: "zone",
    age: 1,
    mainTribes: ["birds"],
    otherTribes: ["frogs"],
  },
  {
    id: "simple_zone_8",
    card: "zone",
    age: 1,
    mainTribes: ["birds"],
    otherTribes: ["boars"],
  },
  {
    id: "simple_zone_9",
    card: "zone",
    age: 1,
    mainTribes: ["birds"],
    otherTribes: ["insects"],
  },
  // Insects as main tribe
  {
    id: "simple_zone_10",
    card: "zone",
    age: 1,
    mainTribes: ["insects"],
    otherTribes: ["frogs"],
  },
  {
    id: "simple_zone_11",
    card: "zone",
    age: 1,
    mainTribes: ["insects"],
    otherTribes: ["boars"],
  },
  {
    id: "simple_zone_12",
    card: "zone",
    age: 1,
    mainTribes: ["insects"],
    otherTribes: ["birds"],
  },
];

// Double Zone Cards - 2 main + 2 other tribe combinations
const doubleZoneCards = [
  // Frogs and Boars as main tribes
  {
    id: "double_zone_1",
    card: "zone",
    age: 2,
    mainTribes: ["frogs", "boars"],
    otherTribes: ["birds", "insects"],
  },
  {
    id: "double_zone_2",
    card: "zone",
    age: 2,
    mainTribes: ["frogs", "boars"],
    otherTribes: ["birds", "birds"],
  },
  {
    id: "double_zone_3",
    card: "zone",
    age: 2,
    mainTribes: ["frogs", "boars"],
    otherTribes: ["insects", "insects"],
  },
  // Frogs and Birds as main tribes
  {
    id: "double_zone_4",
    card: "zone",
    age: 2,
    mainTribes: ["frogs", "birds"],
    otherTribes: ["boars", "insects"],
  },
  {
    id: "double_zone_5",
    card: "zone",
    age: 2,
    mainTribes: ["frogs", "birds"],
    otherTribes: ["boars", "boars"],
  },
  {
    id: "double_zone_6",
    card: "zone",
    age: 2,
    mainTribes: ["frogs", "birds"],
    otherTribes: ["insects", "insects"],
  },
  // Frogs and Insects as main tribes
  {
    id: "double_zone_7",
    card: "zone",
    age: 2,
    mainTribes: ["frogs", "insects"],
    otherTribes: ["boars", "birds"],
  },
  {
    id: "double_zone_8",
    card: "zone",
    age: 2,
    mainTribes: ["frogs", "insects"],
    otherTribes: ["boars", "boars"],
  },
  {
    id: "double_zone_9",
    card: "zone",
    age: 2,
    mainTribes: ["frogs", "insects"],
    otherTribes: ["birds", "birds"],
  },
  // Boars and Birds as main tribes
  {
    id: "double_zone_10",
    card: "zone",
    age: 2,
    mainTribes: ["boars", "birds"],
    otherTribes: ["frogs", "insects"],
  },
  {
    id: "double_zone_11",
    card: "zone",
    age: 2,
    mainTribes: ["boars", "birds"],
    otherTribes: ["frogs", "frogs"],
  },
  {
    id: "double_zone_12",
    card: "zone",
    age: 2,
    mainTribes: ["boars", "birds"],
    otherTribes: ["insects", "insects"],
  },
  // Boars and Insects as main tribes
  {
    id: "double_zone_13",
    card: "zone",
    age: 2,
    mainTribes: ["boars", "insects"],
    otherTribes: ["frogs", "birds"],
  },
  {
    id: "double_zone_14",
    card: "zone",
    age: 2,
    mainTribes: ["boars", "insects"],
    otherTribes: ["frogs", "frogs"],
  },
  {
    id: "double_zone_15",
    card: "zone",
    age: 2,
    mainTribes: ["boars", "insects"],
    otherTribes: ["birds", "birds"],
  },
  // Birds and Insects as main tribes
  {
    id: "double_zone_16",
    card: "zone",
    age: 2,
    mainTribes: ["birds", "insects"],
    otherTribes: ["frogs", "boars"],
  },
  {
    id: "double_zone_17",
    card: "zone",
    age: 2,
    mainTribes: ["birds", "insects"],
    otherTribes: ["frogs", "frogs"],
  },
  {
    id: "double_zone_18",
    card: "zone",
    age: 2,
    mainTribes: ["birds", "insects"],
    otherTribes: ["boars", "boars"],
  },
  // Same tribe combinations in main
  {
    id: "double_zone_19",
    card: "zone",
    age: 2,
    mainTribes: ["frogs", "frogs"],
    otherTribes: ["boars", "birds"],
  },
  {
    id: "double_zone_20",
    card: "zone",
    age: 2,
    mainTribes: ["frogs", "frogs"],
    otherTribes: ["boars", "insects"],
  },
  {
    id: "double_zone_21",
    card: "zone",
    age: 2,
    mainTribes: ["frogs", "frogs"],
    otherTribes: ["birds", "insects"],
  },
  {
    id: "double_zone_22",
    card: "zone",
    age: 2,
    mainTribes: ["boars", "boars"],
    otherTribes: ["frogs", "birds"],
  },
  {
    id: "double_zone_23",
    card: "zone",
    age: 2,
    mainTribes: ["boars", "boars"],
    otherTribes: ["frogs", "insects"],
  },
  {
    id: "double_zone_24",
    card: "zone",
    age: 2,
    mainTribes: ["boars", "boars"],
    otherTribes: ["birds", "insects"],
  },
  {
    id: "double_zone_25",
    card: "zone",
    age: 2,
    mainTribes: ["birds", "birds"],
    otherTribes: ["frogs", "boars"],
  },
  {
    id: "double_zone_26",
    card: "zone",
    age: 2,
    mainTribes: ["birds", "birds"],
    otherTribes: ["frogs", "insects"],
  },
  {
    id: "double_zone_27",
    card: "zone",
    age: 2,
    mainTribes: ["birds", "birds"],
    otherTribes: ["boars", "insects"],
  },
  {
    id: "double_zone_28",
    card: "zone",
    age: 2,
    mainTribes: ["insects", "insects"],
    otherTribes: ["frogs", "boars"],
  },
  {
    id: "double_zone_29",
    card: "zone",
    age: 2,
    mainTribes: ["insects", "insects"],
    otherTribes: ["frogs", "birds"],
  },
  {
    id: "double_zone_30",
    card: "zone",
    age: 2,
    mainTribes: ["insects", "insects"],
    otherTribes: ["boars", "birds"],
  },
];

// Triple Zone Cards - 3 main + 3 other tribe combinations
const tripleZoneCards = [
  // Frogs and Birds as main tribes (frog, frog, bird)
  {
    id: "triple_zone_1",
    card: "zone",
    age: 3,
    mainTribes: ["frogs", "frogs", "birds"],
    otherTribes: ["boars", "boars", "insects"],
  },
  {
    id: "triple_zone_2",
    card: "zone",
    age: 3,
    mainTribes: ["frogs", "frogs", "birds"],
    otherTribes: ["boars", "insects", "insects"],
  },
  // Frogs and Boars as main tribes (frog, frog, boar)
  {
    id: "triple_zone_3",
    card: "zone",
    age: 3,
    mainTribes: ["frogs", "frogs", "boars"],
    otherTribes: ["birds", "birds", "insects"],
  },
  {
    id: "triple_zone_4",
    card: "zone",
    age: 3,
    mainTribes: ["frogs", "frogs", "boars"],
    otherTribes: ["birds", "insects", "insects"],
  },
  // Frogs and Insects as main tribes (frog, frog, insect)
  {
    id: "triple_zone_5",
    card: "zone",
    age: 3,
    mainTribes: ["frogs", "frogs", "insects"],
    otherTribes: ["boars", "boars", "birds"],
  },
  {
    id: "triple_zone_6",
    card: "zone",
    age: 3,
    mainTribes: ["frogs", "frogs", "insects"],
    otherTribes: ["boars", "birds", "birds"],
  },
  // Birds and Frogs as main tribes (bird, bird, frog)
  {
    id: "triple_zone_7",
    card: "zone",
    age: 3,
    mainTribes: ["birds", "birds", "frogs"],
    otherTribes: ["boars", "boars", "insects"],
  },
  {
    id: "triple_zone_8",
    card: "zone",
    age: 3,
    mainTribes: ["birds", "birds", "frogs"],
    otherTribes: ["boars", "insects", "insects"],
  },
  // Birds and Boars as main tribes (bird, bird, boar)
  {
    id: "triple_zone_9",
    card: "zone",
    age: 3,
    mainTribes: ["birds", "birds", "boars"],
    otherTribes: ["frogs", "frogs", "insects"],
  },
  {
    id: "triple_zone_10",
    card: "zone",
    age: 3,
    mainTribes: ["birds", "birds", "boars"],
    otherTribes: ["frogs", "insects", "insects"],
  },
  // Birds and Insects as main tribes (bird, bird, insect)
  {
    id: "triple_zone_11",
    card: "zone",
    age: 3,
    mainTribes: ["birds", "birds", "insects"],
    otherTribes: ["frogs", "frogs", "boars"],
  },
  {
    id: "triple_zone_12",
    card: "zone",
    age: 3,
    mainTribes: ["birds", "birds", "insects"],
    otherTribes: ["frogs", "boars", "boars"],
  },
  // Boars and Frogs as main tribes (boar, boar, frog)
  {
    id: "triple_zone_13",
    card: "zone",
    age: 3,
    mainTribes: ["boars", "boars", "frogs"],
    otherTribes: ["birds", "birds", "insects"],
  },
  {
    id: "triple_zone_14",
    card: "zone",
    age: 3,
    mainTribes: ["boars", "boars", "frogs"],
    otherTribes: ["birds", "insects", "insects"],
  },
  // Boars and Birds as main tribes (boar, boar, bird)
  {
    id: "triple_zone_15",
    card: "zone",
    age: 3,
    mainTribes: ["boars", "boars", "birds"],
    otherTribes: ["frogs", "frogs", "insects"],
  },
  {
    id: "triple_zone_16",
    card: "zone",
    age: 3,
    mainTribes: ["boars", "boars", "birds"],
    otherTribes: ["frogs", "insects", "insects"],
  },
  // Boars and Insects as main tribes (boar, boar, insect)
  {
    id: "triple_zone_17",
    card: "zone",
    age: 3,
    mainTribes: ["boars", "boars", "insects"],
    otherTribes: ["frogs", "frogs", "birds"],
  },
  {
    id: "triple_zone_18",
    card: "zone",
    age: 3,
    mainTribes: ["boars", "boars", "insects"],
    otherTribes: ["frogs", "birds", "birds"],
  },
  // Insects and Frogs as main tribes (insect, insect, frog)
  {
    id: "triple_zone_19",
    card: "zone",
    age: 3,
    mainTribes: ["insects", "insects", "frogs"],
    otherTribes: ["boars", "boars", "birds"],
  },
  {
    id: "triple_zone_20",
    card: "zone",
    age: 3,
    mainTribes: ["insects", "insects", "frogs"],
    otherTribes: ["boars", "birds", "birds"],
  },
  // Insects and Boars as main tribes (insect, insect, boar)
  {
    id: "triple_zone_21",
    card: "zone",
    age: 3,
    mainTribes: ["insects", "insects", "boars"],
    otherTribes: ["frogs", "frogs", "birds"],
  },
  {
    id: "triple_zone_22",
    card: "zone",
    age: 3,
    mainTribes: ["insects", "insects", "boars"],
    otherTribes: ["frogs", "birds", "birds"],
  },
  // Insects and Birds as main tribes (insect, insect, bird)
  {
    id: "triple_zone_23",
    card: "zone",
    age: 3,
    mainTribes: ["insects", "insects", "birds"],
    otherTribes: ["frogs", "frogs", "boars"],
  },
  {
    id: "triple_zone_24",
    card: "zone",
    age: 3,
    mainTribes: ["insects", "insects", "birds"],
    otherTribes: ["frogs", "boars", "boars"],
  },
];

// Export all zone cards
export const zoneCards = [
  // ...insectsZoneCards,
  // ...birdsZoneCards,
  // ...boarsZoneCards,
  // ...foxesZoneCards,
  // ...frogsZoneCards,
  // ...simpleZoneCards,
  // ...doubleZoneCards,
  // ...tripleZoneCards,
];

// Export all Battlegrounds cards
export const battlegroundsCards = [
  ...insectsCards,
  ...boarsCards,
  ...birdsCards,
  ...frogsCards,
];

// Land Cards Data
// Static effect definitions
const effects = {
  gold: { type: "gold", value: 2, symbol: "gold" },
  mirror: { type: "mirror", value: 1, symbol: "mirror" },
  refresh: { type: "refresh", value: 2, symbol: "refresh" },
  reputation: { type: "reputation", value: 2, symbol: "all" }, // 2 reputation with any faction
  star: { type: "star", value: 1, symbol: "star" },
};

// Age 1 Land Cards (5 cards)
const age1LandCards = [
  {
    id: "land_age1_1",
    card: "land",
    age: 1,
    section1: { tribes: ["frogs"], effects: [] },
    section2: { tribes: [], effects: [effects.gold] },
    section3: { tribes: [], effects: [] },
  },
  {
    id: "land_age1_2",
    card: "land",
    age: 1,
    section1: { tribes: ["boars"], effects: [] },
    section2: { tribes: [], effects: [effects.mirror] },
    section3: { tribes: [], effects: [] },
  },
  {
    id: "land_age1_3",
    card: "land",
    age: 1,
    section1: { tribes: ["birds"], effects: [] },
    section2: { tribes: [], effects: [effects.refresh] },
    section3: { tribes: [], effects: [] },
  },
  {
    id: "land_age1_4",
    card: "land",
    age: 1,
    section1: { tribes: ["insects"], effects: [] },
    section2: { tribes: [], effects: [effects.reputation] },
    section3: { tribes: [], effects: [] },
  },
  {
    id: "land_age1_5",
    card: "land",
    age: 1,
    section1: { tribes: ["frogs"], effects: [] },
    section2: { tribes: [], effects: [effects.star] },
    section3: { tribes: [], effects: [] },
  },
];

// Age 2 Land Cards (5 cards)
const age2LandCards = [
  {
    id: "land_age2_1",
    card: "land",
    age: 2,
    section1: { tribes: ["frogs", "boars"], effects: [] },
    section2: { tribes: [], effects: [effects.gold, effects.mirror] },
    section3: { tribes: [], effects: [effects.refresh] },
  },
  {
    id: "land_age2_2",
    card: "land",
    age: 2,
    section1: { tribes: ["birds", "insects"], effects: [] },
    section2: { tribes: [], effects: [effects.refresh, effects.star] },
    section3: { tribes: [], effects: [effects.reputation] },
  },
  {
    id: "land_age2_3",
    card: "land",
    age: 2,
    section1: { tribes: ["frogs", "birds"], effects: [] },
    section2: { tribes: [], effects: [effects.gold, effects.reputation] },
    section3: { tribes: [], effects: [effects.mirror] },
  },
  {
    id: "land_age2_4",
    card: "land",
    age: 2,
    section1: { tribes: ["boars", "insects"], effects: [] },
    section2: { tribes: [], effects: [effects.mirror, effects.refresh] },
    section3: { tribes: [], effects: [effects.star] },
  },
  {
    id: "land_age2_5",
    card: "land",
    age: 2,
    section1: { tribes: ["birds", "frogs"], effects: [] },
    section2: { tribes: [], effects: [effects.star, effects.gold] },
    section3: { tribes: [], effects: [effects.refresh] },
  },
];

// Age 3 Land Cards (5 cards)
const age3LandCards = [
  {
    id: "land_age3_1",
    card: "land",
    age: 3,
    section1: { tribes: ["frogs", "boars", "birds"], effects: [] },
    section2: {
      tribes: ["insects"],
      effects: [effects.gold, effects.mirror],
    },
    section3: { tribes: [], effects: [effects.refresh, effects.star] },
  },
  {
    id: "land_age3_2",
    card: "land",
    age: 3,
    section1: { tribes: ["birds", "insects", "frogs"], effects: [] },
    section2: {
      tribes: ["boars"],
      effects: [effects.refresh, effects.reputation],
    },
    section3: { tribes: [], effects: [effects.gold, effects.mirror] },
  },
  {
    id: "land_age3_3",
    card: "land",
    age: 3,
    section1: { tribes: ["boars", "insects", "frogs"], effects: [] },
    section2: {
      tribes: ["birds"],
      effects: [effects.star, effects.gold],
    },
    section3: { tribes: [], effects: [effects.refresh, effects.reputation] },
  },
  {
    id: "land_age3_4",
    card: "land",
    age: 3,
    section1: { tribes: ["insects", "birds", "boars"], effects: [] },
    section2: {
      tribes: ["frogs"],
      effects: [effects.mirror, effects.refresh],
    },
    section3: { tribes: [], effects: [effects.star, effects.gold] },
  },
  {
    id: "land_age3_5",
    card: "land",
    age: 3,
    section1: { tribes: ["frogs", "birds", "insects"], effects: [] },
    section2: {
      tribes: ["boars"],
      effects: [effects.reputation, effects.star],
    },
    section3: { tribes: [], effects: [effects.mirror, effects.gold] },
  },
];

// Age 4 Land Cards (5 cards)
const age4LandCards = [
  {
    id: "land_age4_1",
    card: "land",
    age: 4,
    section1: { tribes: ["frogs", "boars", "birds", "insects"], effects: [] },
    section2: {
      tribes: ["frogs", "boars"],
      effects: [effects.gold, effects.mirror],
    },
    section3: {
      tribes: [],
      effects: [effects.refresh, effects.star, effects.reputation],
    },
  },
  {
    id: "land_age4_2",
    card: "land",
    age: 4,
    section1: { tribes: ["birds", "insects", "frogs", "boars"], effects: [] },
    section2: {
      tribes: ["birds", "insects"],
      effects: [effects.refresh, effects.star],
    },
    section3: {
      tribes: [],
      effects: [effects.gold, effects.mirror, effects.reputation],
    },
  },
  {
    id: "land_age4_3",
    card: "land",
    age: 4,
    section1: { tribes: ["boars", "frogs", "insects", "birds"], effects: [] },
    section2: {
      tribes: ["boars", "frogs"],
      effects: [effects.star, effects.gold],
    },
    section3: {
      tribes: [],
      effects: [effects.refresh, effects.mirror, effects.reputation],
    },
  },
  {
    id: "land_age4_4",
    card: "land",
    age: 4,
    section1: { tribes: ["insects", "birds", "boars", "frogs"], effects: [] },
    section2: {
      tribes: ["insects", "birds"],
      effects: [effects.mirror, effects.refresh],
    },
    section3: {
      tribes: [],
      effects: [effects.star, effects.gold, effects.reputation],
    },
  },
  {
    id: "land_age4_5",
    card: "land",
    age: 4,
    section1: { tribes: ["frogs", "birds", "insects", "boars"], effects: [] },
    section2: {
      tribes: ["frogs", "birds"],
      effects: [effects.reputation, effects.star],
    },
    section3: {
      tribes: [],
      effects: [effects.gold, effects.mirror, effects.refresh],
    },
  },
];

// Export all land cards
export const landCards = [
  ...age1LandCards,
  ...age2LandCards,
  ...age3LandCards,
  ...age4LandCards,
];

// Export all cards (units + zones + lands)
export const allBattlegroundsCards = [
  ...battlegroundsCards,
  ...zoneCards,
  ...landCards,
];
