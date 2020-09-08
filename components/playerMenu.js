import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import CustomButton from "./customButton";

const PlayerMenu = () => {
  return (
    <View style={styles.container}>
      <CustomButton style={styles.button} text={"Character"} type={"square"} />
      <CustomButton style={styles.button} text={"Inventory"} type={"square"} />
      <CustomButton style={styles.button} text={"Logs"} type={"square"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#34495e",
    borderTopColor: "#f2f2f2",
    borderTopWidth: 1,
  },
});

export default PlayerMenu;
