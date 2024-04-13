import React from "react";
import { StyleSheet, Platform, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "react-router-native";

interface TextLinkProps {
  to: string;
  text: string;
  style?: object;
}

const TextLink: React.FC<TextLinkProps> = ({ to, text, style }) => {
  if (Platform.OS === "web")
    return (
      <Link to={to}>
        <Text style={[styles.text, style]} numberOfLines={1}>
          {text}
        </Text>
      </Link>
    );

  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate(to.substring(1));
  };

  return (
    <Pressable onPress={handleOnPress}>
      <Text style={[styles.text, style]} numberOfLines={1}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    fontSize: 16,
    lineHeight: 16 * 1.4,
    fontWeight: "500",
    fontStyle: "normal",
    color: "#282B33",
  },
});

export default TextLink;
