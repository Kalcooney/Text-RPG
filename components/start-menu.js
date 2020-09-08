import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  BackHandler,
} from "react-native";

import { connect } from "react-redux";

import { setActivePage } from "../redux/app/app.actions";

import CustomButton from "./customButton";

import startBG from "../assets/start_bg.jpg";

class StartMenu extends React.Component {
  constructor() {
    super();
  }

  buttonClicked = () => {
    const { setActivePage } = this.props;

    setActivePage("GameHolder");
  };

  exitApp = () => {
    BackHandler.exitApp();
  };

  render() {
    return (
      <ImageBackground source={startBG} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.title}>Text RPG</Text>
          <View style={styles.buttonContainer}>
            <CustomButton
              onPress={this.buttonClicked}
              text={"Start Game"}
              type="default"
            />
            <CustomButton
              onPress={this.exitApp}
              text={"Quit Game"}
              type="default"
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: 200,
  },
  buttonContainer: {
    width: 300,
    alignSelf: "center",
  },
  title: {
    fontSize: 50,
    color: "#fff",
    marginBottom: 200,
    textAlign: "center",
  },
  backgroundImage: {
    justifyContent: "flex-start",
    flexDirection: "column",
    flex: 1,
    resizeMode: "cover",
  },
});

const mapStateToProps = ({ app }) => ({
  activePage: app.activePage,
});

const mapDispatchToProps = (dispatch) => ({
  setActivePage: (activePage) => dispatch(setActivePage(activePage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartMenu);
