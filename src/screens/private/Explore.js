import React, { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import SimpleLayout from "../../components/SimpleLayout";
import SearchHeader from "../../components/SearchHeader";
import SearchModal from "../../components/SearchModal";
import { WHITE } from "../../constants/Color";
import Posts from "../../components/Posts";
import Images from "../../constants/Image";
export default function Explore() {
  const [searchModal, setSearchModal] = useState(false);
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
  return (
    <View style={styles.container}>
      <SearchHeader
        handlePress={() => {
          console.log("searching");
        }}
        handleModal={() => {
          setSearchModal(true);
        }}
      />
      <SimpleLayout>
        <Posts data={postData} scrollEnabled={true}/>
      </SimpleLayout>
      <SearchModal
        visible={searchModal}
        handleClose={() => {
          setSearchModal(false);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flex: 0.1,
    justifyContent: "center",
    backgroundColor: WHITE,
  },
});
