import React from "react";
import { faCommentDots, faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BACKGROUND, BLACK, GRADIENT_1, GREY } from "../constants/Color";
import { faGrinHearts } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

export const PostItem = ({
  profileImage,
  postImage,
  name,
  time,
  postText,
  likes,
  comments,
  likeStatus,
  extraStyle
}) => {
    const navigation = useNavigation();
  return (
    <View style={[{backgroundColor: "white" },extraStyle]}>
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
            source={profileImage}
            style={{ width: 45, height: 45, borderRadius: 100 }}
          />
          <Text style={styles.postTitle}>{name}</Text>
        </View>
        <Text style={styles.postText}>{time}</Text>
      </View>
      {postText && (
        <Text
          style={{
            paddingVertical: 7,
            paddingHorizontal: 10,
            fontFamily: "NunitoSans-SemiBold",
            fontSize: 15,
            color: BLACK,
          }}
        >
          {postText}
        </Text>
      )}
      {postImage && (
        <Image source={postImage} style={{ width: "100%", height: 300 }} />
      )}
      
      <View style={[styles.postFooter, { padding:10 }]}>
        <View
          style={[
            styles.postFooter,
            {
              gap: 5,
            },
          ]}
        >
          <TouchableOpacity style={{ alignItems: "center" }}>
            <FontAwesomeIcon
              icon={likeStatus ? faGrinHearts : faHeart}
              color={GRADIENT_1}
              size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1}>
            <Text style={styles.postText}>{likes}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
            onPress={() => navigation.navigate("Comment")}
          style={[
            styles.postFooter,
            {
              gap: 5,
            },
          ]}
        >
          <FontAwesomeIcon icon={faCommentDots} size={24} color={GRADIENT_1} />
          <Text style={styles.postText}>{comments}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
