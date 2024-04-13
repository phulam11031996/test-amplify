import React from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";
import { LogoType } from "../../../types/types";
import Download from "../../../assets/Download.icon";
import Plus from "../../../assets/Plus.icon";
import Sort from "../../../assets/Sort.icon";

interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  logoType?: LogoType;
  style?: object;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onPress,
  disabled = false,
  loading = false,
  logoType = LogoType.NONE,
  style,
}) => {
  if (loading) {
    return (
      <Pressable
        style={[styles.button, style]}
        onPress={onPress}
        disabled={disabled}
      >
        <ActivityIndicator size="small" color="#fff" />
      </Pressable>
    );
  }
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
    backgroundColor: "#00B7F4",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    height: 46,
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
    color: "#fff",
  },
  disabledButton: {
    backgroundColor: "#C4C6CD",
  },
  disabledText: {
    color: "#999999",
  },
});

export default PrimaryButton;
