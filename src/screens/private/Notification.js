import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  TouchableWithoutFeedback,
} from "react-native";
import Layout from "../../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCancel,
  faCross,
  faGear,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import {
  BACKGROUND,
  FILL_2,
  GRADIENT_1,
  GRADIENT_2,
  GREY,
  ITEMCOLOR,
  WHITE,
} from "../../constants/Color";
import Images from "../../constants/Image";
import BottomBar from "../../components/BottomBar";
import { Modal } from "react-native";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";

export default function Notification() {
  const [openSetting, setOpenSetting] = useState(false);
  const [isEnable, setIsEnable] = useState(false);
  const notificationData = [
    {
      profileImage: Images.profileSample,
      name: "Fahad",
      message: "Lorem ipsum dolor sit amet conse",
      time: "1h",
      status: true,
    },
    {
      profileImage: Images.profileSample,
      name: "Fahad",
      message: "Lorem ipsum dolor sit amet conse",
      time: "1h",
      status: false,
    },
    {
      profileImage: Images.profileSample,
      name: "Fahad",
      message: "Lorem ipsum dolor sit amet conse",
      time: "1h",
      status: true,
    },
    {
      profileImage: Images.profileSample,
      name: "Fahad",
      message: "Lorem ipsum dolor sit amet conse",
      time: "1h",
      status: false,
    },
    {
      profileImage: Images.profileSample,
      name: "Fahad",
      message: "Lorem ipsum dolor sit amet conse",
      time: "1h",
      status: true,
    },
    {
      profileImage: Images.profileSample,
      name: "Fahad",
      message: "Lorem ipsum dolor sit amet conse",
      time: "1h",
      status: false,
    },
  ];
  const notificationItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.notificationContainer,
        item.status && { backgroundColor: FILL_2 },
      ]}
    >
      <Image source={item.profileImage} style={styles.profileImage} />
      <View style={styles.notification}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={{ flex: 1, backgroundColor: BACKGROUND }}>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.headerText}>Notification </Text>
          <Text style={[styles.headerText, { color: GRADIENT_1 }]}>(06)</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            setOpenSetting(!openSetting);
          }}
        >
          <Image source={Images.Setting} style={{ width: 26, height: 26 }} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={notificationData}
        renderItem={notificationItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingTop: 10,
          paddingHorizontal: 15,
          gap: 10,
        }}
        showsVerticalScrollIndicator={false}
      />
      <BottomBar activeRoute="Dashboard" />
      <Modal
        animationType="slide"
        transparent={true}
        visible={openSetting}
        style={{ justifyContent: "flex-end" }}
      >
        <TouchableWithoutFeedback onPress={() => {setOpenSetting(false)}}>
          <View style={[styles.modalContainer]}>
            <View style={styles.modalBody}>
              <TouchableOpacity
                style={styles.modalCancel}
                onPress={() => {setOpenSetting(false)}}
              >
                <FontAwesomeIcon icon={faX} size={16} />
              </TouchableOpacity>
              <Text style={styles.modalHeading}>Notification Feed</Text>
              <View style={styles.modalItem}>
                <Text style={styles.modalText}>Likes</Text>
                <Switch
                  trackColor={{ false: GREY, true: GRADIENT_1 }}
                  thumbColor={WHITE}
                  ios_backgroundColor={GREY}
                  onValueChange={() => {
                    setIsEnable(!isEnable);
                  }}
                  value={isEnable}
                />
              </View>
              <View style={styles.modalItem}>
                <Text style={styles.modalText}>Comments</Text>
                <Switch
                  trackColor={{ false: GREY, true: GRADIENT_1 }}
                  thumbColor={WHITE}
                  ios_backgroundColor={GREY}
                  onValueChange={() => {
                    setIsEnable(!isEnable);
                  }}
                  value={isEnable}
                />
              </View>
              <View style={styles.modalItem}>
                <Text style={styles.modalText}>Follower</Text>
                <Switch
                  trackColor={{ false: GREY, true: GRADIENT_1 }}
                  thumbColor={WHITE}
                  ios_backgroundColor={GREY}
                  onValueChange={() => {
                    setIsEnable(!isEnable);
                  }}
                  value={isEnable}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 25,
    fontFamily: "NunitoSans-Bold",
  },
  notificationContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: ITEMCOLOR,
    borderRadius: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  notification: {
    flex: 1,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 18,
    fontFamily: "NunitoSans-Bold",
  },
  message: {
    fontSize: 15,
    fontFamily: "NunitoSans-Regular",
  },
  time: {
    paddingTop: 10,
    fontSize: 15,
    fontFamily: "NunitoSans-Regular",
    color: "#aaa",
  },
  modalContainer: {
    flex: 1,
    height: "100%",
    backgroundColor:"rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalBody: {
    flex: 0.5,
    backgroundColor: BACKGROUND,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 30,
    gap:10
  },
  modalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: ITEMCOLOR,
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  modalText: {
    fontFamily: "NunitoSans-SemiBold",
    fontSize: 16,
  },
  modalHeading: {
    fontFamily: "NunitoSans-SemiBold",
    fontSize: 20,
    textAlign: "center",
    paddingVertical:20,
  },
  modalCancel: {
    position: "absolute",
    alignSelf: "center",
    top: -25,
    backgroundColor: WHITE,
    padding: 15,
    borderRadius: 100,
    // For iOS
    shadowColor: GRADIENT_1,
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    // For Android
    elevation: 5,
  },
});
