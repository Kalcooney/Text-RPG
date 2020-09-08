import { PlayerActionTypes } from "./player.types";

const INITIAL_STATE = {
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
    default: {
      return state;
    }
  }
};

export default playerReducer;
