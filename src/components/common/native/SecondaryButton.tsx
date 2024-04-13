import React from "react";
import { Text, Pressable, StyleSheet, View } from "react-native";
import { LogoType } from "../../../types/types";
import Download from "../../../assets/Download.icon";
import Plus from "../../../assets/Plus.icon";
import Sort from "../../../assets/Sort.icon";

interface SecondaryButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  style?: object;
  logoType?: LogoType;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  text,
  onPress,
  disabled = false,
  logoType = LogoType.NONE,
  style,
}) => {
  return (
    <Pressable
      style={[styles.button, style, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={{ marginLeft: -7 }}>
        {logoType === LogoType.DOWNLOAD && <Download />}
        {logoType === LogoType.PLUS && <Plus />}
        {logoType === LogoType.SORT && <Sort />}
      </View>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    height: 46,
    borderColor: "#282B33",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    textAlign: "center",
    fontFamily: "Urbanist",
    fontSize: 16,
    lineHeight: 16 * 1.4,
    letterSpacing: 0.032,
    fontStyle: "normal",
    fontWeight: "500",
    color: "#282B33",
  },
  disabledButton: {
    backgroundColor: "#C4C6CD",
  },
  disabledText: {
    color: "#fff",
  },
});

export default SecondaryButton;
