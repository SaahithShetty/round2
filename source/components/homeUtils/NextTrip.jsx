import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  FlatList,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("screen");
const NextTrip = (props) => {
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
          Locations
        </Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.cityList}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                margin: 15,
                marginLeft: 0,
                overflow: "hidden",
              }}
              onPress={() => {
                alert("would be taken to SelectProperty Screen");
              }}
            >
              <Image
                source={item.image}
                style={{
                  borderRadius: 10,
                  width: width / 3.5,
                  height: width / 3.5,
                }}
              />
              <View
                style={{
                  paddingVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: "medium",
                    fontSize: 16,
                    color: "black",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontFamily: "light",
                    fontSize: 14,
                    color: "#808080",
                  }}
                >
                  {item.propertyNum} properties
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default NextTrip;
