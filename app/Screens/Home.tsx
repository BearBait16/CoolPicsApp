import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to RavensRoost! Which Script are you playing?</Text>
      <ScrollView>
        <Button
          onPress={() =>
            navigation.navigate("NoGreaterJoy", { name: "No Greater Joy" })
          }
          title="No Greater Joy"
          color={"blue"}
          accessibilityLabel="No Greater Joy navigation Button"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
  },
});

export default Home;
