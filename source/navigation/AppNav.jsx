import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/LoginScreen";
import OtpVerificationScreen from "../screens/auth/OtpVerificationScreen";
import HomeNav from "./HomeNav";
import UserDetailScreen from "../screens/auth/UserDetailScreen";
import StartupScreen from "../screens/StartupScreen";

const AppStack = createStackNavigator();

const AppNav = (props) => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Startup" component={StartupScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
        <AppStack.Screen name="Otp" component={OtpVerificationScreen} />
        <AppStack.Screen name="UserDetail" component={UserDetailScreen} />
        <AppStack.Screen name="Home" component={HomeNav} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
