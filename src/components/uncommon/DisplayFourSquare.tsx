import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
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

const DisplayFourSquare: React.FC = () => {
  return (
    <View style={styles.container}>
      {patientImages.map((image, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={[global.text, global.fontSize18, global.fontWeight400]}>
            {image.viewType}
          </Text>
          <Image style={styles.image} source={{ uri: image.uri }} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 24,
  },
  itemContainer: {
    alignItems: "flex-start",
    gap: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default DisplayFourSquare;
