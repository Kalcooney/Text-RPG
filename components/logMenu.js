import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { connect } from "react-redux";

import CustomButton from "./customButton";
import MenuItem from "./menuItem";
import SectionSeparator from "./sectionSeparator";
import LogItems from "./logItems";

import { toggleLogCategory } from "../redux/app/app.actions";

// Import icons
import BookIcon from "../assets/book.png";
import MonsterIcon from "../assets/dragon.png";
import TownIcon from "../assets/castle.png";

const LogMenu = (props) => {
  const { logs, toggleLogCategory, currentLogCategory } = props;

  const buttonClicked = (source) => {
    let logItems = {};

    switch (source) {
      case "Knowledge":
        logItems.title = "Knowledge";
        logItems.items = logs.knowledge;
        break;
      case "Monsters":
        logItems.title = "Monsters";
        logItems.items = logs.monsters;
        break;
      case "Places":
        logItems.title = "Places";
        logItems.items = logs.places;
        break;
      default:
        break;
    }

    toggleLogCategory(logItems);
  };
  return (
    <View style={styles.container}>
      <View style={styles.oneColumn}>
        <TouchableOpacity onPress={() => buttonClicked("Knowledge")}>
          <Image style={styles.icon} source={BookIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => buttonClicked("Monsters")}>
          <Image style={styles.icon} source={MonsterIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => buttonClicked("Places")}>
          <Image style={styles.icon} source={TownIcon} />
        </TouchableOpacity>
      </View>
      <SectionSeparator />
      <View>
        <LogItems
          title={currentLogCategory.title}
          items={currentLogCategory.items}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 80,
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  twoColumn: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 40,
    height: 40,
  },
});

const mapStateToProps = ({ app, player }) => ({
  logs: player.logs,
  currentLogCategory: app.currentLogCategory,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLogCategory: (logCategory) => dispatch(toggleLogCategory(logCategory)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogMenu);
