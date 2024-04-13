import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import React, { FC, useRef, useState } from "react";

import { DropdownType } from "../../../types/types";
import CaretDown from "../../../assets/CaretDown.icon";
import CaretUp from "../../../assets/CaretUp.icon";
import Check from "../../../assets/Check.icon";

const states = [
  { item: "Alabama" },
  { item: "Alaska" },
  { item: "Arizona" },
  { item: "Arkansas" },
  { item: "California" },
  { item: "Colorado" },
  { item: "Connecticut" },
  { item: "Delaware" },
  { item: "Florida" },
  { item: "Georgia" },
  { item: "Hawaii" },
  { item: "Idaho" },
  { item: "Illinois" },
  { item: "Indiana" },
  { item: "Iowa" },
  { item: "Kansas" },
  { item: "Kentucky" },
  { item: "Louisiana" },
  { item: "Maine" },
  { item: "Maryland" },
  { item: "Massachusetts" },
  { item: "Michigan" },
  { item: "Minnesota" },
  { item: "Mississippi" },
  { item: "Missouri" },
  { item: "Montana" },
  { item: "Nebraska" },
  { item: "Nevada" },
  { item: "New Hampshire" },
  { item: "New Jersey" },
  { item: "New Mexico" },
  { item: "New York" },
  { item: "North Carolina" },
  { item: "North Dakota" },
  { item: "Ohio" },
  { item: "Oklahoma" },
  { item: "Oregon" },
  { item: "Pennsylvania" },
  { item: "Rhode Island" },
  { item: "South Carolina" },
  { item: "South Dakota" },
  { item: "Tennessee" },
  { item: "Texas" },
  { item: "Utah" },
  { item: "Vermont" },
  { item: "Virginia" },
  { item: "Washington" },
  { item: "West Virginia" },
  { item: "Wisconsin" },
  { item: "Wyoming" },
  { item: "District of Columbia" },
  { item: "Other" },
];

const titles = [
  { item: "Mr." },
  { item: "Mrs." },
  { item: "Miss." },
  { item: "Dr." },
  { item: "Prof." },
  { item: "Other" },
];

const roles = [{ item: "Admin" }, { item: "Member" }];

interface InputDropdownProps {
  dropdownType: DropdownType;
  onSelect: (value: string) => void;
  required?: boolean;
  style?: React.CSSProperties;
}

const InputDropdown: FC<InputDropdownProps> = ({
  dropdownType,
  onSelect,
  required = false,
  style,
}) => {
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(() => {
    if (dropdownType === DropdownType.TITLE) return titles;
    if (dropdownType === DropdownType.STATE) return states;
    return roles;
  });
  const [selectedData, setSelectedData] = useState("");
  const searchRef = useRef();

  const onSearch = (search: string) => {
    if (search !== "") {
      let tempData = data.filter((item) => {
        return item.item.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(() => {
        if (dropdownType === DropdownType.TITLE) return titles;
        if (dropdownType === DropdownType.STATE) return states;
        return roles;
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {dropdownType} {required && <Text style={styles.colorRed}>*</Text>}
      </Text>
      <TouchableOpacity
        style={[styles.dropdownButton, clicked && styles.dropdownButtonClicked]}
        onPress={() => {
          setClicked(!clicked);
        }}
      >
        <Text style={styles.placeHolder}>
          {selectedData == "" ? "None" : selectedData}
        </Text>
        {clicked && <CaretUp />}
        {!clicked && <CaretDown />}
      </TouchableOpacity>
      {clicked ? (
        <View style={styles.dropdownContainer}>
          {dropdownType === DropdownType.STATE && (
            <TextInput
              placeholder="Search ..."
              value={search}
              ref={searchRef}
              onChangeText={(txt) => {
                onSearch(txt);
                setSearch(txt);
              }}
              style={styles.searchInput}
            />
          )}
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
                      onSearch("");
                      setSearch("");
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
                    onSearch("");
                    setSearch("");
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
    width: "100%",
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
    color: "#282B33",
  },
  placeHolder: {
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    color: "#282B33",
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
    color: "#282B33",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 16 * 1.4,
    letterSpacing: 0.2,
  },
  searchInput: {
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    color: "#282B33",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 16 * 1.4,
    letterSpacing: 0.2,
    width: "100%",
    padding: 12,
    marginBottom: 5,
  },
  dropdownButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#C4C6CD",
    borderRadius: 10,
    borderWidth: 1,
    padding: 12,
  },
  dropdownButtonClicked: {
    borderWidth: 2,
    borderColor: "#085ccc",
  },
  dropdownContainer: {
    height: "auto",
    maxHeight: 200,
    width: "100%",
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
    top: 100,
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
  colorRed: {
    color: "red",
  },
});

export default InputDropdown;
