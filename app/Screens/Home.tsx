import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const Home = ({ navigation }) => {
  const [isPressed0, setIsPressed0] = useState(false);
  const [isPressed1, setIsPressed1] = useState(false);
  const [bgColor, setBgColor] = useState("gray");

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.titleText}>
        Welcome to RavensRoost! Which Script are you playing?
      </Text>
      <ScrollView>
        <TouchableOpacity
          style={[styles.button, isPressed0 && styles.buttonPressed]}
          onPress={() => setBgColor(bgColor === "black" ? "gray" : "black")}
          onPressIn={() => setIsPressed0(true)}
          onPressOut={() => setIsPressed0(false)}
        >
          <Text style={styles.buttonText}>Background Change</Text>
        </TouchableOpacity>

        <Image source={require("../../Assets/Pics/botc.png")} />

        <TouchableOpacity
          style={[styles.button, isPressed1 && styles.buttonPressed]}
          onPress={() => navigation.navigate("NoGreaterJoy")}
          onPressIn={() => setIsPressed1(true)}
          onPressOut={() => setIsPressed1(false)}
        >
          <Text style={styles.buttonText}>No Greater Joy</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
  },
  button: {
    backgroundColor: "purple",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    padding: 200,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    backgroundColor: "gold",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;
