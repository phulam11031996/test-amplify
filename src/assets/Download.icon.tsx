import React from "react";
import { View } from "react-native";

interface DownloadProps {
  size?: number;
}

const Download: React.FC<DownloadProps> = ({ size = 25 }) => {
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
          d="M18 14V16.6667C18 17.0203 17.8595 17.3594 17.6095 17.6095C17.3594 17.8595 17.0203 18 16.6667 18H7.33333C6.97971 18 6.64057 17.8595 6.39052 17.6095C6.14048 17.3594 6 17.0203 6 16.6667V14M15.3333 9.33333L12 6M12 6L8.66667 9.33333M12 6V14"
          stroke="black"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </View>
  );
};

export default Download;
