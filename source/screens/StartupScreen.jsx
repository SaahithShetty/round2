import React, { useEffect, useState } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { SignInUser } from "../store/actions/auth";
import logo from "../../assets/Images/logo2.png";

const StartupScreen = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const call_function = async (user) => {
    await dispatch(SignInUser(user.uid));
  };
  const checkIfLoggedIn = async () => {
    const user = await AsyncStorage.getItem("user");
    console.log("USER", user);
    if (user != null) {
      console.log("USER====>", JSON.parse(user));
      await call_function(JSON.parse(user));
      setLoggedIn(true);
    } else {
      props.navigation.navigate("Login");
    }
  };
  useEffect(() => {
    checkIfLoggedIn();
  }, []);
  useEffect(() => {
    if (loggedIn) {
      if (user.phone_number != "") {
        if (!user.first_name) {
          props.navigation.navigate("UserDetail");
        } else {
          props.navigation.navigate("Home");
        }
      }
    }
  }, [loggedIn, user]);
  return (
    <View style={styles.screen}>
      <Image source={logo} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F0E3",
  },
  image: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 4,
  },
});
export default StartupScreen;
