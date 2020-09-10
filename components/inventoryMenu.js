import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";

import CustomButton from "./customButton";
import MenuItem from "./menuItem";
import SectionSeparator from "./sectionSeparator";
import InventoryItems from "./inventoryItems";

import {
  toggleInventoryCategory,
  toggleInventoryDefault,
} from "../redux/app/app.actions";

// Import icons
import WeaponIcon from "../assets/sword.png";
import ArmorIcon from "../assets/knight.png";
import BagIcon from "../assets/money-bag.png";
import KeyIcon from "../assets/key.png";
import ClueIcon from "../assets/writing.png";

const InventoryMenu = (props) => {
  const {
    playerInventory,
    inventoryDefault,
    toggleInventoryCategory,
    toggleInventoryDefault,
    currentInventoryCategory,
  } = props;

  const buttonClicked = (source) => {
    let inventoryItems = {};

    switch (source) {
      case "Weapon":
        inventoryItems.title = "Weapons";
        inventoryItems.items = playerInventory.weapons;
        break;
      case "Armor":
        inventoryItems.title = "Armor";
        inventoryItems.items = playerInventory.armor;
        break;
      case "Bag":
        inventoryItems.title = "Consumables";
        inventoryItems.items = playerInventory.consumables;
        break;
      case "Key":
        inventoryItems.title = "Key Items";
        inventoryItems.items = playerInventory.keyItems;
        break;
      case "Clue":
        inventoryItems.title = "Clues";
        inventoryItems.items = playerInventory.clues;
        break;
      default:
        break;
    }

    toggleInventoryCategory(inventoryItems);
    if (inventoryDefault) {
      toggleInventoryDefault();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.oneColumn}>
        <TouchableOpacity onPress={() => buttonClicked("Weapon")}>
          <Image style={styles.icon} source={WeaponIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => buttonClicked("Armor")}>
          <Image style={styles.icon} source={ArmorIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => buttonClicked("Bag")}>
          <Image style={styles.icon} source={BagIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => buttonClicked("Key")}>
          <Image style={styles.icon} source={KeyIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => buttonClicked("Clue")}>
          <Image style={styles.icon} source={ClueIcon} />
        </TouchableOpacity>
      </View>
      <SectionSeparator />
      <View>
        <InventoryItems
          title={!inventoryDefault ? currentInventoryCategory.title : "Weapons"}
          items={
            !inventoryDefault
              ? currentInventoryCategory.items
              : playerInventory.weapons
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 80,
    width: "100%",
    height: "100%",
    backgroundColor: "#34495e",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 30,
  },
  oneColumn: {
    textAlign: "center",
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  twoColumn: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 40,
    height: 40,
  },
});

const mapStateToProps = ({ app, player }) => ({
  playerInventory: player.inventory,
  currentInventoryCategory: app.currentInventoryCategory,
  inventoryDefault: app.inventoryDefault,
});

const mapDispatchToProps = (dispatch) => ({
  toggleInventoryCategory: (inventoryCategory) =>
    dispatch(toggleInventoryCategory(inventoryCategory)),
  toggleInventoryDefault: () => dispatch(toggleInventoryDefault()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InventoryMenu);
