import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { BODY } from "../../constants/Color";
import PublicHeader from "../../components/PublicHeader";
import PublicMain from "../../components/PublicMain";
import Notice from "../../components/Notice";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import PublicImage from "../../constants/Image";
import { useNavigation } from "@react-navigation/native";
export default function ForgetPassword() {
    const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <PublicHeader flexAmount={0.25}>
        
      </PublicHeader>
      <PublicMain flexAmount={0.75} paddingAmount={20}>
        <Notice
          title="TYPE YOUR EMAIL"
          message="We will send you instruction on how to reset your password"
        />
        <View style={{ flex: 0.8 ,justifyContent:"space-between"}}>
          <View style={{ paddingTop: 50 }}>
            <InputField title="Email" />
          </View>
          <Button title="Send" onPress={()=>{navigate.navigate("ChangePassword")}}/>
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
