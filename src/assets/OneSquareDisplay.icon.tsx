import React from "react";
import { View } from "react-native";

interface OneSquareDisplayProps {
  size?: number;
  selected?: boolean;
}

const OneSquareDisplay: React.FC<OneSquareDisplayProps> = ({
  size = 25,
  selected = false,
}) => {
  return (
    <View style={{ width: size, height: size }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="24"
        viewBox="0 0 32 24"
        fill="none"
      >
        <rect
          x="0.957153"
          y="0.5"
          width="30.5429"
          height="16.1429"
          rx="4.5"
          stroke={selected ? "#00B7F4" : "black"}
        />
        <ellipse
          cx="2.5143"
          cy="21.9429"
          rx="2.05714"
          ry="2.05714"
          fill={selected ? "#00B7F4" : "black"}
        />
        <ellipse
          cx="9.37144"
          cy="21.9429"
          rx="2.05714"
          ry="2.05714"
          fill={selected ? "#00B7F4" : "black"}
        />
        <ellipse
          cx="16.2286"
          cy="21.9429"
          rx="2.05714"
          ry="2.05714"
          fill={selected ? "#00B7F4" : "black"}
        />
        <ellipse
          cx="23.0857"
          cy="21.9429"
          rx="2.05714"
          ry="2.05714"
          fill={selected ? "#00B7F4" : "black"}
        />
        <ellipse
          cx="29.9429"
          cy="21.9429"
          rx="2.05714"
          ry="2.05714"
          fill={selected ? "#00B7F4" : "black"}
        />
      </svg>
    </View>
  );
};

export default OneSquareDisplay;
