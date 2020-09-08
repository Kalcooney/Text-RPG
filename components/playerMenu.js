import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { connect } from "react-redux";

import CustomButton from "./customButton";

import {
  toggleCharacterMenu,
  toggleInventoryMenu,
} from "../redux/app/app.actions";

const PlayerMenu = (props) => {
  const { toggleCharacterMenu, toggleInventoryMenu } = props;

  return (
    <View style={styles.container}>
      <CustomButton
        onPress={toggleCharacterMenu}
        style={styles.button}
        text={"Character"}
        type={"square"}
      />
      <CustomButton
        onPress={toggleInventoryMenu}
        style={styles.button}
        text={"Inventory"}
        type={"square"}
      />
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

const mapStateToProps = ({ app }) => ({
  activePage: app.activePage,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCharacterMenu: () => dispatch(toggleCharacterMenu()),
  toggleInventoryMenu: () => dispatch(toggleInventoryMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerMenu);
