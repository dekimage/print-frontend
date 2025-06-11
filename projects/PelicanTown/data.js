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

// BIRDS FACTION
const birdCards = [
  {
    id: "B001",
    name: "Soaring Eagle",
    faction: "birds",
    cost: 5,
    effect: "When played: Gain [move] [move] and draw a card.",
    tuckEffect: "Gain [vp] for each Bird card you control.",
    mp: 3,
    image: "", // Placeholder for image
  },
  {
    id: "B002",
    name: "Kingfisher Scout",
    faction: "birds",
    cost: 2,
    effect: "Look at the top 3 cards of the deck and put one in your hand.",
    tuckEffect: "Gain [wood] or [gold].",
    mp: 2,
    image: "",
  },
  {
    id: "B003",
    name: "Pelican Messenger",
    faction: "birds",
    cost: 3,
    effect: "Draw a card. If it's a Bird card, gain [mana].",
    tuckEffect: "Gain [move] [move].",
    mp: 2,
    image: "",
  },
  {
    id: "B004",
    name: "Hawk Patroller",
    faction: "birds",
    cost: 4,
    effect: "When built: Gain [gold] for each adjacent card.",
    tuckEffect: "Gain [stone] and [wood].",
    mp: 3,
    image: "",
  },
  {
    id: "B005",
    name: "Avian Elder",
    faction: "birds",
    cost: 6,
    effect: "When played: Gain [mana] [mana] or [vp] [vp].",
    tuckEffect: "Gain [gold] [gold] [gold].",
    mp: 1,
    image: "",
  },
];

// MOLES FACTION
const moleCards = [
  {
    id: "M001",
    name: "Tunnel Digger",
    faction: "moles",
    cost: 3,
    effect: "Build action: Pay [stone] less for the next building.",
    tuckEffect: "Gain [move] and [stone].",
    mp: 1,
    image: "",
  },
  {
    id: "M002",
    name: "Mining Specialist",
    faction: "moles",
    cost: 4,
    effect: "When built: Gain [stone] [stone].",
    tuckEffect: "Gain [gold] or [vp].",
    mp: 1,
    image: "",
  },
  {
    id: "M003",
    name: "Subterranean Scholar",
    faction: "moles",
    cost: 5,
    effect: "Once per turn: Pay [stone] to gain [mana] [mana].",
    tuckEffect: "Gain [move] and draw a card.",
    mp: 2,
    image: "",
  },
  {
    id: "M004",
    name: "Earthmover",
    faction: "moles",
    cost: 6,
    effect: "When played: You may move any of your buildings once for free.",
    tuckEffect: "Gain [stone] [stone] [stone].",
    mp: 1,
    image: "",
  },
  {
    id: "M005",
    name: "Mole Chief",
    faction: "moles",
    cost: 7,
    effect: "When built: Gain [vp] for each Mole card you control.",
    tuckEffect: "Gain [stone] and [mana] [mana].",
    mp: 1,
    image: "",
  },
];

// INSECTS FACTION
const insectCards = [
  {
    id: "I001",
    name: "Worker Ant",
    faction: "insects",
    cost: 1,
    effect: "Gain [move] for each adjacent Insect card.",
    tuckEffect: "Gain [wood].",
    mp: 1,
    image: "",
  },
  {
    id: "I002",
    name: "Bee Collector",
    faction: "insects",
    cost: 2,
    effect: "Harvest action: Gain [gold] and [wood].",
    tuckEffect: "Gain [move] [move].",
    mp: 2,
    image: "",
  },
  {
    id: "I003",
    name: "Dragonfly Scout",
    faction: "insects",
    cost: 3,
    effect: "When played: Look at an opponent's hand.",
    tuckEffect: "Gain [wood] or [gold].",
    mp: 3,
    image: "",
  },
  {
    id: "I004",
    name: "Spider Weaver",
    faction: "insects",
    cost: 4,
    effect: "When built: Place a trap token on an empty adjacent space.",
    tuckEffect: "Gain [vp] and [wood].",
    mp: 2,
    image: "",
  },
  {
    id: "I005",
    name: "Grasshopper Leader",
    faction: "insects",
    cost: 5,
    effect: "Your Insect cards gain +1 [move] while this is in play.",
    tuckEffect: "Gain [mana] [mana] or [gold] [gold].",
    mp: 3,
    image: "",
  },
];

// GOATS FACTION
const goatCards = [
  {
    id: "G001",
    name: "Mountain Climber",
    faction: "goats",
    cost: 2,
    effect: "Ignore terrain penalties when moving.",
    tuckEffect: "Gain [move] [move].",
    mp: 2,
    image: "",
  },
  {
    id: "G002",
    name: "Ram Charger",
    faction: "goats",
    cost: 3,
    effect: "Can push adjacent units when moving.",
    tuckEffect: "Gain [gold] or [stone].",
    mp: 2,
    image: "",
  },
  {
    id: "G003",
    name: "Goat Elder",
    faction: "goats",
    cost: 4,
    effect: "When built: Gain [vp] for each mountain terrain adjacent.",
    tuckEffect: "Gain [mana] and [vp].",
    mp: 1,
    image: "",
  },
  {
    id: "G004",
    name: "Billy Trader",
    faction: "goats",
    cost: 5,
    effect: "Trade action: Gain [gold] [gold] or [stone] [stone].",
    tuckEffect: "Gain [wood] [wood] or [move] [move].",
    mp: 2,
    image: "",
  },
  {
    id: "G005",
    name: "Goat King",
    faction: "goats",
    cost: 7,
    effect: "When played: All your Goat cards gain +1 [vp].",
    tuckEffect: "Gain [gold] [gold] [gold] or [vp] [vp].",
    mp: 2,
    image: "",
  },
];

// Combine all factions
export const pelicanTownCards = [
  ...birdCards,
  ...moleCards,
  ...insectCards,
  ...goatCards,
];
