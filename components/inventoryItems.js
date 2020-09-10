import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Alert,
} from "react-native";
import { connect } from "react-redux";

import CustomButton from "./customButton";
import MenuItem from "./menuItem";
import SectionSeparator from "./sectionSeparator";
import ItemDescription from "./itemDescription";
import { TouchableOpacity } from "react-native-gesture-handler";

import {
  setCurrentItemDescription,
  toggleInventoryDefault,
} from "../redux/app/app.actions";

const InventoryItems = (props) => {
  const { itemDescription, setCurrentItemDescription } = props;
  const { name, description, type, stats } = props.items;

  const loadItemDescription = (item) => {
    setCurrentItemDescription(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <ScrollView>
          <MenuItem type={"heading"}>{props.title}</MenuItem>
          {props.items.length > 0 ? (
            props.items.map((item) => (
              <TouchableOpacity
                onPress={() => loadItemDescription(item)}
                key={item.id}
              >
                <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <MenuItem>No Items</MenuItem>
          )}
        </ScrollView>
      </View>
      <SectionSeparator />
      <View>
        {Object.entries(itemDescription).length > 0 ? (
          <ItemDescription description={itemDescription} />
        ) : (
          <Text>No item information to show</Text>
        )}
      </View>
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
  itemContainer: {
    height: "25%",
  },
  item: {
    color: "#fff",
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

const mapStateToProps = ({ app }) => ({
  itemDescription: app.itemDescription,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentItemDescription: (itemDescription) =>
    dispatch(setCurrentItemDescription(itemDescription)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InventoryItems);
