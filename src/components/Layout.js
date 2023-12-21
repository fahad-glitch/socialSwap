import React from "react";
import BottomBar from "./BottomBar";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import Images from "../constants/Image";
import { View } from "react-native";
import TitleBar from "./TitleBar";
import { BACKGROUND, ITEMCOLOR } from "../constants/Color";

export default function Layout({ children }) {
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={Images.background} style={{ flex: 1 }}> */}
      <TitleBar />
      <View style={{ flex: 1 ,backgroundColor: ITEMCOLOR,}}>
        <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
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
