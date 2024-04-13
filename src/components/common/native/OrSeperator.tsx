import React from "react";
import { StyleSheet, Text, View } from "react-native";
import global from "../../../styles/globalStyles";

const OrSeparator = () => {
  return (
    <View style={styles.orContainer}>
      <View style={styles.underlineContainer} />
      <Text style={[global.text, global.fontWeight500, styles.orText]}>or</Text>
      <View style={styles.underlineContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  orText: {
    marginHorizontal: 24,
  },
  underlineContainer: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginBottom: 6,
    flexGrow: 1,
  },
  orContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 5,
  },
});

export default OrSeparator;
