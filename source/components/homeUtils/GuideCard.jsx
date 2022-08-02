import { AntDesign, Entypo, Feather, Octicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  ImageBackground,
  FlatList,
  Image,
} from "react-native";
import logowoname from "../../../assets/Images/logowoname(2).png";
import template from "../../../assets/Images/template.png";

const GuideCard = () => {
  return (
    <View
      style={{
        margin: 15,
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <ImageBackground
        source={template}
        style={{
          width: "100%",
        }}
      >
        <View
          style={{
            padding: 15,
            alignSelf: "center",
          }}
        >
          <Image
            source={logowoname}
            style={{
              width: 80,
              height: 80,
              alignSelf: "center",
              borderRadius: 40,
              backgroundColor: "rgba(255,192,203,0.7)",
            }}
          />
          <Text
            style={{
              fontFamily: "bold",
              fontSize: 18,
              marginVertical: 10,
              textAlign: "center",
            }}
          >
            Hello User,
          </Text>
          <Text
            style={{
              fontFamily: "medium",
              fontSize: 16,
              marginVertical: 10,
              textAlign: "center",
            }}
          >
            Need help? I'm here to assisst you with just that
          </Text>
          <Text
            style={{
              fontFamily: "medium",
              fontSize: 16,
              marginVertical: 10,
              textAlign: "center",
              color: "#A52A2A",
            }}
          >
            Let's plan your trip now{" "}
            <AntDesign
              name="right"
              size={16}
              style={{
                alignSelf: "center",
              }}
            />
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GuideCard;
