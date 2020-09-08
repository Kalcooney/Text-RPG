import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const SectionSeparator = (props) => {
  return <View style={styles.borderBottom}></View>;
};

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    marginBottom: 20,
    marginTop: 20,
  },
});

export default SectionSeparator;
