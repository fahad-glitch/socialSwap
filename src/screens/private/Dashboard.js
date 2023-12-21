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
import { faHeart, faGrinHearts, faComment, faCommentAlt, faCommentDots } from "@fortawesome/free-regular-svg-icons";
export default function Dashboard() {
  const [like, setLike] = useState(false);
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
  const postItem = ({ item }) => {
    return (
      <View style={{ borderRadius: 20, backgroundColor: "white" }}>
        <View style={styles.postHeader}>
          <View
            style={[
              styles.postFooter,
              {
                paddingTop: 0,
                gap: 10,
              },
            ]}
          >
            <Image
              source={item.profileImage}
              style={{ width: 45, height: 45, borderRadius: 100 }}
            />
            <Text style={styles.postTitle}>{item.name}</Text>
          </View>
          <Text style={styles.postText}>{item.time}</Text>
        </View>
        
       {item.postImage && <Image source={item.postImage} style={{ width: "100%", height: 300 }} />}
       {item.postText && <Text style={{paddingTop:7,paddingHorizontal:10,fontFamily:"NunitoSans-SemiBold", fontSize:15, color:BLACK}} >
          {item.postText}
          </Text>}
        <View style={[styles.postFooter,{ padding: 10,}]}>
          <View
            style={[
              styles.postFooter,
              {
                gap: 5,
               
              },
            ]}
          >
            <TouchableOpacity
              onPress={handleLike}
              style={{ alignItems: "center" }}
            >
              <FontAwesomeIcon icon={item.likeStatus?faGrinHearts:faHeart} color={GRADIENT_1} size={24} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1}>
              <Text style={styles.postText}>{item.likes}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[
              styles.postFooter,
              {
                gap: 5,
              },
            ]}
          >
            <FontAwesomeIcon icon={faCommentDots} size={24} color={GRADIENT_1}/>
            <Text style={styles.postText}>{item.comments}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <Layout>
      <View style={styles.storyContainer}>
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
          renderItem={postItem}
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
