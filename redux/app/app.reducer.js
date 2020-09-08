import { AppActionTypes } from "./app.types";

const INITIAL_STATE = {
  activePage: "StartMenu",
  currentLevel: "Prologue-1",
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload,
      };

    case AppActionTypes.SET_CURRENT_LEVEL:
      return {
        ...state,
        currentLevel: action.currentLevel,
      };

    default: {
      return state;
    }
  }
};

export default appReducer;
