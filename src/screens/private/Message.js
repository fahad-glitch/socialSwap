import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SimpleHeader from "../../components/SimpleHeader";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import Images from "../../constants/Image";
import {
  BACKGROUND,
  BLACK,
  FILL,
  FILL_2,
  GRADIENT_1,
  GREY,
  ITEMCOLOR,
  TEXTGREY,
  WHITE,
} from "../../constants/Color";
import { Touchable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Message() {
    const navigate = useNavigation();
  const messageData = [
    {
      profileImage: Images.profileSample,
      name: "Fahad",
      message: "Lorem ipsum dolor sit amet conse",
      time: "1h",
      unReadLength: 0,
      status: true,
    },
    {
      profileImage: Images.profileSample,
      name: "Fahad",
      message: "Lorem ipsum dolor sit amet conse",
      time: "1h",
      unReadLength: 2,
      status: false,
    },
  ];
  const messageItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.messageContainer,
        !item.status && { backgroundColor: FILL_2 },
      ]}
      onPress={()=>{navigate.navigate("Chat",{user:item.name})}}
    >
      <Image source={item.profileImage} style={styles.profileImage} />
      <View style={styles.message}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.name}>{item.name}</Text>
          {item.unReadLength > 0 && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 22,
                height: 22,
                borderRadius: 100,
                backgroundColor: GRADIENT_1,
              }}
            >
              <Text style={[styles.time, { color: WHITE, marginTop:0 }]}>
                {item.unReadLength}
              </Text>
            </View>
          )}
        </View>
        <Text style={[styles.messageText, !item.status && { color: BLACK }]}>
          {item.message}
        </Text>

        <Text style={styles.time}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <SimpleHeader title="Message" icon={faEdit} handlePress={() => {}} />
      <FlatList
        data={messageData}
        renderItem={messageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingBottom: 100,
          gap: 10,
          paddingHorizontal: 10,
          paddingTop: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  messageContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    gap: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: ITEMCOLOR,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  message: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontFamily: "NunitoSans-Bold",
  },
  messageText: {
    fontSize: 16,
    fontFamily: "NunitoSans-Regular",
    color: TEXTGREY,
  },
  time: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: "NunitoSans-Regular",
    color: GREY,
  },
});
