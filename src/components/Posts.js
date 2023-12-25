import React from "react";
import { FlatList, View } from "react-native";
import { PostItem } from "./PostItem";

export default function Posts({ data, scrollEnabled = false }) {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return <PostItem {...item} extraStyle={{ borderRadius: 20 }} />;
      }}
      keyExtractor={(item, key) => key}
      contentContainerStyle={{ paddingHorizontal: 10,paddingTop:10, gap: 10 }}
      scrollEnabled={scrollEnabled}
      showsVerticalScrollIndicator={false}
    />
  );
}
