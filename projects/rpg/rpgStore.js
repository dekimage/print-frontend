import { makeObservable, observable, action } from "mobx";
import { ActionType, RewardType, TileType, Phase } from "./rpgTypes.js";
import { dummyDeck } from "./rpgData.js";
import { generateCompanionCards, generateBoard } from "./rpgFunctions.js";
import { shuffle } from "lodash";

class Player {
  hand = [];
  discardPile = [];
  playArea = [];
  deck = [];
  resources = {
    gold: 0,
    commonItems: 0,
    vp: 0,
    wood: 0,
    pearl: 0,
    ore: 0,
    wheat: 0,
  };
  inventory = [];

  constructor(deck) {
    makeObservable(this, {
      hand: observable,
      discardPile: observable,
      playArea: observable,
      resources: observable,
      inventory: observable,
      deck: observable,
      drawCards: action,
    });
    this.deck = deck;

    // this.hand = [];
    // this.discardPile = [];
    // this.playArea = [];
    // this.inventory = [];
    // this.resources = {
    //   gold: 0,
    //   commonItems: 0,
    //   vp: 0,
    //   wood: 0,
    //   pearl: 0,
    //   ore: 0,
    //   wheat: 0,
    // };
  }

  drawCards = (num) => {
    if (this.discardPile.length + this.deck.length < num) {
      console.log("cant draw that many cards" + num);
      return;
    }
    if (num <= this.deck.length) {
      const drawnCards = this.deck.splice(-num, num);
      this.hand.push(...drawnCards);
    } else {
      const drawnCards = this.deck.splice(0, this.deck.length);
      this.hand.push(...drawnCards);

      // Reshuffle discard pile into deck

      this.deck = [...shuffle(this.discardPile)];
      this.discardPile = [];

      // Draw remaining cards
      const remainingCards = num - drawnCards.length;
      if (remainingCards > 0) {
        this.drawCards(remainingCards);
      }
    }
  };
}

class GameStore {
  // UI
  hoveredCard = null;

  players = [];
  currentPlayerIndex = 0;
  currentPhase = Phase.START;
  board = [];
  marketDeck = [];
  marketPlace = [];
  questDeck = [];
  permanentsDeck = [];

  constructor() {
    makeObservable(this, {
      // hoveredCard: observable,
      players: observable,
      currentPlayerIndex: observable,
      currentPhase: observable,
      board: observable,
      marketPlace: observable,
      marketDeck: observable,
      questDeck: observable,
      permanentsDeck: observable,
      initialize: action,
      nextPlayer: action,
      nextPhase: action,
      drawCards: action,
      playCard: action,
      discardCard: action,
      // movePawn: action,
      buyCard: action,
      refillMarketPlace: action,
      // setHoverCard: action,
    });

    this.players = Array(2)
      .fill()
      .map(() => new Player(dummyDeck.slice()));
    this.board = generateBoard();
    this.marketDeck = generateCompanionCards(100);
    this.marketPlace = [];
    this.currentPhase = Phase.START;
  }

  initialize = (numberOfPlayers = 2) => {
    this.players = Array(numberOfPlayers)
      .fill()
      .map(() => new Player(dummyDeck.slice()));
    this.currentPlayerIndex = 0;
    this.currentPhase = Phase.START;
    this.marketDeck = generateCompanionCards(100);
    this.marketPlace = [];
    this.questDeck = [];
    this.permanentsDeck = [];
    this.board = generateBoard();
  };

  // setHoverCard = (card, isRemove) => {
  //   if (isRemove) {
  //     this.hoveredCard = null;
  //     return;
  //   }
  //   this.hoveredCard = card;
  // };

  playCard = (cardId) => {
    const player = this.players[this.currentPlayerIndex];

    // Find the card in the hand
    const cardIndex = player.hand.findIndex((card) => card.id === cardId);
    if (cardIndex === -1) {
      console.error("Card not found in hand:", cardId);
      return;
    }

    // Remove the card from the hand
    const [card] = player.hand.splice(cardIndex, 1);

    // Add the card to the play area
    player.playArea.push(card);

    // Implement card effect...
  };

  discardCard = (cardId) => {
    const player = this.players[this.currentPlayerIndex];

    // Find the card in the hand
    const cardIndex = player.hand.findIndex((card) => card.id === cardId);
    if (cardIndex === -1) {
      console.error("Card not found in hand:", cardId);
      return;
    }

    // Remove the card from the hand
    const [card] = player.hand.splice(cardIndex, 1);

    // Add the card to the discard pile
    player.discardPile.push(card);
  };

  buyCard = (cardId) => {
    const player = this.players[this.currentPlayerIndex];
    // Find the card in the marketplace
    const cardIndex = this.marketPlace.findIndex((card) => card.id === cardId);
    if (cardIndex === -1) {
      console.error("Card not found in marketplace:", cardId);
      return;
    }

    // Remove the card from the marketplace
    const [card] = this.marketPlace.splice(cardIndex, 1);

    // Add the card to the current player's discard pile
    player.discardPile.push(card);
  };

  drawCards = (num) => {
    this.players[this.currentPlayerIndex].drawCards(num);
  };

  drawOneMarketPlaceCard = () => {
    const card = this.deck.marketDeck.pop();
    this.marketPlace.push(card);
  };

  refillMarketPlace = () => {
    while (this.marketPlace.length < 5) {
      const card = this.marketDeck.pop();
      this.marketPlace.push(card);
    }
  };

  dealMarketPlace = () => {
    this.marketPlace = this.marketDeck.splice(0, 5);
  };

  endOfTurnTrigger = () => {
    const currentPlayer = this.players[this.currentPlayerIndex];
    // Move cards from playArea to discardPile
    currentPlayer.discardPile.push(...currentPlayer.playArea);
    currentPlayer.playArea = [];

    // Move cards from hand to discardPile
    currentPlayer.discardPile.push(...currentPlayer.hand);
    currentPlayer.hand = [];

    // Refill marketPlace
    this.refillMarketPlace();

    // Draw new 4 cards from deck to hand
    currentPlayer.drawCards(4);
  };

  nextPhase = () => {
    const phases = [
      Phase.START,
      Phase.PLAY,
      Phase.BATTLE,
      Phase.MARKET,
      Phase.END,
    ];
    const currentIndex = phases.indexOf(this.currentPhase);
    this.currentPhase = phases[(currentIndex + 1) % phases.length];
    if (this.currentPhase === Phase.END) {
      this.endOfTurnTrigger();
    }
    if (this.currentPhase === Phase.START) {
      this.nextPlayer();
    }
  };

  nextPlayer = () => {
    this.endOfTurnTrigger();
    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length;
    this.currentPhase = Phase.START;
  };
}

const store = new GameStore();

export default store;
