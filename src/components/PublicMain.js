import React from 'react'
import { StyleSheet, View } from 'react-native';
import { BODY } from '../constants/Color';

export default function PublicMain({children,flexAmount,paddingAmount}) {

  return (
    <View style={[paddingAmount==20?{padding:20}:{padding: 40},styles.main,{flex:flexAmount}]}>
        {children}
    </View>
  )
}
const styles = StyleSheet.create({
    main: {
      marginTop: -30,
      
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      backgroundColor: BODY,
    },
});