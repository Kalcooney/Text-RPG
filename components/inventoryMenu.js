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

import { toggleInventoryCategory } from "../redux/app/app.actions";

// Import icons
import WeaponIcon from "../assets/sword.png";
import ArmorIcon from "../assets/knight.png";
import BagIcon from "../assets/money-bag.png";
import KeyIcon from "../assets/key.png";
import ClueIcon from "../assets/writing.png";

const InventoryMenu = (props) => {
  const {
    inventory,
    toggleInventoryCategory,
    currentInventoryCategory,
  } = props;

  const buttonClicked = (source) => {
    let inventoryItems = {};

    switch (source) {
      case "Weapon":
        inventoryItems.title = "Weapon";
        inventoryItems.items = inventory.weapons;
        break;
      case "Armor":
        inventoryItems.title = "Armor";
        inventoryItems.items = inventory.armor;
        break;
      case "Bag":
        inventoryItems.title = "Consumables";
        inventoryItems.items = inventory.consumables;
        break;
      case "Key":
        inventoryItems.title = "Key Items";
        inventoryItems.items = inventory.keyItems;
        break;
      case "Clue":
        inventoryItems.title = "Clues";
        inventoryItems.items = inventory.clues;
        break;
      default:
        break;
    }

    //return alert(inventoryItems.title);
    toggleInventoryCategory(inventoryItems);
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
          title={currentInventoryCategory.title}
          items={currentInventoryCategory.items}
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
  inventory: player.inventory,
  currentInventoryCategory: app.currentInventoryCategory,
});

const mapDispatchToProps = (dispatch) => ({
  toggleInventoryCategory: (inventoryCategory) =>
    dispatch(toggleInventoryCategory(inventoryCategory)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InventoryMenu);
