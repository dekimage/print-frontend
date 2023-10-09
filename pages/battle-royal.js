const cards = [
  {
    name: "Robot Sentry",
    faction: "Technology",
    type: "Unit",
    cost: 1,
    hp: 1,
    atk: 1,
    keywords: ["Spy 2, Draw 1"],
    img: "  https://cdn.midjourney.com/2ec74cd1-ede8-42cd-813c-155da516e4df/0_1.png",
  },
  {
    name: "Blaster",
    faction: "Technology",
    type: "Unit",
    cost: 7,
    hp: 5,
    atk: 3,
    keywords: ["Ranged"],
    img: "https://cdn.midjourney.com/2ddb30df-0cc5-42f5-8687-ad60598a0438/0_3.png",
  },
  {
    name: "Battle Cannon",
    faction: "Technology",
    type: "Unit",
    cost: 4,
    hp: 2,
    atk: 2,
    keywords: ["Ranged"],
    img: "https://cdn.midjourney.com/2ddb30df-0cc5-42f5-8687-ad60598a0438/0_1.png",
  },
  {
    name: "Heavy Turret",
    faction: "Technology",
    type: "Unit",
    cost: 5,
    hp: 4,
    atk: 2,
    keywords: ["Ranged"],
    img: "https://cdn.midjourney.com/2ddb30df-0cc5-42f5-8687-ad60598a0438/0_2_384_N.webp",
  },

  {
    name: "Mechanized Warrior",
    faction: "Technology",
    type: "Unit",
    cost: 5,
    hp: 4,
    atk: 3,
    keywords: ["Charge"],
    img: "https://cdn.midjourney.com/fe4ae25b-afa2-412b-a506-29872c7c1e04/0_1.png",
  },
  {
    name: "Support Mech",
    faction: "Technology",
    type: "Unit",
    cost: 3,
    hp: 2,
    atk: 1,
    keywords: ["Repair 1", "Boost 1"],
    img: "https://cdn.midjourney.com/cbc2af37-f242-4cd2-b634-dabeecab9f1b/0_1.png",
  },
  {
    name: "Tactical Mechahook",
    faction: "Technology",
    type: "Unit",
    cost: 4,
    hp: 5,
    atk: 3,
    keywords: ["Pull", "Taunt"],
    img: "https://cdn.midjourney.com/cbc2af37-f242-4cd2-b634-dabeecab9f1b/0_3.png",
  },

  {
    name: "Steam Drone",
    faction: "Technology",
    type: "Unit",
    cost: 8,
    hp: 6,
    atk: 4,
    keywords: ["Flight", "Ward"],
    img: "https://cdn.midjourney.com/cdca1f71-25da-45e6-adf6-5be322a5d295/0_3_384_N.webp",
  },
  {
    name: "Cyber Ninja",
    faction: "Technology",
    type: "Unit",
    cost: 5,
    hp: 2,
    atk: 4,
    keywords: ["Stealth", "Hack 1"],
    img: "https://cdn.midjourney.com/97089b9f-2979-47aa-9625-96874775ff99/0_2.png",
  },
  {
    name: "Cyber Ninja",
    faction: "Technology",
    type: "Unit",
    cost: 3,
    hp: 3,
    atk: 2,
    keywords: ["Hack 1"],
    img: "  https://cdn.midjourney.com/97089b9f-2979-47aa-9625-96874775ff99/0_0.png",
  },

  {
    name: "Gadgeteer Engineer",
    faction: "Technology",
    type: "Unit",
    cost: 3,
    hp: 1,
    atk: 2,
    keywords: ["Boost 3"],
    img: "https://cdn.midjourney.com/f0145728-8626-4ba2-bce2-307e5e5a3252/0_2.png",
  },
  {
    name: "Energy Generator",
    faction: "Technology",
    type: "Structure",
    cost: 5,
    hp: 3,
    effect: "Each time a friendly unit is destroyed: Gain 1 Mana",
    img: "https://cdn.midjourney.com/f7693e95-3a98-4bee-993e-3d1d46ceac0a/0_1.png",
  },
  {
    name: "Laser Turret",
    faction: "Technology",
    type: "Unit",
    cost: 5,
    hp: 4,
    atk: 3,
    keywords: ["Siege"],
    img: "https://cdn.midjourney.com/2ddb30df-0cc5-42f5-8687-ad60598a0438/0_1.png",
  },
  {
    name: "Robot Factory",
    faction: "Technology",
    type: "Structure",
    cost: 4,
    hp: 4,
    effect: "Once per turn add a unit from discard pile to hand.",
    img: "https://cdn.midjourney.com/cf38d5a1-94c9-4a4f-bf15-1e3ead7842be/0_2.png",
  },
  {
    name: "EMP Blast",
    faction: "Technology",
    type: "Spell",
    cost: 5,
    effect: "Shock 6",
    img: "https://cdn.midjourney.com/cc37d545-838e-4f19-a410-cdd11c5ec1df/0_1.png",
  },
  {
    name: "Tools Merchant",
    faction: "Technology",
    type: "Unit",
    atk: 1,
    hp: 1,
    cost: 4,
    keywords: ["Draw 3"],
    img: " https://cdn.midjourney.com/7b919af1-3f6b-4afe-bbe5-c636e5541fbe/0_1.png",
  },

  {
    name: "Overclock",
    faction: "Technology",
    type: "Spell",
    cost: 2,
    effect: "Gain 3 Mana. Boost a Unit by 3.",
    img: "https://cdn.midjourney.com/17bd7d2c-4835-4e0f-9adb-2e86c3ac6abe/0_1.png",
  },
  {
    name: "Forest Guardian",
    faction: "Nature",
    type: "Unit",
    cost: 2,
    hp: 3,
    atk: 2,
    keywords: ["Heal 1"],
    img: "https://cdn.midjourney.com/b161772a-551b-49b2-abe9-bc2469cf2218/0_3_384_N.webp",
  },
  {
    name: "Repel Owl",
    faction: "Nature",
    type: "Unit",
    cost: 4,
    hp: 4,
    atk: 3,
    keywords: ["Push"],
    img: "https://cdn.midjourney.com/fae47d58-2af1-430c-be38-c35be6ce31a3/0_0.png",
  },
  {
    name: "Mystic Growth",
    faction: "Nature",
    type: "Spell",
    cost: 5,
    effect: "Gain 8 Mana",
    img: "https://cdn.midjourney.com/b3e8cce3-6a86-4d0d-83ce-cd2cfed6b340/0_1.png",
  },
  {
    name: "Druid of the Grove",
    faction: "Nature",
    type: "Unit",
    cost: 3,
    hp: 3,
    atk: 2,
    keywords: ["Draw 1, Heal 1"],
    img: "https://cdn.midjourney.com/d32da1c8-dfff-4567-a866-7f928c3238bc/0_1_384_N.webp",
  },
  {
    name: "Lookout Owl",
    faction: "Nature",
    type: "Unit",
    cost: 2,
    hp: 2,
    atk: 1,
    keywords: ["Draw 2", "Discard 1"],
    img: "https://cdn.midjourney.com/29aeaa19-22a8-46ff-a1bc-f38536f9a7ee/0_0_384_N.webp",
  },
  {
    name: "Ancient Tree of Life",
    faction: "Nature",
    type: "Structure",
    cost: 6,
    hp: 3,
    effect: "Draw 1 card per turn",
    img: "https://cdn.midjourney.com/bdf1636a-35c7-4270-ab9c-5949b9897f7b/0_0.png",
  },
  {
    name: "Stone Circle Altar",
    faction: "Nature",
    type: "Structure",
    cost: 3,
    hp: 3,
    effect: "Repair 1 once per turn",
    img: "https://cdn.midjourney.com/162e6bd5-5778-420a-b393-6aaa4b5bcb86/0_1.png",
  },
  {
    name: "Summoner's Portal",
    faction: "Nature",
    type: "Structure",
    cost: 6,
    hp: 4,
    effect: "Gain + 1 Mana per turn",
    img: "https://cdn.midjourney.com/162e6bd5-5778-420a-b393-6aaa4b5bcb86/0_3.png",
  },
  {
    name: "Nature's Blessing",
    faction: "Nature",
    type: "Spell",
    cost: 3,
    effect: "Boost 2, Heal 3",
    img: "https://cdn.midjourney.com/3ede11ba-f1ae-4dcf-a560-08a0882e7423/0_2.png",
  },
  {
    name: "Caller of Wild",
    faction: "Nature",
    type: "Unit",
    cost: 4,
    hp: 1,
    atk: 2,
    keywords: ["Summon 3", "Draw 1"],
    img: "https://cdn.midjourney.com/22f267bc-e1b2-4e5c-9315-567eb55aee38/0_0.png",
  },

  {
    name: "Drone Engineer",
    faction: "Technology",
    type: "Unit",
    cost: 3,
    hp: 2,
    atk: 1,
    keywords: ["Repair 1", "Draw 1", "Boost 1"],
    img: "https://cdn.midjourney.com/7fe75a49-b46d-4cc7-83e1-8b963927f946/0_2.png",
  },
  {
    name: "Tank Blaster",
    faction: "Technology",
    type: "Unit",
    cost: 7,
    hp: 5,
    atk: 3,
    keywords: ["Siege", "Shock 3"],
    img: "https://cdn.midjourney.com/40eaf77e-b9ce-40b5-bc5e-551fcb3e91dd/0_2_384_N.webp",
  },
  {
    name: "Stealth Bomber",
    faction: "Technology",
    type: "Unit",
    cost: 6,
    hp: 3,
    atk: 5,
    keywords: ["Stealth"],
    img: "https://cdn.midjourney.com/e4819436-7075-44e1-962d-ec57546e9b7e/0_3.png",
  },
  {
    name: "Evasive Thopter",
    faction: "Technology",
    type: "Unit",
    cost: 5,
    hp: 2,
    atk: 3,
    keywords: ["Flight", "Ward"],
    img: "https://cdn.midjourney.com/cdca1f71-25da-45e6-adf6-5be322a5d295/0_2.png",
  },
  {
    name: "Nano Thopter",
    faction: "Technology",
    type: "Unit",
    cost: 4,
    hp: 2,
    atk: 3,
    keywords: ["Flight"],
    img: "https://cdn.midjourney.com/b16da4a2-d41b-40b5-97ef-4b1d7924ba13/0_3.png",
  },
  {
    name: "Robo Swarms",
    faction: "Technology",
    type: "Unit",
    cost: 6,
    hp: 2,
    atk: 3,
    keywords: ["Swarm 3"],
    img: "https://cdn.midjourney.com/4121c72e-7389-43f2-a38d-54313aa5e0c5/0_3.png",
  },

  {
    name: "Areal Rocketeers",
    faction: "Technology",
    type: "Unit",
    cost: 3,
    hp: 1,
    atk: 2,
    keywords: ["Ranged"],
    img: "  https://cdn.midjourney.com/f1fc8c81-d8d9-48c1-9de9-24e232f61178/0_1.png",
  },
  {
    name: "Nano Bots",
    faction: "Technology",
    type: "Unit",
    cost: 4,
    hp: 1,
    atk: 1,
    keywords: ["Swarm 3", "Mana 1"],
    img: "https://cdn.midjourney.com/4121c72e-7389-43f2-a38d-54313aa5e0c5/0_2.png",
  },
  {
    name: "Jetpack Trooper",
    faction: "Technology",
    type: "Unit",
    cost: 7,
    hp: 8,
    atk: 3,
    keywords: ["Shift", "Taunt"],
    img: "https://cdn.midjourney.com/9155beb9-b0ab-4026-b84c-1ca42133f1f5/0_0.png",
  },

  {
    name: "Sylvan Archer",
    faction: "Nature",
    type: "Unit",
    cost: 2,
    hp: 2,
    atk: 1,
    keywords: ["Ranged"],
    img: "https://cdn.midjourney.com/ca6896a3-9dd8-47f0-9bdd-d90e670741bb/0_2.png",
  },
  {
    name: "Elvish Pathfinder",
    faction: "Nature",
    type: "Unit",
    cost: 1,
    hp: 1,
    atk: 1,
    keywords: ["Spy 2, Draw 1"],
    img: "https://cdn.midjourney.com/2d862066-902d-49e1-959e-dc70314b3d05/0_1.png",
  },
  {
    name: "Envisoned Parrot",
    faction: "Nature",
    type: "Unit",
    cost: 5,
    hp: 2,
    atk: 3,
    keywords: ["Draw 2"],
    img: "https://cdn.midjourney.com/07dd14db-cf03-4317-bf9d-efdf88c7c91a/0_0.png",
  },
  {
    name: "Spirit Shaman",
    faction: "Nature",
    type: "Unit",
    cost: 6,
    hp: 2,
    atk: 2,
    keywords: ["Mana 3", "Summon 3"],
    img: "https://cdn.midjourney.com/3e126400-7236-4a58-a753-8a1036497822/0_0_384_N.webp",
  },
  {
    name: "Majestic Shaman",
    faction: "Nature",
    type: "Unit",
    cost: 3,
    hp: 1,
    atk: 1,
    keywords: ["Freeze", "Draw 1", "Heal 1"],
    img: "https://cdn.midjourney.com/c5467438-49c7-4c7a-88be-e68470d65b49/0_2.png",
  },
  //Railgunner
  {
    name: "Legion Commander",
    faction: "Technology",
    type: "Unit",
    cost: 6,
    hp: 3,
    atk: 3,
    keywords: ["Summon 5"],
    img: "https://cdn.midjourney.com/f781d2e0-686f-42ec-aab6-50ea54df3d52/0_0.png",
  },
  {
    name: "Shielded Tank",
    faction: "Technology",
    type: "Unit",
    cost: 8,
    hp: 9,
    atk: 5,
    keywords: ["Taunt"],
    img: "https://cdn.midjourney.com/bf273d12-4c97-428c-8153-4e60e02cd8ec/0_1.png",
  },
  {
    name: "Steampunk Engineer",
    faction: "Technology",
    type: "Unit",
    cost: 3,
    hp: 2,
    atk: 2,
    keywords: ["Repair 2"],
    img: "https://cdn.midjourney.com/a088284e-db24-455e-9144-63631250b24d/0_2.png",
  },
  {
    name: "Plasma Gunner",
    faction: "Technology",
    type: "Unit",
    cost: 2,
    hp: 1,
    atk: 1,
    keywords: ["Ranged", "Shock 1"],
    img: "https://cdn.midjourney.com/90702387-5e30-455a-b533-4cbff45d1966/0_3.png",
  },
  {
    name: "Tactical Drone",
    faction: "Technology",
    type: "Unit",
    cost: 5,
    hp: 1,
    atk: 3,
    keywords: ["Swap", "Flight"],
    img: "https://cdn.midjourney.com/5120a768-b761-42ae-bbdf-e4914cc844c3/0_1.png",
  },

  {
    name: "Merceneries Infantry",
    faction: "Technology",
    type: "Unit",
    cost: 2,
    hp: 1,
    atk: 2,
    keywords: ["Swarm 2"],
    img: "  https://cdn.midjourney.com/f781d2e0-686f-42ec-aab6-50ea54df3d52/0_3.png",
  },
  {
    name: "Heavy Infantry",
    faction: "Technology",
    type: "Unit",
    cost: 5,
    hp: 1,
    atk: 3,
    keywords: ["Swarm 3"],
    img: "https://cdn.midjourney.com/f781d2e0-686f-42ec-aab6-50ea54df3d52/0_2.png",
  },
  {
    name: "Circuitry Wizard",
    faction: "Technology",
    type: "Unit",
    cost: 5,
    hp: 3,
    atk: 2,
    keywords: ["Shock 2", "Mana 2"],
    img: "https://cdn.midjourney.com/79bef3cf-4236-4fcf-b4db-e6d820320c96/0_1.png",
  },
  {
    name: "Mechanic Hulk",
    faction: "Technology",
    type: "Unit",
    cost: 9,
    hp: 8,
    atk: 7,
    keywords: ["Pull", "Ward"],
    img: "https://cdn.midjourney.com/169f4541-c63c-4293-8b56-cfca5c41569b/0_3.png",
  },

  {
    name: "Scano Bot",
    faction: "Technology",
    type: "Unit",
    cost: 1,
    hp: 2,
    atk: 1,
    keywords: ["Spy 3", "Mana 1"],
    img: "  https://cdn.midjourney.com/2ec74cd1-ede8-42cd-813c-155da516e4df/0_2.png",
  },
  {
    name: "Repair O Bot",
    faction: "Technology",
    type: "Unit",
    cost: 2,
    hp: 1,
    atk: 1,
    keywords: ["Repair 1", "Shield 1"],
    img: " https://cdn.midjourney.com/2ec74cd1-ede8-42cd-813c-155da516e4df/0_0.png",
  },
  {
    name: "Swarm Thopter",
    faction: "Technology",
    type: "Unit",
    cost: 8,
    hp: 2,
    atk: 3,
    keywords: ["Swarm 2", "Flight"],
    img: "https://cdn.midjourney.com/b16da4a2-d41b-40b5-97ef-4b1d7924ba13/0_0.png",
  },
  {
    name: "Electromancer",
    faction: "Technology",
    type: "Unit",
    cost: 6,
    hp: 3,
    atk: 5,
    keywords: ["Shock 2"],
    img: "https://cdn.midjourney.com/c3cdfb8f-ede6-4d88-acbd-ea10c8b018ca/0_2.png",
  },
  {
    name: "Fuelmancer",
    faction: "Technology",
    type: "Unit",
    cost: 4,
    hp: 4,
    atk: 1,
    keywords: ["Shock 3"],
    img: "https://cdn.midjourney.com/c3cdfb8f-ede6-4d88-acbd-ea10c8b018ca/0_3.png",
  },

  {
    name: "Venomous Serpent",
    faction: "Nature",
    type: "Unit",
    cost: 4,
    hp: 2,
    atk: 3,
    keywords: ["Freeze"],
    img: "https://cdn.midjourney.com/390d5b17-9655-4cf6-a678-476f1e3745d4/0_1.png",
  },
  {
    name: "Giant Eagle",
    faction: "Nature",
    type: "Unit",
    cost: 7,
    hp: 6,
    atk: 5,
    keywords: ["Flight"],
    img: "https://cdn.midjourney.com/4688722a-23fb-44c4-ab22-c2d1b8622ec3/0_2.png",
  },
  {
    name: "Wolves Summoner",
    faction: "Nature",
    type: "Unit",
    cost: 8,
    hp: 1,
    atk: 2,
    keywords: ["Swarm 5", "Freeze"],
    img: "https://cdn.midjourney.com/69fe3533-3d14-4f3c-b5ff-66973b002a7a/0_0.png",
  },
  {
    name: "Swamp Witch",
    faction: "Nature",
    type: "Unit",
    cost: 4,
    hp: 3,
    atk: 1,
    keywords: ["Resurrect 5"],
    img: "https://cdn.midjourney.com/ee0ce40f-48cc-4271-994c-d6b3838eb5db/0_3.png",
  },
  {
    name: "Wild Hog",
    faction: "Nature",
    type: "Unit",
    cost: 6,
    hp: 5,
    atk: 4,
    keywords: ["Charge"],
    img: "https://cdn.midjourney.com/507fd8a9-ce55-4575-93bb-537d3b91f217/0_2.png",
  },
  {
    name: "Pixie Enchanter",
    faction: "Nature",
    type: "Unit",
    cost: 4,
    hp: 2,
    atk: 2,
    keywords: ["Draw 1", "Boost 2"],
    img: "https://cdn.midjourney.com/2f0f848c-cda6-42fd-85ef-75106fa8cbc1/0_1.png",
  },
  {
    name: "Crystal Inspector",
    faction: "Nature",
    type: "Unit",
    cost: 3,
    hp: 1,
    atk: 3,
    keywords: ["Mana 3"],
    img: "https://cdn.midjourney.com/6e74eff5-a211-4941-a39f-165cf4412139/0_0.png",
  },
  {
    name: "Mossy Behemoth",
    faction: "Nature",
    type: "Unit",
    cost: 6,
    hp: 7,
    atk: 4,
    keywords: ["Taunt"],
    img: "https://cdn.midjourney.com/cc16868a-4ba8-4c41-9934-a6d67459b068/0_0.png",
  },
  {
    name: "Elvish Hope",
    faction: "Nature",
    type: "Spell",
    cost: 7,
    effect: "Draw 4 cards from your deck. Summon any that cost 3 or less.",
    img: "https://cdn.midjourney.com/03ba9bcf-d6d5-43f1-8d10-52f14e7756ec/0_1.png",
  },
  {
    name: "Arch Druid Eagle",
    faction: "Nature",
    type: "Unit",
    cost: 6,
    hp: 1,
    atk: 3,
    keywords: ["Draw 3"],
    img: "https://cdn.midjourney.com/29aeaa19-22a8-46ff-a1bc-f38536f9a7ee/0_1.png",
  },
  {
    name: "Crag Beast",
    faction: "Nature",
    type: "Unit",
    cost: 7,
    hp: 4,
    atk: 4,
    keywords: ["Swap"],
    img: "https://cdn.midjourney.com/5cd49535-11f8-4d48-ae5b-b4f2006c1bb9/0_1.png",
  },
  {
    name: "Firestarter Phoenix",
    faction: "Nature",
    type: "Unit",
    cost: 7,
    hp: 4,
    atk: 4,
    keywords: ["Flight", "Shock 3"],
    img: "https://cdn.midjourney.com/2696d32a-1297-4268-9fc8-a334ae019cfa/0_3.png",
  },
  {
    name: "Crystal Unicorn",
    faction: "Nature",
    type: "Unit",
    cost: 8,
    hp: 5,
    atk: 6,
    keywords: ["Charge", "Ward"],
    img: "https://cdn.midjourney.com/1ab2501c-ec4c-4a08-8542-2b009e655055/0_2.png",
  },
  {
    name: "Moonlit Huntress",
    faction: "Nature",
    type: "Unit",
    cost: 3,
    hp: 1,
    atk: 3,
    keywords: ["Stealth"],
    img: "https://cdn.midjourney.com/121efe17-3ab6-4534-b5c4-7cd2a99d1f01/0_0.png",
  },
  {
    name: "Treant Friend",
    faction: "Nature",
    type: "Unit",
    cost: 1,
    hp: 2,
    atk: 1,
    keywords: ["Boost 2"],
    img: "https://cdn.midjourney.com/05923c64-29ae-4f6b-b603-0647f378ee7a/0_2.png",
  },
  {
    name: "Grove Protector",
    faction: "Nature",
    type: "Unit",
    cost: 7,
    hp: 1,
    atk: 2,
    keywords: ["Swarm 4", "Charge"],
    img: "https://cdn.midjourney.com/69fe3533-3d14-4f3c-b5ff-66973b002a7a/0_2.png",
  },
  {
    name: "Elephant Beast",
    faction: "Nature",
    type: "Unit",
    cost: 6,
    hp: 7,
    atk: 6,
    keywords: ["Push"],
    img: "https://cdn.midjourney.com/9bc8906b-99d5-442e-9cab-ddcd5adc8a71/0_3_384_N.webp",
  },
  {
    name: "Astral Owl",
    faction: "Nature",
    type: "Unit",
    cost: 2,
    hp: 3,
    atk: 1,
    keywords: ["Mana 2"],
    img: "https://cdn.midjourney.com/fae47d58-2af1-430c-be38-c35be6ce31a3/0_2.png",
  },
  {
    name: "Primal Elemental",
    faction: "Nature",
    type: "Unit",
    cost: 8,
    hp: 5,
    atk: 5,
    keywords: ["Swap"],
    img: "https://cdn.midjourney.com/1dae9b92-c623-427d-b23b-c52320d09215/0_1.png",
  },

  {
    name: "Siege Tank",
    faction: "Technology",
    type: "Unit",
    cost: 8,
    hp: 9,
    atk: 3,
    keywords: ["Pull", "Siege"],
    img: "https://cdn.midjourney.com/169f4541-c63c-4293-8b56-cfca5c41569b/0_0.png",
  },
  {
    name: "Stealth Infiltrator",
    faction: "Technology",
    type: "Unit",
    cost: 5,
    hp: 3,
    atk: 3,
    keywords: ["Stealth", "Ward"],
    img: "https://cdn.midjourney.com/e4819436-7075-44e1-962d-ec57546e9b7e/0_0.png",
  },
  {
    name: "Artillery Plane",
    faction: "Technology",
    type: "Unit",
    cost: 7,
    hp: 4,
    atk: 4,
    keywords: ["Swap", "Flight"],
    img: "https://cdn.midjourney.com/e8cf90ba-bec5-466b-857c-4951aa540819/0_0.png",
  },
  {
    name: "Mech Miner",
    faction: "Technology",
    type: "Unit",
    cost: 6,
    hp: 2,
    atk: 4,
    keywords: ["Mana 4"],
    img: "https://cdn.midjourney.com/6c12adec-7e38-44ad-8560-89f3d5c89cd4/0_0.png",
  },
  {
    name: "Heavy Tank",
    faction: "Technology",
    type: "Unit",
    cost: 9,
    hp: 6,
    atk: 4,
    keywords: ["Siege", "Shock 4"],
    img: "https://cdn.midjourney.com/40eaf77e-b9ce-40b5-bc5e-551fcb3e91dd/0_1.png",
  },
  {
    name: "Battle Drone",
    faction: "Technology",
    type: "Unit",
    cost: 6,
    hp: 3,
    atk: 3,
    keywords: ["Flight", "Shock 2"],
    img: "https://cdn.midjourney.com/5120a768-b761-42ae-bbdf-e4914cc844c3/0_0_384_N.webp",
  },
  {
    name: "Recycle Bot",
    faction: "Technology",
    type: "Unit",
    cost: 1,
    hp: 2,
    atk: 2,
    keywords: ["Draw 2, Discard 2"],
    img: "https://cdn.midjourney.com/a376455f-f7c2-4de9-bf34-2b5cb458cc0d/0_1.png",
  },
  {
    name: "Nano Assassin",
    faction: "Technology",
    type: "Unit",
    cost: 8,
    hp: 4,
    atk: 5,
    keywords: ["Flight", "Charge"],
    img: "https://cdn.midjourney.com/b16da4a2-d41b-40b5-97ef-4b1d7924ba13/0_1.png",
  },
  {
    name: "Neon Blaster",
    faction: "Technology",
    type: "Unit",
    cost: 6,
    hp: 4,
    atk: 2,
    keywords: ["Ranged", "Shock 2"],
    img: "https://cdn.midjourney.com/90702387-5e30-455a-b533-4cbff45d1966/0_0.png",
  },
  {
    name: "Blast O Bot",
    faction: "Technology",
    type: "Unit",
    cost: 2,
    hp: 1,
    atk: 1,
    keywords: ["Spy 2", "Shock 1"],
    img: "https://cdn.midjourney.com/a376455f-f7c2-4de9-bf34-2b5cb458cc0d/0_0.png",
  },

  {
    name: "Spirit Bear",
    faction: "Nature",
    type: "Unit",
    cost: 6,
    hp: 4,
    atk: 5,
    keywords: ["Charge"],
    img: "https://cdn.midjourney.com/f72a57b3-8b9c-4818-9b25-febc04f8a8ea/0_2_384_N.webp",
  },
  {
    name: "Jungle Stalker",
    faction: "Nature",
    type: "Unit",
    cost: 6,
    hp: 4,
    atk: 4,
    keywords: ["Stealth"],
    img: "https://cdn.midjourney.com/6ff11cd0-8125-43f3-aee6-c5819fc80123/0_3.png",
  },
  {
    name: "Ancient Guardian",
    faction: "Nature",
    type: "Unit",
    cost: 8,
    hp: 8,
    atk: 5,
    keywords: ["Taunt", "Ward"],
    img: "https://cdn.midjourney.com/87cc5ef3-0d41-4ba8-a1b1-b4f78a3edad8/0_0.png",
  },
  {
    name: "Wild Snake",
    faction: "Nature",
    type: "Unit",
    cost: 5,
    hp: 5,
    atk: 3,
    keywords: ["Shift"],
    img: "https://cdn.midjourney.com/86b51b10-4b91-4e06-b2b6-5ed0a2a781e8/0_1.png",
  },
  {
    name: "Spirit Wielder",
    faction: "Nature",
    type: "Unit",
    cost: 3,
    hp: 2,
    atk: 3,
    keywords: ["Boost 2"],
    img: "https://cdn.midjourney.com/f9e3d15b-9a3a-4341-963c-99f08a814404/0_1.png",
  },
  {
    name: "Druid Cook",
    faction: "Nature",
    type: "Unit",
    cost: 3,
    hp: 3,
    atk: 2,
    keywords: ["Heal 2", "Boost 1"],
    img: "https://cdn.midjourney.com/d9022e39-e9e5-4bfc-9360-8df8b87f18c5/0_2.png",
  },
  {
    name: "Ancient Protector",
    faction: "Nature",
    type: "Unit",
    cost: 4,
    hp: 5,
    atk: 4,
    keywords: ["Taunt"],
    img: "https://cdn.midjourney.com/13e572b9-e50a-4b8a-9171-d035e3d411b3/0_1.png",
  },
  {
    name: "Moonshadow Wolf",
    faction: "Nature",
    type: "Unit",
    cost: 7,
    hp: 3,
    atk: 5,
    keywords: ["Stealth", "Charge"],
    img: "https://cdn.midjourney.com/8b00508e-823e-4440-8fcc-28285c4b7982/0_0.png",
  },
  {
    name: "Bush Lurker",
    faction: "Nature",
    type: "Unit",
    cost: 4,
    hp: 1,
    atk: 4,
    keywords: ["Stealth"],
    img: "https://cdn.midjourney.com/7a35e742-e560-4082-b491-8a7b8838c2bc/0_0.png",
  },
  {
    name: "Crystal Golem",
    faction: "Nature",
    type: "Unit",
    cost: 10,
    hp: 8,
    atk: 8,
    keywords: ["Ward", "Freeze", "Taunt"],
    img: "https://cdn.midjourney.com/93c45dc8-7a65-4976-946d-05171899939a/0_3.png",
  },
];
import styles from "../styles/BattleRoyal.module.scss";
import React, { useState } from "react";

import Card from "../components/BattleRoyal/Card";
import Layout from "../components/Home/Layout";
//count tech unit cards, structrures, spells, count nature units, structures, spells

const techCards = cards.filter((card) => card.faction === "Technology");
const techUnits = techCards.filter((card) => card.type === "Unit");
const techStructures = techCards.filter((card) => card.type === "Structure");
const techSpells = techCards.filter((card) => card.type === "Spell");
const natureCards = cards.filter((card) => card.faction === "Nature");
const natureUnits = natureCards.filter((card) => card.type === "Unit");
const natureStructures = natureCards.filter(
  (card) => card.type === "Structure"
);
const natureSpells = natureCards.filter((card) => card.type === "Spell");

const differentKeywords = cards.map((card) => card.keywords);
const uniqueKeywords = [...new Set(differentKeywords.flat())];

const dashboardCount = {
  techCards: techCards.length,
  techUnits: techUnits.length,
  techStructures: techStructures.length,
  techSpells: techSpells.length,
  natureCards: natureCards.length,
  natureUnits: natureUnits.length,
  natureStructures: natureStructures.length,
  natureSpells: natureSpells.length,
};

const DashboardView = ({ dashboardCount }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {Object.keys(dashboardCount).map((key, i) => (
        <div
          key={i}
          style={{
            padding: ".25rem",
            border: "1px solid black",
            margin: ".25rem",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          {key}: {dashboardCount[key]}
        </div>
      ))}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {uniqueKeywords.map((keyword, i) => (
          <div
            key={i}
            style={{
              padding: ".25rem",
              border: "1px solid black",
              margin: ".25rem",
            }}
          >
            {keyword}
          </div>
        ))}
      </div>
    </div>
  );
};

const getCardMargin = (index) => {
  // Calculate the card's position within the current set of 9 cards
  const positionWithinSet = index % 9;

  // Apply 15px margin to the 7th, 8th, and 9th cards within each set
  if (positionWithinSet >= 6 && positionWithinSet <= 8) {
    return "48px"; // Apply the special margin
  } else {
    return "0"; // Apply 0 margin to all other cases
  }
};

const filterOptions = {
  type: ["Unit", "Structure", "Spell"],
  faction: ["Technology", "Nature"],
  cost: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  hp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  atk: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  keywords: uniqueKeywords,
};

const BattleRoyal = () => {
  const [isPrint, setIsPrint] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({}); // MUST

  if (isPrint) {
    return (
      <div className={styles.cardsMapper}>
        {cards
          .filter((c) => c.img)
          .map((card, i) => (
            <div
              key={i}
              //  style={{ marginBottom: getCardMargin(i) }}
            >
              <Card card={card} />
            </div>
          ))}
      </div>
    );
  }
  return (
    <Layout
      pageTitle="Battle Royal"
      filterOptions={filterOptions}
      selectedFilters={selectedFilters}
      setSelectedFilters={setSelectedFilters}
      setIsPrint={setIsPrint}
    >
      {/* <DashboardView dashboardCount={dashboardCount} /> */}
      {/* .sort((a, b) => a.cost - b.cost) */}
      <div className={styles.cardsMapper}>
        {cards
          .filter((card) => {
            {
              /* if (
              selectedFilters.contains &&
              !card.name
                .toLowerCase()
                .includes(selectedFilters.contains.toLowerCase())
            ) {
              return false;
            } */
            }

            if (selectedFilters.contains) {
              const searchTerm = selectedFilters.contains.toLowerCase();
              let matchFound = false;

              // Iterate through each value of the card object
              for (let value of Object.values(card)) {
                if (typeof value == "string" && value.includes("https")) {
                  return;
                }

                if (
                  (typeof value === "string" &&
                    value.toLowerCase().includes(searchTerm)) ||
                  (typeof value === "object" && value.includes(searchTerm)) ||
                  (typeof value === "number" && value == searchTerm) ||
                  (typeof value == "object" &&
                    value.filter((v) => v.toLowerCase().includes(searchTerm))
                      .length > 0)
                ) {
                  matchFound = true;
                  break;
                }
              }

              // If no matching string was found in any card attribute, exclude the card
              if (!matchFound) {
                return false;
              }
            }

            for (let filter in selectedFilters) {
              if (filter !== "contains") {
                if (
                  selectedFilters[filter].length &&
                  !selectedFilters[filter].includes(card[filter])
                ) {
                  return false;
                }
              }
            }

            return true;
          })

          .map((card, i) => (
            <Card card={card} key={i} />
          ))}
      </div>
    </Layout>
  );
};
export default BattleRoyal;
