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
import {
  BACKGROUND,
  FILL,
  FILL_2,
  GRADIENT_1,
  GRADIENT_2,
  WHITE,
} from "./constants/Color";
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
import Story from "./screens/private/Story";
import EditProfile from "./screens/private/EditProfile";
import ResetPassword from "./screens/public/ResetPassword";

export const CustomStatusBar = ({
  backgroundColor,
  barStyle = "light-content",
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
const AuthStack = createNativeStackNavigator();
const PrivateStack = createNativeStackNavigator();

const AuthStackScreen = () => {
  return (
    <>
      <CustomStatusBar backgroundColor={GRADIENT_2} />

      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="SignUp" component={Signup} />
        <AuthStack.Screen name="OTP" component={OTP} />
        <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
        <AuthStack.Screen name="ChangePassword" component={ResetPassword} />
      </AuthStack.Navigator>
    </>
  );
};
const PrivateStackScreen = () => {
  return (
    <>
      <CustomStatusBar backgroundColor={WHITE} barStyle="dark-content" />
      <PrivateStack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <PrivateStack.Screen name="Dashboard" component={Dashboard} />
        <PrivateStack.Screen name="CreatePost" component={AddPost} options={{animation:"slide_from_bottom"}} />
        <PrivateStack.Screen name="Post" component={Post} />
        <PrivateStack.Screen name="Comment" component={Comment} options={{animation:"slide_from_bottom"}}/>
        <PrivateStack.Screen name="Message" component={Message} options={{animation:"slide_from_right"}}/>
        <PrivateStack.Screen name="Chat" component={Chat} />
        <PrivateStack.Screen name="Notification" component={Notification} />
        <PrivateStack.Screen name="Explore" component={Explore} />
        <PrivateStack.Screen name="Profile" component={Profile} />
        <PrivateStack.Screen name="Story" component={Story} options={{animation:"slide_from_bottom"}} />
        <PrivateStack.Screen name="EditProfile" component={EditProfile} options={{animation:"slide_from_bottom"}} />

      </PrivateStack.Navigator>
    </>
  );
};

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
    <SafeAreaProvider style={{ backgroundColor: GRADIENT_2 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRouteName}
          screenOptions={{
            headerShown: false,
            animation: "none",
          }}
        >
          {/* <Stack.Screen name="Auth" component={AuthStackScreen} /> */}
          <Stack.Screen name="Home" component={PrivateStackScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
