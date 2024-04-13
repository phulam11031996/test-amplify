import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useNavigate } from "react-router-native";

import global from "../../styles/globalStyles";
import { login } from "../../services/api";

import Input from "../common/native/Input";
import Header from "../common/native/Header";
import TextLink from "../common/native/TextLink";
import PrimaryButton from "../common/native/PrimaryButton";
import OrSeparator from "../common/native/OrSeperator";
import FooterLinks from "../common/native/FooterLinks";
import LoginWithGoogleButton from "../common/native/GoogleLoginBtn";

const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  let navigation: any = null;
  if (Platform.OS !== "web") navigation = useNavigation();
  if (Platform.OS === "web") navigation = useNavigate();

  const handleOnPressLogInWithEmail = async () => {
    setLoading(true);
    try {
      const { data, error } = await login(email, password);
      if (error) setErrorMessage(error.message);
    } catch (error) {
      setErrorMessage("Error in Logging In");
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={{ width: 500, justifyContent: "center", alignItems: "center" }}>
        <Text style={global.title}>Welcome Back</Text>
        <Text style={[global.text, global.fontWeight600, global.fontSize18]}>
          New to ClinicOS?{" "}
          <TextLink
            to={"/signup"}
            text={"Sign up"}
            style={[global.blue, global.fontSize18]}
          />
        </Text>
        <LoginWithGoogleButton />
        <OrSeparator />
        {errorMessage !== "" && (
          <Text style={global.errorText}>{errorMessage}</Text>
        )}
        <Input
          type="email-address"
          name="Email"
          placeholder="name@work-email.com"
          value={email}
          onChangeText={setEmail}
          required
        />
        <Input
          name="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          required
        />
        <View style={styles.forgotPasswordContainer}>
          <TextLink to="/forgot-password" text="Forgot password?" />
        </View>
        <PrimaryButton
          text="Log In with Email"
          onPress={handleOnPressLogInWithEmail}
          disabled={email && password ? false : true}
          loading={loading}
        />
      </View>
      <FooterLinks />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  forgotPasswordContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    width: "100%",
  },
});

export default Signin;
