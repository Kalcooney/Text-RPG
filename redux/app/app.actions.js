import { AppActionTypes } from "./app.types";

// Sets the currently active page
export const setActivePage = (activePage) => ({
  type: AppActionTypes.SET_ACTIVE_PAGE,
  payload: activePage,
});

// Sets the currently active page
export const setCurrentLevel = (currentLevel) => ({
  type: AppActionTypes.SET_CURRENT_LEVEL,
  payload: currentLevel,
});

// Toggles the Character Menu
export const toggleCharacterMenu = () => ({
  type: AppActionTypes.TOGGLE_CHARACTER_MENU,
});

// Toggles the Inventory Menu
export const toggleInventoryMenu = () => ({
  type: AppActionTypes.TOGGLE_INVENTORY_MENU,
});

// Toggles inventory category based on which one is clicked
export const toggleInventoryCategory = (inventoryCategory) => ({
  type: AppActionTypes.TOGGLE_INVENTORY_CATEGORY,
  payload: inventoryCategory,
});

// Toggles the Logs Menu
export const toggleLogsMenu = () => ({
  type: AppActionTypes.TOGGLE_LOGS_MENU,
});
