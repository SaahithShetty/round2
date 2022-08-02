import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { getApp } from "firebase/app";
import { useDispatch, useSelector } from "react-redux";
import { PhoneNumberLogin } from "../../store/actions/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";



const OtpVerificationScreen = (props) => {
  const { phoneNumber, verificationId } = props.route.params;

  const auth = getAuth();
  const app = getApp();
  const dispatch = useDispatch();
  const userFullData = useSelector((state) => state.auth);

  const [otp, setOtp] = useState("");
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    if (userData != null && userData.number) {
      dispatch(PhoneNumberLogin(userData.number, userData.uid, userData.token));
    }
  }, [userData]);

  const firstTimeHandler = (user) => {
    console.log("user", user);
    if (user) {
      if (user.phone_number != "") {
        if (!user.first_name) {
          props.navigation.navigate("UserDetail");
        } else {
          props.navigation.navigate("Home");
        }
      }
    }
  };
  useEffect(() => {
    firstTimeHandler(userFullData);
  }, [userFullData]);
  const call_function = async (user) => {
    console.log("CALL_UFUMCTIONs");
    await dispatch(SignInUser(user.uid));
  };

  const Validation_Of_Otp = async (otp) => {
    const credentials = PhoneAuthProvider.credential(verificationId, otp);
    try {
      const response = await signInWithCredential(auth, credentials);
      const token = await response.user.getIdToken(true);
      const user = JSON.stringify({
        number: response.user.phoneNumber,
        token: token,
        uid: response.user.uid,
      });
      await AsyncStorage.setItem("user", user);

      setUserData({
        number: response.user.phoneNumber,
        token: token,
        uid: response.user.uid,
      });
      await call_function({
        number: response.user.phoneNumber,
        token: token,
        uid: response.user.uid,
      });
    } catch (err) {
      if (
        err.message ==
        "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user."
      ) {
        alert("Invalid OTP");
      }
    }
  };

  const Valid = async () => {
    console.log("otp");
    if (otp.length == 6) {
      await Validation_Of_Otp(otp);
      console.log(`Code is ${otp}, you are good to go!`);
    }
  };

  useEffect(() => {
    console.log(otp);
    Valid();
  }, [otp]);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}
        style={{ margin: 15 }}
      >
        <AntDesign name="arrowleft" size={24} />
      </TouchableOpacity>
      <View style={{ margin: 15 }}>
        <Text style={{ fontFamily: "bold", fontSize: 24 }}>
          Confirm your number
        </Text>
        <Text style={{ marginVertical: 5, fontFamily: "light", fontSize: 18 }}>
          Enter the code we've sent by SMS to {phoneNumber}
        </Text>
      </View>
      <View style={{ margin: 15, alignSelf: "center" }}>
        <TextInput
          placeholder="OTP"
          placeholderTextColor={"#d3d3d3"}
          value={otp}
          onChangeText={setOtp}
          keyboardType="number-pad"
          maxLength={6}
          style={{
            fontFamily: "bold",
            fontSize: 20,
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
          }}
        />
        {/* <OTPInputView
          style={{
            width: "80%",
            height: 200,
          }}
          pinCount={6}
          autoFocusOnLoad
          codeInputFieldStyle={{
            width: 30,
            height: 45,
            borderWidth: 0.5,
            color: "black",
            fontFamily: "bold",
            fontSize: 20,
          }}
          codeInputHighlightStyle={{
            borderColor: "black",
            color: "black",
            fontFamily: "bold",
            fontSize: 20,
          }}
          onCodeFilled={async (code) => {
            Validation_Of_Otp(code);
            console.log(`Code is ${code}, you are good to go!`);
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
};
export default OtpVerificationScreen;
