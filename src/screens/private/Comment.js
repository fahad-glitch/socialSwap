import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import SimpleLayout from "../../components/SimpleLayout";
import SimpleHeader from "../../components/SimpleHeader";
import {
  BACKGROUND,
  FILL,
  FILL_2,
  GRADIENT_1,
  GREY,
} from "../../constants/Color";
import Images from "../../constants/Image";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart as faheart_1 } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Comment() {
  const [comments, setComments] = useState([
    {
      profileImage: Images.profileSample,
      name: "Fahad",
      comment: "Lorem ipsum dolor sit amet conse",
      time: "1h",
    },
    {
      profileImage: Images.profileSample,
      name: "Fahad",
      comment: "Lorem ipsum dolor sit amet conse",
      time: "1h",
    },
    {
      profileImage: Images.profileSample,
      name: "Fahad",
      comment: "Lorem ipsum dolor sit amet conse",
      time: "1h",
    },
    {
      profileImage: Images.profileSample,
      name: "Fahad",
      comment: "Lorem ipsum dolor sit amet conse",
      time: "1h",
    },
  ]);
  const inset = useSafeAreaInsets();
  const commentItem = ({ item }) => (
    <View style={styles.commentContainer}>
      <Image source={item.profileImage} style={styles.profileImage} />
      <View style={styles.comment}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.commentText}>{item.comment}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.time}>{item.time}</Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FontAwesomeIcon icon={faHeart} color={GRADIENT_1} />
            <Text style={styles.likeCount}>02</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      style={styles.container}
    >
      <SimpleHeader title="Comments" />
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={commentItem}
        contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }}
      />
      <View
        style={[
          styles.inputComment,
          Platform.OS === "ios" && { paddingBottom: inset.bottom },
        ]}
      >
        <Image source={Images.profileSample} style={styles.profileImageInput} />
        <TextInput
          placeholder="Write a comment..."
          style={styles.input}
          multiline={true}
          enablesReturnKeyAutomatically={true}
          returnKeyLabel="send"
          returnKeyType="send"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  commentContainer: {
    backgroundColor: FILL_2,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    padding: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  name: {
    fontSize: 16,
    fontFamily: "NunitoSans-SemiBold",
  },
  comment: {
    flex: 1,
    paddingHorizontal: 10,
  },
  commentText: {
    fontSize: 14,
    fontFamily: "NunitoSans-Regular",
  },
  time: {
    fontSize: 12,
    paddingTop: 5,
    fontFamily: "NunitoSans-Regular",
    color: GREY,
  },
  likeCount: {
    fontSize: 14,
    paddingTop: 5,
    fontFamily: "NunitoSans-Regular",
    color: GREY,
    paddingLeft: 5,
  },
  input: {
    fontFamily: "NunitoSans-Regular",
    fontSize: 16,
    flex: 1,
    paddingVertical: 5,
    marginHorizontal: 10,
  },
  inputComment: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: FILL_2,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  profileImageInput: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
