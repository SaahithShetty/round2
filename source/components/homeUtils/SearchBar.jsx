import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import resort from "../../../assets/Images/resort.png";
import Color from "../../../assets/Colour";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const SearchBar = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ImageBackground
        style={{
          width: width,
        }}
        source={resort}
      >
        <View style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
          <View
            style={{
              margin: 15,
              alignSelf: "center",
              marginVertical: 100,
            }}
          >
            <Text
              style={{
                fontFamily: "bold",
                fontSize: 20,
                color: "white",
                textAlign: "center",
              }}
            >
              Handpicked homes, paired with unparalleled hospitality
            </Text>

            <View
              style={{
                backgroundColor: "white",
                marginVertical: 10,
                borderRadius: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderBottomColor: "#d3d3d3",
                  padding: 18,
                  borderBottomWidth: 0.5,
                }}
                onPress={() => {
                  alert("would be taken to property Select Location Screen");
                }}
              >
                <Entypo
                  name="magnifying-glass"
                  size={26}
                  style={{
                    alignSelf: "center",
                    marginRight: 10,
                  }}
                />
                <Text
                  style={{
                    alignSelf: "center",
                    fontFamily: "semibold",
                    fontSize: 20,
                  }}
                >
                  Lonavala, India
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                }}
                onPress={() => {
                  alert("would be taken to Date Selector Screen");
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    borderRightColor: "#d3d3d3",
                    borderRightWidth: 0.5,
                    padding: 18,
                    width: "60%",
                  }}
                >
                  <Feather
                    name="calendar"
                    size={20}
                    style={{
                      alignSelf: "center",
                      marginRight: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "medium",
                      color: "#808080",
                      fontSize: 16,
                    }}
                  >
                    Add Date
                  </Text>
                </View>
                <View
                  style={{
                    padding: 18,
                    flexDirection: "row",
                  }}
                >
                  <AntDesign
                    name="adduser"
                    size={20}
                    style={{
                      alignSelf: "center",
                      marginRight: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "medium",
                      color: "#808080",
                      fontSize: 16,
                    }}
                  >
                    Add Guest
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "#A52A2A",
                borderRadius: 10,
              }}
              onPress={() => {
                alert("would be taken to PropertyList Screen");
              }}
            >
              <Text
                style={{
                  fontFamily: "medium",
                  fontSize: 16,
                  color: "white",
                  textAlign: "center",
                }}
              >
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default SearchBar;
