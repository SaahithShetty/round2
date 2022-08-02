import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { AddUserDetail } from "../../store/actions/auth";

const UserDetailScreen = (props) => {
  const dispatch = useDispatch();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const currentDate = new Date();
  const [show, setShow] = useState(false);
  const [valid, setValid] = useState(false);

  const submit = () => {
    dispatch(AddUserDetail(fName, lName, email, date.toLocaleDateString()));
    props.navigation.navigate("Home");
  };

  const validation = () => {
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    var age = currentDate.getFullYear() - date.getFullYear();
    const m = currentDate.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < date.getDate())) {
      age--;
    }

    if (fName == "") {
      setValid(false);
      return;
    }
    if (lName == "") {
      setValid(false);
      return;
    }
    if (!expression.test(String(email).toLowerCase())) {
      setValid(false);
      return;
    }
    if (age < 18) {
      setValid(false);
      return;
    }
    setValid(true);
    return;
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;

    setShow(false);
    setDate(currentDate);
  };

  useEffect(() => {
    validation();
  }, [fName, lName, email, date]);
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.screen}>
        <View style={styles.mar}>
          <Text style={styles.titleText}>Add your Info</Text>
        </View>

        <View style={styles.mar}>
          <TextInput
            label="First name"
            mode="outlined"
            style={{
              fontSize: 18,
            }}
            value={fName}
            onChangeText={setFName}
            theme={{
              fonts: { regular: { fontFamily: "medium" } },
              colors: {
                primary: "black",
              },
            }}
          />
          <TextInput
            label="Last name"
            mode="outlined"
            style={{
              fontSize: 18,
            }}
            value={lName}
            onChangeText={setLName}
            theme={{
              fonts: { regular: { fontFamily: "medium" } },
              colors: {
                primary: "black",
              },
            }}
          />
          <Text style={styles.caution}>
            Make sure it matches the name on your government ID.
          </Text>
        </View>
        <View style={styles.mar}>
          <TouchableOpacity style={styles.dob} onPress={() => setShow(true)}>
            <Text
              style={{ fontFamily: "medium", fontSize: 18, color: "#606060" }}
            >
              {date.getDate() != currentDate.getDate()
                ? date.toLocaleDateString()
                : "Date of Birth"}
            </Text>
          </TouchableOpacity>
          {show && (
            <View style={styles.mar}>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                onChange={onChange}
              />
            </View>
          )}

          <Text
            style={{ marginVertical: 5, fontFamily: "light", color: "#818589" }}
          >
            To sign up, you need to atleast be 18. Other people who use Airbnb
            won't see your date of birth
          </Text>
        </View>
        <View style={styles.mar}>
          <TextInput
            label="Email"
            mode="outlined"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            style={{
              fontSize: 18,
            }}
            theme={{
              fonts: { regular: { fontFamily: "medium" } },
              colors: {
                primary: "black",
              },
            }}
          />
          <Text style={styles.caution}>
            We'll email you a reservation confirmation.
          </Text>
        </View>
        <View style={styles.mar}>
          <Text style={{ fontFamily: "medium", fontSize: 16 }}>
            By selecting{" "}
            <Text style={{ fontFamily: "bold" }}>Agree and continue</Text>, I
            agree to{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Anavrin Stays Term of Service
            </Text>
            ,{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Payments Terms of Service
            </Text>
            and{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Anti-Discrimination Policy
            </Text>
            , and acknowledge the{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Privacy Policy
            </Text>
            .
          </Text>
        </View>
        <TouchableOpacity
          disabled={!valid}
          onPress={() => {
            submit();
          }}
          style={[
            styles.submitButton,
            { backgroundColor: valid ? "brown" : "grey" },
          ]}
        >
          <Text style={styles.submitButtonText}>Agree and continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: { height: Dimensions.get("screen").height },
  mar: { margin: 15 },
  titletext: { fontFamily: "bold", fontSize: 24 },
  caution: {
    marginVertical: 5,
    color: "#818589",
    fontFamily: "light",
  },
  dob: {
    borderWidth: 0.5,
    borderRadius: 5,
    paddingVertical: 16,
    paddingHorizontal: 15,
    borderColor: "#383838",
  },
  submitButtonText: {
    textAlign: "center",
    fontFamily: "bold",
    fontSize: 18,
    color: "white",
  },
  submitButton: {
    margin: 15,
    padding: 16,
    borderRadius: 5,
  },
});

export default UserDetailScreen;
