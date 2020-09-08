import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import CustomButton from "./customButton";
import MenuItem from "./menuItem";
import SectionSeparator from "./sectionSeparator";

const CharacterMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.oneColumn}>
        <MenuItem type={"heading"}>Level 01</MenuItem>
        <View style={styles.twoColumn}>
          <MenuItem>Current XP: 0</MenuItem>
          <MenuItem>XP to Next Level: 10</MenuItem>
        </View>
      </View>
      <SectionSeparator />
      <View style={styles.twoColumn}>
        <View>
          <MenuItem type={"heading"}>Characteristics</MenuItem>
          <MenuItem>Strength: 1</MenuItem>
          <MenuItem>Dexterity: 1</MenuItem>
          <MenuItem>Charisma: 1</MenuItem>
          <MenuItem>Intelligence: 1</MenuItem>
          <MenuItem>Cunning: 1</MenuItem>
          <MenuItem>Luck: 1</MenuItem>
        </View>
        <View>
          <MenuItem type={"heading"}>Stats/Other:</MenuItem>
          <MenuItem>Damage: 1</MenuItem>
          <MenuItem>Armor: 1</MenuItem>
          <MenuItem>Accuracy: 1</MenuItem>
          <MenuItem>HP: 1</MenuItem>
          <MenuItem>Gold: 1</MenuItem>
        </View>
      </View>
      <SectionSeparator />
      <View style={styles.oneColumn}>
        <MenuItem type={"heading"}>Gear</MenuItem>
        <MenuItem>Weapon: Nothing Equipped</MenuItem>
        <MenuItem>Head: Nothing Equipped</MenuItem>
        <MenuItem>Chest: Nothing Equipped</MenuItem>
        <MenuItem>Arms: Nothing Equipped</MenuItem>
        <MenuItem>Legs: Nothing Equipped</MenuItem>
        <MenuItem>Feet: Nothing Equipped</MenuItem>
        <MenuItem>Accessory: Nothing Equipped</MenuItem>
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
  },
  twoColumn: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CharacterMenu;
