import { Platform, StyleSheet } from "react-native";

const global = StyleSheet.create({
  fontSize14: {
    fontSize: 14,
  },

  fontSize16: {
    fontSize: 16,
  },

  fontSize18: {
    fontSize: 18,
  },

  fontSize20: {
    fontSize: 20,
  },

  fontSize24: {
    fontSize: 24,
  },

  fontWeight400: {
    fontWeight: "400",
  },
  fontWeight500: {
    fontWeight: "500",
  },
  fontWeight600: {
    fontWeight: "600",
  },

  fontWeight700: {
    fontWeight: "700",
  },

  colorRed: {
    color: "red",
  },

  colorBlue: {
    color: "#00B7F4",
  },

  textAlignCenter: {
    textAlign: "center",
  },

  alignSelfStart: {
    alignSelf: "flex-start",
  },

  width140: {
    width: 140,
  },

  widthAuto: {
    width: "auto",
  },

  borderRadius80: {
    borderRadius: 80,
  },

  errorText: {
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    fontSize: 14,
    lineHeight: 14 * 1.7,
    color: "red",
    fontWeight: "300",
    letterSpacing: 0.2,
  },

  text: {
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    fontSize: 16,
    lineHeight: 16 * 1.7,
    color: "#282B33",
    fontWeight: "300",
  },

  blue: {
    color: "#00B7F4",
  },

  underlineNone: {
    textDecorationLine: "none",
  },

  title: {
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    fontSize: 36,
    lineHeight: 36 * 1.4,
    color: "#00759B",
    fontWeight: "700",
  },
});

export default global;
