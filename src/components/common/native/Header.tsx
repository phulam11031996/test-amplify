import React from "react";
import { View, Image, Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: "https://clinic-os.com/user-app-assets/header-clinicos.png",
        }}
        style={styles.image}
      />
      <View style={styles.other}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: 120,
    paddingVertical: 12,
  },
  image: {
    width: 116,
    height: 52,
  },
  other: {
    flexGrow: 1,
  },
});

export default Header;
