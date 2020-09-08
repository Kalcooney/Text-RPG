import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { connect } from "react-redux";

import CustomButton from "../components/customButton";

import LEVEL_DATA from "../data/levelData";

const LevelManager = (props) => {
  const { currentLevel } = props;
  const levelData = LEVEL_DATA[currentLevel];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{levelData.text}</Text>
      {levelData.options.map((option) => (
        <CustomButton
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
    top: 50,
    padding: 30,
  },
  text: {
    color: "#ffffff",
    fontSize: 24,
    lineHeight: 35,
    marginBottom: 100,
  },
});

const mapStateToProps = ({ app }) => ({
  currentLevel: app.currentLevel,
});

export default connect(mapStateToProps)(LevelManager);
