import React, { FC, useState } from "react";
import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import EyeOff from "../../../assets/EyeOff.icon";
import EyeShow from "../../../assets/EyeShow.icon";

interface InputProps extends TextInputProps {
  type?: "default" | "email-address" | "numeric" | "phone-pad";
  name: string;
  placeholder?: string;
  required?: boolean;
  style?: any;
}

const Input: FC<InputProps> = ({
  type = "default",
  name,
  placeholder = "",
  value,
  onChangeText,
  secureTextEntry = false,
  required = false,
  style,
  ...otherProps
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {name} {required && <Text style={styles.colorRed}>*</Text>}
      </Text>
      <TextInput
        style={[styles.input, style]}
        keyboardType={type}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !showPassword}
        {...otherProps}
      />
      {secureTextEntry && (
        <Pressable
          style={styles.togglePassword}
          onPress={togglePasswordVisibility}
          tabIndex={-1}
        >
          {!showPassword && <EyeOff />}
          {showPassword && <EyeShow />}
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  text: {
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 18 * 1.4,
    paddingVertical: 12,
    color: "#282B33",
  },
  input: {
    width: "100%",
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    lineHeight: 16 * 1.4,
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.032,
    color: "#868B97",
    fontStyle: "normal",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderColor: "#C4C6CD",
    borderWidth: 1,
    borderRadius: 10,
  },
  togglePassword: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 11,
    right: 16,
  },
  colorRed: {
    color: "red",
  },
});

export default Input;
