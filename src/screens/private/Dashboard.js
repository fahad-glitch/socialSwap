import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  BACKGROUND,
  BLACK,
  GRADIENT_1,
  GRADIENT_2,
  GREY,
} from "../../constants/Color";

import Layout from "../../components/Layout";
import Images from "../../constants/Image";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHeart,
  faGrinHearts,
  faComment,
  faCommentAlt,
  faCommentDots,
} from "@fortawesome/free-regular-svg-icons";
import { PostItem } from "../../components/PostItem";
import { useNavigation } from "@react-navigation/native";
export default function Dashboard() {
  const [like, setLike] = useState(false);
  const navigate=useNavigation();
  const storyData = [
    {
      name: "Fahad",
      profileImage: Images.profileSample,
      flag: true,
    },
    {
      name: "Fahad",
      profileImage: Images.profileSample,
    },
    {
      name: "Fahad",
      profileImage: Images.profileSample,
    },
    {
      name: "Fahad",
      profileImage: Images.profileSample,
    },
    {
      name: "Fahad",
      profileImage: Images.profileSample,
    },
  ];

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
  ];

  const handleLike = () => {
    //API call
  };
  const StoryItem = ({ item }) => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={item.profileImage} style={{ width: 80, height: 80 }} />
        {item.flag && (
          <LinearGradient
            colors={[GRADIENT_1, GRADIENT_2]}
            style={{
              position: "absolute",
              bottom: 15,
              right: 0,
              borderRadius: 100,
              padding: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={Images.add}
              style={{
                width: 15,
                height: 15,
                borderRadius: 1000,
                tintColor: "#fff",
              }}
            />
          </LinearGradient>
        )}
        <Text style={{ fontFamily: "NunitoSans-SemiBold", color: "#000" }}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    
    <Layout>
      <View style={styles.storyContainer} >
        <FlatList
          data={storyData}
          renderItem={StoryItem}
          keyExtractor={(item, key) => key}
          contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.postContainer}>
        <FlatList
          data={postData}
          renderItem={({ item }) => {
            return <PostItem {...item} extraStyle={{borderRadius:20}} />;
          }}
          keyExtractor={(item, key) => key}
          contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }}
          scrollEnabled={false}
        />
      </View>
    </Layout>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storyContainer: {
    paddingVertical: 10,
    backgroundColor: BACKGROUND,
  },
  postContainer: {
    paddingTop: 10,
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  postText: {
    fontFamily: "NunitoSans-SemiBold",
    fontSize: 16,
    color: GREY,
  },
  postTitle: {
    fontFamily: "NunitoSans-Bold",
    fontSize: 18,
    color: BLACK,
  },
  postFooter: {
    flexDirection: "row",
    paddingTop: 10,
    gap: 40,
    alignItems: "center",
  },
  postIcon: {
    width: 25,
    height: 25,
  },
});
