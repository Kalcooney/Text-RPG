import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  BackHandler,
  TouchableOpacity,
} from "react-native";

import CustomButton from "./customButton";

import startBG from "../assets/start_bg.jpg";

const StartMenu = () => {
  const buttonClicked = () => {
    alert("Hello");
  };

  const exitApp = () => {
    BackHandler.exitApp();
  };

  return (
    <ImageBackground source={startBG} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Text RPG</Text>
        <View style={styles.buttonContainer}>
          <CustomButton onPress={buttonClicked} text={"Start Game"} />
          <CustomButton onPress={exitApp} text={"Quit Game"} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: 200,
  },
  buttonContainer: {
    width: 300,
    alignSelf: "center",
  },
  title: {
    fontSize: 50,
    color: "#fff",
    textAlign: "center",
    marginBottom: 200,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "flex-start",
    flexDirection: "column",
    flex: 1,
  },
});

export default StartMenu;
