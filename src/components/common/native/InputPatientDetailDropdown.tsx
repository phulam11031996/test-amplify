import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Platform,
  Pressable,
  Animated,
} from "react-native";
import React, { FC, useRef, useState } from "react";

import CaretIcon from "../../../assets/CaretDown.icon";
import Check from "../../../assets/Check.icon";

const SEX = [{ item: "Male" }, { item: "Female" }, { item: "Other" }];

const APPOINTMENT_TYPE = [{ item: "In-person" }, { item: "Phone call" }];

const APPOINTMENT_STATUS = [
  { item: "Confirmed" },
  { item: "In review" },
  { item: "No" },
];

const AREA_INTEREST = [
  { item: "Torso" },
  { item: "Head" },
  { item: "Leg" },
  { item: "Other" },
];

const PROCEDURE = [
  { item: "Breast Augmentation" },
  { item: "Breast Lift" },
  { item: "BBL" },
];

interface InputPatientDetailDropdownProps {
  value: "string";
  name:
    | "Sex"
    | "Area Interest"
    | "Appointment Status"
    | "Appointment Type"
    | "Procedure";
  allowSearch?: boolean;
  onSelect: (value: string) => void;
}

const InputPatientDetailDropdown: FC<InputPatientDetailDropdownProps> = ({
  value,
  name,
  onSelect,
  allowSearch = false,
}) => {
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(() => {
    if (name === "Sex") return SEX;
    if (name === "Area Interest") return AREA_INTEREST;
    if (name === "Appointment Type") return APPOINTMENT_TYPE;
    if (name === "Procedure") return PROCEDURE;
    return APPOINTMENT_STATUS;
  });
  const [selectedData, setSelectedData] = useState<string>(value);
  const searchRef = useRef<TextInput>(null);
  const [rotateAnim] = useState(new Animated.Value(0));

  const toggleCaret = () => {
    setClicked(!clicked);
    const rotateTo = clicked ? 0 : 1;
    Animated.timing(rotateAnim, {
      toValue: rotateTo,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const onSearch = (searchValue: string) => {
    if (searchValue.length < search.length) {
      let tempData: any;
      if (name === "Sex") tempData = SEX;
      else if (name === "Area Interest") tempData = AREA_INTEREST;
      else if (name === "Appointment Type") tempData = APPOINTMENT_TYPE;
      else if (name === "Procedure") return PROCEDURE;
      else tempData = APPOINTMENT_STATUS;
      tempData = tempData.filter((item: { item: string }) => {
        return item.item.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
      });
      setData(tempData);
    } else if (searchValue !== "") {
      let tempData = data.filter((item) => {
        return item.item.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(() => {
        if (name === "Sex") return SEX;
        if (name === "Area Interest") return AREA_INTEREST;
        if (name === "Appointment Type") return APPOINTMENT_TYPE;
        if (name === "Procedure") return PROCEDURE;
        return APPOINTMENT_STATUS;
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
        {":"}
      </Text>
      <View style={{ position: "relative" }}>
        <Pressable
          style={[styles.placeHolder, clicked && styles.placeHolderClicked]}
          onPress={toggleCaret} // Call toggleCaret onPress
        >
          <Text style={styles.placeHolderText}>
            {selectedData === "" ? "None" : selectedData}
          </Text>
          <Animated.View
            style={{
              transform: [
                {
                  rotate: rotateAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "180deg"],
                  }),
                },
              ],
            }}
          >
            <CaretIcon />
          </Animated.View>
        </Pressable>
        {clicked && (
          <Animated.View
            style={[styles.dropdownContainer, { opacity: rotateAnim }]}
          >
            {allowSearch && (
              <View style={{ marginBottom: 4 }}>
                <TextInput
                  placeholder="Search ..."
                  value={search}
                  ref={searchRef}
                  onChangeText={(txt) => {
                    setSearch(txt);
                    onSearch(txt);
                  }}
                  style={styles.placeHolderText}
                />
              </View>
            )}
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                if (item.item === selectedData)
                  return (
                    <Pressable
                      key={index}
                      style={[styles.selectedDataItem]}
                      onPress={() => {
                        setSelectedData(item.item);
                        onSelect(item.item);
                        toggleCaret();
                        onSearch("");
                        setSearch("");
                      }}
                    >
                      <Text style={styles.placeHolderText}>{item.item}</Text>
                      <View style={styles.checkIconContainer}>
                        <Check />
                      </View>
                    </Pressable>
                  );
                return (
                  <Pressable
                    key={index}
                    onPress={() => {
                      setSelectedData(item.item);
                      onSelect(item.item);
                      toggleCaret();
                      onSearch("");
                      setSearch("");
                    }}
                  >
                    <Text style={styles.placeHolderText}>{item.item}</Text>
                  </Pressable>
                );
              }}
            />
          </Animated.View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
  name: {
    width: 160,
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    fontSize: 16,
    lineHeight: 16 * 1.4,
    color: "#282B33",
    fontWeight: "600",
    letterSpacing: 0.032,
    paddingTop: 4,
  },
  placeHolderText: {
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    color: "#000",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 16 * 1.4,
    letterSpacing: 0.032,
    width: "100%",
    paddingVertical: 4,
    paddingHorizontal: 2,
    userSelect: "none",
  },
  placeHolder: {
    width: 260,
    height: 30,
    borderRadius: 10,
    borderColor: "#C4C6CD",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeHolderClicked: {
    borderWidth: 1,
    borderColor: "#085ccc",
  },
  dropdownContainer: {
    height: "auto",
    maxHeight: 200,
    width: 260,
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
    top: 36,
  },
  checkIconContainer: {
    position: "absolute",
    right: 8,
  },
  selectedDataItem: {
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#F8F8F8",
  },
});

export default InputPatientDetailDropdown;
