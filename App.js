import React from "react";
import Router from "./src/Router";
import AppLoading from "expo-app-loading";
import {
  useFonts as useNunitoSans,
  NunitoSans_200ExtraLight,
  NunitoSans_300Light,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
  NunitoSans_700Bold,
  NunitoSans_800ExtraBold,
  NunitoSans_900Black,
} from "@expo-google-fonts/nunito-sans";
export default function App() {
  let [nunitoSansLoaded] = useNunitoSans({
    "NunitoSans-ExtraLight": NunitoSans_200ExtraLight,
    "NunitoSans-Light": NunitoSans_300Light,
    "NunitoSans-Regular": NunitoSans_400Regular,
    "NunitoSans-SemiBold": NunitoSans_600SemiBold,
    "NunitoSans-Bold": NunitoSans_700Bold,
    "NunitoSans-ExtraBold": NunitoSans_800ExtraBold,
    "NunitoSans-Black": NunitoSans_900Black,
  });
  if (!nunitoSansLoaded) {
    return <AppLoading />;
  }
  return <Router />;
}
