import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const MenuItem = (props) => {
  return (
    <Text style={props.type == "heading" ? styles.heading : styles.text}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 14,
    paddingTop: 3,
    paddingBottom: 3,
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    paddingBottom: 15,
  },
});

export default MenuItem;
