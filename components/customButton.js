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

const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#282828",
    padding: 20,
    marginBottom: 20,
    borderRadius: 50,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
});

export default CustomButton;
