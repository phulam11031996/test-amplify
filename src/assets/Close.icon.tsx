import React from "react";
import { View } from "react-native";

interface CloseProps {
  size?: number;
}

const Close: React.FC<CloseProps> = ({ size = 25 }) => {
  return (
    <View style={{ width: size, height: size }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="#282B33"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </View>
  );
};

export default Close;
