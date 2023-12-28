import React, { useState, useRef, useEffect } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import TitleBar from "./TitleBar";
import BottomBar from "./BottomBar";
import { ITEMCOLOR } from "../constants/Color";
import { useRoute } from "@react-navigation/native";

export default function Layout({ children, isTitle = true }) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const route = useRoute();
  const [screenName, setScreenName] = useState("");
  const [titleBarVisible, setTitleBarVisible] = useState(true);
  const titleBarHeight = 60; // Change this value based on your TitleBar height
  const collapseThreshold = 150; // Adjust this threshold for content collapse

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;

        // Show/hide title bar
        const titleBarThreshold = 50;
        setTitleBarVisible(offsetY < titleBarThreshold);

        // Collapse content
        const contentCollapseThreshold = titleBarHeight + collapseThreshold;
        if (offsetY > contentCollapseThreshold) {
          // Perform actions to collapse content
          // You can update state or trigger any specific logic here
        }
      },
    }
  );

  const titleBarOpacity = scrollY.interpolate({
    inputRange: [0, titleBarHeight],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const titleBarTranslateY = scrollY.interpolate({
    inputRange: [0, titleBarHeight],
    outputRange: [0, -titleBarHeight],
    extrapolate: "clamp",
  });

  useEffect(()=>{
    setScreenName(route.name)
  },[route]);

  return (
    <View style={styles.container}>
      {isTitle && (
        <Animated.View
          style={{
            width: "100%",
            position: "absolute",
            zIndex: 5,
            opacity: titleBarOpacity,
            transform: [{ translateY: titleBarTranslateY }],
          }}
        >
          <TitleBar />
        </Animated.View>
      )}
      <View style={[{ flex: 1, backgroundColor: ITEMCOLOR }]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={{ marginTop: titleBarHeight }}
        >
          {children}
        </ScrollView>
      </View>
      <BottomBar activeRoute={screenName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
