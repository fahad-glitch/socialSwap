import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import SimpleHeader from "../../components/SimpleHeader";
import {
  BACKGROUND,
  FILL,
  FILL_2,
  GRADIENT_2,
  TEXTGREY,
  WHITE,
} from "../../constants/Color";
import Images from "../../constants/Image";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faVideoCamera, faX } from "@fortawesome/free-solid-svg-icons";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as mime from "mime";
export default function AddPost() {
  const [post, setPost] = useState("");
  const [image, setImage] = useState(null);
  const [postImage, setPostImage] = useState(null);
  const addPostHandler = () => {
    console.log("Post Added", post);
    setPost("");
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      const file = await uriToFile(result.assets[0].uri);
      setPostImage(file);
    }
  };

  async function uriToFile(uri) {
    const fileInfo = await FileSystem.getInfoAsync(uri);
    const mimeType = mime.getType(uri);
    const fileContents = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    return {
      uri,
      name: fileInfo.uri.split("/").pop(),
      type: mimeType,
      data: fileContents,
    };
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
      style={styles.container}
    >
      <SimpleHeader
        title="Create Post"
        handlePress={addPostHandler}
        rightButton={true}
      />
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
          {image && (
            <View>
              <TouchableOpacity
                onPress={() => setImage(null)}
                style={{
                  position: "absolute",
                  zIndex: 100,
                  right: -14,
                  top: -14,
                  borderRadius: 100,
                  backgroundColor: GRADIENT_2,
                  padding: 10,
                  opacity: 0.8,
                }}
              >
                <FontAwesomeIcon icon={faX} size={18} color={WHITE} />
              </TouchableOpacity>
              <Image
                source={{ uri: image }}
                style={{ width: "100%", height: 200, borderRadius: 10 }}
              />
            </View>
          )}
        </View>
      </View>
      <View style={styles.footSection}>
        <TouchableOpacity style={styles.icon} onPress={pickImage}>
          <FontAwesomeIcon icon={faImage} size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <FontAwesomeIcon icon={faVideoCamera} size={24} />
        </TouchableOpacity>
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
