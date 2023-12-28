import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Platform,
  Keyboard,
} from "react-native";
import SimpleHeader from "../../components/SimpleHeader";
import { FILL, FILL_2, GRADIENT_2, WHITE } from "../../constants/Color";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

export default function Story() {
  const navigate = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <View
            style={{
              flex: 0.1,
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              paddingHorizontal: 20,
              justifyContent: "center",
              backgroundColor: GRADIENT_2,
            }}
          >
            <TouchableOpacity onPress={() => navigate.goBack()}>
              <FontAwesomeIcon icon={faX} size={20} color={WHITE} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderBottomEndRadius: 20,
              borderBottomStartRadius: 20,
              backgroundColor: GRADIENT_2,
            }}
          >
            <TextInput
              placeholder="Write anything for the story"
              placeholderTextColor="#BDBDBD"
              style={{
                color: WHITE,
                fontFamily: "NunitoSans-Regular",
                fontSize: 20,
              }}
              multiline={true}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              alignItems: "flex-end",
              paddingHorizontal: 10,
              paddingVertical: 10,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 50,
                paddingVertical: 10,
                backgroundColor: FILL,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontFamily: "NunitoSans-Bold", fontSize: 20 }}>
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});
