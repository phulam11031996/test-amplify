import React from "react";
import { View } from "react-native";
import Svg, { Path, Defs, ClipPath, G, Rect } from "react-native-svg";

interface SearchProps {
  size?: number;
}

const Search: React.FC<SearchProps> = ({ size = 25 }) => {
  return (
    <View style={{ width: size, height: size }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
      >
        <path
          d="M7.66594 14.4997C11.1637 14.4997 13.9993 11.6641 13.9993 8.16634C13.9993 4.66854 11.1637 1.83301 7.66594 1.83301C4.16814 1.83301 1.33261 4.66854 1.33261 8.16634C1.33261 11.6641 4.16814 14.4997 7.66594 14.4997Z"
          stroke="#282B33"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6659 15.1663L13.3326 13.833"
          stroke="#282B33"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </View>
  );
};

export default Search;
