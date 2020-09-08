import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import StartMenu from "./start-menu";
import GameHolder from "./gameHolder";

class PageManager extends React.Component {
  constructor(props) {
    super(props);
  }

  getComponent = () => {
    const { activePage } = this.props;

    let component;

    switch (activePage) {
      case "StartMenu":
        component = <StartMenu />;
        break;

      case "GameHolder":
        component = <GameHolder />;

      default:
        break;
    }

    return component;
  };

  render() {
    const componentToRender = this.getComponent();
    return (
      <View
        style={{
          flex: 1,
          alignSelf: "stretch",
        }}
      >
        {componentToRender}
      </View>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  activePage: app.activePage,
});

export default connect(mapStateToProps)(PageManager);
