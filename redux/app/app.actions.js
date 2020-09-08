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
