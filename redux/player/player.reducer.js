import { PlayerActionTypes } from "./player.types";

const INITIAL_STATE = {
  playerLevel: "1",
  currentXP: 0,
  stats: {
    strength: 1,
    dexterity: 1,
    charisma: 1,
    intelligence: 1,
    luck: 1,
    baseDamage: 1,
    armor: 1,
    accuracy: 1,
    maxHP: 10,
    gold: 0,
  },
  equipped: {
    weapon: null,
    head: null,
    chest: null,
    arms: null,
    legs: null,
    feet: null,
    accessory: null,
  },
  inventory: {
    weapons: [],
    armor: [],
    consumables: [],
    keyItems: [],
    clues: [],
  },
  logs: {
    knowledge: [],
    places: [],
    monsters: [],
  },
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlayerActionTypes.SET_INVENTORY_WEAPONS:
      return {
        ...state,
        inventory: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default playerReducer;
