import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { connect } from "react-redux";

import LevelManager from "./levelManager";
import PlayerMenu from "./playerMenu";
import PlayerInfo from "./playerInfo";
import CharacterMenu from "./characterMenu";
import InventoryMenu from "./inventoryMenu";
import LogMenu from "./logMenu";

import LEVEL_DATA from "../data/levelData";

// Import level backgrounds
import Chapter1BG from "../assets/chapter1_bg.jpg";

const GameHolder = (props) => {
  const { currentLevel } = props;

  const setBackgroundRef = () => {
    const levelRef = LEVEL_DATA[currentLevel];
    let backgroundRef;

    switch (levelRef.levelSet) {
      case "1":
        backgroundRef = Chapter1BG;
        break;

      default:
        break;
    }

    return backgroundRef;
  };

  const setMenu = () => {
    const { characterMenu, inventoryMenu, logsMenu } = props;
    let component;

    if (characterMenu !== false) {
      component = <CharacterMenu />;
    } else if (inventoryMenu !== false) {
      component = <InventoryMenu />;
    } else if (logsMenu !== false) {
      component = <LogMenu />;
    } else {
      component = <LevelManager />;
    }

    return component;
  };

  const mainComponent = setMenu();

  return (
    <ImageBackground source={setBackgroundRef()} style={styles.backgroundImage}>
      <PlayerInfo />
      {mainComponent}
      <PlayerMenu />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    justifyContent: "flex-start",
    flexDirection: "column",
    flex: 1,
    resizeMode: "cover",
  },
});

const mapStateToProps = ({ app }) => ({
  currentLevel: app.currentLevel,
  characterMenu: app.characterMenu,
  inventoryMenu: app.inventoryMenu,
  logsMenu: app.logsMenu,
});

export default connect(mapStateToProps)(GameHolder);
