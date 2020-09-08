import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { connect } from "react-redux";

import LevelManager from "./levelManager";

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

  return (
    <ImageBackground source={setBackgroundRef()} style={styles.backgroundImage}>
      <LevelManager />
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
});

export default connect(mapStateToProps)(GameHolder);
