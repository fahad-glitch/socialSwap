import React, { useEffect, useState } from "react";
import { Modal, Platform, Text, TouchableOpacity, View } from "react-native";
import SearchHeader from "./SearchHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BACKGROUND } from "../constants/Color";

export default function SearchModal({ visible, handlePress, handleClose }) {
  const inset = useSafeAreaInsets();
 
  return (
    <Modal visible={visible} animationType="slide">
      <View
        style={[{
          flex: 1,
          backgroundColor: BACKGROUND,
          marginTop: inset.top,
        },Platform.OS === "android" && {marginTop:0}]}
      >
        <View style={{flexDirection:"row", alignItems:"center",}}>
          <SearchHeader
            handlePress={() => {
              console.log("searching");
            }}
            isInput={true}
            extraStyle={{flex:1}}
          />
          <TouchableOpacity onPress={handleClose} style={{flex:0.25}}>
            <Text style={{fontFamily:"NunitoSans-SemiBold", textAlign:"center",fontSize:18}}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
