import { AppActionTypes } from "./app.types";

const INITIAL_STATE = {
  activePage: "StartMenu",
  currentLevel: "Prologue-1",
  characterMenu: false,
  inventoryMenu: false,
  inventoryDefault: true,
  logsMenu: false,
  currentInventoryCategory: {
    title: "Weapons",
    items: [],
  },
  currentLogCategory: {
    title: "Knowledge",
    items: [],
  },
  itemDescription: {},
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
        currentLevel: action.payload,
      };

    case AppActionTypes.TOGGLE_CHARACTER_MENU:
      return {
        ...state,
        characterMenu: !state.characterMenu,
        inventoryMenu: false,
        logsMenu: false,
      };

    case AppActionTypes.TOGGLE_INVENTORY_MENU:
      return {
        ...state,
        inventoryMenu: !state.inventoryMenu,
        characterMenu: false,
        logsMenu: false,
      };

    case AppActionTypes.TOGGLE_INVENTORY_CATEGORY:
      return {
        ...state,
        currentInventoryCategory: action.payload,
      };

    case AppActionTypes.TOGGLE_INVENTORY_DEFAULT:
      return {
        ...state,
        inventoryDefault: !state.inventoryDefault,
      };

    case AppActionTypes.TOGGLE_LOGS_MENU:
      return {
        ...state,
        logsMenu: !state.logsMenu,
        characterMenu: false,
        inventoryMenu: false,
      };

    case AppActionTypes.TOGGLE_LOG_CATEGORY:
      return {
        ...state,
        currentLogCategory: action.payload,
      };

    case AppActionTypes.SET_CURRENT_ITEM_DESCRIPTION:
      return {
        ...state,
        itemDescription: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default appReducer;
