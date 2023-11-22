import React from "react";
import { StyleSheet, View } from "react-native";
import { GRADIENT_2 } from "../constants/Color";

export default function PublicHeader({ children,flexAmount }) {
  return <View style={[{flex: flexAmount},styles.header]}>{children}</View>;
}
const styles = StyleSheet.create({
  header: {
    
    backgroundColor: GRADIENT_2,
  },
});
