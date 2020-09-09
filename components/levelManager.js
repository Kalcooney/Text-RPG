import React from "react";
import { StyleSheet, Text, View, ImageBackground, Alert } from "react-native";
import { connect } from "react-redux";

import CustomButton from "../components/customButton";

import { getItemDescription } from "../utilities/inventoryFunctions";

import LEVEL_DATA from "../data/levelData";

import { setCurrentLevel } from "../redux/app/app.actions";
import { setInventoryWeapons } from "../redux/player/player.actions";

const LevelManager = (props) => {
  const {
    currentLevel,
    playerInventory,
    setCurrentLevel,
    setInventoryWeapons,
  } = props;
  const levelData = LEVEL_DATA[currentLevel];

  // Process button action
  const processAction = (option) => {
    let itemsToAdd;
    let inventoryState = playerInventory;

    // Process received items
    if (option.hasOwnProperty("items")) {
      itemsToAdd = getItemDescription(option.items);
      itemsToAdd.map((item) => inventoryState.weapons.push(item));
      setInventoryWeapons(inventoryState);
    }

    setCurrentLevel(option.optionAction);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{levelData.text}</Text>
      {levelData.options.map((option) => (
        <CustomButton
          onPress={() => processAction(option)}
          key={option.optionID}
          text={option.option}
          type={"default"}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: "3%",
    padding: 30,
  },
  text: {
    color: "#ffffff",
    fontSize: 24,
    lineHeight: 35,
    marginBottom: 100,
  },
});

const mapStateToProps = ({ app, player }) => ({
  currentLevel: app.currentLevel,
  playerInventory: player.inventory,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentLevel: (currentLevel) => dispatch(setCurrentLevel(currentLevel)),
  setInventoryWeapons: (items) => dispatch(setInventoryWeapons(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LevelManager);
