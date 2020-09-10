import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";

import CustomButton from "./customButton";
import MenuItem from "./menuItem";
import SectionSeparator from "./sectionSeparator";
import { TouchableOpacity } from "react-native-gesture-handler";

const ItemDescription = (props) => {
  const { name, description, type, stats } = props.description;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.subHeading}>Stats</Text>
      <MenuItem>Item Slot: {type}</MenuItem>
      <MenuItem>Damage Type: {stats.damageType}</MenuItem>
      <MenuItem>Damage: {stats.damageValue}</MenuItem>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Equip</Text>
      </TouchableOpacity>
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
    padding: 0,
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
  itemContainer: {
    height: "30%",
  },
  heading: {
    color: "#fff",
    fontSize: 22,
    paddingBottom: 15,
    textAlign: "center",
  },
  description: {
    fontStyle: "italic",
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  subHeading: {
    paddingTop: 20,
    paddingBottom: 5,
    color: "#fff",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#282828",
    padding: 10,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 50,
    width: "50%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default ItemDescription;
