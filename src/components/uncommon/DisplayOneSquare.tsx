import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import global from "../../styles/globalStyles";

interface PatientImage {
  uri: string;
  viewType: "Front" | "Left Oblique" | "Left" | "Right Oblique" | "Right";
}

const patientImages: PatientImage[] = [
  {
    uri: "https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*",
    viewType: "Front",
  },
  {
    uri: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
    viewType: "Left Oblique",
  },
  {
    uri: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    viewType: "Left",
  },
  {
    uri: "https://img.pikbest.com/origin/09/19/03/598pIkbEsTBVS.jpg!w700wp",
    viewType: "Right Oblique",
  },
  {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBrxwurhqUEwCzGQWwgVKrEZ0T8ZUWQDQwWkjBcpkqLDPEwsf2W9_mLsNNMmZSZ2ZKc4&usqp=CAU",
    viewType: "Right",
  },
];

const DisplayOneSquareCompare: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<PatientImage>(
    patientImages[0]
  );

  const handleImagePress = (image: PatientImage) => {
    setSelectedImage(image);
  };

  return (
    <View style={styles.container}>
      <View style={styles.twoImagesContainer}>
        <Image
          style={styles.selectedImage}
          source={{ uri: selectedImage.uri }}
        />
      </View>
      <View style={styles.fiveImagesContainer}>
        {patientImages.map((image, index) => (
          <TouchableHighlight
            key={index}
            onPress={() => handleImagePress(image)}
            underlayColor="#DDDDDD"
          >
            <Image
              style={[
                styles.image,
                image === selectedImage && styles.selectedImageStyle,
              ]}
              source={{ uri: image.uri }}
            />
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    gap: 14,
  },
  twoImagesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
  },
  fiveImagesContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  selectedImage: {
    width: 387,
    height: 387,
    borderRadius: 5,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "transparent",
  },
  selectedImageStyle: {
    borderColor: "#0000004D",
    filter: "brightness(0.8)",
  },
});

export default DisplayOneSquareCompare;
