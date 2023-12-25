import React from "react";
import BottomBar from "./BottomBar";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import Images from "../constants/Image";
import { View } from "react-native";
import TitleBar from "./TitleBar";
import { BACKGROUND, ITEMCOLOR } from "../constants/Color";
import SimpleHeader from "./SimpleHeader";

export default function SimpleLayout({ children, title }) {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={Images.background} style={{ flex: 1 }}> */}
      {title && <SimpleHeader title={title} />}
      <View style={{ flex: 1,backgroundColor: ITEMCOLOR,}}>
        {children}
      </View>
      <BottomBar activeRoute="Dashboard" />
      {/* </ImageBackground> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
