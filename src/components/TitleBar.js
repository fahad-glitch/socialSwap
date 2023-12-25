import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Images from "../constants/Image";
import { BACKGROUND, FILL_2, ITEMCOLOR } from "../constants/Color";
import { useNavigation } from "@react-navigation/native";
export default function TitleBar() {
  const navigate = useNavigation();
  return (
    <View style ={styles.headerContainer}>
      <Text style={styles.heading}>Social Swap</Text>
      <View style={styles.child}>
        <TouchableOpacity style={styles.icon}>
          <Image source={Images.Search} style={styles.image}/>
        </TouchableOpacity>
        {/* <View style={styles.icon}>
          <Image source={Images.buy} style={styles.image}/>
        </View> */}
        <TouchableOpacity style={styles.icon} onPress={()=>navigate.navigate("Message")}>
          <Image source={Images.Send} style={styles.image}/>
        </TouchableOpacity>
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
        backgroundColor: FILL_2,
        padding:8,
        borderRadius:50,
    },
    image:{
        width:25,
        height:25,
    }
});
