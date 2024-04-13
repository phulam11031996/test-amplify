import React from "react";
import { View } from "react-native";

interface FourSquareDisplayProps {
  size?: number;
  selected?: boolean;
}

const FourSquareDisplay: React.FC<FourSquareDisplayProps> = ({
  size = 25,
  selected = false,
}) => {
  return (
    <View style={{ width: size, height: size }}>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.00261"
          y="0.545455"
          width="9.81818"
          height="9.81818"
          rx="1.63636"
          stroke={selected ? "#00B7F4" : "black"}
          strokeWidth="1.09091"
        />
        <rect
          x="13.9117"
          y="0.545455"
          width="9.81818"
          height="9.81818"
          rx="1.63636"
          stroke={selected ? "#00B7F4" : "black"}
          strokeWidth="1.09091"
        />
        <rect
          x="1.00261"
          y="13.4546"
          width="9.81818"
          height="9.81818"
          rx="1.63636"
          stroke={selected ? "#00B7F4" : "black"}
          strokeWidth="1.09091"
        />
        <rect
          x="13.9117"
          y="13.4546"
          width="9.81818"
          height="9.81818"
          rx="1.63636"
          stroke={selected ? "#00B7F4" : "black"}
          strokeWidth="1.09091"
        />
      </svg>
    </View>
  );
};

export default FourSquareDisplay;
