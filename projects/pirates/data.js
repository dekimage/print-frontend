import { generateCopies } from "./KeywordRenderer";
import attackImg from "../../assets/pirates/attack.png";
import recruitImg from "../../assets/pirates/recruit.png";
import exploreImg from "../../assets/pirates/explore.png";

const pirateCharactersCards = [
  {
    name: "Cutlass Crab",
    type: "Pirate",
    cost: 10,
    keywords: ["atk-5"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693691781296128/tonibg__pirate_Cutlass_Crab_art_style_of_hearthstone_38c6ac59-f42d-4578-8440-a4bce3ef82a3.png?ex=656885c0&is=655610c0&hm=734674e558aeb86a6b1fae85c9ff8cad4679efde5b7b5f4fa371291983420f27&",
  },
  {
    name: "Blackbeard Badger",
    type: "Pirate",
    cost: 9,
    keywords: ["atk-4", "and", "gold-1"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693961919647785/tonibg__pirate_Blackbeard_Badger_art_style_of_hearthstone_fff8726f-920a-4e15-868b-04c6ee26c9e9.png?ex=65688601&is=65561101&hm=48c35c82deb333c86a9bf2be03b3ea841b0ff3d5a35019ab6dcd4aec02e29abd&",
  },
  {
    name: "Jolly Raccoon Captain",
    type: "Pirate",
    cost: 9,
    keywords: ["atk-3", "and", "gold-2"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174694054357897266/tonibg__pirate_Jolly_Raccoon_art_style_of_hearthstone_de75c4ae-9d1d-4f5c-861e-a9f290ebb4e1.png?ex=65688617&is=65561117&hm=9a79b0c6f4478677c83d02dc428279374d9d58c1cf7a86a03e9925afb6502876&",
  },
  {
    name: "Crab Master",
    type: "Pirate",
    cost: 8,
    keywords: ["atk-3", "and", "gold-2"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693699976966265/tonibg__pirate_Cutlass_Crab_art_style_of_hearthstone_8bafd82a-0a4b-4f86-8a2a-cd1bcaaa5a72.png?ex=656885c2&is=655610c2&hm=41874a8d803af87001b208a35ab1243cdc7b9298a100db960413099a98bb2e23&",
  },
  {
    name: "First Mate Fox",
    type: "Pirate",
    cost: 8,
    keywords: ["atk-3", "and", "gold-2"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693893049171998/tonibg__pirate_First_Mate_Fox_art_style_of_hearthstone_505c7195-b177-43ce-a8ec-4ac1201a950c.png?ex=656885f0&is=655610f0&hm=91af409d12b9d71a87ec13e2bf8f6a5734d4d3182d5656e93183824b2c4d8a86&",
  },
  {
    name: "Dread Pirate Duck",
    type: "Pirate",
    cost: 8,
    keywords: ["atk-2", "and", "gold-3"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174694129695981598/tonibg__pirate_Dread_Pirate_Duck_art_style_of_hearthstone_1d5bbb65-95e2-4e5a-82ed-b04c413f5dc4.png?ex=65688629&is=65561129&hm=ee913afcc862830d01583454eab847c52bbc82c58e1892772e26fc03b6ef08d8&",
  },
  {
    name: "Deckhand Dolphin",
    type: "Pirate",
    cost: 7,
    keywords: ["gold-4"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693730926723114/tonibg__pirate_Deckhand_Dolphin_art_style_of_hearthstone_db27040c-8351-4a76-9cf4-779d72b60646.png?ex=656885ca&is=655610ca&hm=0813af8cb6f48575a6a82a667997840b3dcd3d5d5d2016f5cd5c997bc8b0fabf&",
  },
  {
    name: "Sea Dog Salamander",
    type: "Pirate",
    cost: 7,
    keywords: ["atk-2", "and", "gold-2"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693860186787963/tonibg__pirate_Sea_Dog_Salamander_art_style_of_hearthstone_d0733d60-1d02-4c5d-a0e4-6d01baec0254.png?ex=656885e9&is=655610e9&hm=3052b4053845b5bd9f3e24a4e57cdc152a4880de8f16f5d20f1495b0c190f050&",
  },
  {
    name: "Dolphin Deckhand",
    type: "Pirate",
    cost: 7,
    keywords: ["atk-2", "or", "gold-3"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693730926723114/tonibg__pirate_Deckhand_Dolphin_art_style_of_hearthstone_db27040c-8351-4a76-9cf4-779d72b60646.png?ex=656885ca&is=655610ca&hm=0813af8cb6f48575a6a82a667997840b3dcd3d5d5d2016f5cd5c997bc8b0fabf&",
  },
  {
    name: "Swashbuckling Sheep",
    type: "Pirate",
    cost: 7,
    keywords: ["atk-3"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174694147244961833/tonibg__pirate_Swashbuckling_Sheep_art_style_of_hearthstone_8b08ade5-43bd-4809-a8fd-d14a12888a40.png?ex=6568862d&is=6556112d&hm=1ec412b434871713b898b9a86025f41729be300cddec788a8cada34ad53b88dc&",
  },
  {
    name: "Privateer Panda",
    type: "Pirate",
    cost: 6,
    keywords: ["atk-2", "or", "gold-2"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693639113420851/tonibg__pirate_Privateer_Panda_art_style_of_hearthstone_8c86ec0d-9891-499d-94cb-e37347445778.png?ex=656885b4&is=655610b4&hm=900f38e940cae8095129a1a7db3068ea19564f53e62b50e0bf3dc2ac21ede8eb&",
  },
  {
    name: "Scallywag Seal",
    type: "Pirate",
    cost: 6,
    keywords: ["atk-2", "and", "gold-1"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693671178883122/tonibg__pirate_Scallywag_Seal_art_style_of_hearthstone_d50cd9ed-702c-46a3-9bd4-9aa6b14956b1.png?ex=656885bb&is=655610bb&hm=7cda1f03abb7af4999b92c6de8aefb9d61e6cea62896807685629dc1ebaec5ef&",
  },
  {
    name: "Marauding Monkey",
    type: "Pirate",
    cost: 6,
    keywords: ["atk-1", "or", "gold-3"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693617990893598/tonibg__pirateMarauding_Monkey_art_style_of_hearthstone_2202e4e0-5aa7-40ac-b325-1ca1755d798c.png?ex=656885af&is=655610af&hm=8aedf2b0c46917ebdc01d6e64780f8a795571069b91b6b03c719ed32f3910b5b&",
  },
  {
    name: "Treasure Tortoise",
    type: "Pirate",
    cost: 5,
    keywords: ["gold-3"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174694008656760862/tonibg__pirate_Treasure_Tortoise_art_style_of_hearthstone_951aeb78-4ec7-4c55-9575-e210804bdde8.png?ex=6568860c&is=6556110c&hm=0a03a524396b6728f235d160628e7fbea8faaf4fa8f9ae293b28211b63cb0b0b&",
  },
  {
    name: "Gold Keeper Turtle",
    type: "Pirate",
    cost: 5,
    keywords: ["gold-3"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174694027250118747/tonibg__pirate_Treasure_Tortoise_art_style_of_hearthstone_c482d25f-e00d-47dc-91d6-9f31d57d47c6.png?ex=65688610&is=65561110&hm=a280cbd0b1feb549b4dbe8d4bd11889f38e932daa302135d08a9d5df05132e6f&",
  },
  {
    name: "Swashbuckling Squirrel",
    type: "Pirate",
    cost: 5,
    keywords: ["atk-1", "and", "gold-2"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693594876104744/tonibg__pirate_Swashbuckling_Squirrel_art_style_of_hearthstone_b4675598-eb57-4a27-964b-ed618e2ddd02.png?ex=656885a9&is=655610a9&hm=98ca86837b8b4c3fd43ca98817cda4945dc5807fbaef8d6db9a7a05ef7ef5dc4&",
  },
  {
    name: "Jolly Roger Rabbit",
    type: "Pirate",
    cost: 5,
    keywords: ["atk-2", "or", "gold-1"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693591747145778/tonibg__pirate_Jolly_Roger_Rabbit_art_style_of_hearthstone_032832f5-21b1-4520-9257-d07eae260447.png?ex=656885a9&is=655610a9&hm=5ac5bd2b045474657967527c14d9248ace30caee90395d9d57ed00326ba1d1b7&",
  },
  {
    name: "Corsair Cat",
    type: "Pirate",
    cost: 4,
    keywords: ["atk-1", "and", "gold-1"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693559299997828/tonibg__pirate_Corsair_Cat_art_style_of_hearthstone_13f83518-7766-454d-81e6-813ceccc2dc4.png?ex=656885a1&is=655610a1&hm=f8ad059d2fe66ad3049fea8b8c601fe5bc96c01e56d151e6745d2b1b2949e3e4&",
  },
  {
    name: "Cap'n Croc",
    type: "Pirate",
    cost: 4,
    keywords: ["atk-1", "or", "gold-2"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693547065233438/tonibg__pirate_Capn_Croc_art_style_of_hearthstone_4c52a421-34f6-4045-b057-db0cc524d491.png?ex=6568859e&is=6556109e&hm=e131c5cc0bbb69b91a4b61d2a020e820a162bb33a99fe7651a0d5f03f48a5955&",
  },
  {
    name: "Turtle-arr Shellback",
    type: "Pirate",
    cost: 4,
    keywords: ["atk-2"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693229678039061/tonibg__pirate_Turtle-arr_Shellback_art_style_of_hearthstone_2276996a-9350-437e-8cbe-b6f132f51b91.png?ex=65688552&is=65561052&hm=79cc1f7e2deb938aa78e8de5495aced7dd9edb33a27674d13480d6394a313707&",
  },
  {
    name: " Sea Dog Salamander",
    type: "Pirate",
    cost: 4,
    keywords: ["atk-1", "and", "gold-1"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693875907051560/tonibg__pirate_Sea_Dog_Salamander_art_style_of_hearthstone_75219b07-f885-4a51-bf02-555539973795.png?ex=656885ec&is=655610ec&hm=164c32ddbb2cfdbf1c1d6815d1edbb6b0877c015b9b71b1d9268680fd39b826b&",
  },
  {
    name: "Lady Foxy",
    type: "Pirate",
    cost: 4,
    keywords: ["atk-2"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693942109945856/tonibg__pirate_First_Mate_Fox_art_style_of_hearthstone_9c0eea5e-8f5b-4703-aeb1-e346d4e95cc5.png?ex=656885fc&is=655610fc&hm=4d5a248f1df5ee5c89dc2f511b10e3572c88b80df8654f2db211a8e6be2e12b8&",
  },
  {
    name: "Tortoi Scouter",
    type: "Pirate",
    cost: 3,
    keywords: ["gold-2"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693241237549107/tonibg__pirate_Turtle-arr_Shellback_art_style_of_hearthstone_c653f521-115f-4f97-a2e8-daa956a68782.png?ex=65688555&is=65561055&hm=3387cbf055d4b6dd1d77decfab79cbaa379a2d980cf06ef4ef799023c87848ce&",
  },
  {
    name: "Parrot Plunderbeak",
    type: "Pirate",
    cost: 3,
    keywords: ["gold-2"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693210044518431/tonibg__pirate_Parrot_Plunderbeak_art_style_of_hearthstone_e3e279c0-b03d-4f60-9977-c855eb6ed0d1.png?ex=6568854e&is=6556104e&hm=a6b145d3450b12052eec5889ef28c2e162d51030ea614f6620c39193d7cdc93a&",
  },
  {
    name: "Captain Beetle",
    type: "Pirate",
    cost: 3,
    keywords: ["atk-1", "or", "gold-1"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693169334603887/tonibg__pirate_Buccaneer_Beetle_art_style_of_hearthstone_bfc8c0dc-9600-4b30-acb3-ef9d3eea5a7c.png?ex=65688544&is=65561044&hm=c2860a2832599a30380e9c939abd5511d33a068d48fa3c86739b126557bbd777&",
  },
  {
    name: "Quartermaster Quokka",
    type: "Pirate",
    cost: 3,
    keywords: ["atk-1", "or", "gold-1"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174694205482876999/tonibg__pirate_Quartermaster_Quokka_art_style_of_hearthstone_16793836-e834-4f85-8164-bccc7e6fbb0e.png?ex=6568863b&is=6556113b&hm=2d69c40dcd5ccd668a0425bbbbfcfc163100e27f73a5dbd98a27aa82514d672f&",
  },
  {
    name: "Rogue Rat",
    type: "Pirate",
    cost: 2,
    keywords: ["gold-1"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693823423721613/tonibg__pirate_Rogue_Rat_art_style_of_hearthstone_598ecbef-179e-46ec-af9b-0d989eaf179c.png?ex=656885e0&is=655610e0&hm=6ba391dedd386664137065aab4e7af31db5f0be650a20fe4242be50b5f7a05c0&",
  },
  {
    name: "Scuttlebutt Skunk",
    type: "Pirate",
    cost: 2,
    keywords: ["atk-1"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174694217717649460/tonibg__pirate_Scuttlebutt_Skunk_art_style_of_hearthstone_d5467575-bb40-4e4b-ba67-5ac0cd60b45f.png?ex=6568863e&is=6556113e&hm=29b0cccfb291363be28edcf1d595931070f162f5f90fdbc029cb4178eaa22949&",
  },
  {
    name: "Goldgrubbing Gecko",
    type: "Pirate",
    cost: 2,
    keywords: ["gold-1"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693186753532015/tonibg__pirate_Goldgrubbing_Gecko_art_style_of_hearthstone_edd5f3e2-2dfd-4d78-865a-09d3c86ad3ec.png?ex=65688548&is=65561048&hm=385d42721ac6c9487f9c9d101e9c6a56f7534dce607b1106802c8788bc8e82ab&",
  },
  {
    name: "Buccaneer Beetle",
    type: "Pirate",
    cost: 2,
    keywords: ["atk-1"],
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174693161377996870/tonibg__pirate_Buccaneer_Beetle_art_style_of_hearthstone_5dca3449-6ba2-4150-a965-a21994c257be.png?ex=65688542&is=65561042&hm=4a4dacf0bffaf945a20cc6de0585640a56a67b18ffaaa9877faf1223ab29ebc3&",
  },
];

const resourceConfig = [
  {
    name: "Cutlass Strike",
    keywords: ["atk-1"],
    quantity: 12,
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174715887559913524/tonibg__gold_treasure_and_swords_style_of_hearthstone_8f035fb7-a2a0-4ac2-aa1e-cdbb6118e007.png?ex=65689a6c&is=6556256c&hm=ccc5145f3d6e2750760972decee618ef5f8c1d0d9530db6c71b6eba4599c7b16&",
  },
  {
    name: "Doubloon Dash",
    keywords: ["gold-1"],
    quantity: 12,
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174713249112014848/tonibg__bag_of_gold_style_of_hearthstone_63b1240e-68d4-4cbd-8c09-af889bc402e3.png?ex=656897f7&is=655622f7&hm=162acb75828ed567c3514e19690fec74e13a70e2cf451aaf4fdc6f32686afaa4&",
  },
  {
    name: "Twin Saber Assault",
    keywords: ["atk-2"],
    quantity: 6,
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174719253962825760/tonibg__gold_treasure_and_swords_style_of_hearthstone_92cd3076-570d-4e56-99be-81d443befe14.png?ex=65689d8f&is=6556288f&hm=e7d682ba52bebc26521cfbbd1a9d0d365bc3d8849a8f5760f35b625c225d1557&",
  },
  {
    name: "Galleon's Greed",
    keywords: ["gold-2"],
    quantity: 6,
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174713266795196466/tonibg__bag_of_gold_style_of_hearthstone_103afe77-339b-48f7-a0be-4ad87d0941b3.png?ex=656897fb&is=655622fb&hm=aaec0d9025ba73a2367bada86fcf186f1a745734462c3acc89a96f6d27f1063b&",
  },
  {
    name: "Raider's Riches",
    keywords: ["atk-2", "or", "gold-1"],
    quantity: 5,
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174714495633985656/tonibg__gold_treasure_and_swords_style_of_hearthstone_89ff1d9b-9f97-4504-99c9-05ad8c196eea.png?ex=65689920&is=65562420&hm=fcd29f73b27c2ddbbd75d472cbf4194885f43739d273b23720bef3141335a608&",
  },
  {
    name: "Goldhook Gambit",
    keywords: ["gold-2", "or", "atk-1"],
    quantity: 5,
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174713066601058357/tonibg__gold_treasure_and_swords_style_of_hearthstone_18203340-052c-4739-9477-0ba70f123109.png?ex=656897cc&is=655622cc&hm=de00fccfbbd0ea9aa37ea2cc82904bd5d7cbbe02c4efc8350179f960df6404a3&",
  },
  {
    name: "Raider's Riches",
    keywords: ["atk-2", "and", "gold-1"],
    quantity: 4,
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174713051639980093/tonibg__gold_treasure_and_swords_style_of_hearthstone_089c53fb-f2f1-4b25-bdaf-f9f3a988c6fa.png?ex=656897c8&is=655622c8&hm=0b2ac02db8cabd8906a0ef293673ba09ebccf2999de95f1909dc3bb8013f2ce2&",
  },
  {
    name: "Goldhook Gambit",
    keywords: ["gold-2", "and", "atk-1"],
    quantity: 4,
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174714226347081821/tonibg__gold_treasure_and_swords_style_of_hearthstone_d5411e82-eb5e-4e4a-862b-476f54f9b5a6.png?ex=656898e0&is=655623e0&hm=38ba3c811c3cee21df3911c1714386c02d2e2ed31079a3c7a3eb1e1c5d389055&",
  },
  {
    name: "Trident Thrust",
    keywords: ["atk-3"],
    quantity: 3,
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174714168461492335/tonibg__gold_treasure_and_swords_style_of_hearthstone_a3f8766e-a047-40ec-bfb6-79f951538146.png?ex=656898d2&is=655623d2&hm=100ba2a1bd51da8057006d1ba02feb7b7c68bfdd1d0a7107fe69075edf67331f&",
  },
  {
    name: "Treasure Trove Triumph",
    keywords: ["gold-3"],
    quantity: 3,
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174713301775699968/tonibg__gold_treasure_style_of_hearthstone_e7e7d919-b6f6-40f0-8724-7997e45daf16.png?ex=65689804&is=65562304&hm=50b39d5b2d14e7772cb111c0edfa636f16d14b3cf2b814e086fa199b5f8dab40&",
  },
];

const pirateResourcesCards = generateCopies(resourceConfig);

const phasesConfig = [
  {
    img: attackImg,
    name: "Attack Command",
    effect: "Attack the Boss",
    type: "Command",
    quantity: 4,
  },
  {
    img: recruitImg,
    name: "Recruit Command",
    effect: "Recruit new Pirates",
    type: "Command",
    quantity: 4,
  },
  {
    img: exploreImg,
    name: "Explore Command",
    effect: "Explore new Resources",
    type: "Command",
    quantity: 4,
  },
];

const trapsConfig = [
  {
    name: "Bomb Trap",
    type: "Trap",
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174744745587781642/tonibg__bomb_explosition_pirates_wrackage_style_of_hearthstone_163793bd-ad6f-497b-a2de-5303e9bcf882.png?ex=6568b54d&is=6556404d&hm=690eeccf195231120eea5f3aa3d7cd3f68ba6a385c084c5946fb293bcb46af73&",
    effect: "No player takes action on this location",
    quantity: 3,
  },
  {
    name: "Taxes Trap",
    type: "Trap",
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174744948227186688/tonibg__taxes_paying_style_of_hearthstone_35b573a2-f812-41a9-9bd2-0d5735b8e317.png?ex=6568b57d&is=6556407d&hm=8a4e489ce2d2027464fea6570a6e0be4dcc27c726457e905f182a20200737348&",
    effect:
      "Each player who is on this location must pay you 2 of any resource cards",
    quantity: 3,
  },
  {
    name: "Trickery Trap",
    type: "Trap",
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174744997707391006/tonibg__trickery_jack_in_box_shaco_style_of_hearthstone_c50c7a8f-d435-43d8-9dd6-cfeb5dd222de.png?ex=6568b589&is=65564089&hm=20fbc29b139b28a501156b32b76780675d72ebb5fe87731e6d6e442fe096ee1f&",
    effect:
      "If you are alone on this location: do NOT take action. Otherwise, move everyone else anywhere",
    quantity: 3,
  },
  {
    name: "Opportunity Trap",
    type: "Trap",
    img: "https://cdn.discordapp.com/attachments/1151710646296137809/1174745055488122961/tonibg__opportunity_to_grab_resources_style_of_hearthstone_9cb74eff-78f7-4ead-93b9-f87ae6ef36d0.png?ex=6568b596&is=65564096&hm=a878c0feb3e319fc1a6123b0f9b87bd13b3486b2f1be5d52eaf5364e045262a5&",
    effect: "If you are alone on this location: draw 4 resource cards",
    quantity: 3,
  },
];

const trapCards = generateCopies(trapsConfig);

const phasesCards = generateCopies(phasesConfig);

export const pirateCards = [
  ...pirateCharactersCards,
  ...pirateResourcesCards,
  ...phasesCards,
  ...trapCards,
];
