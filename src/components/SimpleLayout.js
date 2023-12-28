import React, { useEffect, useState } from "react";
import BottomBar from "./BottomBar";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import Images from "../constants/Image";
import { View } from "react-native";
import TitleBar from "./TitleBar";
import { BACKGROUND, ITEMCOLOR } from "../constants/Color";
import SimpleHeader from "./SimpleHeader";
import { useRoute } from "@react-navigation/native";

export default function SimpleLayout({ children, title, extraStyle }) {
  const route = useRoute();
  const [screenName,setScreenName] = useState("");
  useEffect(()=>{
    setScreenName(route.name)
  },[route]);
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={Images.background} style={{ flex: 1 }}> */}
      {title && <SimpleHeader title={title} />}
      <View style={[{ flex: 1,backgroundColor: ITEMCOLOR,},extraStyle]}>
        {children}
      </View>
      <BottomBar activeRoute={screenName} />
      {/* </ImageBackground> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
