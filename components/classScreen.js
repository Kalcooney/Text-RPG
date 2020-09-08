import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import CustomButton from "../components/customButton";

import classScreenBG from "../assets/class_screen_bg.jpg";

const ClassScreen = () => {
  return (
    <ImageBackground source={classScreenBG} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Choose Your Class</Text>
        <View style={styles.buttonContainer}>
          <CustomButton text={"Warrior"} type="square" />
          <CustomButton text={"Archer"} type="square" />
          <CustomButton text={"Rogue"} type="square" />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: 100,
  },
  buttonContainer: {
    width: 300,
    alignSelf: "center",
  },
  title: {
    fontSize: 50,
    color: "#fff",
    marginBottom: 200,
    textAlign: "center",
  },
  backgroundImage: {
    justifyContent: "flex-start",
    flexDirection: "column",
    flex: 1,
    resizeMode: "cover",
  },
});

export default ClassScreen;
