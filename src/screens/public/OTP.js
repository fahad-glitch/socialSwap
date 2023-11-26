import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { BODY, FILL, GRADIENT_1 } from "../../constants/Color";
import PublicHeader from "../../components/PublicHeader";
import PublicMain from "../../components/PublicMain";
import Notice from "../../components/Notice";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import PublicImage from "../../constants/Image";
import { useNavigation, useRoute } from "@react-navigation/native";
import moment from "moment";
import { postRequestForm } from "../../services/Request";
import Loader from "../../components/Loader";
export default function ForgetPassword() {
  const navigate = useNavigation();
  const routes = useRoute();
  const [otp, setOTP] = useState("");
  const [timer, setTimer] = useState(120);
  const [loading, setLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);

  let { email, pathToGo } = "";
  if (routes.params) {
    email = routes.params.email;
    pathToGo = routes.params.pathToGo;
  } else {
    // navigate.goBack();
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, []);
  useEffect(() => {
    if (timer === 0) {
      setResendDisabled(false); // Enable the Resend button when the timer stops
    }
  }, [timer]);

  const handleVerify = async () => {
    try {
      setLoading(true);
      const res = await postRequestForm(`/api/auth/verifyOTP`, "", {
        email: "fasif455@gmail.com",
        otp,
      });
      console.log(res);
      if (res?.result?.status === 200) {
        alert("OTP verified");
        // navigate.navigate(pathToGo);
      } else {
        alert("Invalid OTP");
      }
    } catch (err) {
      console.log(`Error of verify OTP`, err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleResend = async () => {
    try {
      setLoading(true);
      const res = await postRequestForm(`/resendCode`, "", {
        email: "fasif455@gmail.com",
      });
      if (res?.result?.status === 200) {
        setTimer(120);
        setResendDisabled(true);
      }
    } catch (error) {
      console.log(`Error of resend OTP`, error.message);
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
        <PublicMain flexAmount={0.75} paddingAmount={20}>
          <ScrollView contentContainerStyle={{ flex: 1, paddingVertical: 40 }}>
            <View style={{ flex: 0.2 }}>
              <Notice
                title="Verification"
                message="A message with verification code was sent to your mobile phone."
              />
            </View>
            <View style={{ flex: 0.8, justifyContent: "space-between" }}>
              <View style={{ flex: 0.6, paddingTop: 50, gap: 20 }}>
                <InputField
                  title="Type Verfication code"
                  extraStyle={{ textAlign: "center" }}
                  inputOnChangeHandler={setOTP}
                  defaultValue={otp}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <TouchableOpacity onPress={handleResend}>
                    <Text
                      style={[
                        resendDisabled
                          ? { color: FILL }
                          : { color: GRADIENT_1 },
                        {
                          textAlign: "center",
                          fontSize: 18,
                          paddingVertical: 10,
                          fontWeight: "bold",
                        },
                      ]}
                    >
                      Resend Code
                    </Text>
                  </TouchableOpacity>
                  {timer > 0 && (
                    <Text
                      style={{
                        color: GRADIENT_1,

                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      ({moment.duration(timer, "seconds").minutes()}:
                      {moment.duration(timer, "seconds").seconds()} )
                    </Text>
                  )}
                </View>
                <Button title="Verify" onPress={handleVerify} />
              </View>

              <View style={{ flex: 0.3, alignItems: "center" }}>
                <Image source={PublicImage.image_1} />
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
});
