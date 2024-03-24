import {
  generateCopies,
  generateCopiesStatic,
} from "../pirates/KeywordRenderer";

import monkey1img from "../../assets/heroesOfDominion/monkey1.png";
import monkey2img from "../../assets/heroesOfDominion/monkey2.png";
import monkey3img from "../../assets/heroesOfDominion/monkey3.png";
import monkey4img from "../../assets/heroesOfDominion/monkey4.png";

import demon1img from "../../assets/heroesOfDominion/demon1.png";
import demon2img from "../../assets/heroesOfDominion/demon2.png";
import demon3img from "../../assets/heroesOfDominion/demon3.png";
import demon4img from "../../assets/heroesOfDominion/demon4.png";

import archer1img from "../../assets/heroesOfDominion/archer1.png";
import archer2img from "../../assets/heroesOfDominion/archer2.png";
import archer3img from "../../assets/heroesOfDominion/archer3.png";
import archer4img from "../../assets/heroesOfDominion/archer4.png";

import blinky1img from "../../assets/heroesOfDominion/blinky1.png";
import blinky2img from "../../assets/heroesOfDominion/blinky2.png";
import blinky3img from "../../assets/heroesOfDominion/blinky3.png";
import blinky4img from "../../assets/heroesOfDominion/blinky4.png";

import assasin1img from "../../assets/heroesOfDominion/assasin1.png";
import assasin2img from "../../assets/heroesOfDominion/assasin2.png";
import assasin3img from "../../assets/heroesOfDominion/assasin3.png";
import assasin4img from "../../assets/heroesOfDominion/assasin4.png";

import warlock1img from "../../assets/heroesOfDominion/warlock1.png";
import warlock2img from "../../assets/heroesOfDominion/warlock2.png";
import warlock3img from "../../assets/heroesOfDominion/warlock3.png";
import warlock4img from "../../assets/heroesOfDominion/warlock4.png";

import goblin1img from "../../assets/heroesOfDominion/goblin1.png";
import goblin2img from "../../assets/heroesOfDominion/goblin2.png";
import goblin3img from "../../assets/heroesOfDominion/goblin3.png";
import goblin4img from "../../assets/heroesOfDominion/goblin4.png";

import mantis1img from "../../assets/heroesOfDominion/mantis1.png";
import mantis2img from "../../assets/heroesOfDominion/mantis2.png";
import mantis3img from "../../assets/heroesOfDominion/mantis3.png";
import mantis4img from "../../assets/heroesOfDominion/mantis4.png";

import hecarim1img from "../../assets/heroesOfDominion/hecarim1.png";
import hecarim2img from "../../assets/heroesOfDominion/hecarim2.png";
import hecarim3img from "../../assets/heroesOfDominion/hecarim3.png";
import hecarim4img from "../../assets/heroesOfDominion/hecarim4.png";

import orc1img from "../../assets/heroesOfDominion/orc1.png";
import orc2img from "../../assets/heroesOfDominion/orc2.png";
import orc3img from "../../assets/heroesOfDominion/orc3.png";
import orc4img from "../../assets/heroesOfDominion/orc4.png";

const heroNames = {
  monkey: "Monkey",
  orc: "Orc",
  demon: "Demon",
  archer: "Archer",
  blinky: "Blinky",
  priest: "Priest",
  hecarim: "Hecarim",
  goblin: "Goblin",
  assasin: "Assasin",
  warlock: "Warlock",
  mantis: "Mantis",
};

const TEMPLATE = {
  name: "NAME",
  img: demon4img,
  rarity: "basic",
  range: "1-1",
  quantity: 1,
  hero: heroNames.demon,
  effect: "EFFECT",
};

const monkeyCards = [
  {
    name: "Mecha Punch",
    img: monkey1img,
    rarity: "basic",
    range: "1-1",
    rangeType: "self",
    quantity: 1,
    hero: heroNames.monkey,
    effect: "Deal 1 Dmg. Push 1. Gain 1 MP.",
  },
  {
    name: "Rolling Sidestep",
    img: monkey2img,
    rarity: "super",
    range: "1-3",
    rangeType: "any",
    quantity: 1,
    hero: heroNames.monkey,
    effect: "Teleport 3.",
  },
  {
    name: "Swindle",
    img: monkey3img,
    rarity: "basic",
    range: "1-1",
    rangeType: "self",
    quantity: 1,
    hero: heroNames.monkey,
    effect: "Grab a hero and jump adjecent to him. Deal 1 Dmg.",
  },
  {
    name: "Grabbing Pull",
    img: monkey4img,
    rarity: "mega",
    range: "1-5",
    rangeType: "line",
    quantity: 1,
    hero: heroNames.monkey,
    effect:
      "Pull yourself towards a target. If the target is Enemy Hero: Apply 1 Stun.",
  },
];

const demonCards = [
  {
    name: "Sharp Hook",
    img: demon1img,
    rarity: "basic",
    range: "1-4",
    rangeType: "line",
    quantity: 1,
    hero: heroNames.demon,
    effect: "Pull 3. Deal 1 Dmg. If the target was not pulled: Gain 1 Lock.",
  },
  {
    name: "Trident Strike",
    img: demon2img,
    rarity: "basic",
    range: "1-2",
    rangeType: "any",
    quantity: 1,
    hero: heroNames.demon,
    effect: "Deal 2 Dmg. If you have Lock: Deal 3 Dmg instead.",
  },
  {
    name: "Hellish Aura",
    img: demon3img,
    rarity: "super",
    range: "1-1",
    rangeType: "self",
    quantity: 1,
    hero: heroNames.demon,
    effect: "Deal 2 Dmg to ALL adjecent heroes. Gain 1 Lock.",
  },
  {
    name: "Demonic Scream",
    img: demon4img,
    rarity: "mega",
    range: "1-1",
    rangeType: "self",
    quantity: 1,
    hero: heroNames.demon,
    effect: "Deal 2 Dmg. Apply Stun.",
  },
];

const blinkyCards = [
  {
    name: "Zap",
    img: blinky1img,
    rarity: "basic",
    range: "1-4",
    rangeType: "line",
    quantity: 1,
    hero: heroNames.blinky,
    effect: "Deal 1 Dmg. If you used Blink this turn: Pull 1.",
  },
  {
    name: "Blink",
    img: blinky3img,
    rarity: "basic",
    range: "1-2",
    rangeType: "any",
    quantity: 1,
    hero: heroNames.blinky,
    effect: "Teleport 2. Draw 1 Card.",
  },
  {
    name: "Stasis",
    img: blinky2img,
    rarity: "super",
    range: "0-3",
    rangeType: "line",
    quantity: 1,
    hero: heroNames.blinky,
    effect: "Apply 1 Crystal + 1 Silence.",
  },
  {
    name: "Time Loop",
    img: blinky4img,
    rarity: "mega",
    range: "1-9",
    rangeType: "line",
    quantity: 1,
    hero: heroNames.blinky,
    effect: "Teleport 9. Then repeat the last ability card you played.",
    // effect: "add up to 3 "Blinky" cards from your discard pile to your hand."
  },
];

const archerCards = [
  // {
  //   name: "Arrow Rain",
  //   img: archer1img,
  //   rarity: "basic",
  //   range: "1-4",
  //   quantity: 1,
  //   hero: heroNames.archer,
  //   effect: "Deal 1 Dmg to all adjecent heroes.",
  // },

  {
    name: "Blowing Arrow",
    img: archer1img,
    rarity: "basic",
    range: "1-4",
    rangeType: "line",
    quantity: 1,
    hero: heroNames.archer,
    effect: "Deal 1 Dmg. Push 2.",
  },
  {
    name: "Snipe",
    img: archer2img,
    rarity: "basic",
    range: "1-6",
    quantity: 1,
    hero: heroNames.archer,
    effect: "Deal 1 Dmg. If you have 2+ cards in hand: Deal 2 Dmg instead.",
  },
  {
    name: "Bounty Box",
    img: archer3img,
    rarity: "super",
    rangeType: "self",
    range: "0",
    quantity: 1,
    hero: heroNames.archer,
    effect: "If you have 3+ Archer cards in discard pile: Draw 3 Cards.",
  },
  {
    name: "Explore the Wilds",
    img: archer4img,
    rarity: "mega",
    rangeType: "self",
    range: "0",
    quantity: 1,
    hero: heroNames.archer,
    effect: "Gain 3 MP. Draw 3 Cards. Discard any that are not Archer cards.",
  },
];

const assasinCards = [
  {
    name: "Stealth",
    img: assasin1img,
    rarity: "basic",
    range: "0",
    rangeType: "self",
    quantity: 1,
    hero: heroNames.assasin,
    effect:
      "Gain 3 Stealth. Then, if you were already in Stealth: Gain 1 MP and Draw 1 Card.",
  },
  {
    name: "Backstab",
    img: assasin2img,
    rarity: "basic",
    range: "1-1",
    rangeType: "self",
    quantity: 1,
    hero: heroNames.assasin,
    effect:
      "Deal 2 Dmg. If you are in Stealth: Deal 2 + (1x Stealth Token) Dmg instead.",
  },
  {
    name: "Shadow Leap",
    img: assasin3img,
    rarity: "super",
    range: "1-2",
    quantity: 1,
    hero: heroNames.assasin,
    effect:
      "Then Teleport 2. You can use 1 ability from an adjecent enemy hero. (if any)",
  },
  {
    name: "Clone Strategy",
    img: assasin4img,
    rarity: "mega",
    range: "10",
    quantity: 1,
    hero: heroNames.assasin,
    effect:
      "Swap with any friendly hero. Then you may use 1 basic ability from that hero from the discard pile.",
  },
];

const warlockCards = [
  {
    name: "Life Swap",
    img: warlock1img,
    rarity: "basic",
    range: "0-3",
    rangeType: "any",
    quantity: 1,
    hero: heroNames.warlock,
    effect: "Deal 1 Dmg or Heal 1 Dmg. Fear 1.",
  },
  {
    name: "Siphon Life",
    img: warlock2img,
    rarity: "basic",
    range: "2-5",
    rangeType: "line",
    quantity: 1,
    hero: heroNames.warlock,
    effect: "Deal 1 Dmg. If you have Lifesteal, Deal 2 Dmg instead.",
  },
  {
    name: "Dark Ritual",
    img: warlock3img,
    rarity: "super",
    range: "0",
    rangeType: "self",
    quantity: 1,
    hero: heroNames.warlock,
    effect: "Pay 2 HP, Draw 2 Cards. Gain 2 Lifesteal.",
  },
  {
    name: "Forbidden Curse",
    img: warlock4img,
    rarity: "mega",
    range: "1-4",
    rangeType: "line",
    quantity: 1,
    hero: heroNames.warlock,
    effect: "Deal 2 Dmg. Target Hero Discards 2 Cards.",
  },
];

const goblinCards = [
  {
    name: "Bomb Strike",
    img: goblin3img,
    rarity: "basic",
    range: "1-4",
    rangeType: "line",
    quantity: 1,
    hero: heroNames.goblin,
    effect:
      "Place a random Bomb Token. (Deal 2 Dmg. / Lose 3 MP / Discard 2 Cards.)",
  },
  {
    name: "Goblin Scream",
    img: goblin4img,
    rarity: "basic",
    range: "1-5",
    rangeType: "line",
    quantity: 1,
    hero: heroNames.goblin,
    effect: "Pull 1. Apply Gravity. Gain 1 Fire.",
  },
  {
    name: "Chain Reaction",
    img: goblin1img,
    rarity: "super",
    range: "1-4",
    rangeType: "any",
    quantity: 1,
    hero: heroNames.goblin,
    effect:
      "Deal 1 Dmg. Activate any adjecent Bomb Tokens to that hero and apply their effects. Draw 1 Card for each Bomb.",
  },
  {
    name: "Mega Nuke",
    img: goblin2img,
    rarity: "mega",
    range: "1-4",
    rangeType: "line",
    quantity: 1,
    hero: heroNames.goblin,
    effect:
      "Deal 2 Dmg on the target cell & Deal 1 Dmg + Push 1 to adjecent cells to it.",
  },
];

const hecarimCards = [
  {
    name: "Relentless Charge",
    img: hecarim1img,
    rarity: "basic",
    range: "1-1",
    quantity: 1,
    hero: heroNames.hecarim,
    effect:
      "Gain 1 MP. You may spend your MP to move and then stop on a hero. Deal x Dmg where x = MP - 2 spent.",
  },
  {
    name: "Lasso Throw",
    img: hecarim2img,
    rarity: "basic",
    range: "1-1",
    quantity: 1,
    hero: heroNames.hecarim,
    effect: "Deal 1 Dmg. Push 1.",
  },
  {
    name: "Flying Charge",
    img: hecarim3img,
    rarity: "super",
    range: "1-1",
    quantity: 1,
    hero: heroNames.hecarim,
    effect:
      "Gain 3 MP. You may spend your MP to move and then stop on a hero. Push x where x = MP - 2 spent. If the push results in collision, apply Stun.",
  },
  {
    name: "Earthwave Smash",
    img: hecarim4img,
    rarity: "mega",
    range: "1-5",
    rangeType: "any",
    quantity: 1,
    hero: heroNames.hecarim,
    effect: "Teleport 5. Deal 2 Dmg to all adjecent heroes.",
  },
];

const orcCards = [
  {
    name: "Axe Slash",
    img: orc1img,
    rarity: "basic",
    range: "1-1",
    rangeType: "self",
    quantity: 1,
    hero: heroNames.orc,
    effect:
      "Deal 1 Dmg. Gain 1 Lock. If you already had Lock, Deal 2 Dmg instead.",
  },
  {
    name: "Aggresive Jump",
    img: orc2img,
    rarity: "basic",
    range: "1-4",
    rangeType: "line",
    quantity: 1,
    hero: heroNames.orc,
    effect: "Jump 3. You must target enemy hero to activate this ability.",
  },
  {
    name: "Combustion Blaster",
    img: orc3img,
    rarity: "super",
    range: "1-3",
    rangeType: "line",
    quantity: 1,
    hero: heroNames.orc,
    effect:
      "Deal 2 Dmg. If this ability targets a wall, push yourself away from it 3 cells.",
  },
  {
    name: "Perfect Exection",
    img: orc4img,
    rarity: "mega",
    range: "1-1",
    rangeType: "self",
    quantity: 1,
    hero: heroNames.orc,
    effect: "Deal 3 Dmg. If it defeats the hero, Gain 3 MP.",
  },
];

const mantisCards = [
  {
    name: "Mantis Punch",
    img: mantis1img,
    rarity: "basic",
    range: "1-1",
    quantity: 1,
    hero: heroNames.mantis,
    effect: "Deal 1 Dmg. Gain 1 MP.",
  },
  {
    name: "Mantis Kick",
    img: mantis2img,
    rarity: "basic",
    range: "1-1",
    quantity: 1,
    hero: heroNames.mantis,
    effect: "Deal 1 Dmg. Push 1.",
  },
  {
    name: "Mantis Grab",
    img: mantis3img,
    rarity: "super",
    range: "1-1",
    quantity: 1,
    hero: heroNames.mantis,
    effect: "Deal 1 Dmg. Pull 1.",
  },
  {
    name: "Mantis Throw",
    img: mantis4img,
    rarity: "mega",
    range: "1-1",
    quantity: 1,
    hero: heroNames.mantis,
    effect: "Deal 1 Dmg. Push 1. Pull 1.",
  },
];

const heroesCardsConfig = [
  ...monkeyCards,
  ...demonCards,
  ...archerCards,
  ...blinkyCards,
  ...assasinCards,
  ...warlockCards,
  ...goblinCards,
  ...hecarimCards,
  ...orcCards,
  ...mantisCards,
];

const spells = generateCopies(heroesCardsConfig);

export const hodCards = [...spells];
