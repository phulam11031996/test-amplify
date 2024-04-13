import React, { FC, useState } from "react";
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  Text,
  Pressable,
} from "react-native";

interface InputProps extends TextInputProps {
  type?: "default" | "email-address" | "numeric" | "phone-pad";
  name: string;
  placeholder?: string;
  required?: boolean;
  style?: any;
  inputHeight?: number;
}

const InputPatientDetail: FC<InputProps> = ({
  type = "default",
  name,
  placeholder = "",
  value,
  onChangeText,
  style,
  inputHeight = 30,
  ...otherProps
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.name}>{name}:</Text>
      <TextInput
        style={[styles.textInput, { height: inputHeight }]}
        value={value}
        keyboardType={type}
        placeholder={placeholder}
        onChangeText={onChangeText}
        {...otherProps}
        multiline={inputHeight > 30 ? true : false} // Add this line to enable multiline
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
  },
  name: {
    width: 160,
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    fontSize: 16,
    lineHeight: 16 * 1.4,
    color: "#282B33",
    fontWeight: "600",
    letterSpacing: 0.032,
    paddingTop: 4,
  },
  textInput: {
    width: 260,
    borderRadius: 10,
    borderColor: "#C4C6CD",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    fontSize: 16,
    lineHeight: 16 * 1.4,
    color: "#000000",
    fontWeight: "500",
    letterSpacing: 0.2,
  },
});

export default InputPatientDetail;
