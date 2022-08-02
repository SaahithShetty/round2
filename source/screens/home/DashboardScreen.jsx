import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  ImageBackground,
  Pressable,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import logo from "../../../assets/Images/logo2.png";
import userI from "../../../assets/Images/user.png";

import SearchBar from "../../components/homeUtils/SearchBar";
import NextTrip from "../../components/homeUtils/NextTrip";
import GuideCard from "../../components/homeUtils/GuideCard";
import Occupation from "../../components/homeUtils/Occupation";
import Exclusive from "../../components/homeUtils/Exclusive";
import cityList from "../../../assets/data/city";
import propertyTypeList from "../../../assets/data/propertyType";
import { useSelector } from "react-redux";
const { width, height } = Dimensions.get("screen");

const DashboardScreen = (props) => {
  const user = useSelector((state) => state.auth);
  console.log("USER", user);
  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}

        <View style={styles.header}>
          <Image source={logo} resizeMode="contain" style={styles.logo} />
          <Image source={userI} resizeMode="contain" style={styles.user} />
        </View>

        {/* Picker */}

        <SearchBar />

        {/* Locations */}

        <NextTrip cityList={cityList} />

        {/* Guide  */}

        <GuideCard />

        {/* Occupation  */}

        <Occupation propertyTypeList={propertyTypeList} />

        {/* Exclusive  */}
        <Exclusive />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "white" },
  header: {
    backgroundColor: "#ffffff",
    paddingTop: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: { width: 120, height: 80 },
  user: { width: 40, height: 40, alignSelf: "center" },
});

export default DashboardScreen;
