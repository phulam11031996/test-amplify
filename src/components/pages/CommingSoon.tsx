import React from "react";
import { StyleSheet, Text, View } from "react-native";

import global from "../../styles/globalStyles";
import TextLink from "../common/native/TextLink";

const CommingSoon = () => {
  return (
    <View style={styles.container}>
      <Text style={global.title}>Comming Soon</Text>
      <TextLink
        to={"/signin"}
        text={"Back to sign in"}
        style={[global.blue, global.fontSize18]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 422,
  },
  forgotPasswordContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    width: "100%",
  },
});

export default CommingSoon;
