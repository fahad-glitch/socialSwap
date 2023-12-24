import React from "react";
import { StyleSheet, View } from "react-native";
import { PostItem } from "../../components/PostItem";
import SimpleLayout from "../../components/SimpleLayout";

export default function Post() {
  const item = {
    name: "Fahad",
    profileImage: "https://picsum.photos/200",
    postImage: "https://picsum.photos/200",
    time: "1h",
    postText: "Lorem ipsum dolor sit amet conse",
    likes: 12,
    comments: 2,
    likeStatus: false,
  };
  return (
      <SimpleLayout title="Post" >
        <PostItem
          profileImage={item.profileImage}
          postImage={item.postImage}
          name={item.name}
          time={item.time}
          postText={item.postText}
          likes={item.likes}
          comments={item.comments}
          likeStatus={item.likeStatus}
        />
      </SimpleLayout>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
