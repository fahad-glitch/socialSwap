import React from "react";
import { StyleSheet, Text, Image,TouchableOpacity, View } from "react-native";
import { CustomStatusBar } from "../../Router";
import { BODY, GRADIENT_1 } from "../../constants/Color";
import PublicHeader from "../../components/PublicHeader";
import PublicMain from "../../components/PublicMain";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import PublicImage from "../../constants/Image";
import { useNavigation } from "@react-navigation/native";

export default function Signup() {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <PublicHeader flexAmount={0.333}>
      <TouchableOpacity onPress={()=>navigate.goBack()} style={{ flexDirection: "row", alignItems: "center" ,padding:20}}>
            <Image source={PublicImage.back_2} tintColor="white"/>
        </TouchableOpacity>
      </PublicHeader>
      <PublicMain flexAmount={0.666}>
        <View style={{ gap: 20, marginBottom: 40 }}>
          <InputField title="Full Name" />
          <InputField title="Email" />
          <InputField title="Password" secureTextEntry={true} />
        </View>

        <Button title="Sign up" />
        <View
          style={{
            flex: 0.75,
            alignItems: "center",
            marginTop: 40,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={[
                styles.forgetPassword,
                {
                  color: "#606060",
                  letterSpacing: 0,
                  textTransform: "none",
                  alignItems: "center",
                },
              ]}
            >
              Already have account?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigate.navigate("Login");
              }}
            >
              <Text style={styles.forgetPassword}>Sign In</Text>
            </TouchableOpacity>
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
  forgetPassword: {
    color: GRADIENT_1,
    fontSize: 17,
    letterSpacing: 2,
    textTransform: "uppercase",
    fontWeight: 400,
  },
});
