import React, { useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { useNavigate, useNavigation } from "react-router-native";

import global from "../../styles/globalStyles";
import { resetPassword } from "../../services/api";

import Input from "../common/native/Input";
import PrimaryButton from "../common/native/PrimaryButton";
import FooterLinks from "../common/native/FooterLinks";
import Header from "../common/native/Header";
import SecondaryButton from "../common/native/SecondaryButton";

const ForgotPassword = () => {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  let navigation: any = null;
  if (Platform.OS !== "web") navigation = useNavigation();
  if (Platform.OS === "web") navigation = useNavigate();

  const customNavigate = (to: string) => {
    if (Platform.OS !== "web" && navigation) {
      navigation.navigate(`/${to}`);
    } else {
      navigation(`/${to}`);
    }
  };

  const handleOnPressResetLink = async () => {
    setLoading(true);
    try {
      const { data, error } = await resetPassword(email);
      if (error) setErrorMessage(error.message);
      if (!error) setStep((prevStep) => prevStep + 1);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View
        style={{ width: 500, justifyContent: "center", alignItems: "center" }}
      >
        {step === 1 && (
          <>
            <Text style={global.title}>Forgot Password?</Text>
            <Text style={global.text}>
              Enter your email and we will send a link to get your password
              back. We suggest to{" "}
              <Text style={global.fontWeight600}>
                try the email address you use at work.
              </Text>
            </Text>
            <Input
              type="email-address"
              name="Email"
              placeholder="name@work-email.com"
              value={email}
              onChangeText={setEmail}
              required
            />
            {errorMessage !== "" && (
              <Text style={global.errorText}>{errorMessage}</Text>
            )}
            <PrimaryButton
              text="Request a reset link"
              onPress={handleOnPressResetLink}
              disabled={email ? false : true}
              loading={loading}
            />
            <SecondaryButton
              text="Back to Login"
              onPress={() => {
                customNavigate("signin");
              }}
            />
          </>
        )}
        {step === 2 && (
          <>
            <Text style={global.title}>Email Sent</Text>
            <Text style={global.text}>
              We sent an email to{" "}
              <Text style={global.fontWeight600}>{email}</Text> with a link to
              reset your password Please make sure to check your spam folder.
            </Text>
          </>
        )}
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

export default ForgotPassword;
