import burnImg from "../../assets/cookingMadness/burnt.png";
import destroyImg from "../../assets/cookingMadness/destroyed.png";
import dirtyImg from "../../assets/cookingMadness/dirty.png";
import explodeImg from "../../assets/cookingMadness/explode.png";
import messImg from "../../assets/cookingMadness/mess.png";

import {
  generateCopies,
  generateCopiesStatic,
} from "../pirates/KeywordRenderer";

const ingridientsCopies = [
  {
    name: "Apple",
    type: "Ingridient",
    ingridientCategory: "Fruit",
    img: "https://cdn.midjourney.com/8c090507-899e-4dc1-afaa-f6007f702e6f/0_3.png",
  },
  {
    name: "Banana",
    type: "Ingridient",
    ingridientCategory: "Fruit",
    img: "https://cdn.midjourney.com/77a61abd-9a0b-4495-a0ef-b2fac4de6eeb/0_2.png",
  },
  {
    name: "Strawberry",
    type: "Ingridient",
    ingridientCategory: "Fruit",
    img: "https://cdn.midjourney.com/afa91c80-9896-4398-958b-3120fde5b8a5/0_0.png",
  },
  {
    name: "Potato",
    type: "Ingridient",
    ingridientCategory: "Vegetable",
    img: "https://cdn.midjourney.com/4b608d18-5c68-446c-86cc-f29ae23d2651/0_2.png",
  },
  {
    name: "Mushrooms",
    type: "Ingridient",
    ingridientCategory: "Vegetable",
    img: "https://cdn.midjourney.com/1a5688ed-6dbc-40f3-94f5-935f85c60921/0_0.png",
  },
  {
    name: "Tomato",
    type: "Ingridient",
    ingridientCategory: "Vegetable",
    img: "https://cdn.midjourney.com/5750061c-24bb-48e1-9266-02ccf3917ce0/0_2.png",
  },
  {
    name: "Chicken",
    type: "Ingridient",
    ingridientCategory: "Meat",
    img: "https://cdn.midjourney.com/cf0251cd-41ad-4266-b0ed-9b4ec5d88161/0_0.png",
  },
  {
    name: "Beef",
    type: "Ingridient",
    ingridientCategory: "Meat",
    img: "https://cdn.midjourney.com/6228b7d7-c591-41f3-abfc-4695bc878a39/0_2.png",
  },
  {
    name: "Fish",
    type: "Ingridient",
    ingridientCategory: "Meat",
    img: "https://cdn.midjourney.com/242e2cef-28e5-418f-955a-52c77d688d24/0_2.png",
  },
  {
    name: "Butter",
    type: "Ingridient",
    ingridientCategory: "Dairy",
    img: "https://cdn.midjourney.com/fbba8313-6d1b-4d4f-9158-0686da0534ae/0_2.png",
  },
  {
    name: "Cheese",
    type: "Ingridient",
    ingridientCategory: "Dairy",
    img: "https://cdn.midjourney.com/748903f5-4149-4405-a7c3-564a57a47544/0_3.png",
  },
  {
    name: "Milk",
    type: "Ingridient",
    ingridientCategory: "Dairy",
    img: "https://cdn.midjourney.com/3e31649e-25f8-4d1b-bbca-940b5d406e4c/0_0.png",
  },
  {
    name: "Hazlenuts",
    type: "Ingridient",
    ingridientCategory: "Nuts",
    img: "https://cdn.midjourney.com/76832ea7-91b7-4284-9fb8-9cac1f56f290/0_0.png",
  },
  {
    name: "Cashew Nuts",
    type: "Ingridient",
    ingridientCategory: "Nuts",
    img: "https://cdn.midjourney.com/fa56258b-3df8-4527-837a-359cc06e8519/0_2.png",
  },
  {
    name: "Peanuts",
    type: "Ingridient",
    ingridientCategory: "Nuts",
    img: "https://cdn.midjourney.com/4a8f77a7-2664-4c8f-9f71-f7e1d00a1769/0_3.png",
  },
  {
    name: "Cinnamon",
    type: "Ingridient",
    ingridientCategory: "Spice",
    img: "https://cdn.midjourney.com/ac7bc09e-e283-4605-b1a9-ce6b1fe5a8b4/0_1.png",
  },
  {
    name: "Salt",
    type: "Ingridient",
    ingridientCategory: "Spice",
    img: "https://cdn.midjourney.com/d483992c-75ae-4a8a-931d-1bd66fca76a6/0_3.png",
  },
  {
    name: "Sugar",
    type: "Ingridient",
    ingridientCategory: "Spice",
    img: "https://cdn.midjourney.com/8ed100c8-af18-48e6-860e-2cc1fc828a15/0_1.png",
  },
];

const Recipes = [
  // DESSERTS
  {
    name: "Apple Pie",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Apple", "Butter", "Fruit"],
    img: "https://cdn.midjourney.com/4aca9bee-f8a9-41ca-a1e4-85a263781adc/0_1.png",
  },
  {
    name: "Banana Bread",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Banana", "Sugar", "Dairy"],
    img: "https://cdn.midjourney.com/0db699a2-9b3b-4365-a95f-2c7f610d318c/0_2.png",
  },
  {
    name: "Strawberry Cake",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Strawberry", "Milk", "Fruit"],
    img: "https://cdn.midjourney.com/6e283316-cc5f-40d3-b8c3-cb0034f7805e/0_0.png",
  },
  {
    name: "Strawberry Jam",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Strawberry", "Sugar", "Dairy"],
    img: "https://cdn.midjourney.com/f99b3dbd-6017-42e0-8dc6-00e92b87f426/0_2.png",
  },
  {
    name: "Cinnamon Rolls",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Cinnamon", "Hazlenuts", "Fruit"],
    img: "https://cdn.midjourney.com/50984c01-4e11-4552-bdd3-004bf4c1bb40/0_0.png",
  },
  {
    name: "Nuts Pudding",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Butter", "Peanuts", "Nuts"],
    img: "https://cdn.midjourney.com/b0853df0-a74a-47b2-895d-9438b5c5c7dd/0_0.png",
  },

  // SOUPS
  {
    name: "Potato Soup",
    type: "Recipe",
    RecipeCategory: "Soup",
    ingridients: ["Potato", "Vegetable", "Dairy"],
    img: "https://cdn.midjourney.com/bb949525-3bb7-44fd-9f7d-25f5f8f53eba/0_1.png",
  },
  {
    name: "Mushroom Soup",
    type: "Recipe",
    RecipeCategory: "Soup",
    ingridients: ["Mushrooms", "Nuts", "Dairy"],
    img: "https://cdn.midjourney.com/a5b419e2-0d1e-49b6-a9d3-f1efc596af24/0_1.png",
  },
  {
    name: "Tomato Soup",
    type: "Recipe",
    RecipeCategory: "Soup",
    ingridients: ["Tomato", "Spice", "Dairy"],
    img: "https://cdn.midjourney.com/d76349f1-325a-42ce-9302-0979aa3ab425/0_0.png",
  },
  {
    name: "Fish Stew",
    type: "Recipe",
    RecipeCategory: "Soup",
    ingridients: ["Fish", "Nuts", "Spice"],
    img: "https://cdn.midjourney.com/04d7bc5a-7794-447d-bdf1-cc96b6483e2a/0_1.png",
  },
  {
    name: "Mushroom Pot",
    type: "Recipe",
    RecipeCategory: "Soup",
    ingridients: ["Mushrooms", "Nuts", "Spice"],
    img: "https://cdn.midjourney.com/915bf179-568c-4599-b547-1a580a8c8759/0_1.png",
  },
  {
    name: "Nuts Cream Soup",
    type: "Recipe",
    RecipeCategory: "Soup",
    ingridients: ["Cashew nuts", "Fruit", "Spice"],
    img: "https://cdn.midjourney.com/e1229a27-da0e-43a3-a454-e11107dc6a52/0_2.png",
  },
  // SALADS
  {
    name: "Fresh Salad",
    type: "Recipe",
    RecipeCategory: "Salad",
    ingridients: ["Nuts", "Vegetable", "Spice"],
    img: "https://cdn.midjourney.com/b9c3207c-4637-4042-ae0f-67c5bf82bc69/0_0.png",
  },
  {
    name: "Mixed Salad",
    type: "Recipe",
    RecipeCategory: "Salad",
    img: "https://cdn.midjourney.com/494345c5-06e0-4b71-b109-05935a0c2207/0_3.png",
    ingridients: ["Spice", "Fruit", "Vegetable"],
  },
  {
    name: "Chicken Salad",
    type: "Recipe",
    RecipeCategory: "Salad",
    img: "https://cdn.midjourney.com/86e9c935-7446-4a82-afd7-6485cc075b4b/0_0.png",
    ingridients: ["Meat", "Spice", "Vegetable"],
  },
  {
    name: "Caesar Salad",
    type: "Recipe",
    RecipeCategory: "Salad",
    img: "https://cdn.midjourney.com/9fd422aa-ecac-4364-9ee7-14f00cacd325/0_0.png",
    ingridients: ["Nuts", "Meat", "Vegetable"],
  },
  {
    name: "Fruit Salad",
    type: "Recipe",
    RecipeCategory: "Salad",
    img: "https://cdn.midjourney.com/494345c5-06e0-4b71-b109-05935a0c2207/0_0.png",
    ingridients: ["Fruit", "Fruit", "Vegetable"],
  },
  {
    name: "Ritona Salad",
    type: "Recipe",
    RecipeCategory: "Salad",
    img: "https://cdn.midjourney.com/cc9fc068-2631-48c7-9d1c-54386346fb06/0_3.png",
    ingridients: ["Nuts", "Dairy", "Vegetable"],
  },

  // MAIN DISHES
  {
    name: "Beef n Chips",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Beef", "Nuts", "Meat", "Vegetable"],
    img: "https://cdn.midjourney.com/121eb730-cd3e-4270-a513-d7d3b7ea13a9/0_2.png",
  },
  {
    name: "Tao Pai",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Peanuts", "Dairy", "Meat", "Vegetable"],
    img: "https://cdn.midjourney.com/ccf6a7c2-0c99-4b26-949f-ff3d1b67073d/0_0.png",
  },
  {
    name: "Curry Chicken",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Chicken", "Spice", "Spice", "Meat"],
    img: "https://cdn.midjourney.com/7440465c-2d46-4949-be38-8366d12e36dd/0_1.png",
  },
  {
    name: "Sour Sweet",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Salt", "Fruit", "Meat", "Meat"],
    img: "https://cdn.midjourney.com/7440465c-2d46-4949-be38-8366d12e36dd/0_0.png",
  },
  {
    name: "Som Tad",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Cheese", "Fruit", "Meat", "Dairy"],
    img: "https://cdn.midjourney.com/ccf6a7c2-0c99-4b26-949f-ff3d1b67073d/0_1.png",
  },
  {
    name: "Salmon Cuve",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Fish", "Dairy", "Meat", "Nuts"],
    img: "https://cdn.midjourney.com/6cbb38d7-40b1-431e-a9e7-2ac7640581f3/0_0.png",
  },
];

const customers = [
  {
    name: "Ronald Buck",
    type: "Customer",
    img: "https://cdn.midjourney.com/d9a026eb-731d-471a-8adc-beadb53e84ac/0_2.png",
    eats: ["Salad", "Dessert"],
    effect:
      "Once per turn, you may trade a Fruit Ingridient from your inventory with a Vegetable Ingridient from the table.",
  },
  {
    name: "Rebeca Smith",
    type: "Customer",
    img: "https://cdn.midjourney.com/130a0545-2ca2-4206-b44b-d601fa00cfb3/0_0.png",
    eats: ["Salad", "Dessert"],
    effect: "Once per turn, you may reserve 1 Recpie for free.",
  },
  {
    name: "Zephyra Nightsong",
    type: "Customer",
    img: "https://cdn.midjourney.com/70689726-af40-4820-94c1-e3585a63b803/0_3.png",
    eats: ["Salad", "Dessert"],
    effect:
      "Once per turn if there is a Customer on the table, you may draw 1 additional Ingridient.",
  },
  {
    name: "Lunara Flameborn",
    type: "Customer",
    img: "https://cdn.midjourney.com/c7b97b4c-6670-488a-b65d-65179d51b4ce/0_1.png",
    eats: ["Salad", "Main Dish"],
    effect:
      "Once per turn, if there are 2 or more Recipes on the table, you may reveal 3 cards from the deck and choose 1 Ingridient to keep.",
  },
  {
    name: "Mirelle Shadowend",
    type: "Customer",
    img: "https://cdn.midjourney.com/c7b97b4c-6670-488a-b65d-65179d51b4ce/0_0.png",
    eats: ["Salad", "Main Dish"],
    effect:
      "Once per turn, you may trade a Spice Ingridient from your inventory with a Dairy Ingridient from the table.",
  },
  {
    name: "Gavran Ironheart",
    type: "Customer",
    img: "https://cdn.midjourney.com/60ad5501-90b2-4d6a-95e4-70d01eb3b634/0_3.png",
    eats: ["Salad", "Soup"],
    effect:
      "Once per turn, you may trade a Nuts Ingridient from your inventory with a Meat Ingridient from the table.",
  },
  {
    name: "Eldric Stormblade",
    type: "Customer",
    img: "https://cdn.midjourney.com/b5b0a799-c67e-431a-b5b6-12c22fcbb8a9/0_0.png",
    eats: ["Dessert", "Main Dish"],
    effect:
      "Once per turn, you may trade a reserved Recipe for any Ingridient on the table. Also, your maximum Recipe limit is 2.",
  },

  {
    name: "Marco Delgado",
    type: "Customer",
    img: "https://cdn.midjourney.com/9b2de921-e108-498f-8e01-0bd3ac2eaa34/0_2.png",
    eats: ["Dessert", "Soup"],
    effect:
      "Once per turn, if this is your 2nd Customer and there are maximum of 6 cards on table, you may choose to return a Mishap card to the bottom of the deck.",
  },
  {
    name: "Julia Fontaine",
    type: "Customer",
    img: "https://cdn.midjourney.com/36fe37b5-d6cd-4be4-9eb2-b09f5dd2e748/0_2.png",
    eats: ["Dessert", "Soup"],
    effect:
      "Once per Game, you may draw 4 cards from the deck and choose any Ingridients to keep.",
  },
  {
    name: "Ethan Moreau",
    type: "Customer",
    img: "https://cdn.midjourney.com/0b296aa9-12a5-482d-b63c-54654abbcca6/0_2.png",
    eats: ["Soup", "Main Dish"],
    effect: "You can triple with just 2 Meat or Dairy Ingridients.",
  },
  {
    name: "Sofia Ricci",
    type: "Customer",
    img: "https://cdn.midjourney.com/713e144d-b5af-423d-bdc9-d627f885dd6b/0_1.png",
    eats: ["Soup", "Main Dish"],
    effect: "You can triple with just 2 Nuts or Fruit Ingridients.",
  },
  {
    name: "Oliver Stein",
    type: "Customer",
    img: "https://cdn.midjourney.com/0b296aa9-12a5-482d-b63c-54654abbcca6/0_3.png",
    eats: ["Soup", "Main Dish"],
    effect: "You can triple with just 2 Spice or Vegetable Ingridients.",
  },
  {
    name: "Nadia Petrova",
    type: "Customer",
    img: "https://cdn.midjourney.com/ca587216-3466-4fa9-9346-b03b205b2a37/0_2.png",
    eats: ["Salad", "Main Dish"],
    effect:
      "Once per Game, you may take all Nuts and Vegetable Ingridients from the table.",
  },
  {
    name: "Liam Gallagher",
    type: "Customer",
    img: "https://cdn.midjourney.com/011aa815-a766-42ad-8e1d-037a738fce86/0_1.png",
    eats: ["Dessert", "Soup"],
    effect:
      "Once per Game, you may draw 4 cards from the deck and choose 1 Recipe card to cook with no cost.",
  },
];
const mishapsCopies = [
  {
    name: "Burnt",
    img: burnImg,
    effect: "Skip Turn.",
    type: "Mishap",
  },
  {
    name: "Destroyed",
    img: destroyImg,
    effect: "Skip Turn.",
    type: "Mishap",
  },
  {
    name: "Dirty Dishes",
    img: dirtyImg,
    effect: "Skip Turn.",
    type: "Mishap",
  },
  {
    name: "Exploded",
    img: explodeImg,
    effect: "Skip Turn.",
    type: "Mishap",
  },
  {
    name: "Messed Up",
    img: messImg,
    effect: "Skip Turn.",
    type: "Mishap",
  },
];

const ingridients = generateCopiesStatic(ingridientsCopies, 3);
const mishaps = generateCopiesStatic(mishapsCopies, 3);

const tools = [
  {
    name: "Protective Gloves",
    img: messImg,
    effect: "Discard this to avoid a Mishap.",
    type: "Tool",
    ingridients: ["Fruit"],
  },
];
const cooks = [{}];

export const cookingCards = [
  // ...ingridients,
  // ...Recipes,
  // ...customers,
  // ...mishaps,
  // ...tools,
  // ...cooks,
];
