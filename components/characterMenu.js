import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { connect } from "react-redux";

import CustomButton from "./customButton";
import MenuItem from "./menuItem";
import SectionSeparator from "./sectionSeparator";

const CharacterMenu = (props) => {
  const { playerLevel, currentXP, stats, equippedItems } = props;

  return (
    <View style={styles.container}>
      <View style={styles.oneColumn}>
        <MenuItem type={"heading"}>Level {playerLevel}</MenuItem>
        <View style={styles.twoColumn}>
          <MenuItem>Current XP: {currentXP}</MenuItem>
          <MenuItem>XP to Next Level: 10</MenuItem>
        </View>
      </View>
      <SectionSeparator />
      <View style={styles.twoColumn}>
        <View>
          <MenuItem type={"heading"}>Characteristics</MenuItem>
          <MenuItem>Strength: {stats.strength}</MenuItem>
          <MenuItem>Dexterity: {stats.dexterity}</MenuItem>
          <MenuItem>Intelligence: {stats.intelligence}</MenuItem>
          <MenuItem>Charisma: {stats.charisma}</MenuItem>
          <MenuItem>Luck: {stats.luck}</MenuItem>
        </View>
        <View>
          <MenuItem type={"heading"}>Stats/Other:</MenuItem>
          <MenuItem>Base Damage: {stats.baseDamage}</MenuItem>
          <MenuItem>Armor: {stats.armor}</MenuItem>
          <MenuItem>Accuracy: {stats.accuracy}</MenuItem>
          <MenuItem>HP: {stats.maxHP}</MenuItem>
          <MenuItem>Gold: {stats.gold}</MenuItem>
        </View>
      </View>
      <SectionSeparator />
      <View style={styles.oneColumn}>
        <MenuItem type={"heading"}>Gear</MenuItem>
        <MenuItem>
          Weapon:{" "}
          {equippedItems.weapon ? equippedItems.weapon : "Nothing Equipped"}
        </MenuItem>
        <MenuItem>
          Head: {equippedItems.head ? equippedItems.head : "Nothing Equipped"}
        </MenuItem>
        <MenuItem>
          Chest:{" "}
          {equippedItems.chest ? equippedItems.chest : "Nothing Equipped"}
        </MenuItem>
        <MenuItem>
          Arms: {equippedItems.arms ? equippedItems.arms : "Nothing Equipped"}
        </MenuItem>
        <MenuItem>
          Legs: {equippedItems.legs ? equippedItems.legs : "Nothing Equipped"}
        </MenuItem>
        <MenuItem>
          Feet: {equippedItems.feet ? equippedItems.feet : "Nothing Equipped"}
        </MenuItem>
        <MenuItem>
          Accessory:{" "}
          {equippedItems.accessory
            ? equippedItems.accessory
            : "Nothing Equipped"}
        </MenuItem>
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

const mapStateToProps = ({ player }) => ({
  playerLevel: player.playerLevel,
  currentXP: player.currentXP,
  stats: player.stats,
  equippedItems: player.equipped,
});

export default connect(mapStateToProps)(CharacterMenu);
