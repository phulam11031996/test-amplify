import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useNavigate } from "react-router-native";

import global from "../../styles/globalStyles";
import { supabase } from "../../utils/supabase";
import { signOut } from "../../services/api";

import PrimaryButton from "../common/native/PrimaryButton";
import FooterLinks from "../common/native/FooterLinks";
import Header from "../common/native/Header";
import Input from "../common/native/Input";

const ResetPassword = () => {
  const [step, setStep] = useState<number>(1);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  let navigation: any = null;
  if (Platform.OS !== "web") navigation = useNavigation();
  if (Platform.OS === "web") navigation = useNavigate();

  const resetPassword = (password: string) =>
    supabase.auth.updateUser({ password: password });

  const handleOnPressResetPassword = async () => {
    if (password !== confirmPassword) {
      setErrorMessage("Please make sure your passwords match.");
      return;
    }
    if (password.length < 8) {
      setErrorMessage("Invalid password");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await resetPassword(password);
      if (!error) setStep((prevStep) => prevStep + 1);
    } catch (error) {
      setErrorMessage("Error in Updating Password. Please try again");
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
            <Text style={global.title}>Reset Password</Text>
            <Input
              name="New Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              required
            />
            <Input
              name="Confirm Password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              required
            />
            {errorMessage !== "" && (
              <Text style={global.errorText}>{errorMessage}</Text>
            )}
            <PrimaryButton
              text="Reset Password"
              onPress={handleOnPressResetPassword}
              disabled={password && confirmPassword ? false : true}
              loading={loading}
            />
          </>
        )}

        {step === 2 && (
          <>
            <Text style={global.title}>Password Changed</Text>
            <Text style={global.text}>
              Your password has been
              <Text style={global.fontWeight600}>successfully changed!</Text>
            </Text>
            <PrimaryButton
              text="Back to Login"
              loading={loading}
              onPress={async () => {
                setLoading(true);
                try {
                  const { error } = await signOut();
                  console.log(error);
                } catch (error) {
                  console.log(error);
                }
                setLoading(false);
              }}
            />
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

export default ResetPassword;
