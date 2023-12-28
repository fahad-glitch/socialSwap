import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SimpleHeader from "../../components/SimpleHeader";
import { useRoute } from "@react-navigation/native";
import Images from "../../constants/Image";
import {
  BACKGROUND,
  FILL_2,
  GRADIENT_1,
  GRADIENT_2,
  GREY,
  ITEMCOLOR,
  TEXTGREY,
  WHITE,
} from "../../constants/Color";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

export default function Chat() {
  const routes = useRoute();
  const inset = useSafeAreaInsets();
  const [user, setUser] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    setUser(routes.params.user);
  }, []);
  const messageData = [
    {
      userId: 1,
      message: "Lorem ipsum dolor sit amet conse",
      time: "12:30 PM",
    },
    {
      userId: 2,
      message: "Lorem ipsum dolor sit amet conse",
      time: "12:31 PM",
    },
    {
      userId: 2,
      message: "Lorem ipsum dolor sit amet conse",
      time: "12:31 PM",
    },
    {
      userId: 2,
      message: "Lorem ipsum dolor sit amet conse",
      time: "12:31 PM",
    },
    {
      userId: 1,
      message: "Lorem ipsum dolor sit amet conse",
      time: "12:30 PM",
    },
    {
      userId: 1,
      message: "Lorem ipsum dolor sit amet conse",
      time: "12:30 PM",
    },
    {
      userId: 2,
      message:
        "Lorem ipsum dolor sit amet conse kgfwf wuifgwe wiefguwv wifgweuif weiuwegfuiw fiweufgow i",
      time: "12:31 PM",
    },
    {
      userId: 1,
      message: "Lorem ipsum dolor sit amet conse",
      time: "12:30 PM",
    },
    {
      userId: 2,
      message:
        "Lorem ipsum dolor sit amet conse kgfwf wuifgwe wiefguwv wifgweuif weiuwegfuiw fiweufgow i",
      time: "12:31 PM",
    },
    {
      userId: 1,
      message: "Lorem ipsum dolor sit amet conse",
      time: "12:30 PM",
    },
    {
      userId: 2,
      message:
        "Lorem ipsum dolor sit amet conse kgfwf wuifgwe wiefguwv wifgweuif weiuwegfuiw fiweufgow i",
      time: "12:31 PM",
    },
    {
      userId: 1,
      message: "Lorem ipsum dolor sit amet conse",
      time: "12:30 PM",
    },
    {
      userId: 2,
      message:
        "Lorem ipsum dolor sit amet conse kgfwf wuifgwe wiefguwv wifgweuif weiuwegfuiw fiweufgow i",
      time: "12:31 PM",
    },
    {
      userId: 2,
      message:
        "Lorem ipsum dolor sit amet conse kgfwf wuifgwe wiefguwv wifgweuif weiuwegfuiw fiweufgow i",
      time: "12:31 PM",
    },
  ];
  const messageItems = ({ item }) => {
    return (
      <View
        style={[
          styles.messageContainer,
          item.userId === 2 && { flexDirection: "row-reverse" },
        ]}
      >
        <Image source={Images.profileSample} style={styles.profileImage} />
        <View
          style={[
            styles.messageInnerContainer,
            item.userId === 2 && { backgroundColor: FILL_2 },
          ]}
        >
          <Text style={styles.messageText}>{item.message}</Text>
          <View style={{ alignItems: "flex-end" }}>
            {/* <FontAwesomeIcon icon={faCheckDouble} size={20} /> */}
            {/* <FontAwesomeIcon icon={faCheck} size={20} /> */}
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      style={styles.container}
    >
      <SimpleHeader title={user} />
      <FlatList
        data={messageData}
        renderItem={messageItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }}
        ref={(it) => (scrollRef.current = it)}
        onContentSizeChange={() =>
          scrollRef.current?.scrollToEnd({ animated: true })
        }
      />
      <View
        style={[
          styles.messageInput,
          Platform.OS === "ios" && { paddingBottom: inset.bottom },
        ]}
      >
        <TextInput
          placeholder="Type a message"
          style={styles.input}
          multiline={true}
        />
        <TouchableOpacity>
          <LinearGradient colors={[GRADIENT_1, GRADIENT_2]} style={styles.send}>
            <Text style={styles.sendText}>Send</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  messageInput: {
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: WHITE,
    padding: 10,
    gap: 10,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  input: {
    flex: 1,
    backgroundColor: ITEMCOLOR,
    borderRadius: 100,
    fontFamily: "NunitoSans-Regular",
    fontSize: 16,
    padding: 10,
  },
  send: {
    padding: 10,
    borderRadius: 100,
  },
  sendText: {
    color: WHITE,
    fontFamily: "NunitoSans-SemiBold",
    fontSize: 16,
  },
  messageContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  messageInnerContainer: {
    flex: 0.8,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: ITEMCOLOR,
  },
  time: {
    fontSize: 12,
    color: TEXTGREY,
    fontFamily: "NunitoSans-Regular",
  },
  messageText: {
    fontFamily: "NunitoSans-Regular",
    fontSize: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
