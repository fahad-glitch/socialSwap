import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Images from "../constants/Image";
import { GRADIENT_1, GRADIENT_2 } from "../constants/Color";

const BottomBar = ({ activeRoute }) => {
  const navigation = useNavigation();
  const isActive = (routeName) => {
    console.log("activeRoute", activeRoute);
    return activeRoute === routeName;
  };

  const BottomBarButton = ({ name, active, onPress }) => {
    let imageSource;
    switch (name) {
      case "Dashboard":
        imageSource = active ?Images.homeActive:Images.home;
        break;
      case "Explore":
        imageSource = active ?Images.exploreActive:Images.explore;
        break;
      case "Add":
        imageSource =Images.add;
        break;
      case "Notification":
        imageSource = active ?Images.notificationActive:Images.notification;
        break;
      case "Profile":
        imageSource = active ?Images.profileActive:Images.profile;
        break;
      default:
        break;
    }
    return (
      <TouchableOpacity
        style={[
          styles.button,
          name == "Add" ? styles.addButton : null,
          name == "Add" && active ? styles.activeButton : null,
        ]}
        onPress={onPress}
      >
        {name == "Add" ? (
          <LinearGradient
            colors={[GRADIENT_1, GRADIENT_2]}
            style={{
              height: "100%",
              borderRadius: 1000,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style = {{backgroundColor:"#fff",padding:5 , borderRadius:8}}>
            <Image
              source={imageSource}
              style={[styles.icon, name == "Add" ? styles.addIcon : null]}
            />
            </View>
            
          </LinearGradient>
        ) : (
          <>
            <Image
              source={imageSource}
              style={[styles.icon]}
            />
          </>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.bottomBarContainer}>
      <View style={styles.bottomBar}>
        <BottomBarButton
          name="Dashboard"
          active={isActive("Dashboard")}
          onPress={() => navigation.navigate("Dashboard")}
        />
        <BottomBarButton
          name="Explore"
          active={isActive("Explore")}
          onPress={() => navigation.navigate("Explore")}
        />
        <BottomBarButton
          name="Add"
          active={isActive("Add")}
          onPress={() => navigation.navigate("AddPost")}
        />

        <BottomBarButton
          name="Notification"
          active={isActive("Notification")}
          onPress={() => navigation.navigate("Notification")}
        />
        {/* Profile History */}
        <BottomBarButton
          name="Profile"
          active={isActive("Profile")}
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBarContainer: {
    backgroundColor: "#fff",
    width: "100%",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    // For iOS
    shadowColor: GRADIENT_1,
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    // For Android
    // elevation: 5,
  },
  bottomBar: {
    flexDirection: "row",
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  button: {
    width: "20%",
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: "#00E3B0",
  },
  addButton: {
    height: 80,
    width: 80,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: -80,

  },
  addIcon: {
    height: 20,
    width: 20,
    tintColor: GRADIENT_1,
  },
  icon: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
});

export default BottomBar;
