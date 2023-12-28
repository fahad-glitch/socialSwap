import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import SimpleLayout from "../../components/SimpleLayout";
import Images from "../../constants/Image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BACKGROUND, BLACK, FILL_2, GREY, TEXTGREY } from "../../constants/Color";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { TabView } from "react-native-tab-view";
import Posts from "../../components/Posts";
import { ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as mime from "mime";
import { useNavigation } from "@react-navigation/native";
export default function Profile() {
  const inset = useSafeAreaInsets();
  const [image, setImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigation();
  const postData = [
    {
      name: "Fahad",
      profileImage: Images.profileSample,
      postText: "Lorem ipsum dolor sit amet conse",
      postImage: Images.SampleImage,
      likeStatus: false,
      likes: 10,
      comments: 10,
      time: "1 hour ago",
    },
    {
      name: "Fahad",
      profileImage: Images.profileSample,
      postImage: Images.SampleImage,
      likes: 10,
      comments: 10,
      likeStatus: true,
      time: "1 hour ago",
    },
    {
      name: "Fahad",
      profileImage: Images.profileSample,
      postImage: Images.SampleImage,
      likes: 10,
      comments: 10,
      likeStatus: true,
      time: "1 hour ago",
    },
    {
      name: "Fahad",
      profileImage: Images.profileSample,
      postImage: Images.SampleImage,
      likes: 10,
      comments: 10,
      likeStatus: true,
      time: "1 hour ago",
    },
  ];

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
      setProfileImage(file);
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
    <SimpleLayout style={styles.container}>
      <ScrollView>
        <View>
          <ImageBackground
            source={Images.SampleImage}
            style={[styles.headContainer]}
            borderBottomLeftRadius={30}
            borderBottomRightRadius={30}
          >
            {/* <TouchableOpacity onPress={{}} style={styles.imageContainer}>
              <Image source={Images.profileSample} style={styles.Image} />
            </TouchableOpacity> */}
            {image ? (
          <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
            <Image source={{ uri: image }} style={styles.Image} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
            <Text style={styles.imagePlaceholder}>Add Image</Text>
          </TouchableOpacity>
        )}
          </ImageBackground>
          <View style={styles.textContainer}>
            <Text style={styles.name}>Fahad</Text>
            <Text style={styles.username}>@fahad123</Text>
            <Text style={styles.bio}>Software Engineer | MERN Developer</Text>
          </View>

          <View style={[styles.actionContainer]}>
            <TouchableOpacity
              style={{
                backgroundColor: FILL_2,
                flex: 0.8,
                paddingVertical: 10,
                borderRadius: 10,
                alignItems: "center",
              }}
              onPress={() => {
                navigate.navigate("EditProfile");
              }}
            >
              <Text style={[styles.name, { fontSize: 18 }]}>Edit Profiles</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: FILL_2,
                flex: 0.1,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon icon={faGear} size={26} />
            </TouchableOpacity>
          </View>

          <View style={styles.actionContainer}>
            <View style={styles.statsContainer}>
              <Text style={[styles.name, { fontSize: 18 }]}>10</Text>
              <Text style={[styles.name, { color: TEXTGREY, fontSize: 14 }]}>
                Posts
              </Text>
            </View>
            <TouchableOpacity style={styles.statsContainer}>
              <Text style={[styles.name, { fontSize: 18 }]}>10</Text>
              <Text style={[styles.name, { color: TEXTGREY, fontSize: 14 }]}>
                Follower
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.statsContainer}>
              <Text style={[styles.name, { fontSize: 18 }]}>10</Text>
              <Text style={[styles.name, { color: TEXTGREY, fontSize: 14 }]}>
                Following
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ paddingTop: 10 }}>
          <Posts data={postData} />
        </View>
      </ScrollView>
    </SimpleLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headContainer: {
    height: 200,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    backgroundColor: BACKGROUND,
  },
  Image: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },
  imageContainer: {
    position: "absolute",
    bottom: -50,
    zIndex: 100,
    marginTop: -50,
    backgroundColor: "transparent",
    width: 130,
    height: 130,
    borderRadius: 100,
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: GREY,
  },
  imagePlaceholder: {
    color: "#777",
    textAlign: "center",
  },
  textContainer: {
    paddingTop: 60,
    backgroundColor: BACKGROUND,
    padding: 10,
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontFamily: "NunitoSans-Bold",
    fontSize: 24,
    color: BLACK,
  },
  username: {
    fontFamily: "NunitoSans-Regular",
    fontSize: 15,
    color: BLACK,
  },
  bio: {
    fontFamily: "NunitoSans-Regular",
    fontSize: 15,
    color: BLACK,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    backgroundColor: BACKGROUND,
    alignItems: "center",
    gap: 10,
  },
  statsContainer: {
    backgroundColor: FILL_2,
    flex: 0.3,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});
