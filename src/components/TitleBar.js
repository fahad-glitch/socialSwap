import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Images from "../constants/Image";
import { BACKGROUND, ITEMCOLOR } from "../constants/Color";
export default function TitleBar() {
  return (
    <View style ={styles.headerContainer}>
      <Text style={styles.heading}>Social Swap</Text>
      <View style={styles.child}>
        <View style={styles.icon}>
          <Image source={Images.Search} style={styles.image}/>
        </View>
        {/* <View style={styles.icon}>
          <Image source={Images.buy} style={styles.image}/>
        </View> */}
        <View style={styles.icon}>
          <Image source={Images.Send} style={styles.image}/>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:"row",
        backgroundColor:BACKGROUND,
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:15,
        paddingVertical:10,
    },
    heading:{
        fontSize:25,
        fontFamily:"NunitoSans-Bold"
    },
    child:{
        flexDirection:"row",
        alignItems:"center",
        gap:10,
    },
    icon:{
        backgroundColor: "#E5E5E5",
        padding:8,
        borderRadius:50,
    },
    image:{
        width:25,
        height:25,
    }
});
