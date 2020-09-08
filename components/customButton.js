import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={
        props.type == "default" ? styles.buttonDefault : styles.buttonSquare
      }
    >
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonDefault: {
    width: "100%",
    backgroundColor: "#282828",
    padding: 20,
    marginBottom: 20,
    borderRadius: 50,
  },
  buttonSquare: {
    width: "100%",
    backgroundColor: "#282828",
    padding: 20,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
});

export default CustomButton;
