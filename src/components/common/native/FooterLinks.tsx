import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";

import TextLink from "./TextLink";

const FooterLinks = () => {
  return (
    <View style={footerStyles.footerLinksContainer}>
      <View style={footerStyles.footerLinkContainer}>
        <TextLink to="/comming-soon" text="Contact Us" />
      </View>
      <View style={footerStyles.footerLinkContainerMiddle}>
        <TextLink to="/comming-soon" text="Terms of Service" />
      </View>
      <View style={footerStyles.footerLinkContainer}>
        <TextLink to="/comming-soon" text="Privacy Policy" />
      </View>
    </View>
  );
};
const footerStyles = StyleSheet.create({
  footerLinksContainer: {
    flexDirection: "row",
    gap: 24,
  },
  footerLinkContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  footerLinkContainerMiddle: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FooterLinks;
