import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import PublicHeader from "../../components/PublicHeader";
import PublicMain from "../../components/PublicMain";
import { BODY, FILL, GRADIENT_1 } from "../../constants/Color";
import PublicImages from "../../constants/Image";
import { Formik } from "formik";
import * as Yup from "yup";
import { postRequestForm } from "../../services/Request";
export default function Login() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigation();
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email")
      .required("Email address is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });
  const loginHandler = async (values) => {
    console.log(values);
    try {
      setLoading(true);
      const res = await postRequestForm(`/signIn`, "", values);
      console.log(res);
      if (res.result.status === 200) {
        setData(res.data);
        console.log("result", res.result.data);
        // navigate.navigate("Home");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <PublicHeader flexAmount={0.333}></PublicHeader>
      <PublicMain flexAmount={0.666}>
        <ScrollView
          contentContainerStyle={{ paddingVertical: 40 }}
          showsVerticalScrollIndicator={false}
        >
          <Formik
            validationSchema={loginValidationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={{ email: "", password: "" }}
            onSubmit={loginHandler}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <View style={{ gap: 20 }}>
                  <InputField
                    title="Email"
                    inputOnChangeHandler={handleChange("email")}
                    defaultValue={values.email}
                  />
                  <InputField
                    title="Password"
                    inputOnChangeHandler={handleChange("password")}
                    defaultValue={values.password}
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
                <Button title="Log in" onPress={handleSubmit} />
              </>
            )}
          </Formik>

          <View
            style={{
              flex: 0.75,
              alignItems: "center",
              marginTop: 40,
              gap: 40,
              justifyContent: "space-between",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={[styles.forgetPassword, { color: "#606060" }]}>
                or log in by
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 5,
                  gap: 20,
                  justifyContent: "center",
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
        </ScrollView>
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
    // fontWeight: 400,
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
