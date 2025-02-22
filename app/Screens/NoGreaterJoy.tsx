import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Pdf from "react-native-pdf";

const NoGreaterJoy = () => {
  let NGJFilePath = "../BOtCTpdfs/no-greater-joy.pdf";
  const source = { uri: NGJFilePath, cache: true };
  return (
    <View style={styles.container}>
      <Text>PDF Free download from official Blood on the Clocktower Site</Text>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, NGJFilePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
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
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default NoGreaterJoy;
