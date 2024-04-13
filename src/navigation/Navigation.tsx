import React, { useEffect, useRef } from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Route, Routes, useNavigate, useNavigation } from "react-router-native";

import { supabase } from "../utils/supabase";

import Home from "../components/pages/Home";
import Signin from "../components/pages/Signin";
import Signup from "../components/pages/Signup";
import CommingSoon from "../components/pages/CommingSoon";
import ResetPassword from "../components/pages/ResetPassword";
import ForgotPassword from "../components/pages/ForgotPassword";

const Stack = createStackNavigator();

const Navigation = () => {
  const isPasswordRecovery = useRef<boolean>(false);

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

  const getUser = async () => {
    const { data } = await supabase.auth.getUser();
    const { user: currentUser } = data;
    if (currentUser) {
      customNavigate("home");
    } else {
      customNavigate("signin");
    }
  };

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(
      (event: any, session: any) => {
        console.log(event);
        if (event == "PASSWORD_RECOVERY") {
          customNavigate("reset-password");
          isPasswordRecovery.current = true;
        } else if (event === "SIGNED_OUT") {
          customNavigate("signin");
          isPasswordRecovery.current = false;
        } else if (event === "SIGNED_IN") {
          if (!isPasswordRecovery.current) customNavigate("home");
        } else if (event === "INITIAL_SESSION") {
          if (!isPasswordRecovery.current) getUser();
        }
      }
    );
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  if (Platform.OS === "web") {
    return (
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/comming-soon" element={<CommingSoon />} />
      </Routes>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="signin" component={Signin} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="dashboard" component={Home} />
          <Stack.Screen name="forgot-password" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default Navigation;
