import { PlayerActionTypes } from "./player.types";

// Sets the currently active page
export const setInventoryWeapons = (items) => ({
  type: PlayerActionTypes.SET_INVENTORY_WEAPONS,
  payload: items,
});
