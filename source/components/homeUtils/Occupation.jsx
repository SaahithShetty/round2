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
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const Occupation = (props) => {
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
          Beautiful homes, curated just for you
        </Text>
      </View>
      <View
        style={{
          marginVertical: 10,
        }}
      >
        <FlatList
          data={props.propertyTypeList}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  marginRight: 10,
                  borderRadius: 10,
                  overflow: "hidden",
                  borderWidth: 1,
                  borderColor: "#d3d3d3",
                }}
                onPress={() => {
                  alert("would be taken to SelectProperty Screen");
                }}
              >
                <Image
                  source={item.image}
                  style={{
                    width: width / 2.5,
                    height: width / 2.7,
                  }}
                />
                <View
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "semibold",
                      fontSize: 16,
                      textAlign: "center",
                    }}
                  >
                    {item.type}
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

export default Occupation;
