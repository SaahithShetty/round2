import { AntDesign, Entypo, Feather, Octicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Pressable,
  FlatList,
  Image,
} from "react-native";

import Exclusive_pic from "../../../assets/Images/Exclusive_Pick.png";
import Color from "../../../assets/Colour";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

const { width, height } = Dimensions.get("screen");

const Exclusive = () => {
  const dispatch = useDispatch();
  const propertyList = [];
  // const likedPropertyList = useSelector(
  //   (state) => state.likedProperty.likedPropertyList
  // );

  const likedPropertyList = [];

  const verifiedPropertyList = propertyList.filter(
    (item) => item.verify == "VERIFY_VERIFIED"
  );

  const navigation = useNavigation();
  return (
    <View
      style={{
        margin: 15,
      }}
    >
      <View style={{}}>
        <Text
          style={{
            fontFamily: "bold",
            fontSize: 20,
          }}
        >
          Anavrin's exclusive picks
        </Text>
      </View>
      <View
        style={{
          marginVertical: 10,
          marginBottom: 100,
        }}
      >
        <FlatList
          data={[1, 2, 3]}
          keyExtractor={(_, i) => i.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  alert("would be taken to property Detail Screen");
                }}
                style={{
                  marginRight: 10,
                  borderRadius: 10,
                  overflow: "hidden",
                  borderWidth: 0.8,
                  borderColor: "#d3d3d3",
                }}
              >
                <Image
                  source={require("../../../assets/Images/Exclusive_Pick.png")}
                  style={{
                    width: width / 1.5,
                    height: width / 1.8,
                  }}
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    padding: 15,
                    alignSelf: "flex-end",
                  }}
                  onPress={() => {}}
                >
                  <AntDesign name={"hearto"} size={24} color={Color.brown} />
                </TouchableOpacity>
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    paddingVertical: 20,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "bold",
                      fontSize: 16,
                    }}
                  >
                    3 BHK villa
                  </Text>
                  <Text
                    style={{
                      marginVertical: 5,
                      fontFamily: "medium",
                      color: "#808080",
                    }}
                  >
                    Ng Grand plaza, Sector:-11, Plot:-17.....
                  </Text>
                  <Text
                    style={{
                      marginTop: 10,
                      fontFamily: "light",
                      color: "#808080",
                      fontSize: 12,
                    }}
                  >
                    Start's from
                  </Text>
                  <Text
                    style={{
                      marginTop: 2,
                      fontFamily: "bold",
                    }}
                  >
                    ₹2800
                    <Text
                      style={{
                        fontFamily: "light",
                        color: "#808080",
                        fontSize: 11,
                      }}
                    >
                      / night (Exclusive of taxes)
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Exclusive;
