import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useNavigate } from "react-router-native";

import global from "../../styles/globalStyles";
import { DropdownType } from "../../types/types";
import { supabase } from "../../utils/supabase";

import Header from "../common/native/Header";
import Input from "../common/native/Input";
import TextLink from "../common/native/TextLink";
import OrSeparator from "../common/native/OrSeperator";
import FooterLinks from "../common/native/FooterLinks";
import PrimaryButton from "../common/native/PrimaryButton";
import SecondaryButton from "../common/native/SecondaryButton";
import InputDropdown from "../common/native/InputDropdown";
import LoginWithGoogleButton from "../common/native/GoogleLoginBtn";

const Signup = () => {
  const [step, setStep] = useState<number>(1);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [errorMessageStep1, setErrorMessageStep1] = useState<string>("");
  const [errorMessageStep2, setErrorMessageStep2] = useState<string>("");
  const [errorMessageStep3, setErrorMessageStep3] = useState<string>("");
  const [errorMessageStep4, setErrorMessageStep4] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  let navigation: any = null;
  if (Platform.OS !== "web") navigation = useNavigation();
  if (Platform.OS === "web") navigation = useNavigate();

  const handleOnPressLogInWithEmail = async () => {
    const trimedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimedEmail)) {
      setErrorMessageStep1("Please enter a valid email address.");
      return;
    }

    setStep((prevStep) => prevStep + 1);
  };

  const handleOnPressNext2 = () => {
    if (password !== confirmPassword) {
      setErrorMessageStep2("Please make sure your passwords match.");
      return;
    }
    if (password.length < 8) {
      setErrorMessageStep2("Invalid password");
      return;
    }
    setStep((prevStep) => prevStep + 1);
  };

  const handleOnPressNextStep3 = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const register = (email: string, password: string) =>
    supabase.auth.signUp({ email, password });

  const handleOnPressNextStep4 = async () => {
    const phoneRegex =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    if (phoneNumber && !phoneRegex.test(phoneNumber)) {
      setErrorMessageStep4("Invalid phone number format");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await register(email, password);
      if (error) setErrorMessageStep4(error.message);
      if (!error) setStep((prevStep) => prevStep + 1);
    } catch (error) {
      setErrorMessageStep4("Error in Creating Account");
    }
    setLoading(false);
  };

  const handleOnPressBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View
        style={{ width: 500, justifyContent: "center", alignItems: "center" }}
      >
        {step === 1 && (
          <>
            <Text style={global.title}>Welcome to ClinicOS</Text>
            <Text
              style={[global.text, global.fontWeight600, global.fontSize18]}
            >
              Already have an account?{" "}
              <TextLink
                to={"/signin"}
                text={"Sign In"}
                style={[global.blue, global.fontSize18]}
              />
            </Text>
            <LoginWithGoogleButton />
            <OrSeparator />
            <Text style={[global.text, global.alignSelfStart]}>
              We suggest using{" "}
              <Text style={global.fontWeight600}>
                the email address you use at work.
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
            {errorMessageStep1 !== "" && (
              <Text style={global.errorText}>{errorMessageStep1}</Text>
            )}
            <PrimaryButton
              text="Log In with Email"
              onPress={handleOnPressLogInWithEmail}
              disabled={email ? false : true}
              loading={loading}
            />
          </>
        )}

        {step === 2 && (
          <>
            <Text
              style={[
                global.text,
                global.fontSize20,
                global.fontWeight600,
                global.alignSelfStart,
              ]}
            >
              Step 1 of 3
            </Text>
            <Text style={[global.title, global.alignSelfStart]}>
              Let's get you started
            </Text>
            <Input
              name="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              required
            />
            <Input
              name="Confirm Password"
              placeholder="Enter your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              required
            />
            {errorMessageStep2 !== "" && (
              <Text style={global.errorText}>{errorMessageStep2}</Text>
            )}
            <View style={styles.backNextBtnsContainer}>
              <SecondaryButton
                text="Back"
                onPress={handleOnPressBack}
                style={global.width140}
              />
              <PrimaryButton
                text="Next"
                onPress={handleOnPressNext2}
                disabled={password && confirmPassword ? false : true}
                style={global.width140}
              />
            </View>
          </>
        )}

        {step === 3 && (
          <>
            <Text
              style={[
                global.text,
                global.fontSize20,
                global.fontWeight600,
                global.alignSelfStart,
              ]}
            >
              Step 2 of 3
            </Text>
            <Text style={[global.title, global.alignSelfStart]}>
              Tell us about yourself
            </Text>
            <InputDropdown
              dropdownType={DropdownType.TITLE}
              onSelect={setTitle}
              required
            />
            <Input
              name="Full name"
              placeholder=""
              value={fullName}
              onChangeText={setFullName}
              required
            />
            {errorMessageStep4 !== "" && (
              <Text style={global.errorText}>{errorMessageStep3}</Text>
            )}
            <View style={styles.backNextBtnsContainer}>
              <SecondaryButton
                text="Back"
                onPress={handleOnPressBack}
                style={global.width140}
              />
              <PrimaryButton
                text="Next"
                onPress={handleOnPressNextStep3}
                disabled={title && fullName ? false : true}
                style={global.width140}
              />
            </View>
          </>
        )}

        {step === 4 && (
          <>
            <Text
              style={[
                global.text,
                global.fontSize20,
                global.fontWeight600,
                global.alignSelfStart,
              ]}
            >
              Step 3 of 3
            </Text>
            <Text style={[global.title, global.alignSelfStart]}>
              Tell us about your business
            </Text>
            <Input
              name="Business Name"
              value={businessName}
              onChangeText={setBusinessName}
              required
            />
            <Input
              name="Job Title"
              value={jobTitle}
              onChangeText={setJobTitle}
            />
            <Input
              name="Phone number"
              type="numeric"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <InputDropdown
              dropdownType={DropdownType.STATE}
              onSelect={setState}
              required
            />
            {errorMessageStep4 !== "" && (
              <Text style={global.errorText}>{errorMessageStep4}</Text>
            )}
            <View style={styles.backNextBtnsContainer}>
              <SecondaryButton
                text="Back"
                onPress={handleOnPressBack}
                style={global.width140}
              />
              <PrimaryButton
                text="Next"
                onPress={handleOnPressNextStep4}
                disabled={businessName && state ? false : true}
                style={global.width140}
                loading={loading}
              />
            </View>
          </>
        )}
        {step === 5 && (
          <>
            <Text style={global.title}>Registered</Text>
            <Text style={global.text}>
              Check your email to confirm:{" "}
              <Text style={global.fontWeight600}>{email}</Text>
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
  resendCodeContainer: {
    flexDirection: "column",
    alignItems: "flex-end",
    width: "100%",
  },
  backNextBtnsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Signup;
