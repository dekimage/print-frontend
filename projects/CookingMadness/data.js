import burnImg from "../../assets/cookingMadness/burnt.png";
import destroyImg from "../../assets/cookingMadness/destroyed.png";
import dirtyImg from "../../assets/cookingMadness/dirty.png";
import explodeImg from "../../assets/cookingMadness/explode.png";

const ingridients = [
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
    name: "Strawberry Ice Cake",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Strawberry", "Milk", "Fruit"],
    img: "https://cdn.midjourney.com/6e283316-cc5f-40d3-b8c3-cb0034f7805e/0_0.png",
  },
  {
    name: "Potato Soup",
    type: "Recipe",
    RecipeCategory: "Soup",
    ingridients: ["Potato", "Vegetable", "Spice", "Dairy"],
    img: "https://cdn.midjourney.com/bb949525-3bb7-44fd-9f7d-25f5f8f53eba/0_1.png",
  },
  {
    name: "Mushroom Soup",
    type: "Recipe",
    RecipeCategory: "Soup",
    ingridients: ["Mushrooms", "Vegetable", "Spice", "Dairy"],
    img: "https://cdn.midjourney.com/a5b419e2-0d1e-49b6-a9d3-f1efc596af24/0_1.png",
  },
  {
    name: "Tomato Soup",
    type: "Recipe",
    RecipeCategory: "Soup",
    ingridients: ["Tomato", "Salt", "Dairy"],
    img: "https://cdn.midjourney.com/d76349f1-325a-42ce-9302-0979aa3ab425/0_0.png",
  },
  {
    name: "Fresh Salad",
    type: "Recipe",
    RecipeCategory: "Salad",
    ingridients: ["Tomato", "Vegetable", "Spice"],
    img: "https://cdn.midjourney.com/b9c3207c-4637-4042-ae0f-67c5bf82bc69/0_0.png",
  },
  {
    name: "Chicken Salad",
    type: "Recipe",
    RecipeCategory: "Salad",
    img: "https://cdn.midjourney.com/86e9c935-7446-4a82-afd7-6485cc075b4b/0_0.png",
    ingridients: ["Chicken", "Vegetable", "Vegetable"],
  },
  {
    name: "Beef n Chips",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Beef", "Potato", "Meat"],
    img: "https://cdn.midjourney.com/121eb730-cd3e-4270-a513-d7d3b7ea13a9/0_2.png",
  },
  // AUTO GENERATED
  {
    name: "Apple Pie",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Apple", "Dairy", "Spice"],
    img: "IMG_URL",
  },
  {
    name: "Banana Smoothie",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Banana", "Dairy", "Nuts"],
    img: "IMG_URL",
  },
  {
    name: "Strawberry Salad",
    type: "Recipe",
    RecipeCategory: "Salad",
    ingridients: ["Strawberry", "Vegetable", "Nuts"],
    img: "IMG_URL",
  },
  {
    name: "Cinnamon Tea",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Cinnamon", "Fruit", "Dairy"],
    img: "IMG_URL",
  },
  {
    name: "Salted Caramel",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Salt", "Dairy", "Sugar"],
    img: "IMG_URL",
  },
  {
    name: "Sugary Doughnut",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Sugar", "Fruit", "Dairy"],
    img: "IMG_URL",
  },
  {
    name: "Milky Cereal",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Milk", "Fruit", "Nuts"],
    img: "IMG_URL",
  },
  {
    name: "Cheese Omelette",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Cheese", "Meat", "Vegetable"],
    img: "IMG_URL",
  },
  {
    name: "Buttered Toast",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Butter", "Vegetable", "Spice"],
    img: "IMG_URL",
  },
  {
    name: "Chicken Soup",
    type: "Recipe",
    RecipeCategory: "Soup",
    ingridients: ["Chicken", "Vegetable", "Spice"],
    img: "IMG_URL",
  },
  {
    name: "Beef Stew",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Beef", "Vegetable", "Spice"],
    img: "IMG_URL",
  },
  {
    name: "Fish Tacos",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Fish", "Vegetable", "Fruit"],
    img: "IMG_URL",
  },
  {
    name: "Potato Gratin",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Potato", "Dairy", "Spice"],
    img: "IMG_URL",
  },
  {
    name: "Tomato Soup",
    type: "Recipe",
    RecipeCategory: "Soup",
    ingridients: ["Tomato", "Meat", "Nuts"],
    img: "IMG_URL",
  },
  {
    name: "Mushroom Risotto",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Mushrooms", "Dairy", "Spice"],
    img: "IMG_URL",
  },
  {
    name: "Peanut Butter Jelly",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Peanuts", "Fruit", "Dairy"],
    img: "IMG_URL",
  },
  {
    name: "Cashew Chicken",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Cashew Nuts", "Meat", "Vegetable"],
    img: "IMG_URL",
  },
  {
    name: "Hazelnut Dessert",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Hazlenuts", "Fruit", "Dairy"],
    img: "IMG_URL",
  },
  {
    name: "Apple Crumble",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Apple", "Nuts", "Sugar"],
    img: "IMG_URL",
  },
  {
    name: "Banana Pancakes",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Banana", "Dairy", "Spice"],
    img: "IMG_URL",
  },
  {
    name: "Strawberry Jam",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Strawberry", "Sugar", "Spice"],
    img: "IMG_URL",
  },
  {
    name: "Cinnamon Rolls",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Cinnamon", "Dairy", "Fruit"],
    img: "IMG_URL",
  },
  {
    name: "Salted Fish",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Salt", "Fish", "Vegetable"],
    img: "IMG_URL",
  },
  {
    name: "Sugary Fruit Salad",
    type: "Recipe",
    RecipeCategory: "Salad",
    ingridients: ["Sugar", "Fruit", "Nuts"],
    img: "IMG_URL",
  },
  {
    name: "Milkshake",
    type: "Recipe",
    RecipeCategory: "Dessert",
    ingridients: ["Milk", "Fruit", "Sugar"],
    img: "IMG_URL",
  },
  {
    name: "Cheesy Potatoes",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Cheese", "Vegetable", "Spice"],
    img: "IMG_URL",
  },
  {
    name: "Buttered Corn",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Butter", "Vegetable", "Spice"],
    img: "IMG_URL",
  },
  {
    name: "Chicken Alfredo",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Chicken", "Dairy", "Spice"],
    img: "IMG_URL",
  },
  {
    name: "Beef Burger",
    type: "Recipe",
    RecipeCategory: "Main Dish",
    ingridients: ["Beef", "Dairy", "Vegetable"],
    img: "IMG_URL",
  },
  {
    name: "Fish Stew",
    type: "Recipe",
    RecipeCategory: "Soup",
    ingridients: ["Fish", "Vegetable", "Spice"],
    img: "IMG_URL",
  },
];

const customers = [
  {
    name: "Ronald Buck",
    type: "Customer",
    img: "https://cdn.midjourney.com/d9a026eb-731d-471a-8adc-beadb53e84ac/0_2.png",
    eats: ["Dessert", "Soup"],
    effect:
      "Once per turn, you may trade a Fruit from your hand with a Vegetable from the table.",
  },
  {
    name: "Rebeca Smith",
    type: "Customer",
    img: "https://cdn.midjourney.com/130a0545-2ca2-4206-b44b-d601fa00cfb3/0_0.png",
    eats: ["Main Dish", "Salad"],
    effect:
      "Once per turn, you may trade a Fruit from your hand with a Vegetable from the table.",
  },
  {
    name: "Zephyra Nightsong",
    type: "Customer",
    img: "https://cdn.midjourney.com/70689726-af40-4820-94c1-e3585a63b803/0_3.png",
    eats: ["Dessert", "Salad"],
    effect:
      "Once per turn, you may trade a Fruit from your hand with a Vegetable from the table.",
  },
  {
    name: "Lunara Flameborn",
    type: "Customer",
    img: "https://cdn.midjourney.com/c7b97b4c-6670-488a-b65d-65179d51b4ce/0_1.png",
    eats: ["Dessert", "Soup"],
    effect:
      "Once per turn, you may trade a Fruit from your hand with a Vegetable from the table.",
  },
  {
    name: "Mirelle Shadowend",
    type: "Customer",
    img: "https://cdn.midjourney.com/c7b97b4c-6670-488a-b65d-65179d51b4ce/0_0.png",
    eats: ["Dessert", "Main Dish"],
    effect:
      "Once per turn, you may trade a Fruit from your hand with a Vegetable from the table.",
  },
  {
    name: "Gavran Ironheart",
    type: "Customer",
    img: "https://cdn.midjourney.com/60ad5501-90b2-4d6a-95e4-70d01eb3b634/0_3.png",
    eats: ["Salad", "Soup"],
    effect:
      "Once per turn, you may trade a Fruit from your hand with a Vegetable from the table.",
  },
  {
    name: "Eldric Stormblade",
    type: "Customer",
    img: "https://cdn.midjourney.com/b5b0a799-c67e-431a-b5b6-12c22fcbb8a9/0_0.png",
    eats: ["Soup", "Main Dish"],
    effect:
      "Once per turn, you may trade a Fruit from your hand with a Vegetable from the table.",
  },
];
const mishaps = [
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
];

const tools = [{}];
const cooks = [{}];

export const cookingCards = [
  ...ingridients,
  ...Recipes,
  ...customers,
  ...mishaps,
  // ...tools,
  // ...cooks,
];
