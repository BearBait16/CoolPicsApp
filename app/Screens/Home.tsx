import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
} from "react-native";

const Home = ({ navigation }) => {
  const [bgColor, setBgColor] = useState("gray");
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text>Welcome to RavensRoost! Which Script are you playing?</Text>
      <ScrollView>
        <Button
          onPress={() => navigation.navigate("NoGreaterJoy")}
          title="No Greater Joy"
          color={"blue"}
          accessibilityLabel="No Greater Joy navigation Button"
        />
        <Button
          onPress={() => setBgColor(bgColor === "black" ? "gray" : "black")}
          title="I'm a button!"
          color={"blue"}
          accessibilityLabel="Button Changer"
        />
        <Image source={require("./botc.png")} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
