import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import CustomButton from "./customButton";

const PlayerInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HP 10</Text>
      <Text style={styles.text}>LVL 01</Text>
      <Text style={styles.text}>Gold 0</Text>
      <Text style={styles.text}>Rep 0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#34495e",
  },
  text: {
    color: "#fff",
  },
});

export default PlayerInfo;
