import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import SimpleHeader from "../../components/SimpleHeader";
import { BACKGROUND, FILL } from "../../constants/Color";
import Images from "../../constants/Image";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";

export default function AddPost() {
  const [post, setPost] = useState("");
  const addPostHandler = () => {

    console.log("Post Added",post);
    setPost("");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
      style={styles.container}
    >
      <SimpleHeader title="Create Post" handlePress={addPostHandler} rightButton={true}/>
      <View style={styles.main}>
        <View style={styles.headSection}>
          <Image
            source={Images.profileSample}
            style={{ width: 55, height: 55, borderRadius: 100 }}
          />
          <Text
            style={{ 
              fontSize: 18,
              paddingTop: 5,
              fontFamily: "NunitoSans-Bold",
            }}
          >
            Fahad Asif
          </Text>
        </View>
        <View style={styles.inputSection}>
          <TextInput
            placeholder="Write something here..."
            style={styles.inputField}
            multiline={true}
            value={post}
            onChangeText={setPost}
          />
        </View>
      </View>
      <View style={styles.footSection}>
        <View style={styles.icon}>
          <FontAwesomeIcon icon={faImage} size={24} />
        </View>
        <View style={styles.icon}>
          <FontAwesomeIcon icon={faVideoCamera} size={24} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  main: {
    flex: 1,
    paddingHorizontal: 15,
  },
  headSection: {
    flexDirection: "row",
    gap: 16,
  },
  image: {
    width: 25,
    height: 25,
  },
  footSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  icon: {
    backgroundColor: FILL,
    padding: 10,
    alignItems: "center",
    borderRadius: 50,
  },
  inputSection: {
    marginVertical: 20,
  },
  inputField: {
    fontSize: 18,
    fontFamily: "NunitoSans-Regular",
  },
});
