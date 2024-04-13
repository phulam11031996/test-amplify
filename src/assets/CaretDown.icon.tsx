import React from "react";
import { View } from "react-native";

interface CaretDownProps {
  size?: number;
}

const CaretDown: React.FC<CaretDownProps> = ({ size = 25 }) => {
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
          d="M19.8976 9.39763L12.3976 16.8976C12.2922 17.003 12.1492 17.0621 12.0001 17.0621C11.8511 17.0621 11.7081 17.003 11.6026 16.8976L4.10263 9.39763C4.00327 9.291 3.94918 9.14996 3.95175 9.00424C3.95432 8.85851 4.01335 8.71947 4.11641 8.61641C4.21947 8.51335 4.35851 8.45432 4.50424 8.45175C4.64996 8.44918 4.791 8.50327 4.89763 8.60263L12.0001 15.7042L19.1026 8.60263C19.2093 8.50327 19.3503 8.44918 19.496 8.45175C19.6417 8.45432 19.7808 8.51335 19.8838 8.61641C19.9869 8.71947 20.0459 8.85851 20.0485 9.00424C20.0511 9.14996 19.997 9.291 19.8976 9.39763Z"
          fill="black"
        />
      </svg>
    </View>
  );
};

export default CaretDown;
