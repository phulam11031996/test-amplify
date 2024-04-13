import React from "react";
import { NativeRouter } from "react-router-native";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <React.StrictMode>
      <NativeRouter>
        <Navigation />
      </NativeRouter>
    </React.StrictMode>
  );
}
