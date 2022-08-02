import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import AppNav from "./source/navigation/AppNav";
import store from "./source/store/Store";
import { Provider } from "react-redux";
import { useState } from "react";

const app = initializeApp(firebaseConfig);

const fontLoading = () => {
  return Font.loadAsync({
    black: require("./assets/fonts/Montserrat-Black.ttf"),
    bold: require("./assets/fonts/Montserrat-Bold.ttf"),
    book: require("./assets/fonts/AirbnbCereal-Book.ttf"),
    extraBold: require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    light: require("./assets/fonts/Montserrat-Light.ttf"),
    medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    logo: require("./assets/fonts/Montserrat-Regular.ttf"),
    extralight: require("./assets/fonts/Montserrat-ExtraLight.ttf"),
    semibold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    thin: require("./assets/fonts/Montserrat-Thin.ttf"),
  });
};

export default function App() {
  const [fontLoad, setFontLoad] = useState(false);

  if (!fontLoad) {
    return (
      <AppLoading
        startAsync={fontLoading}
        onFinish={() => setFontLoad(true)}
        onError={(test) => {
          throw new Error(Text);
        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}
