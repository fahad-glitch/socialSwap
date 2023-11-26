import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { GRADIENT_1, GRADIENT_2 } from '../constants/Color';
import { LinearGradient } from 'expo-linear-gradient';

export default function Button({title, onPress}) {
  return (
    <LinearGradient
     colors={[GRADIENT_1, GRADIENT_2]}
      start={[1, 1]}
      end={[0, 0]}
      location={[0.25, 0.7, 1]}
      style={styles.container}>
    <TouchableOpacity onPress={onPress}>

        {/* <Text style={{fontSize:18,color:"#fff",fontWeight:700,letterSpacing:2,textTransform:"uppercase",textAlign:"center"}}>{title}</Text> */}
        <Text style={{fontSize:18,color:"#fff",letterSpacing:2,textTransform:"uppercase",textAlign:"center"}}>{title}</Text>
    </TouchableOpacity>
    </LinearGradient>
  )
}
const   styles = StyleSheet.create({
    container: {
        
        paddingVertical: 18,
        borderRadius: 30,
    }
});
