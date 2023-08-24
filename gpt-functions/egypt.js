export const generateOrderCards = (X, Y) => {
  const TOTAL_ZONES = 30;
  const DESTINATION_COUNT = 3;
  // Define constants

  const names = [
    "Misty Hollow",
    "Dragon's Reach",
    "Starfall Glade",
    "Crystal Haven",
    "Shadowvale",
    "Ember Ridge",
    "Thunderpeak",
    "Aurora Glen",
    "Silverbrook",
    "Stormwatch",
    "Whispering Falls",
    "Verdant Isle",
    "Moonshadow Pass",
    "Frostbite Caverns",
    "Celestial Plateau",
    "Crimson Oasis",
    "Enchanted Hollow",
    "Stormwind Heights",
    "Serpent's Lair",
    "Twilight Enclave",
    "Dawnfire Peaks",
    "Moonlit Shores",
    "Sapphire Vale",
    "Radiant Bluffs",
    "Ashen Canyon",
    "Lunar Springs",
    "Starlight Grove",
    "Emberstone Ruins",
    "Ebonwood Forest",
    "Mistborne Marshes",
    "Sunspire Cliffs",
    "Dreamer's Haven",
    "Aurora Bazaar",
    "Runebound Summit",
    "Astral Harbor",
    "Eldertree Woods",
    "Thundersong Ravine",
    "Crystal Spire",
    "Stormsea Archipelago",
    "Celestial Nexus",
    "Emberglow Dale",
    "Moonlit Meadow",
    "Dragonfire Peaks",
    "Verdant Echoes",
    "Shrouded Ruins",
    "Frostfall Highlands",
    "Starborn Sanctuary",
    "Whispersong Glen",
    "Silvermist Valley",
    "Twilight Mirage",
    "Dawnbreaker Keep",
    "Enchanted Echo",
    "Starglow Haven",
    "Ashen Sands",
    "Luminous Peaks",
    "Emberwind Canyon",
    "Ebonblade Citadel",
    "Starshroud Enclave",
    "Mistwood Haven",
    "Celestial Watch",
  ];

  let cards = [];
  let inventoryResources = {
    wood: Y,
    stone: Y,
    gems: Y,
    food: Y,
    herbs: Y,
    spice: Y,
  };
  let inventoryZones = {
    egypt: TOTAL_ZONES,
    peru: TOTAL_ZONES,
    arabia: TOTAL_ZONES,
    rome: TOTAL_ZONES,
    japan: TOTAL_ZONES,
    india: TOTAL_ZONES,
  };
  let zones = ["egypt", "peru", "arabia", "rome", "japan", "india"];
  let resourceOptions = ["wood", "stone", "gems", "food", "herbs", "spice"];

  const prohibitedMap = {
    egypt: "food",
    peru: "herbs",
    arabia: "spice",
    rome: "stone",
    japan: "wood",
    india: "gems",
  };

  const calculateVPTotal = (destinations) => {
    let vpTotal = 0;

    destinations.forEach((destination) => {
      const resourcesCount = destination.resources.length;
      vpTotal += resourcesCount; // Add the number of resources to the total VP
    });

    return (vpTotal + 3) * 2;
  };

  // Function to get a random resource (97% accurate, screws up last few)
  const getThreeRandomZones = () => {
    let takenZones = [];
    let resultZones = [];

    const getRandomZone = () => {
      if (zones.length === 0) {
        return null;
      }

      let availableZones = zones.filter(
        (zone) => inventoryZones[zone] > 0 && !takenZones.includes(zone)
      );

      if (availableZones.length === 0) {
        return null;
      }

      let zone =
        availableZones[Math.floor(Math.random() * availableZones.length)];
      inventoryZones[zone]--;

      if (inventoryZones[zone] === 0) {
        zones = zones.filter((z) => z !== zone);
      }

      return zone;
    };

    for (let i = 0; i < 3; i++) {
      let zone = getRandomZone();

      if (zone === null) {
        break;
      }

      takenZones.push(zone);
      resultZones.push(zone);
    }

    return resultZones;
  };

  const getRandomResource = (prohibitedZone) => {
    const prohibitedResource = prohibitedMap[prohibitedZone];

    if (resourceOptions.length === 0) {
      return null;
    }

    let resource;
    while (true) {
      resource =
        resourceOptions[Math.floor(Math.random() * resourceOptions.length)];
      if (inventoryResources[resource] > 0 && resource !== prohibitedResource) {
        inventoryResources[resource]--;
        if (inventoryResources[resource] === 0) {
          resourceOptions = resourceOptions.filter((r) => r !== resource);
        }
        break;
      }
    }
    return resource;
  };

  // MAIN LOOP GENERATE CARD
  for (let i = 0; i < X; i++) {
    let card = {
      name: names[i % names.length],
      vp: 0,
      destinations: [],
      gold: 0,
    };

    // Determine the total number of resources for the card
    const totalResources = {
      12: [1, 1, 2],
      24: [1, 2, 2],
      36: [1, 2, 3],
      48: [2, 2, 3],
      60: [2, 3, 3],
    };

    // Distribute resources to destinations
    const threeRandomZones = getThreeRandomZones();

    let resourceAllocation;

    for (const key in totalResources) {
      if (i < Number(key)) {
        resourceAllocation = totalResources[key];
        break;
      }
    }

    // GENERATE DESTINATIONS
    for (let j = 0; j < DESTINATION_COUNT; j++) {
      let destination = {
        zone: "",
        resources: [],
      };

      // Assign Zone
      const zone = threeRandomZones[j];
      destination.zone = zone;

      // Assign resources to this destination
      for (let k = 0; k < resourceAllocation[j]; k++) {
        let resource = getRandomResource(zone);
        if (resource === null) {
          break;
        }
        destination.resources.push(resource);
      }
      card.destinations.push(destination);
    }

    // Calculate VP and Gold
    const GOLD_VS_VP_MAP = {
      // total: 4 => 8
      4: [3, 5],
      8: [4, 4],
      12: [5, 3],
      // total: 5 => 10
      16: [4, 6],
      20: [5, 5],
      24: [6, 4],
      // total: 6 => 12
      28: [4, 8],
      32: [6, 6],
      36: [8, 4],
      // total: 7 => 14
      40: [5, 9],
      44: [7, 7],
      48: [9, 5],
      // total: 8 => 16
      52: [6, 10],
      56: [8, 8],
      60: [10, 6],
    };

    let goldVsVpAllocation;

    for (const key in GOLD_VS_VP_MAP) {
      if (i < Number(key)) {
        goldVsVpAllocation = GOLD_VS_VP_MAP[key];
        break;
      }
    }
    // console.log(goldVsVpAllocation);

    // card.vp = calculateVPTotal(card.destinations);
    // card.gold = calculateVPTotal(card.destinations);
    card.vp = goldVsVpAllocation[0];
    card.gold = goldVsVpAllocation[1];
    cards.push(card);
  }

  return cards;
};

export const getStats = (orderCards) => {
  const zones = ["egypt", "peru", "arabia", "rome", "japan", "india"];
  const resources = ["wood", "stone", "gems", "food", "herbs", "spice"];
  let stats = {
    zones: {},
    resources: {},
    totalResources: 0,
    totalZones: 0,
  };

  // Initialize stats
  zones.forEach((zone) => (stats.zones[zone] = 0));
  resources.forEach((resource) => (stats.resources[resource] = 0));

  orderCards.forEach((card) => {
    card.destinations.forEach((destination) => {
      stats.zones[destination.zone]++;
      destination.resources.forEach((resource) => {
        stats.resources[resource]++;
        stats.totalResources++;
      });
    });
    stats.totalZones += card.destinations.length;
  });

  return stats;
};
