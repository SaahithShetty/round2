import {
  AntDesign,
  Entypo,
  Feather,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import PhoneNumberInput from "../../components/auth/PhoneNumberInput";
import { getAuth, PhoneAuthProvider } from "firebase/auth";
import { getApp } from "firebase/app";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import Color from "../../../assets/Colour";

const LoginScreen = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);
  const auth = getAuth();
  const app = getApp();

  useEffect(() => {
    if (verificationId != null) {
      props.navigation.navigate("Otp", {
        phoneNumber: "+91" + phoneNumber,
        verificationId,
      });
    }
  }, [verificationId]);

  const sendVerification = (num) => {
    const phoneProvider = new PhoneAuthProvider(auth);
    phoneProvider
      .verifyPhoneNumber(num, recaptchaVerifier.current)
      .then((data) => {
        setVerificationId(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "android" ? 50 : 0 }}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
      />
      <View style={styles.basicMargin}>
        <Text style={styles.title}>Log in to Anavrin Stays</Text>
      </View>
      <PhoneNumberInput
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <TouchableOpacity
        onPress={() => {
          sendVerification("+91" + phoneNumber);
        }}
        style={{
          margin: 15,
          backgroundColor: phoneNumber.length != 10 ? "#808080" : Color.brown,
          padding: 10,
          borderRadius: 10,
        }}
        disabled={!phoneNumber.length == 10}
      >
        <Text
          style={{
            fontFamily: "bold",
            color: "white",
            fontSize: 18,
            padding: 5,
            textAlign: "center",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exit: { margin: 10 },
  basicMargin: {
    margin: 15,
  },
  title: {
    fontFamily: "bold",
    fontSize: 20,
  },
});

export default LoginScreen;
