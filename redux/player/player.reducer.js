import { PlayerActionTypes } from "./player.types";

const INITIAL_STATE = {
  inventory: {
    weapons: [],
    armor: [],
    consumables: [],
    keyItems: [],
    clues: [],
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
