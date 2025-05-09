import hell0Img from "../../assets/toyBattles/h0.png";
import hell1Img from "../../assets/toyBattles/h1.png";
import hell2Img from "../../assets/toyBattles/h2.png";
import hell3Img from "../../assets/toyBattles/h3.png";
import hell4Img from "../../assets/toyBattles/h4.png";
import hell5Img from "../../assets/toyBattles/h5.png";
import hell6Img from "../../assets/toyBattles/h6.png";
import hell7Img from "../../assets/toyBattles/h7.png";

import s0Img from "../../assets/toyBattles/s0.png";
import s1Img from "../../assets/toyBattles/s1.png";
import s2Img from "../../assets/toyBattles/s2.png";
import s3Img from "../../assets/toyBattles/s3.png";
import s4Img from "../../assets/toyBattles/s4.png";
import s5Img from "../../assets/toyBattles/s5.png";
import s6Img from "../../assets/toyBattles/s6.png";
import s7Img from "../../assets/toyBattles/s7.png";

export const generateCopies = (cards) => {
  const result = [];
  cards.forEach((card) => {
    for (let i = 0; i < (card.quantity || 1); i++) {
      result.push({ ...card });
    }
  });
  return result;
};

// Hell Gnolls cards
const hellGnollsCards = [
  {
    name: "Fire Trickster",
    power: 0,
    arrowsConfig: ["diagonalLeft", "up"],
    faction: "hellGnolls",
    effect: "Joker: Can be placed on top of any unit.",
    img: hell0Img,
  },
  {
    name: "Fire Trickster",
    power: 0,
    arrowsConfig: ["up", "diagonalRight"],
    faction: "hellGnolls",

    effect: "Joker: Can be placed on top of any unit.",
    img: hell0Img,
  },
  {
    name: "Hell Gnolls",
    power: 1,
    arrowsConfig: ["up", "diagonalLeft"],
    faction: "hellGnolls",
    effect: "Play the top card of your deck.",
    img: hell1Img,
  },
  {
    name: "Hell Gnolls",
    power: 1,
    arrowsConfig: ["up", "diagonalLeft"],
    faction: "hellGnolls",
    effect: "Play the top card of your deck.",
    img: hell1Img,
  },
  {
    name: "Hell Gnolls",
    power: 1,
    arrowsConfig: ["up", "diagonalRight"],
    faction: "hellGnolls",
    effect: "Play the top card of your deck.",
    img: hell1Img,
  },
  {
    name: "Firebrand Warrior",
    power: 2,
    arrowsConfig: ["up"],
    faction: "hellGnolls",
    effect: "Draw 2 cards, then discard 1.",
    img: hell2Img,
  },
  {
    name: "Firebrand Warrior",
    power: 2,
    arrowsConfig: ["up"],
    faction: "hellGnolls",
    effect: "Draw 2 cards, then discard 1.",
    img: hell2Img,
  },
  {
    name: "Firebrand Warrior",
    power: 2,
    arrowsConfig: ["up"],
    faction: "hellGnolls",
    effect: "Draw 2 cards, then discard 1.",
    img: hell2Img,
  },

  {
    name: "Lava Hound",
    power: 3,
    arrowsConfig: ["up", "diagonalLeft", "diagonalRight"],
    faction: "hellGnolls",
    effect: "Discard a card: Destroy an adjecent unit.",
    img: hell3Img,
  },
  {
    name: "Lava Hound",
    power: 3,
    arrowsConfig: ["up", "diagonalLeft", "diagonalRight"],
    faction: "hellGnolls",
    effect: "Discard a card: Destroy an adjecent unit.",
    img: hell3Img,
  },
  {
    name: "Ash Shaman",
    power: 4,
    arrowsConfig: ["up", "diagonalLeft"],
    faction: "hellGnolls",
    effect: "If you have no cards in hand: Draw 2 cards.",
    img: hell4Img,
  },
  {
    name: "Ash Shaman",
    power: 4,
    arrowsConfig: ["up", "diagonalRight"],
    faction: "hellGnolls",
    effect: "If you have no cards in hand: Draw 2 cards.",
    img: hell4Img,
  },
  {
    name: "Magma Brute",
    power: 5,
    arrowsConfig: ["up"],
    faction: "hellGnolls",
    effect: "Can be placed anywhere on the map.",
    img: hell5Img,
  },

  {
    name: "Magma Brute",
    power: 5,
    arrowsConfig: ["up"],
    faction: "hellGnolls",
    effect: "Can be placed anywhere on the map.",
    img: hell5Img,
  },
  {
    name: "Hell Charger",
    power: 6,
    arrowsConfig: ["up"],
    faction: "hellGnolls",
    effect: "You and your opponent discard a card.",
    img: hell6Img,
  },
  {
    name: "Hell Charger",
    power: 6,
    arrowsConfig: ["up"],
    faction: "hellGnolls",
    effect: "You and your opponent discard a card.",
    img: hell6Img,
  },
  {
    name: "Demon King",
    power: 7,
    arrowsConfig: ["left", "right", "up"],
    faction: "hellGnolls",
    effect: "Sacrifice a unit: Place 1 unit from discard pile on the board.",
    img: hell7Img,
  },
  {
    name: "Demon King",
    power: 7,
    arrowsConfig: ["left", "right", "up"],
    faction: "hellGnolls",
    effect: "Sacrifice a unit: Place 1 unit from discard pile on the board.",
    img: hell7Img,
  },
];

// Sporelings cards
const sporelingsCards = [
  {
    name: "Dream Fairy",
    power: 0,
    arrowsConfig: ["left", "right", "up"],
    faction: "sporelings",
    effect: "Joker: Can be placed on top of any unit.",
    img: s0Img,
  },
  {
    name: "Dream Fairy",
    power: 0,
    arrowsConfig: ["left", "right", "up"],
    faction: "sporelings",
    effect: "Joker: Can be placed on top of any unit.",
    img: s0Img,
  },
  {
    name: "Morel Scout",
    power: 1,
    arrowsConfig: ["diagonalLeft", "diagonalRight", "up"],
    faction: "sporelings",
    effect: "Play a unit from hand.",
    img: s1Img,
  },
  {
    name: "Morel Scout",
    power: 1,
    arrowsConfig: ["diagonalLeft", "diagonalRight", "up"],
    faction: "sporelings",
    effect: "Play a unit from hand.",
    img: s1Img,
  },
  {
    name: "Morel Scout",
    power: 1,
    arrowsConfig: ["diagonalLeft", "diagonalRight", "up"],
    faction: "sporelings",
    effect: "Play a unit from hand.",
    img: s1Img,
  },
  {
    name: "Mycelium Warrior",
    power: 2,
    arrowsConfig: ["left", "right", "up"],
    faction: "sporelings",
    effect: "Draw 1 card or return an enemy unit from board to hand.",
    img: s2Img,
  },
  {
    name: "Mycelium Warrior",
    power: 2,
    arrowsConfig: ["left", "right", "up"],
    faction: "sporelings",
    effect: "Draw 1 card or return an enemy unit from board to hand.",
    img: s2Img,
  },
  {
    name: "Mycelium Warrior",
    power: 2,
    arrowsConfig: ["left", "right", "up"],
    faction: "sporelings",
    effect: "Draw 1 card or return an enemy unit from board to hand.",
    img: s2Img,
  },

  {
    name: "Truffle Hunters",
    power: 3,
    arrowsConfig: ["diagonalRight", "diagonalLeft", "up"],
    faction: "sporelings",
    effect: "Destroy a unit where this points to.",
    img: s3Img,
  },
  {
    name: "Truffle Hunters",
    power: 3,
    arrowsConfig: ["diagonalLeft", "diagonalRight", "up"],
    faction: "sporelings",
    effect: "Destroy a unit where this points to.",
    img: s3Img,
  },
  {
    name: "Mushroom Shaman",
    power: 4,
    arrowsConfig: ["left", "right", "up"],
    faction: "sporelings",
    effect:
      "Draw 1 card OR return a friendly unit from discard pile to your hand.",
    img: s4Img,
  },
  {
    name: "Mushroom Shaman",
    power: 4,
    arrowsConfig: ["left", "right", "up"],
    faction: "sporelings",
    effect:
      "Draw 1 card OR return a friendly unit from discard pile to your hand.",
    img: s4Img,
  },
  {
    name: "Fungal Defender",
    power: 5,
    arrowsConfig: ["up"],
    faction: "sporelings",
    effect: "Move 1 unit 1 space in any direction.",
    img: s5Img,
  },
  {
    name: "Fungal Defender",
    power: 5,
    arrowsConfig: ["up"],
    faction: "sporelings",
    effect: "Move 1 unit 1 space in any direction.",
    img: s5Img,
  },

  {
    name: "Sporeling Raider",
    power: 6,
    arrowsConfig: ["left", "right", "diagonalLeft", "diagonalRight"],
    faction: "sporelings",
    effect:
      "Draw 1 card. If it's power is 3 or less, play it. Otherwise, keep it in your hand.",
    img: s6Img,
  },
  {
    name: "Sporeling Raider",
    power: 6,
    arrowsConfig: ["left", "right", "diagonalLeft", "diagonalRight"],
    faction: "sporelings",
    effect:
      "Draw 1 card. If it's power is 3 or less, play it. Otherwise, keep it in your hand.",
    img: s6Img,
  },
  {
    name: "Mushroom Monarch",
    power: 7,
    arrowsConfig: ["up"],
    faction: "sporelings",
    effect: "Return a friendly unit to your hand.",
    img: s7Img,
  },
  {
    name: "Mushroom Monarch",
    power: 7,
    arrowsConfig: ["up"],
    faction: "sporelings",
    effect: "Return a friendly unit to your hand.",
    img: s7Img,
  },
];

export const toyBattlesCards = [...hellGnollsCards, ...sporelingsCards];
