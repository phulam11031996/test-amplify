import React from "react";
import { View } from "react-native";

interface CaretUpProps {
  size?: number;
}

const CaretUp: React.FC<CaretUpProps> = ({ size = 25 }) => {
  return (
    <View style={{ width: size, height: size }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect
          width="24"
          height="24"
          transform="matrix(-1 0 0 -1 24 24)"
          fill="white"
        />
        <path
          d="M4.10237 14.6024L11.6024 7.10237C11.7078 6.99703 11.8508 6.93787 11.9999 6.93787C12.1489 6.93787 12.2919 6.99703 12.3974 7.10237L19.8974 14.6024C19.9967 14.709 20.0508 14.85 20.0483 14.9958C20.0457 15.1415 19.9866 15.2805 19.8836 15.3836C19.7805 15.4866 19.6415 15.5457 19.4958 15.5483C19.35 15.5508 19.209 15.4967 19.1024 15.3974L11.9999 8.29581L4.89737 15.3974C4.79074 15.4967 4.64971 15.5508 4.50398 15.5483C4.35826 15.5457 4.21922 15.4866 4.11616 15.3836C4.0131 15.2805 3.95406 15.1415 3.95149 14.9958C3.94892 14.85 4.00301 14.709 4.10237 14.6024Z"
          fill="black"
        />
      </svg>
    </View>
  );
};

export default CaretUp;
