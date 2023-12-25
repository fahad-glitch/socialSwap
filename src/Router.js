import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar, View } from "react-native";
import { useState, useEffect } from "react";
import Login from "./screens/public/Login";
import ForgetPassword from "./screens/public/ForgetPassword";
import ChangePassword from "./screens/private/ChangePassword";
import OTP from "./screens/public/OTP";
import { BACKGROUND, FILL, FILL_2, GRADIENT_1, GRADIENT_2 } from "./constants/Color";
import Dashboard from "./screens/private/Dashboard";
import Signup from "./screens/public/Signup";
import AddPost from "./screens/private/AddPost";
import Post from "./screens/private/Post";
import Comment from "./screens/private/Comment";
import Message from "./screens/private/Message";
import Chat from "./screens/private/Chat";
import Notification from "./screens/private/Notification";
import Explore from "./screens/private/Explore";
import Profile from "./screens/private/Profile";

export const CustomStatusBar = ({
  backgroundColor,
  barStyle = "dark-content",
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      
      style={{
        height: insets.top,
      }}
    >
      <View style={{ backgroundColor, height: insets.top }}>
        <StatusBar
          animated={true}
          translucent={true}
          backgroundColor={backgroundColor}
          barStyle={barStyle}
        />
      </View>
    </View>
  );
};

// export const CustomBottomBar = ({
//   backgroundColor,
//   barStyle = "light-content",
// }) => {
//   const insets = useSafeAreaInsets();
//   return (
//     <View
      
//       style={{
//         height: insets.bottom,
//       }}
//     >
//       <View style={{ backgroundColor, height: insets.bottom}}>
//         <StatusBar
//           animated={true}
//           translucent={true}
//           backgroundColor={backgroundColor}
//           barStyle={barStyle}
//         />
//       </View>
//     </View>
//   );
// };
const Stack = createNativeStackNavigator();

const Router = () => {
  const [initialRouteName, setInitialRouteName] = useState("Login");
//   const getProfile = async () => {
//     let data = await getData("USER");
//     if (data) {
//       setInitialRouteName("Home");
//     }
//   };
//   useEffect(() => {
//     getProfile();
//   }, []);
  return (
    <SafeAreaProvider style={{backgroundColor:GRADIENT_2,}}>
      <NavigationContainer>
        <CustomStatusBar backgroundColor="transparent" />
        <Stack.Navigator
          initialRouteName={initialRouteName}
          screenOptions={{
            headerShown: false,
            animation: "none",
          }}
        >
          {/* <Stack.Screen name="AppSplashScreen" component={AppSplashScreen} /> */}
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={Signup} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="Dashboard" component={Dashboard}/>
          <Stack.Screen name="CreatePost" component={AddPost} options={{animation:"slide_from_bottom"}}/>
          <Stack.Screen name="Post" component={Post} />
          <Stack.Screen name="Comment" component={Comment} options={{animation:"slide_from_bottom"}}/>
          <Stack.Screen name="Message" component={Message} options={{animation:"slide_from_right"}}/>
          <Stack.Screen name="Chat" component={Chat} options={{animation:"slide_from_right"}}/>
          <Stack.Screen name="Notification" component={Notification}/>
          <Stack.Screen name="Explore" component={Explore}/>
          <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
        {/* <CustomBottomBar backgroundColor="white"/> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
