import { faArrowLeft, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { BACKGROUND, GRADIENT_1, GRADIENT_2 } from '../constants/Color'

export default function SimpleHeader({title}) {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.back} onPress={()=>navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeftLong} size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>
            {title}
        </Text>
        <TouchableOpacity style={styles.forward}>
            <Text style={{fontSize:18,fontFamily:"NunitoSans-Bold", color:GRADIENT_2}}>
                Next
            </Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:15,
        paddingVertical:20,
    },
    back:{
        flex:0.2,
    },
    title:{
        flex:0.6,
        fontSize:20,
        textAlign:"center",
        fontFamily:"NunitoSans-Bold",
    },
    forward:{
        flex:0.2,
        alignItems:"flex-end",
    }   
})