import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import GoogleIcon from "../../../assets/Google.icon";
import { supabase } from "../../../utils/supabase";

const LoginWithGoogleButton = () => {
  const handleLoginWithGoogle = async () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <Pressable style={styles.container} onPress={handleLoginWithGoogle}>
      <GoogleIcon size={24} />
      <Text style={styles.text}>Login with Google</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 12,
    gap: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#282B33",
  },
  text: {
    fontFamily: "Urbanist",
    fontSize: 16,
    fontWeight: "500",
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default LoginWithGoogleButton;
