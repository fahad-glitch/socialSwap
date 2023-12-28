import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Images from "../constants/Image";
import { BACKGROUND, WHITE } from "../constants/Color";
import { Modal } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
export default function LikeModal({ id, visible, data, onClose }) {
  console.log(visible);
  const inset = useSafeAreaInsets();
  const likeData = [
    {
      profileImage: Images.profileSample,
      name: "Fahad",
    },
    {
      profileImage: Images.profileSample,
      name: "Fahad",
    },
    {
      profileImage: Images.profileSample,
      name: "Fahad",
    },
    {
      profileImage: Images.profileSample,
      name: "Fahad",
    },
  ];
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      statusBarTranslucent={true}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[styles.container]}>
          <View
            style={{
              flex: 0.6,
              backgroundColor: BACKGROUND,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "NunitoSans-Bold",
                fontSize: 20,
                paddingVertical: 10,
              }}
            >
              Likes
            </Text>
            <FlatList
              data={likeData}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 15,
                    }}
                  >
                    <Image
                      source={item.profileImage}
                      style={styles.profileImage}
                    />
                    <Text
                      style={{
                        fontFamily: "NunitoSans-SemiBold",
                        fontSize: 18,
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                  <FontAwesomeIcon icon={faChevronRight} size={16} />
                </TouchableOpacity>
              )}
              keyExtractor={(item, key) => key}
              contentContainerStyle={{
                paddingHorizontal: 20,
                paddingTop: 20,
                gap: 15,
              }}
              StickyHeaderComponent={({ item }) => <Text>Likes</Text>}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
