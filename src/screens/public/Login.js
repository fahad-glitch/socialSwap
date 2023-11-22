import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import PublicHeader from "../../components/PublicHeader";
import PublicMain from "../../components/PublicMain";
import { BODY, FILL, GRADIENT_1 } from "../../constants/Color";
import PublicImages from "../../constants/Image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <PublicHeader flexAmount={0.333}></PublicHeader>
      <PublicMain flexAmount={0.666}>
        <View style={{ gap: 20 }}>
          <InputField title="Email" onChange={setEmail} />
          <InputField
            title="Password"
            onChange={setPassword}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={{
            paddingVertical: 40,
            borderRadius: 30,
            alignItems: "center",
          }}
          onPress={() => {
            navigate.navigate("ForgetPassword");
          }}
        >
          <Text style={styles.forgetPassword}>Forget Password</Text>
        </TouchableOpacity>
        <Button
          title="Log in"
          onPress={() => {
            navigate.navigate("Home");
          }}
        />
        <View
          style={{
            flex: 0.75,
            alignItems: "center",
            marginTop: 40,
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "40%", alignItems: "center" }}>
            <Text style={[styles.forgetPassword, { color: "#606060" }]}>
              or log in by
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                paddingHorizontal: 5,
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity style={styles.iconContainer}>
                <Image source={PublicImages.facebookFill} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer}>
                <Image source={PublicImages.facebookFill} />
              </TouchableOpacity>
            </View>
          </View>
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
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigate.navigate("SignUp");
              }}
            >
              <Text style={styles.forgetPassword}>Sign up</Text>
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
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: FILL,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
