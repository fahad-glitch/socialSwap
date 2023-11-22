import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { BODY } from "../../constants/Color";
import PublicHeader from "../../components/PublicHeader";
import PublicMain from "../../components/PublicMain";
import Notice from "../../components/Notice";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import PublicImage from "../../constants/Image";
import { useNavigation } from "@react-navigation/native";
export default function ChangePassword() {
    const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <PublicHeader flexAmount={0.25}>
      <TouchableOpacity onPress={()=>navigate.goBack()} style={{ flexDirection: "row", alignItems: "center" ,padding:20}}>
            <Image source={PublicImage.back_2} tintColor="white"/>
        </TouchableOpacity>
      </PublicHeader>
      <PublicMain flexAmount={0.75} paddingAmount={20}>
        <Notice
          title="Set a New password"
          message="Type a new password"
        />
        <View style={{ flex: 0.8 ,justifyContent:"space-between"}}>
          <View style={{ paddingTop: 60,gap:20 }}>
            <InputField title="Password" secureTextEntry={true}/>
            <InputField title="Confirm Password" secureTextEntry={true}/>
          </View>
          <Button title="Send" />
          <View style={{alignItems:"center"}}>

          <Image source={PublicImage.image_1} />
          </View>
        </View>
      </PublicMain>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BODY,
  },
});
