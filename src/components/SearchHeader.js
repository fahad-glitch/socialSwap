import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Images from "../constants/Image";
import { Image } from "react-native";
import { BACKGROUND, GRADIENT_1, GREY, ITEMCOLOR } from "../constants/Color";
export default function SearchHeader({
  isInput = false,
  handlePress,
  handleModal,
  extraStyle,
}) {
  return (
    <View style={[styles.searchContainer, extraStyle]}>
      {isInput ? (
        <View style={styles.searchItem}>
          <Image
            source={Images.Search}
            style={{ width: 20, height: 20, tintColor: GRADIENT_1 }}
          />
          <TextInput
            placeholder="Search"
            style={styles.textInput}
            onEndEditing={handlePress}
            aria-disabled
          />
        </View>
      ) : (
        <TouchableOpacity onPress={handleModal} style={styles.searchItem}>
          <Image
            source={Images.Search}
            style={{ width: 20, height: 20, tintColor: GRADIENT_1 }}
          />

          <Text style={[styles.textInput, { color: GREY }]}>Search</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    backgroundColor: BACKGROUND,
  },
  searchItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: ITEMCOLOR,
    padding: 10,
    gap: 10,
    borderRadius: 20,
  },
  textInput: {
    fontSize: 16,
    fontFamily: "NunitoSans-Regular",
  },
});
