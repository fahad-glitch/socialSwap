import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { CustomStatusBar } from "../../Router";
import { BODY, GRADIENT_1 } from "../../constants/Color";
import PublicHeader from "../../components/PublicHeader";
import PublicMain from "../../components/PublicMain";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import PublicImage from "../../constants/Image";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { postRequestForm } from "../../services/Request";
import Loader from "../../components/Loader";

export default function SignUp() {
  const navigate = useNavigation();
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(null);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const signUpValidationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    userName: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Please enter valid email")
      .required("Email address is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
    phoneNo: Yup.string()
      .min(10, "Phone number must be at least 10 characters")
      .required("Phone number is required"),
    DOB: Yup.string().required("Date of birth is required"),
  });

  const checkUsernameAvailability = async (inputUsername) => {
    try {
      const res = await postRequestForm(`/checkUniqueUserName`, "", { userName: inputUsername });
      if(res.result.data.msg === "Username already exists"){
        return false;
      }else{
        return true;
      }
      
    } catch (error) {
      console.log('Error checking username availability:', error);
      return false;
    }
  };
  const signupHandler = async (values) => {
    console.log(values);
    setLoading(true);
    try {
      const res = await postRequestForm(`/signUp`, "", values);
      console.log(res);
      if (res.result.status === 200) {
        setData(res.data);
        console.log("result", res.result.data);
        navigate.navigate("OTP", { email: res.data.email, pathToGo: "Home" });
      } else {
        alert(res.error.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <PublicHeader flexAmount={0.25}>
          <TouchableOpacity
            onPress={() => navigate.goBack()}
            style={{ flexDirection: "row", alignItems: "center", padding: 20 }}
          >
            <Image source={PublicImage.back_2} tintColor="white" />
          </TouchableOpacity>
        </PublicHeader>
        <PublicMain flexAmount={0.75}>
          <ScrollView
            contentContainerStyle={{ paddingVertical: 40 }}
            showsVerticalScrollIndicator={false}
          >
            <Formik
              validationSchema={signUpValidationSchema}
              validateOnChange={false}
              validateOnBlur={false}
              initialValues={{
                fullName: "",
                userName: "",
                email: "",
                password: "",
                phoneNo: "",
                DOB: "",
              }}
              onSubmit={signupHandler}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <>
                  {console.log(errors)}
                  <View style={{ gap: 25, marginBottom: 40 }}>
                    <InputField
                      title="Full Name"
                      defaultValue={values.fullName}
                      inputOnChangeHandler={handleChange("fullName")}
                    />
                    <InputField
                      title="Username"
                      isAvailable={isUsernameAvailable}
                      defaultValue={values.userName}
                      inputOnChangeHandler={async (text) => {
                        handleChange("userName")(text);
                        const isAvailable = await checkUsernameAvailability(
                          text
                        );
                        setIsUsernameAvailable(isAvailable);
                        
                      }}

                    />
                    {/* {isUsernameAvailable !== null && (
                      <Text
                        style={{ color: isUsernameAvailable ? "green" : "red" }}
                      >
                        {isUsernameAvailable
                          ? "Username is available!"
                          : "Username is not available."}
                      </Text>
                    )} */}
                    <InputField
                      title="Email Address"
                      defaultValue={values.email}
                      inputOnChangeHandler={handleChange("email")}
                    />
                    <InputField
                      title="Phone"
                      defaultValue={values.phoneNo}
                      inputOnChangeHandler={handleChange("phoneNo")}
                    />
                    <InputField
                      title="Date of Birth"
                      defaultValue={values.DOB}
                      inputOnChangeHandler={handleChange("DOB")}
                    />
                    <InputField
                      title="Password"
                      defaultValue={values.password}
                      inputOnChangeHandler={handleChange("password")}
                      secureTextEntry={true}
                    />
                  </View>

                  <Button
                    title="Sign up"
                    onPress={() => {
                      navigate.navigate("OTP");
                    }}
                  />
                </>
              )}
            </Formik>
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
          </ScrollView>
        </PublicMain>
      </View>
      <Loader loading={loading} />
    </>
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
});
