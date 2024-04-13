import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import React, { FC, useState } from "react";

import Check from "../../../assets/Check.icon";
import Sort from "../../../assets/Sort.icon";

const roles = [
  { item: "First name" },
  { item: "Last name" },
  { item: "DOB" },
  { item: "Email" },
  { item: "Procedure" },
  { item: "Date & Time" },
];

interface InputDropdownSortByProps {
  onSelect: (value: string) => void;
  required?: boolean;
  style?: React.CSSProperties;
}

const InputDropdownSortBy: FC<InputDropdownSortByProps> = ({
  onSelect,
  style,
}) => {
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(roles);
  const [selectedData, setSelectedData] = useState("");

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.dropdownButton, clicked && styles.dropdownButtonClicked]}
        onPress={() => {
          setClicked(!clicked);
        }}
      >
        <Sort />
        <Text style={styles.placeHolder}>
          {selectedData == "" ? "Sort By" : selectedData}
        </Text>
      </Pressable>
      {clicked ? (
        <View style={styles.dropdownContainer}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => {
              if (item.item === selectedData)
                return (
                  <Pressable
                    key={index}
                    style={[styles.dataItem, styles.selectedDataItem]}
                    onPress={() => {
                      setSelectedData(item.item);
                      onSelect(item.item);
                      setClicked(!clicked);
                    }}
                  >
                    <Text style={styles.textItem}>{item.item}</Text>
                    <View style={styles.checkIconContainer}>
                      <Check />
                    </View>
                  </Pressable>
                );
              return (
                <Pressable
                  key={index}
                  style={styles.dataItem}
                  onPress={() => {
                    setSelectedData(item.item);
                    onSelect(item.item);
                    setClicked(!clicked);
                  }}
                >
                  <Text style={styles.textItem}>{item.item}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    position: "relative",
    zIndex: 9999,
  },
  name: {
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    fontSize: 18,
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: 18 * 1.4,
    paddingVertical: 12,
  },
  placeHolder: {
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 16 * 1.4,
    letterSpacing: 0.2,
  },
  textItem: {
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 16 * 1.4,
    letterSpacing: 0.2,
  },
  dropdownButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#C4C6CD",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 12,
    gap: 6,
  },
  dropdownButtonClicked: {
    borderWidth: 2,
    borderColor: "#085ccc",
  },
  dropdownContainer: {
    height: "auto",
    width: "100%",
    maxHeight: 200,
    backgroundColor: "#fff",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    padding: 4,
    position: "absolute",
    top: 30,
  },
  checkIconContainer: {
    position: "absolute",
    right: 8,
  },
  dataItem: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    padding: 12,
  },
  selectedDataItem: {
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    backgroundColor: "#F8F8F8",
  },
});

export default InputDropdownSortBy;
