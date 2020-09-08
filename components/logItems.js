import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

import CustomButton from "./customButton";
import MenuItem from "./menuItem";
import SectionSeparator from "./sectionSeparator";

const LogItems = (props) => {
  return (
    <View style={styles.container}>
      <MenuItem type={"heading"}>{props.title}</MenuItem>
      {props.items.length > 0 ? (
        props.items.map((item) => <MenuItem>{item}</MenuItem>)
      ) : (
        <MenuItem>No Information. Check back later.</MenuItem>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#34495e",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 30,
  },
  oneColumn: {
    textAlign: "center",
    flex: 0,
  },
  twoColumn: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default LogItems;
