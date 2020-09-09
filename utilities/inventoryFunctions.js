import ITEM_DESCRIPTIONS from "../data/itemDescriptions";

export const getItemDescription = (itemArray) => {
  let items = [];

  itemArray.forEach((item) => items.push(ITEM_DESCRIPTIONS[item]));

  return items;
};
