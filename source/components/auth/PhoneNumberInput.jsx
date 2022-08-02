import React from "react";
import { Entypo, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, TextInput } from "react-native";
const PhoneNumberInput = (props) => {
  return (
    <View>
      <View
        style={{
          margin: 15,
          borderWidth: 0.4,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 15,
            paddingVertical: 10,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "light",
                fontSize: 14,
                color: "#A9A9A9",
              }}
            >
              Country/Region
            </Text>
            <Text
              style={{
                fontFamily: "light",
                fontSize: 16,
                marginTop: 5,
              }}
            >
              India (+91)
            </Text>
          </View>
          <View
            style={{
              alignSelf: "center",
            }}
          >
            <Feather name="chevron-down" size={30} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderTopWidth: 0.4,
            padding: 15,
          }}
        >
          <TextInput
            style={{
              fontFamily: "light",
              fontSize: 18,
              width: "90%",
              paddingVertical: 10,
            }}
            keyboardType="number-pad"
            placeholder="Phone number"
            value={props.phoneNumber}
            onChangeText={props.setPhoneNumber}
          />
          {props.phoneNumber.length == 10 && (
            <MaterialCommunityIcons
              name="check"
              size={30}
              style={{ alignSelf: "center" }}
            />
          )}
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 15,
        }}
      >
        <Text
          style={{
            fontFamily: "light",
            fontSize: 14,
          }}
        >
          We'll call or text you to confirm your number. Standard message and
          data rates apply.
        </Text>
      </View>
    </View>
  );
};
export default PhoneNumberInput;
