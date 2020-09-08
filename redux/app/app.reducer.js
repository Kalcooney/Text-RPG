import { AppActionTypes } from "./app.types";

const INITIAL_STATE = {
  activePage: "StartMenu",
  currentLevel: "Prologue-1",
  characterMenu: false,
  inventoryMenu: false,
  logsMenu: false,
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

    case AppActionTypes.TOGGLE_CHARACTER_MENU:
      return {
        ...state,
        characterMenu: !state.characterMenu,
      };

    case AppActionTypes.TOGGLE_INVENTORY_MENU:
      return {
        ...state,
        characterMenu: !state.inventoryMenu,
      };

    case AppActionTypes.TOGGLE_LOGS_MENU:
      return {
        ...state,
        characterMenu: !state.logsMenu,
      };

    default: {
      return state;
    }
  }
};

export default appReducer;
