import React from "react";
import { FlatList, View } from "react-native";
import { PostItem } from "./PostItem";

export default function Posts({ data, scrollEnabled = false, handlelike }) {

    
  return (
    <FlatList
      data={data}
      renderItem={({ item,index }) => {
        return <PostItem {...item} extraStyle={{ borderRadius: 20 }}  handleLike={handlelike} index={index}/>;
      }}
      keyExtractor={(item, key) => key}
      contentContainerStyle={{ paddingHorizontal: 10,paddingBottom:100,paddingTop:10, gap: 10 }}
      scrollEnabled={scrollEnabled}
      showsVerticalScrollIndicator={false}
    />
  );
}
