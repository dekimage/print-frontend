/**
 * Marshlands Project - Central Asset & Data Configuration
 *
 * ASSETS: Single source of truth for all image URLs.
 * Update URLs here and they propagate everywhere.
 */

import greySymbol from "../../assets/marshlands/grey.png";
import purpleSymbol from "../../assets/marshlands/purple.png";
import blueSymbol from "../../assets/marshlands/blue.png";

// ═══════════════════════════════════════════════════════════════════════════
// ASSETS - Central image URL registry (update these when you have real URLs)
// ═══════════════════════════════════════════════════════════════════════════

export const ASSETS = {
  // 3 Resources (yielded / cost symbols)
  resources: {
    wood: "https://api.dofusdb.fr/img/items/108230.png",
    stone: "https://api.dofusdb.fr/img/items/50715.png",
    clay: "https://api.dofusdb.fr/img/items/109610.png",
  },

  // 6 Artifacts
  artifacts: {
    artifact1: "https://api.dofusdb.fr/img/items/1119.png",
    artifact2: "https://api.dofusdb.fr/img/items/4125.png",
    artifact3: "https://api.dofusdb.fr/img/items/9124.png",
    artifact4: "https://api.dofusdb.fr/img/items/10113.png",
    artifact5: "https://api.dofusdb.fr/img/items/11097.png",
    artifact6: "https://api.dofusdb.fr/img/items/16166.png",
  },

  // Workers (1-3, used in cost)
  workers: {
    worker: "https://api.dofusdb.fr/img/items/307016.png",
  },

  // Victory points (for battle cards)
  vp: "https://api.dofusdb.fr/img/items/82565.png",

  // Upgrade symbols (worker, evolve, action) + base for track card
  upgradeSymbols: {
    worker: "https://api.dofusdb.fr/img/items/164615.png",
    evolve: "https://api.dofusdb.fr/img/items/164621.png",
    action: "https://api.dofusdb.fr/img/items/164622.png",
    base: "https://api.dofusdb.fr/img/items/93103.png",
  },

  // Action Points - for track card (replace with your URL)
  actionPoints: "https://api.dofusdb.fr/img/items/23012.png",

  // Combat rewards - credit and reputation (add your image URLs)
  credit: "https://api.dofusdb.fr/img/items/164756.png",
  reputation: "https://api.dofusdb.fr/img/items/76045.png",

  // Reputation color symbols (grey, purple, blue)
  reputationSymbols: {
    grey: greySymbol,
    purple: purpleSymbol,
    blue: blueSymbol,
  },

  // Event card symbols - add your image URLs
  tempWorker: "https://api.dofusdb.fr/img/items/314114.png",
  controlToken: "https://api.dofusdb.fr/img/items/93028.png",
  eventActions: {
    move: "https://via.placeholder.com/24x24/4A7B9A/fff?text=M",
    deploy: "https://via.placeholder.com/24x24/9A7B4A/fff?text=D",
    build: "https://via.placeholder.com/24x24/7B9A4A/fff?text=B",
  },

  // Placeholder for card art (blank until provided)
  cardArt: {
    default:
      "https://wow.zamimg.com/uploads/screenshots/normal/149792-explore-zangarmarsh.jpg",
  },

  // Card symbol for starting stuff (update URL when available)
  cardSymbol: "https://api.dofusdb.fr/img/items/24963.png",

  // Trophy for major card (victory/20th place) - use distinct icon if available
  trophy: "https://api.dofusdb.fr/img/items/16275.png",
};

// ═══════════════════════════════════════════════════════════════════════════
// ENTITIES - For filters and validation
// ═══════════════════════════════════════════════════════════════════════════

export const RESOURCES = ["wood", "stone", "clay"];
export const COMBAT_COLORS = ["grey", "blue", "purple"];
export const ARTIFACTS = [
  "artifact1",
  "artifact2",
  "artifact3",
  "artifact4",
  "artifact5",
  "artifact6",
];

// Symbol mapping for effect parsing (:wood: -> image, etc.)
export const SYMBOL_MAPPINGS = {
  ...Object.fromEntries(RESOURCES.map((r) => [r, ASSETS.resources[r]])),
  ...Object.fromEntries(ARTIFACTS.map((a) => [a, ASSETS.artifacts[a]])),
};

// ═══════════════════════════════════════════════════════════════════════════
// parseMarshlandsEffect - Converts effect string with :symbol: to React elements
// Usage in effect: "Gain :wood: and :clay:." or "Draw :artifact1:"
// ═══════════════════════════════════════════════════════════════════════════

export const parseMarshlandsEffect = (effectString) => {
  if (!effectString || typeof effectString !== "string") return [];

  const parts = [];
  const regex = /:([a-zA-Z0-9_]+):/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(effectString)) !== null) {
    // Text before symbol
    if (match.index > lastIndex) {
      parts.push({
        type: "text",
        value: effectString.slice(lastIndex, match.index),
      });
    }

    const symbolKey = match[1];
    const imageUrl = SYMBOL_MAPPINGS[symbolKey];

    parts.push({
      type: "image",
      value: imageUrl || null,
      symbolKey,
    });

    lastIndex = regex.lastIndex;
  }

  // Remaining text
  if (lastIndex < effectString.length) {
    parts.push({
      type: "text",
      value: effectString.slice(lastIndex),
    });
  }

  return parts;
};

// ═══════════════════════════════════════════════════════════════════════════
// CARD DATA - 42+ cards: 12 upgrade, 12 event, 12 combat, 6 questline
// First 12 imageUrls repeat for event (wood), combat (clay), and questline cards
// ═══════════════════════════════════════════════════════════════════════════

const FIRST_12_IMAGES = [
  "https://massivelyop.com/wp-content/uploads/2021/07/wow-classic-3.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6qaYMDyZoI7lkrcoKA9MjSIoixOoOS3--Q&s",
  "https://scontent.fskp4-1.fna.fbcdn.net/v/t39.30808-6/641138304_2341849082975941_5983760926535116371_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=pFAj2y5bz00Q7kNvwELGqnu&_nc_oc=AdmFMDY2QzPppXYl-ECirwpx3HHyBM92Ab87o9DlyuP3jzMfY6tqiDdrsy11b07JlRA&_nc_zt=23&_nc_ht=scontent.fskp4-1.fna&_nc_gid=v3k3GY3kz7B_FZxnZES4QQ&_nc_ss=8&oh=00_AfsLdjd1TP1ZtxZF2QZM5ZxNug1H8hd6ZWGMZqiNFya7lQ&oe=69A7C307",
  "https://main.judgehype.com/images/news-entetes/2016/370877-1481629124.jpg",
  "https://overgear.com/guides/wp-content/uploads/2025/12/the-burning-crusade-anniversary-reputation-leveling.jpg",
  "https://domuezcltvfdx.cloudfront.net/images/Screenshot/42/95/64/51bc8e2de3244b169c2177d4d067071a/51bc8e2de3244b169c2177d4d067071a.92b10be6.jpg",
  "https://www.rpgfan.com/wp-content/uploads/2021/04/World-of-Warcraft-The-Burning-Crusade-Screenshot-047.jpg",
  "https://i.namu.wiki/i/6se5AmMcu161hNV86vu5fUOKGa9uwTeKs623_yOZopy4Y8XRVi0rjwx3jwRYhAtWYFxN5zLB6RnPF2faHTBO2A.webp",
  "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/05/baldurs-gate-3-underdark-1.jpg?w=1600&h=900&fit=crop",
  "https://warcraft.wiki.gg/images/Telredor_2.jpg?99e5de",
  "https://cdnb.artstation.com/p/assets/images/images/019/571/443/large/oceane-coissard-asset.jpg?1564074127",
  "https://64.media.tumblr.com/e0eceaeed0dd1655fed6a80d5e1199eb/tumblr_p9ntjacSBZ1xnzat4o1_1280.jpg",
];

const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const pickRandomMultiple = (arr, count) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const cardNames = [
  "Bog Walker",
  "Reed Harvester",
  "Clay Miner",
  "Stone Cutter",
  "Marsh Drudge",
  "Swamp Scout",
  "Fen Gatherer",
  "Mire Trader",
  "Wetland Builder",
  "Silt Collector",
  "Peat Farmer",
  "Mud Sifter",
  "Marshland Elder",
  "Bog Priest",
  "Reed Weaver",
  "Clay Sculptor",
  "Stone Mason",
  "Swamp Guide",
  "Fen Guardian",
  "Marsh Hermit",
  "Wetland Shaman",
  "Silt Diver",
  "Peat Burner",
  "Mud Alchemist",
  "Marshland Smith",
  "Bog Forager",
  "Reed Craftsman",
];

// // Generate 27 cards with random but valid data
// export const marshlandsCards = cardNames.map((name, index) => {
//   const workers = (index % 3) + 1; // 1, 2, or 3
//   const resourceCount = (Math.floor(index / 3) % 3) + 1; // 1, 2, or 3
//   const costResources = pickRandomMultiple(RESOURCES, resourceCount);
//   const resourceYielded = pickRandom(RESOURCES);
//   const artifactYielded = pickRandom(ARTIFACTS);

//   return {
//     id: `marshlands_${index + 1}`,
//     name,
//     resourceYielded,
//     artifactYielded,
//     cost: {
//       workers,
//       resources: costResources,
//     },
//     // Filter-friendly flattened fields
//     costWorkers: workers,
//     costResourceCount: resourceCount,
//     imageUrl: ASSETS.cardArt.default,
//     effect: "", // User will fill - use :wood: :stone: :clay: :artifact1: :artifact2: etc.
//   };
// });

const marshlandsCardsRaw = [
  {
    id: "marshlands_1",
    cardType: "regular",
    regularCardType: "upgrade",
    name: "Bog Walker",
    resourceYielded: "wood",
    artifactYielded: "artifact1",
    cost: { workers: 1, resources: ["stone"] },
    costWorkers: 1,
    costResourceCount: 1,
    upgrades: { worker: 1, evolve: 1, action: 1 }, // total 3 = 1+2
    imageUrl:
      "https://massivelyop.com/wp-content/uploads/2021/07/wow-classic-3.jpg",
    effect: "",
  },
  {
    id: "marshlands_2",
    cardType: "regular",
    regularCardType: "upgrade",
    name: "Reed Harvester",
    resourceYielded: "clay",
    artifactYielded: "artifact2",
    cost: { workers: 2, resources: ["stone"] },
    costWorkers: 2,
    costResourceCount: 1,
    upgrades: { worker: 2, evolve: 0, action: 2 }, // total 4 = 2+2
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6qaYMDyZoI7lkrcoKA9MjSIoixOoOS3--Q&s",
    effect: "",
  },
  {
    id: "marshlands_3",
    cardType: "regular",
    regularCardType: "upgrade",
    name: "Clay Miner",
    resourceYielded: "wood",
    artifactYielded: "artifact3",
    cost: { workers: 3, resources: ["stone"] },
    costWorkers: 3,
    costResourceCount: 1,
    upgrades: { worker: 3, evolve: 2, action: 0 }, // total 5 = 3+2
    imageUrl:
      "https://scontent.fskp4-1.fna.fbcdn.net/v/t39.30808-6/641138304_2341849082975941_5983760926535116371_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=pFAj2y5bz00Q7kNvwELGqnu&_nc_oc=AdmFMDY2QzPppXYl-ECirwpx3HHyBM92Ab87o9DlyuP3jzMfY6tqiDdrsy11b07JlRA&_nc_zt=23&_nc_ht=scontent.fskp4-1.fna&_nc_gid=v3k3GY3kz7B_FZxnZES4QQ&_nc_ss=8&oh=00_AfsLdjd1TP1ZtxZF2QZM5ZxNug1H8hd6ZWGMZqiNFya7lQ&oe=69A7C307",
    effect: "",
  },

  {
    id: "marshlands_4",
    cardType: "regular",
    regularCardType: "upgrade",
    name: "Stone Cutter",
    resourceYielded: "stone",
    artifactYielded: "artifact4",
    cost: { workers: 1, resources: ["stone"] },
    costWorkers: 1,
    costResourceCount: 1,
    upgrades: { worker: 1, evolve: 1, action: 1 }, // total 3 = 1+2
    imageUrl:
      "https://main.judgehype.com/images/news-entetes/2016/370877-1481629124.jpg",
    effect: "",
  },
  {
    id: "marshlands_5",
    cardType: "regular",
    regularCardType: "upgrade",
    name: "Marsh Drudge",
    resourceYielded: "wood",
    artifactYielded: "artifact5",
    cost: { workers: 2, resources: ["stone"] },
    costWorkers: 2,
    costResourceCount: 1,
    upgrades: { worker: 1, evolve: 2, action: 1 }, // total 4 = 2+2
    imageUrl:
      "https://overgear.com/guides/wp-content/uploads/2025/12/the-burning-crusade-anniversary-reputation-leveling.jpg",
    effect: "",
  },
  {
    id: "marshlands_6",
    cardType: "regular",
    regularCardType: "upgrade",
    name: "Swamp Scout",
    resourceYielded: "clay",
    artifactYielded: "artifact6",
    cost: { workers: 3, resources: ["stone"] },
    costWorkers: 3,
    costResourceCount: 1,
    upgrades: { worker: 2, evolve: 2, action: 1 }, // total 5 = 3+2
    imageUrl:
      "https://domuezcltvfdx.cloudfront.net/images/Screenshot/42/95/64/51bc8e2de3244b169c2177d4d067071a/51bc8e2de3244b169c2177d4d067071a.92b10be6.jpg",
    effect: "",
  },

  {
    id: "marshlands_7",
    cardType: "regular",
    regularCardType: "upgrade",
    name: "Fen Gatherer",
    resourceYielded: "clay",
    artifactYielded: "artifact6",
    cost: { workers: 1, resources: ["stone"] },
    costWorkers: 1,
    costResourceCount: 1,
    upgrades: { worker: 1, evolve: 1, action: 1 }, // total 3 = 1+2
    imageUrl:
      "https://www.rpgfan.com/wp-content/uploads/2021/04/World-of-Warcraft-The-Burning-Crusade-Screenshot-047.jpg",
    effect: "",
  },
  {
    id: "marshlands_8",
    cardType: "regular",
    regularCardType: "upgrade",
    name: "Mire Trader",
    resourceYielded: "stone",
    artifactYielded: "artifact1",
    cost: { workers: 2, resources: ["stone"] },
    costWorkers: 2,
    costResourceCount: 1,
    upgrades: { worker: 1, evolve: 2, action: 1 }, // total 4 = 2+2
    imageUrl:
      "https://i.namu.wiki/i/6se5AmMcu161hNV86vu5fUOKGa9uwTeKs623_yOZopy4Y8XRVi0rjwx3jwRYhAtWYFxN5zLB6RnPF2faHTBO2A.webp",
    effect: "",
  },
  {
    id: "marshlands_9",
    cardType: "regular",
    regularCardType: "upgrade",
    name: "Wetland Builder",
    resourceYielded: "wood",
    artifactYielded: "artifact2",
    cost: { workers: 3, resources: ["stone"] },
    costWorkers: 3,
    costResourceCount: 1,
    upgrades: { worker: 2, evolve: 2, action: 1 }, // total 5 = 3+2
    imageUrl:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/05/baldurs-gate-3-underdark-1.jpg?w=1600&h=900&fit=crop",
    effect: "",
  },

  {
    id: "marshlands_10",
    cardType: "regular",
    regularCardType: "upgrade",
    name: "Silt Collector",
    resourceYielded: "clay",
    artifactYielded: "artifact3",
    cost: { workers: 1, resources: ["stone"] },
    costWorkers: 1,
    costResourceCount: 1,
    upgrades: { worker: 2, evolve: 0, action: 1 }, // total 3 = 1+2
    imageUrl: "https://warcraft.wiki.gg/images/Telredor_2.jpg?99e5de",
    effect: "",
  },
  {
    id: "marshlands_11",
    cardType: "regular",
    regularCardType: "upgrade",
    name: "Peat Farmer",
    resourceYielded: "stone",
    artifactYielded: "artifact4",
    cost: { workers: 2, resources: ["stone"] },
    costWorkers: 2,
    costResourceCount: 1,
    upgrades: { worker: 0, evolve: 4, action: 0 }, // total 4 = 2+2
    imageUrl:
      "https://cdnb.artstation.com/p/assets/images/images/019/571/443/large/oceane-coissard-asset.jpg?1564074127",
    effect: "",
  },
  {
    id: "marshlands_12",
    cardType: "regular",
    regularCardType: "upgrade",
    name: "Mud Sifter",
    resourceYielded: "stone",
    artifactYielded: "artifact5",
    cost: { workers: 3, resources: ["stone"] },
    costWorkers: 3,
    costResourceCount: 1,
    upgrades: { worker: 1, evolve: 1, action: 3 }, // total 5 = 3+2
    imageUrl:
      "https://64.media.tumblr.com/e0eceaeed0dd1655fed6a80d5e1199eb/tumblr_p9ntjacSBZ1xnzat4o1_1280.jpg",
    effect: "",
  },

  // Event cards 13-24: wood cost only, ONE reward type each
  {
    id: "marshlands_13",
    cardType: "regular",
    regularCardType: "event",
    name: "Marshland Elder",
    resourceYielded: "wood",
    artifactYielded: "artifact6",
    cost: { workers: 1, resources: ["wood"] },
    costWorkers: 1,
    costResourceCount: 1,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3PZpE_6qROrNBqwWnjslwaF7tc3-MezRwQ&s",
    eventRewards: { tempWorkers: { level: 1 } },
  },
  {
    id: "marshlands_14",
    cardType: "regular",
    regularCardType: "event",
    name: "Bog Priest",
    resourceYielded: "clay",
    artifactYielded: "artifact6",
    cost: { workers: 1, resources: ["wood"] },
    costWorkers: 1,
    costResourceCount: 1,
    imageUrl: "https://i.redd.it/8kvowiyn3ftd1.jpeg",
    eventRewards: { controlToken: { level: 1 } },
  },
  {
    id: "marshlands_15",
    cardType: "regular",
    regularCardType: "event",
    name: "Reed Weaver",
    resourceYielded: "wood",
    artifactYielded: "artifact1",
    cost: { workers: 1, resources: ["wood"] },
    costWorkers: 1,
    costResourceCount: 1,
    imageUrl:
      "https://wow.zamimg.com/uploads/screenshots/normal/85552-hellfire-peninsula-a-flight-view-of-the-dark-portal-in-hellfire-peninsula.jpg",
    eventRewards: {
      specialEffects: [{ type: "actions", count: 1, actionType: "move" }],
    },
  },
  {
    id: "marshlands_16",
    cardType: "regular",
    regularCardType: "event",
    name: "Clay Sculptor",
    resourceYielded: "stone",
    artifactYielded: "artifact2",
    cost: { workers: 2, resources: ["wood"] },
    costWorkers: 2,
    costResourceCount: 1,
    imageUrl:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/06/wow-classic-hellfire-peninsula.jpg?w=1200&h=675&fit=crop",
    eventRewards: { tempWorkers: { level: 2 } },
  },
  {
    id: "marshlands_17",
    cardType: "regular",
    regularCardType: "event",
    name: "Stone Mason",
    resourceYielded: "wood",
    artifactYielded: "artifact3",
    cost: { workers: 2, resources: ["wood"] },
    costWorkers: 2,
    costResourceCount: 1,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKMapO4oeuH3BZbrzqFf4QVQ-5YIRriZ6z5w&s",
    eventRewards: { controlToken: { level: 2 } },
  },
  {
    id: "marshlands_18",
    cardType: "regular",
    regularCardType: "event",
    name: "Swamp Guide",
    resourceYielded: "clay",
    artifactYielded: "artifact4",
    cost: { workers: 2, resources: ["wood"] },
    costWorkers: 2,
    costResourceCount: 1,
    imageUrl:
      "https://i.namu.wiki/i/bwV521hmoR5Y03SY4cBJ7ta8LTqm14_0Rp28d-D_6HjnmGl8ucFKb3TGoAOkMX7rnhSFeFaJTwkv3-nF40aucg.webp",
    eventRewards: {
      specialEffects: [{ type: "actions", count: 2, actionType: "deploy" }],
    },
  },
  {
    id: "marshlands_19",
    cardType: "regular",
    regularCardType: "event",
    name: "Fen Guardian",
    resourceYielded: "clay",
    artifactYielded: "artifact5",
    cost: { workers: 2, resources: ["wood"] },
    costWorkers: 2,
    costResourceCount: 1,
    imageUrl:
      "https://wow.zamimg.com/uploads/screenshots/normal/280633-explore-hellfire-peninsula-view-of-the-legion-front-from-the-dark-portal.jpg",
    eventRewards: {
      specialEffects: ["Move all units from 1 hex to any other on the map"],
    },
  },
  {
    id: "marshlands_20",
    cardType: "regular",
    regularCardType: "event",
    name: "Marsh Hermit",
    resourceYielded: "stone",
    artifactYielded: "artifact6",
    cost: { workers: 3, resources: ["wood"] },
    costWorkers: 3,
    costResourceCount: 1,
    imageUrl:
      "https://i.namu.wiki/i/bwV521hmoR5Y03SY4cBJ7ta8LTqm14_0Rp28d-D_6HjnmGl8ucFKb3TGoAOkMX7rnhSFeFaJTwkv3-nF40aucg.webp",
    eventRewards: { tempWorkers: { level: 3 } },
  },
  {
    id: "marshlands_21",
    cardType: "regular",
    regularCardType: "event",
    name: "Wetland Shaman",
    resourceYielded: "wood",
    artifactYielded: "artifact6",
    cost: { workers: 3, resources: ["wood"] },
    costWorkers: 3,
    costResourceCount: 1,
    imageUrl:
      "https://static.wikia.nocookie.net/wowwiki/images/4/41/Hellfire_peninsula.jpg/revision/latest/scale-to-width-down/498?cb=20061106181126",
    eventRewards: { controlToken: { level: 3 } },
  },
  {
    id: "marshlands_22",
    cardType: "regular",
    regularCardType: "event",
    name: "Silt Diver",
    resourceYielded: "stone",
    artifactYielded: "artifact1",
    cost: { workers: 3, resources: ["wood"] },
    costWorkers: 3,
    costResourceCount: 1,
    imageUrl:
      "https://warcraft.wiki.gg/images/Hellfire_Citadel_TCG.jpg?ce4c5c&format=original",
    eventRewards: {
      specialEffects: [{ type: "actions", count: 3, actionType: "move" }],
    },
  },
  {
    id: "marshlands_23",
    cardType: "regular",
    regularCardType: "event",
    name: "Peat Burner",
    resourceYielded: "clay",
    artifactYielded: "artifact2",
    cost: { workers: 3, resources: ["wood"] },
    costWorkers: 3,
    costResourceCount: 1,
    imageUrl:
      "https://i.pinimg.com/736x/ce/3e/09/ce3e09b98d9e6ac232b5341225572665.jpg",
    eventRewards: {
      specialEffects: [{ type: "actions", count: 3, actionType: "build" }],
    },
  },
  {
    id: "marshlands_24",
    cardType: "regular",
    regularCardType: "event",
    name: "Mud Alchemist",
    resourceYielded: "stone",
    artifactYielded: "artifact3",
    cost: { workers: 3, resources: ["wood"] },
    costWorkers: 3,
    costResourceCount: 1,
    imageUrl: "https://wow.zamimg.com/uploads/guide/images/24641.jpg",
    eventRewards: {
      specialEffects: ["Move all units from 1 hex to any other on the map"],
    },
  },

  // Combat cards 25-36 (clay cost, credits/reputation rewards)
  {
    id: "marshlands_25",
    cardType: "regular",
    regularCardType: "combat",
    name: "Marshland Smith",
    resourceYielded: "wood",
    artifactYielded: "artifact4",
    cost: { workers: 1, resources: ["clay"] },
    costWorkers: 1,
    costResourceCount: 1,
    rewards: { color: "grey", credits: 2, reputation: 0 },
    imageUrl: ASSETS.cardArt.default,
    effect: "",
  },
  {
    id: "marshlands_26",
    cardType: "regular",
    regularCardType: "combat",
    name: "Bog Forager",
    resourceYielded: "wood",
    artifactYielded: "artifact5",
    cost: { workers: 2, resources: ["clay"] },
    costWorkers: 2,
    costResourceCount: 1,
    rewards: { color: "blue", credits: 0, reputation: 3 },
    imageUrl: ASSETS.cardArt.default,
    effect: "",
  },
  {
    id: "marshlands_27",
    cardType: "regular",
    regularCardType: "combat",
    name: "Reed Craftsman",
    resourceYielded: "clay",
    artifactYielded: "artifact6",
    cost: { workers: 3, resources: ["clay"] },
    costWorkers: 3,
    costResourceCount: 1,
    rewards: { color: "purple", credits: 2, reputation: 2 },
    imageUrl: ASSETS.cardArt.default,
    effect: "",
  },
  {
    id: "marshlands_28",
    cardType: "regular",
    regularCardType: "combat",
    name: "Marshland Brawler",
    resourceYielded: "wood",
    artifactYielded: "artifact6",
    cost: { workers: 1, resources: ["clay"] },
    costWorkers: 1,
    costResourceCount: 1,
    rewards: { color: "grey", credits: 1, reputation: 0 },
    imageUrl: ASSETS.cardArt.default,
    effect: "",
  },
  {
    id: "marshlands_29",
    cardType: "regular",
    regularCardType: "combat",
    name: "Bog Sentinel",
    resourceYielded: "clay",
    artifactYielded: "artifact1",
    cost: { workers: 1, resources: ["clay"] },
    costWorkers: 1,
    costResourceCount: 1,
    rewards: { color: "blue", credits: 0, reputation: 1 },
    imageUrl: ASSETS.cardArt.default,
    effect: "",
  },
  {
    id: "marshlands_30",
    cardType: "regular",
    regularCardType: "combat",
    name: "Reed Crafter",
    resourceYielded: "clay",
    artifactYielded: "artifact2",
    cost: { workers: 1, resources: ["clay"] },
    costWorkers: 1,
    costResourceCount: 1,
    rewards: { color: "purple", credits: 1, reputation: 1 },
    imageUrl: ASSETS.cardArt.default,
    effect: "",
  },
  {
    id: "marshlands_31",
    cardType: "regular",
    regularCardType: "combat",
    name: "Swamp Raider",
    resourceYielded: "stone",
    artifactYielded: "artifact3",
    cost: { workers: 2, resources: ["clay"] },
    costWorkers: 2,
    costResourceCount: 1,
    rewards: { color: "grey", credits: 2, reputation: 0 },
    imageUrl: ASSETS.cardArt.default,
    effect: "",
  },
  {
    id: "marshlands_32",
    cardType: "regular",
    regularCardType: "combat",
    name: "Fen Warrior",
    resourceYielded: "wood",
    artifactYielded: "artifact4",
    cost: { workers: 2, resources: ["clay"] },
    costWorkers: 2,
    costResourceCount: 1,
    rewards: { color: "blue", credits: 0, reputation: 2 },
    imageUrl: ASSETS.cardArt.default,
    effect: "",
  },
  {
    id: "marshlands_33",
    cardType: "regular",
    regularCardType: "combat",
    name: "Mire Fighter",
    resourceYielded: "stone",
    artifactYielded: "artifact5",
    cost: { workers: 2, resources: ["clay"] },
    costWorkers: 2,
    costResourceCount: 1,
    rewards: { color: "purple", credits: 1, reputation: 1 },
    imageUrl: ASSETS.cardArt.default,
    effect: "",
  },
  {
    id: "marshlands_34",
    cardType: "regular",
    regularCardType: "combat",
    name: "Wetland Veteran",
    resourceYielded: "clay",
    artifactYielded: "artifact6",
    cost: { workers: 3, resources: ["clay"] },
    costWorkers: 3,
    costResourceCount: 1,
    rewards: { color: "grey", credits: 2, reputation: 1 },
    imageUrl: ASSETS.cardArt.default,
    effect: "",
  },
  {
    id: "marshlands_35",
    cardType: "regular",
    regularCardType: "combat",
    name: "Silt Stalker",
    resourceYielded: "stone",
    artifactYielded: "artifact6",
    cost: { workers: 3, resources: ["clay"] },
    costWorkers: 3,
    costResourceCount: 1,
    rewards: { color: "blue", credits: 0, reputation: 3 },
    imageUrl: ASSETS.cardArt.default,
    effect: "",
  },
  {
    id: "marshlands_36",
    cardType: "regular",
    regularCardType: "combat",
    name: "Peat Champion",
    resourceYielded: "wood",
    artifactYielded: "artifact1",
    cost: { workers: 3, resources: ["clay"] },
    costWorkers: 3,
    costResourceCount: 1,
    rewards: { color: "purple", credits: 2, reputation: 2 },
    imageUrl: ASSETS.cardArt.default,
    effect: "",
  },

  // Quest Lines: 1 worker + 3 artifacts (combos [1,2,3], [2,3,4], [3,4,5], [4,5,6], [5,6,1], [6,1,2])
  {
    id: "marshlands_37",
    cardType: "regular",
    regularCardType: "questline",
    name: "The Reed Path",
    resourceYielded: "wood",
    artifactYielded: "artifact1",
    cost: { workers: 1, artifacts: ["artifact1", "artifact2", "artifact3"] },
    costWorkers: 1,
    imageUrl:
      "https://wow.zamimg.com/uploads/screenshots/normal/958193-explore-feralas.jpg",
    effect: "",
  },
  {
    id: "marshlands_38",
    cardType: "regular",
    regularCardType: "questline",
    name: "Bog Pilgrimage",
    resourceYielded: "clay",
    artifactYielded: "artifact2",
    cost: { workers: 1, artifacts: ["artifact2", "artifact3", "artifact4"] },
    costWorkers: 1,
    imageUrl:
      "https://blizzardwatch.com/wp-content/uploads/2016/12/feralas-shalzaru-header.jpg",
    effect: "",
  },
  {
    id: "marshlands_39",
    cardType: "regular",
    regularCardType: "questline",
    name: "Fen Oracle",
    resourceYielded: "stone",
    artifactYielded: "artifact3",
    cost: { workers: 1, artifacts: ["artifact3", "artifact4", "artifact5"] },
    costWorkers: 1,
    imageUrl:
      "https://64.media.tumblr.com/0d1fe6464f9b252bb5e96b8d2cda542b/tumblr_p9rjj04hUV1xnzat4o1_1280.jpg",
    effect: "",
  },
  {
    id: "marshlands_40",
    cardType: "regular",
    regularCardType: "questline",
    name: "Mire Walker",
    resourceYielded: "wood",
    artifactYielded: "artifact4",
    cost: { workers: 1, artifacts: ["artifact4", "artifact5", "artifact6"] },
    costWorkers: 1,
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/5e9dcdfdeed291246bf96c27/1590025807446-GLU310YEO7UUSIA3JZWA/Feralas.jpg?format=1000w",
    effect: "",
  },
  {
    id: "marshlands_41",
    cardType: "regular",
    regularCardType: "questline",
    name: "Wetland Trails",
    resourceYielded: "stone",
    artifactYielded: "artifact5",
    cost: { workers: 1, artifacts: ["artifact5", "artifact6", "artifact1"] },
    costWorkers: 1,
    imageUrl:
      "https://i.pinimg.com/736x/46/f4/35/46f4352e91a00b54f9a9230944943d88.jpg",
    effect: "",
  },
  {
    id: "marshlands_42",
    cardType: "regular",
    regularCardType: "questline",
    name: "Silt Pilgrim",
    resourceYielded: "clay",
    artifactYielded: "artifact6",
    cost: { workers: 1, artifacts: ["artifact6", "artifact1", "artifact2"] },
    costWorkers: 1,
    imageUrl:
      "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2019/12/Feralas_Warcraft.jpg?q=50&fit=crop&w=825&dpr=1.5",
    effect: "",
  },
];

// Assign reputationColor: 1st,4th,7th,10th...=grey; 2nd,5th,8th...=purple; 3rd,6th,9th...=blue
// Cards 13-42 (event/combat/questline): use repeating first 12 imageUrls
const REPUTATION_COLORS = ["grey", "purple", "blue"];
const marshlandsCardsWithColor = marshlandsCardsRaw.map((card, i) => ({
  ...card,
  reputationColor: REPUTATION_COLORS[i % 3],
  ...(i >= 12 && { imageUrl: FIRST_12_IMAGES[i % 12] }),
}));
export const marshlandsCards = marshlandsCardsWithColor;

// ═══════════════════════════════════════════════════════════════════════════
// BATTLE CARDS - Tier 1/2/3, 5 cards each, condition + 3 reward sections
// conditionType: grey|blue|purple _ hexes|reputation (tier 1&2), hexes|reputation (tier 3)
// ═══════════════════════════════════════════════════════════════════════════

export const HEX_COLORS = ["grey", "blue", "purple"];
export const CONDITION_TYPES = ["hexes", "reputation"];

const coloredConditions = [
  { condition: "Most Grey Hexes", conditionType: "grey_hexes", color: "grey" },
  {
    condition: "Most Grey Reputation",
    conditionType: "grey_reputation",
    color: "grey",
  },
  { condition: "Most Blue Hexes", conditionType: "blue_hexes", color: "blue" },
  {
    condition: "Most Blue Reputation",
    conditionType: "blue_reputation",
    color: "blue",
  },
  {
    condition: "Most Purple Hexes",
    conditionType: "purple_hexes",
    color: "purple",
  },
  {
    condition: "Most Purple Reputation",
    conditionType: "purple_reputation",
    color: "purple",
  },
];

const genericConditions = [
  { condition: "Most Hexes", conditionType: "hexes", color: "omni" },
  { condition: "Most Reputation", conditionType: "reputation", color: "omni" },
];

// 6 tier 1 + 6 tier 2 battle cards; tier 1: 1st=VP (symbol only), 2nd=card, 3rd=reputation (color matches condition); tier 2: 1st=2 VP symbols, 2nd=2 cards, 3rd=1 card
const battleCardTier1 = coloredConditions.slice(0, 6).map((c, i) => ({
  id: `battle_t1_${i + 1}`,
  cardType: "battle",
  tier: 1,
  condition: c.condition,
  conditionType: c.conditionType,
  conditionColor: c.color,
  rewards: {
    first: { vp: 1 },
    second: { cards: 1 },
    third: { reputation: 1 },
  },
}));

const battleCardTier2 = [
  ...coloredConditions.slice(0, 2),
  ...coloredConditions.slice(2, 4),
  ...coloredConditions.slice(4, 6),
].map((c, i) => ({
  id: `battle_t2_${i + 1}`,
  cardType: "battle",
  tier: 2,
  condition: c.condition,
  conditionType: c.conditionType,
  conditionColor: c.color,
  rewards: {
    first: { vp: 2 },
    second: { cards: 2 },
    third: { cards: 1 },
  },
}));

export const battleCards = [...battleCardTier1, ...battleCardTier2];

// ═══════════════════════════════════════════════════════════════════════════
// FACTION CARDS - 9 horizontal cards: 3 grey, 3 blue, 3 purple
// ═══════════════════════════════════════════════════════════════════════════

export const factionCards = [
  {
    id: "faction_1",
    cardType: "faction",
    name: "Grey Marsh Pact",
    factionColor: "grey",
    costCredits: 4,
    imageUrl:
      "https://wow.zamimg.com/uploads/screenshots/normal/781309-zangarmarsh.jpg",
    effect: "",
  },
  {
    id: "faction_2",
    cardType: "faction",
    name: "Purple Fen Covenant",
    factionColor: "purple",
    costCredits: 5,
    imageUrl: "https://i.redd.it/yksyiaoo3tt61.jpg",
    effect: "",
  },
  {
    id: "faction_3",
    cardType: "faction",
    name: "Blue Reed Alliance",
    factionColor: "blue",
    costCredits: 6,
    imageUrl: ASSETS.cardArt.default,
    effect: "",
  },
  {
    id: "faction_4",
    cardType: "faction",
    name: "Grey Bog Brotherhood",
    factionColor: "grey",
    costCredits: 5,
    imageUrl:
      "https://wow.zamimg.com/uploads/screenshots/normal/781309-zangarmarsh.jpg",
    effect: "",
  },
  {
    id: "faction_5",
    cardType: "faction",
    name: "Purple Silt Order",
    factionColor: "purple",
    costCredits: 6,
    imageUrl: "https://i.redd.it/yksyiaoo3tt61.jpg",
    effect: "",
  },
  {
    id: "faction_6",
    cardType: "faction",
    name: "Blue Wetland Compact",
    factionColor: "blue",
    costCredits: 4,
    imageUrl: ASSETS.cardArt.default,
    effect: "",
  },
  {
    id: "faction_7",
    cardType: "faction",
    name: "Grey Mire Consortium",
    factionColor: "grey",
    costCredits: 6,
    imageUrl:
      "https://wow.zamimg.com/uploads/screenshots/normal/781309-zangarmarsh.jpg",
    effect: "",
  },
  {
    id: "faction_8",
    cardType: "faction",
    name: "Purple Peat Fellowship",
    factionColor: "purple",
    costCredits: 4,
    imageUrl: "https://i.redd.it/yksyiaoo3tt61.jpg",
    effect: "",
  },
  {
    id: "faction_9",
    cardType: "faction",
    name: "Blue Clay Union",
    factionColor: "blue",
    costCredits: 5,
    imageUrl: ASSETS.cardArt.default,
    effect: "",
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// TRACK CARD - Large 720×520 card with upgrade tracking table
// ═══════════════════════════════════════════════════════════════════════════

export const trackCards = [
  {
    id: "track_1",
    cardType: "track",
    creditsVariant: "purple",
  },
  {
    id: "track_2",
    cardType: "track",
    creditsVariant: "blue",
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// MAJOR CARD - 800×1200 faction columns + VP track
// ═══════════════════════════════════════════════════════════════════════════

export const majorCards = [
  {
    id: "major_1",
    cardType: "major",
  },
];
