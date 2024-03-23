import necro1 from "../../assets/miniBattles/necro1.png";
import necro2 from "../../assets/miniBattles/necro2.png";
import necro3 from "../../assets/miniBattles/necro3.png";
import necro4 from "../../assets/miniBattles/necro4.png";
import necro5 from "../../assets/miniBattles/necro5.png";

import human1 from "../../assets/miniBattles/human1.png";
import human2 from "../../assets/miniBattles/human2.png";
import human3 from "../../assets/miniBattles/human3.png";
import human4 from "../../assets/miniBattles/human4.png";
import human5 from "../../assets/miniBattles/human5.png";

import troll1 from "../../assets/miniBattles/troll1.png";
import troll2 from "../../assets/miniBattles/troll2.png";
import troll3 from "../../assets/miniBattles/troll3.png";
import troll4 from "../../assets/miniBattles/troll4.png";
import troll5 from "../../assets/miniBattles/troll5.png";

import goblin1 from "../../assets/miniBattles/goblin1.png";
import goblin2 from "../../assets/miniBattles/goblin2.png";
import goblin3 from "../../assets/miniBattles/goblin3.png";
import goblin4 from "../../assets/miniBattles/goblin4.png";
import goblin5 from "../../assets/miniBattles/goblin5.png";

const Factions = {
  necropolis: {
    name: "Necropolis",
    color: "#627753",
    // secondaryColor: "#444430",
    secondaryColor: "#9b9b5a",
    imgUrl:
      "https://cdn.midjourney.com/e9caaebd-67d2-4ee7-a55e-f448ecafe53a/0_2.png",
  },
  haven: {
    name: "Haven",
    color: "#c9bfa9",
    secondaryColor: "#f4e5c3",
    imgUrl:
      "https://cdn.midjourney.com/5d1539c5-7d00-49d4-8520-548e686a4ed8/0_2.png",
  },
  trolls: {
    name: "Trolls",
    color: "#6d5c4d",
    secondaryColor: "#a99b8b",
    imgUrl:
      "https://cdn.midjourney.com/55da2a98-eb1f-42d2-8a22-c910634b60dd/0_1.png",
  },
  goblins: {
    name: "Goblins",
    color: "#a53636",
    secondaryColor: "#e09f9f",
    imgUrl:
      "https://cdn.midjourney.com/b5f94154-f912-432e-bac6-d0bb990e30fb/0_3.png",
  },
};

const necropolisCards = [
  {
    name: "Skeleton Archer",
    tier: 1,
    hp: 4,
    mp: 2,
    heroImg: necro1,
    faction: Factions.necropolis,
    atkDice: 2,
    defDice: 1,
    atkJson: [
      { on: "1-2", do: "deal 1 dmg" },
      { on: "3-4", do: "deal 2 dmg" },
      { on: "5-6", do: "deal 2 dmg. apply 1 curse" },
    ],
    defJson: [{ on: "5-6", do: "block 1 dmg" }],
  },
  {
    name: "Skeleton Warrior",
    tier: 2,
    hp: 6,
    mp: 3,
    heroImg: necro2,
    faction: Factions.necropolis,
    atkDice: 3,
    defDice: 1,
    atkJson: [
      { on: "1-2", do: "deal 1 dmg" },
      { on: "3-4", do: "deal 2 dmg" },
      { on: "5-6", do: "deal 2 dmg. apply 1 curse" },
    ],
    defJson: [{ on: "5-6", do: "block 2 dmg" }],
  },
  {
    name: "Skeleton Mage",
    tier: 3,
    hp: 5,
    mp: 1,
    heroImg: necro3,
    faction: Factions.necropolis,
    atkDice: 3,
    defDice: 2,
    atkJson: [
      { on: "1-4", do: "deal 2 dmg" },
      { on: "5", do: "deal 3 dmg" },
      { on: "6", do: "deal 4 dmg. apply 1 curse" },
    ],
    defJson: [{ on: "4-6", do: "block 2 dmg" }],
  },
  {
    name: "Skeleton Knight",
    tier: 4,
    hp: 12,
    mp: 6,
    heroImg: necro4,
    faction: Factions.necropolis,
    atkDice: 3,
    defDice: 2,
    atkJson: [
      { on: "1-2", do: "deal 2 dmg" },
      { on: "3-4", do: "deal 3 dmg" },
      { on: "5-6", do: "deal 4 dmg. apply 1 curse" },
    ],
    defJson: [
      { on: "4-5", do: "block 1 dmg" },
      { on: "6", do: "block 2 dmg" },
    ],
  },
  {
    name: "Skeleton King",
    tier: 5,
    hp: 16,
    mp: 5,
    heroImg: necro5,
    faction: Factions.necropolis,
    atkDice: 4,
    defDice: 4,
    atkJson: [
      { on: "1-2", do: "deal 2 dmg" },
      { on: "3-4", do: "deal 3 dmg" },
      { on: "5-6", do: "deal 3 dmg. apply 1 curse" },
    ],
    defJson: [
      { on: "3-5", do: "block 1 dmg" },
      { on: "6", do: "block 2 dmg" },
    ],
  },
];

const havenCards = [
  {
    name: "Human Knight",
    tier: 1,
    hp: 5,
    mp: 3,
    heroImg: human1,
    faction: Factions.haven,
    atkDice: 3,
    defDice: 2,
    atkJson: [
      { on: "1-4", do: "deal 1 dmg" },
      { on: "5-6", do: "deal 2 dmg" },
    ],
    defJson: [{ on: "5-6", do: "block 1 dmg" }],
  },
  {
    name: "Human Archer",
    tier: 2,
    hp: 5,
    mp: 3,
    heroImg: human2,
    faction: Factions.haven,
    atkDice: 2,
    defDice: 1,
    atkJson: [
      { on: "1", do: "deal 1 dmg" },
      { on: "2-4", do: "deal 2 dmg" },
      { on: "5-6", do: "deal 2 dmg. apply 1 curse" },
    ],
    defJson: [{ on: "4-6", do: "block 1 dmg" }],
  },
  {
    name: "Human Paladin",
    tier: 3,
    hp: 8,
    mp: 4,
    heroImg: human3,
    faction: Factions.haven,
    atkDice: 3,
    defDice: 3,
    atkJson: [
      { on: "1-5", do: "deal 2 dmg" },
      { on: "6", do: "deal 2 dmg. apply 1 curse" },
    ],
    defJson: [{ on: "5-6", do: "block 2 dmg" }],
  },
  {
    name: "Human Cavalier",
    tier: 4,
    hp: 13,
    mp: 6,
    heroImg: human4,
    faction: Factions.haven,
    atkDice: 3,
    defDice: 2,
    atkJson: [
      { on: "1-2", do: "deal 1 dmg" },
      { on: "3-4", do: "deal 3 dmg" },
      { on: "5-6", do: "deal 4 dmg. apply 1 curse" },
    ],
    defJson: [{ on: "4-6", do: "block 2 dmg" }],
  },
  {
    name: "Human Rider",
    tier: 5,
    hp: 14,
    mp: 8,
    heroImg: human5,
    faction: Factions.haven,
    atkDice: 5,
    defDice: 2,
    atkJson: [
      { on: "1-4", do: "deal 2 dmg" },
      { on: "5-6", do: "deal 3 dmg" },
    ],
    defJson: [
      { on: "1-3", do: "block 1 dmg" },
      { on: "4-6", do: "block 2 dmg. gain 1 fly" },
    ],
  },
];

const trollCards = [
  {
    name: "Troll Warrior",
    tier: 1,
    hp: 6,
    mp: 2,
    heroImg: troll1,
    faction: Factions.trolls,
    atkDice: 2,
    defDice: 1,
    atkJson: [
      { on: "1-2", do: "deal 1 dmg" },
      { on: "3-4", do: "deal 2 dmg" },
      { on: "5-6", do: "deal 2 dmg. apply 1 curse" },
    ],
    defJson: [{ on: "5-6", do: "block 1 dmg" }],
  },
  {
    name: "Troll Archer",
    tier: 2,
    hp: 8,
    mp: 3,
    heroImg: troll2,
    faction: Factions.trolls,
    atkDice: 3,
    defDice: 1,
    atkJson: [
      { on: "1-2", do: "deal 1 dmg" },
      { on: "3-4", do: "deal 2 dmg" },
      { on: "5-6", do: "deal 2 dmg. apply 1 curse" },
    ],
    defJson: [{ on: "5-6", do: "block 2 dmg" }],
  },
  {
    name: "Troll Shaman",
    tier: 3,
    hp: 10,
    mp: 1,
    heroImg: troll3,
    faction: Factions.trolls,
    atkDice: 3,
    defDice: 2,
    atkJson: [
      { on: "1-4", do: "deal 2 dmg" },
      { on: "5", do: "deal 3 dmg" },
      { on: "6", do: "deal 4 dmg. apply 1 curse" },
    ],
    defJson: [{ on: "4-6", do: "block 2 dmg" }],
  },
  {
    name: "Troll Berserker",
    tier: 4,
    hp: 14,
    mp: 6,
    heroImg: troll4,
    faction: Factions.trolls,
    atkDice: 3,
    defDice: 2,
    atkJson: [
      { on: "1-2", do: "deal 2 dmg" },
      { on: "3-4", do: "deal 3 dmg" },
      { on: "5-6", do: "deal 4 dmg. apply 1 curse" },
    ],
    defJson: [
      { on: "4-5", do: "block 1 dmg" },
      { on: "6", do: "block 2 dmg" },
    ],
  },
  {
    name: "Troll King",
    tier: 5,
    hp: 18,
    mp: 5,
    heroImg: troll5,
    faction: Factions.trolls,
    atkDice: 4,
    defDice: 4,
    atkJson: [
      { on: "1-2", do: "deal 2 dmg" },
      { on: "3-4", do: "deal 3 dmg" },
      { on: "5-6", do: "deal 3 dmg. apply 1 curse" },
    ],
    defJson: [
      { on: "3-5", do: "block 1 dmg" },
      { on: "6", do: "block 2 dmg" },
    ],
  },
];

const goblinCards = [
  {
    name: "Goblin Warrior",
    tier: 1,
    hp: 4,
    mp: 2,
    heroImg: goblin1,
    faction: Factions.goblins,
    atkDice: 2,
    defDice: 1,
    atkJson: [
      { on: "1-2", do: "deal 1 dmg" },
      { on: "3-4", do: "deal 2 dmg" },
      { on: "5-6", do: "deal 2 dmg. apply 1 curse" },
    ],
    defJson: [{ on: "5-6", do: "block 1 dmg" }],
  },
  {
    name: "Goblin Archer",
    tier: 2,
    hp: 6,
    mp: 3,
    heroImg: goblin2,
    faction: Factions.goblins,
    atkDice: 3,
    defDice: 1,
    atkJson: [
      { on: "1-2", do: "deal 1 dmg" },
      { on: "3-4", do: "deal 2 dmg" },
      { on: "5-6", do: "deal 2 dmg. apply 1 curse" },
    ],
    defJson: [{ on: "5-6", do: "block 2 dmg" }],
  },
  {
    name: "Goblin Shaman",
    tier: 3,
    hp: 8,
    mp: 1,
    heroImg: goblin3,
    faction: Factions.goblins,
    atkDice: 3,
    defDice: 2,
    atkJson: [
      { on: "1-4", do: "deal 2 dmg" },
      { on: "5", do: "deal 3 dmg" },
      { on: "6", do: "deal 4 dmg. apply 1 curse" },
    ],
    defJson: [{ on: "4-6", do: "block 2 dmg" }],
  },
  {
    name: "Goblin Berserker",
    tier: 4,
    hp: 12,
    mp: 6,
    heroImg: goblin4,
    faction: Factions.goblins,
    atkDice: 3,
    defDice: 2,

    atkJson: [
      { on: "1-2", do: "deal 2 dmg" },
      { on: "3-4", do: "deal 3 dmg" },
      { on: "5-6", do: "deal 4 dmg. apply 1 curse" },
    ],
    defJson: [
      { on: "4-5", do: "block 1 dmg" },
      { on: "6", do: "block 2 dmg" },
    ],
  },
  {
    name: "Goblin King",
    tier: 5,
    hp: 16,
    mp: 5,
    heroImg: goblin5,
    faction: Factions.goblins,
    atkDice: 4,
    defDice: 4,
    atkJson: [
      { on: "1-2", do: "deal 2 dmg" },
      { on: "3-4", do: "deal 3 dmg" },
      { on: "5-6", do: "deal 3 dmg. apply 1 curse" },
    ],
    defJson: [
      { on: "3-5", do: "block 1 dmg" },
      { on: "6", do: "block 2 dmg" },
    ],
  },
];

export const miniCards = [
  ...necropolisCards,
  ...havenCards,
  ...trollCards,
  ...goblinCards,
];
