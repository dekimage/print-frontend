// Heroes Dominion Original Card Data

// Symbol mappings for abilities and stats
export const symbolMappings = {
  // Ability types
  pull: "pull.png",
  damage: "damage.png",
  lock: "lock.png",
  heal: "heal.png",
  shield: "shield.png",
  buff: "buff.png",
  debuff: "debuff.png",
  teleport: "teleport.png",
  stun: "stun.png",
  poison: "poison.png",
  burn: "burn.png",
  freeze: "freeze.png",
  slow: "slow.png",
  haste: "haste.png",
  invisibility: "invisibility.png",
  taunt: "taunt.png",
  silence: "silence.png",
  dispel: "dispel.png",
  reflect: "reflect.png",
  absorb: "absorb.png",

  // Special keywords
  push: "push.png",
  fear: "fear.png",
  fly: "fly.png",
  combo: "combo.png",
  crystal: "crystal.png",
  gravity: "gravity.png",
  root: "root.png",
  stealth: "stealth.png",
  bounty: "bounty.png",
  gold: "gold.png",
  movement: "movement.png",
  cleanse: "cleanse.png",
  trap: "trap.png",
  bomb: "bomb.png",

  // Range indicators
  self: "self.png",
  melee: "melee.png",
  range: "range.png",
  infinite: "infinite.png",

  // Targeting types
  linear: "linear.png",
  sight: "sight.png",
  noLinear: "noLinear.png",
  noSight: "noSight.png",

  // Restrictions
  maxTarget: "maxTarget.png",
  cooldown: "cooldown.png",
  mana: "mana.png",

  // Numbers for range display
  0: "0.png",
  1: "1.png",
  2: "2.png",
  3: "3.png",
  4: "4.png",
  5: "5.png",
  6: "6.png",
  7: "7.png",
  8: "8.png",
  9: "9.png",
  "-": "dash.png",
};

// Keyword styling configuration
export const keywordStyles = {
  // Damage and offensive abilities
  damage: {
    backgroundColor: "#ff4444",
    color: "white",
    borderColor: "#cc3333",
  },
  push: { backgroundColor: "#ff8800", color: "white", borderColor: "#cc6600" },
  pull: { backgroundColor: "#8800ff", color: "white", borderColor: "#6600cc" },
  stun: { backgroundColor: "#ffaa00", color: "white", borderColor: "#cc8800" },
  lock: { backgroundColor: "#666666", color: "white", borderColor: "#444444" },
  root: { backgroundColor: "#8b4513", color: "white", borderColor: "#654321" },
  fear: { backgroundColor: "#4b0082", color: "white", borderColor: "#330055" },

  // Healing and defensive abilities
  heal: { backgroundColor: "#00aa00", color: "white", borderColor: "#008800" },
  shield: {
    backgroundColor: "#0088cc",
    color: "white",
    borderColor: "#006699",
  },
  cleanse: {
    backgroundColor: "#00cccc",
    color: "white",
    borderColor: "#009999",
  },

  // Movement and positioning
  teleport: {
    backgroundColor: "#0066ff",
    color: "white",
    borderColor: "#0044cc",
  },
  movement: {
    backgroundColor: "#00cc88",
    color: "white",
    borderColor: "#009966",
  },
  fly: { backgroundColor: "#88ccff", color: "white", borderColor: "#66aadd" },

  // Special effects
  poison: {
    backgroundColor: "#66cc00",
    color: "white",
    borderColor: "#559900",
  },
  crystal: {
    backgroundColor: "#cc00cc",
    color: "white",
    borderColor: "#990099",
  },
  silence: {
    backgroundColor: "#999999",
    color: "white",
    borderColor: "#777777",
  },
  stealth: {
    backgroundColor: "#333333",
    color: "white",
    borderColor: "#111111",
  },
  gravity: {
    backgroundColor: "#663399",
    color: "white",
    borderColor: "#442266",
  },

  // Resources and tokens
  combo: { backgroundColor: "#ffcc00", color: "black", borderColor: "#cc9900" },
  gold: { backgroundColor: "#ffd700", color: "black", borderColor: "#ccaa00" },
  mana: { backgroundColor: "#4169e1", color: "white", borderColor: "#2e4bc7" },
  bounty: {
    backgroundColor: "#dc143c",
    color: "white",
    borderColor: "#b01030",
  },

  // Tokens
  trap: { backgroundColor: "#8b0000", color: "white", borderColor: "#660000" },
  bomb: { backgroundColor: "#ff6347", color: "white", borderColor: "#cc4f3a" },
};

// Helper function to parse readable effect text and style keywords
export const parseReadableEffect = (effectText) => {
  if (!effectText) return [{ type: "text", value: "No effect" }];

  const components = [];
  let remainingText = effectText;

  // Keywords to look for (order matters - longer keywords first)
  const keywords = [
    "teleport",
    "movement",
    "damage",
    "shield",
    "poison",
    "crystal",
    "silence",
    "stealth",
    "gravity",
    "cleanse",
    "bounty",
    "combo",
    "gold",
    "mana",
    "trap",
    "bomb",
    "push",
    "pull",
    "stun",
    "lock",
    "root",
    "fear",
    "heal",
    "fly",
  ];

  while (remainingText.length > 0) {
    let foundKeyword = false;

    // Check for each keyword - look for patterns like "deal 2 damage" or just "damage 2"
    for (const keyword of keywords) {
      // Look for optional action word + number + keyword OR just keyword + number
      const patterns = [
        // Pattern 1: "deal 2 damage", "apply 3 poison", etc.
        new RegExp(
          `\\b(?:deal|apply|gain|remove)\\s+(\\d+)\\s+${keyword}\\b`,
          "i"
        ),
        // Pattern 2: "damage 2", "poison 3", etc.
        new RegExp(`\\b${keyword}\\s+(\\d+)\\b`, "i"),
        // Pattern 3: just "damage", "poison", etc.
        new RegExp(`\\b${keyword}\\b`, "i"),
      ];

      for (const regex of patterns) {
        const match = remainingText.match(regex);

        if (match && match.index === 0) {
          let keywordText;
          let skipLength = match[0].length;

          if (match[1]) {
            // Has a number - format as "keyword number"
            keywordText = `${keyword} ${match[1]}`;
          } else {
            // No number - just the keyword
            keywordText = keyword;
          }

          // Add the keyword as a styled component
          components.push({
            type: "keyword",
            value: keywordText,
            keyword: keyword.toLowerCase(),
            style: keywordStyles[keyword.toLowerCase()] || {
              backgroundColor: "#cccccc",
              color: "black",
            },
          });

          remainingText = remainingText.substring(skipLength);
          foundKeyword = true;
          break;
        }
      }

      if (foundKeyword) break;
    }

    if (!foundKeyword) {
      // Find the next keyword or take the rest of the text
      let nextKeywordIndex = remainingText.length;
      let nextKeyword = null;

      for (const keyword of keywords) {
        const patterns = [
          new RegExp(
            `\\b(?:deal|apply|gain|remove)\\s+\\d+\\s+${keyword}\\b`,
            "i"
          ),
          new RegExp(`\\b${keyword}\\s+\\d+\\b`, "i"),
          new RegExp(`\\b${keyword}\\b`, "i"),
        ];

        for (const regex of patterns) {
          const match = remainingText.match(regex);
          if (match && match.index < nextKeywordIndex) {
            nextKeywordIndex = match.index;
            nextKeyword = keyword;
            break;
          }
        }
      }

      // Add regular text up to the next keyword
      const textPart = remainingText.substring(0, nextKeywordIndex);
      if (textPart.length > 0) {
        components.push({
          type: "text",
          value: textPart,
        });
      }

      remainingText = remainingText.substring(nextKeywordIndex);
    }
  }

  return components;
};

// Helper function to parse ability effects (kept for backward compatibility)
export const parseAbilityEffect = (effectString) => {
  if (!effectString) return [];

  const parts = effectString.split(",").map((part) => part.trim());
  const components = [];

  parts.forEach((part, index) => {
    // Check if it's a symbol
    const imageName = symbolMappings[part.toLowerCase()];
    if (imageName) {
      components.push({ type: "image", value: imageName });
    } else {
      // Check for numbers (damage, healing amounts, etc.)
      const numberMatch = part.match(/^(\d+)$/);
      if (numberMatch) {
        components.push({
          type: "text",
          value: part,
          style: { fontWeight: "bold", color: "#333" },
        });
      } else {
        components.push({
          type: "text",
          value: part,
          style: { color: "#333" },
        });
      }
    }
  });

  return components;
};

// Helper function to parse range string
export const parseRange = (rangeString) => {
  if (!rangeString) return { min: 0, max: 0, type: "self" };

  if (rangeString === "infinite") {
    return { min: 0, max: 999, type: "infinite" };
  }

  const parts = rangeString.split("-");
  const min = parseInt(parts[0]) || 0;
  const max = parseInt(parts[1]) || min;

  let type = "range";
  if (min === 0 && max === 0) {
    type = "self";
  } else if (min === 1 && max === 1) {
    type = "melee";
  }

  return { min, max, type };
};

// Game tokens data structure
export const gameTokens = [
  {
    id: "trap",
    name: "Trap",
    image: "trap.png",
    quantity: 5,
    effect: "damage,2,root",
    description: "Deals 2 damage and applies root when triggered",
  },
  {
    id: "bomb",
    name: "Bomb",
    image: "bomb.png",
    quantity: 3,
    effect: "damage,2,movement,-1",
    description: "Deals 2 damage and reduces movement by 1",
  },
  {
    id: "poison",
    name: "Poison",
    image: "poison.png",
    quantity: 10,
    effect: "poison",
    description: "Poison counter - deals damage over time",
  },
  {
    id: "bounty",
    name: "Bounty",
    image: "bounty.png",
    quantity: 9,
    effect: "bounty",
    description: "Bounty stack - can be consumed for damage and gold",
  },
];

// Hero Cards Data
const heroCards = [
  {
    id: "hero_1",
    name: "Archer",
    hp: 7,
    image: "archer.png",
    imageUrl: "https://jeuvideo.afjv.com/press_1304/130410_dofus_7.jpg",
    abilities: [
      {
        id: "ability_1_1",
        name: "Piercing Shot",
        icon: "bow.png",
        effect: "damage,1,push,1",
        readableEffect: "Deal 1 damage and push 1",
        range: "1-5",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
        usesPerTurn: 2,
      },
      {
        id: "ability_1_2",
        name: "Place Trap",
        icon: "trap.png",
        effect: "trap",
        readableEffect: "Place a trap (deals 2 damage and applies root)",
        range: "1-5",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
    ],
  },
  {
    id: "hero_2",
    name: "Anubis",
    hp: 7,
    image: "anubis.png",
    imageUrl:
      "https://cdn1.ankama-shop.com/2454-thickbox_default/krosmaster-a-lucky-guy-pack-us-version.jpg",
    abilities: [
      {
        id: "ability_2_1",
        name: "Divine Judgment",
        icon: "ankh.png",
        effect: "fear,1",
        readableEffect: "Apply fear 1, then either deal 1 damage or heal 1",
        range: "0-3",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
      {
        id: "ability_2_2",
        name: "Sacred Cleanse",
        icon: "cleanse.png",
        effect: "cleanse",
        readableEffect: "Cleanse, then either deal 2 damage or heal 2",
        range: "infinite",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
    ],
  },
  {
    id: "hero_3",
    name: "Priestess",
    hp: 7,
    image: "priestess.png",
    imageUrl: "https://jeuvideo.afjv.com/press_1304/130410_dofus_5.jpg",
    abilities: [
      {
        id: "ability_3_1",
        name: "Divine Pull",
        icon: "holy.png",
        effect: "pull,1,heal,1,fly",
        readableEffect: "Pull 1, heal 1, and give fly to target",
        range: "0-3",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
      {
        id: "ability_3_2",
        name: "Ultimate Reset",
        icon: "reset.png",
        effect: "combo,2",
        readableEffect: "Reset ally's ultimate cooldown and gain 2 combo",
        range: "infinite",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
    ],
  },
  {
    id: "hero_4",
    name: "Zapper",
    hp: 7,
    image: "zapper.png",
    imageUrl: "https://imaginaire.com/docs/QUEE332.JPG",
    abilities: [
      {
        id: "ability_4_1",
        name: "Lightning Strike",
        icon: "lightning.png",
        effect: "teleport,2,pull,1,damage,1",
        readableEffect: "Teleport 2, pull 1, damage 1 (if in melee range)",
        range: "1-2",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
        usesPerTurn: 2,
      },
      {
        id: "ability_4_2",
        name: "Crystal Silence",
        icon: "crystal.png",
        effect: "crystal,silence",
        readableEffect: "Apply crystal and silence",
        range: "0-2",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
    ],
  },
  {
    id: "hero_5",
    name: "Orc",
    hp: 8,
    image: "orc.png",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXkHqhhHYvCd8H5vWFUqLQ_1lusAPyL7JGkbGXrjYh-bS4hkrp8uoqKXOz6svUxwY9Kk&usqp=CAU",
    abilities: [
      {
        id: "ability_5_1",
        name: "Brutal Pull",
        icon: "chain.png",
        effect: "pull,2,damage,1,lock",
        readableEffect:
          "Pull 2, deal 1 damage, apply lock (if in melee before pull)",
        range: "1-3",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
      {
        id: "ability_5_2",
        name: "Stunning Blow",
        icon: "club.png",
        effect: "damage,1,stun",
        readableEffect: "Deal 1 damage and apply stun",
        range: "1-1",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
    ],
  },
  {
    id: "hero_6",
    name: "Mecha Monkey",
    hp: 8,
    image: "mecha_monkey.png",
    imageUrl: "https://imaginaire.com/docs/KING273.JPG",
    abilities: [
      {
        id: "ability_6_1",
        name: "Mecha Punch",
        icon: "fist.png",
        effect: "damage,1,push,1,movement,1",
        readableEffect: "Deal 1 damage, push 1, gain 1 movement",
        range: "1-1",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
      {
        id: "ability_6_2",
        name: "Rocket Launch",
        icon: "rocket.png",
        effect: "teleport,3",
        readableEffect:
          "Teleport 3. Next first ability: +1 damage, +1 push, +1 movement",
        range: "0-0",
        isLinear: true,
        isSight: false,
        maxTarget: 1,
      },
    ],
  },
  {
    id: "hero_7",
    name: "Barbarian",
    hp: 8,
    image: "barbarian.png",
    imageUrl:
      "https://www.otakia.com/wp-content/uploads/2014/08/krosmaster_katsou_mee_carte_01_img_princ.jpg",
    abilities: [
      {
        id: "ability_7_1",
        name: "Charge",
        icon: "charge.png",
        effect: "damage,1,lock,gravity",
        readableEffect:
          "Move towards enemy, deal 1 damage, apply lock and gravity. If cast twice from melee: deal 2 damage instead",
        range: "1-3",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
      {
        id: "ability_7_2",
        name: "Berserker Rage",
        icon: "axe.png",
        effect: "damage,3,mana,1",
        readableEffect:
          "Deal 3 damage. If kills enemy: recast this turn + gain 1 mana",
        range: "1-1",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
    ],
  },
  {
    id: "hero_8",
    name: "Goblin Bomber",
    hp: 7,
    image: "goblin_bomber.png",
    imageUrl: "https://i.ebayimg.com/images/g/wxUAAOSwl29aiq3D/s-l400.jpg",
    abilities: [
      {
        id: "ability_8_1",
        name: "Place Bomb",
        icon: "bomb.png",
        effect: "bomb",
        readableEffect:
          "Place bomb token (max 3). Bomb: deal 2 damage, -1 movement",
        range: "1-4",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
      {
        id: "ability_8_2",
        name: "Cross Explosion",
        icon: "explosion.png",
        effect: "damage,1,push,1",
        readableEffect: "Deal 1 damage and push 1 in cross area of effect",
        range: "1-4",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
        areaOfEffect: "cross",
      },
    ],
  },
  {
    id: "hero_9",
    name: "Witch Doctor",
    hp: 7,
    image: "witch_doctor.png",
    imageUrl:
      "https://www.otakia.com/wp-content/uploads/2014/10/krosmaster_jayma_gourd_01_img_princ.jpg",
    abilities: [
      {
        id: "ability_9_1",
        name: "Poison Dart",
        icon: "poison_dart.png",
        effect: "poison,3,fear",
        readableEffect:
          "Apply 3 poison. If target has 2+ poison: also apply fear",
        range: "1-3",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
      {
        id: "ability_9_2",
        name: "Poison Burst",
        icon: "poison_burst.png",
        effect: "damage,2,mana,-1",
        readableEffect:
          "Remove all poison from target, deal 2 damage, enemy loses 1 mana",
        range: "1-3",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
    ],
  },
  {
    id: "hero_10",
    name: "Rider",
    hp: 8,
    image: "rider.png",
    abilities: [
      {
        id: "ability_10_1",
        name: "Cavalry Charge",
        icon: "horse.png",
        effect: "movement,1,damage",
        readableEffect:
          "+1 movement. After moving adjacent to enemy: deal X-2 damage (X=movement spent, max 3). Once per turn",
        range: "0-0",
        isLinear: true,
        isSight: false,
        maxTarget: 1,
        usesPerTurn: 1,
      },
      {
        id: "ability_10_2",
        name: "Break Free",
        icon: "break_chains.png",
        effect: "movement,1",
        readableEffect:
          "Gain 1 movement and remove root, freeze, or lock. If hit enemy in wall this turn: apply stun",
        range: "0-0",
        isLinear: true,
        isSight: false,
        maxTarget: 1,
      },
    ],
  },
  {
    id: "hero_11",
    name: "Assassin",
    hp: 6,
    image: "assassin.png",
    imageUrl:
      "https://www.otakia.com/wp-content/uploads/2013/09/Figurine_SD_Krosmaster_Morora_01_img_princ-510x744.jpg",
    abilities: [
      {
        id: "ability_11_1",
        name: "Stealth Strike",
        icon: "dagger.png",
        effect: "stealth,movement,1",
        readableEffect:
          "If not in stealth: enter stealth (+1 movement, untargetable). If in stealth: exit and deal 2 damage in melee, apply bounty stack",
        range: "1-1",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
      {
        id: "ability_11_2",
        name: "Collect Bounty",
        icon: "bounty_collect.png",
        effect: "damage,1,gold,1",
        readableEffect:
          "Remove all bounty from hero, deal 1 damage and gain 1 gold per bounty removed",
        range: "1-1",
        isLinear: true,
        isSight: true,
        maxTarget: 1,
      },
    ],
  },
  {
    id: "hero_12",
    name: "Royal Knight",
    hp: 9,
    image: "royal_knight.png",
    abilities: [
      {
        id: "ability_12_1",
        name: "Cross Swords",
        icon: "crossed_swords.png",
        effect: "damage,1,push,1,shield,1",
        readableEffect:
          "Deal 1 damage and push 1 to all diagonal adjacent enemies. Gain 1 shield if cast second time this turn",
        range: "0-0",
        isLinear: true,
        isSight: false,
        maxTarget: 1,
        areaOfEffect: "diagonal",
      },
      {
        id: "ability_12_2",
        name: "Royal Decree",
        icon: "crown.png",
        effect: "shield,2",
        readableEffect:
          "Until start of next turn: redirect all ally damage to this hero. Gain 2 shields",
        range: "0-0",
        isLinear: true,
        isSight: false,
        maxTarget: 1,
      },
    ],
  },
];

// Export all hero cards
export const allHeroesDominionCards = heroCards;
