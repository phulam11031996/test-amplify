import React from "react";
import { TextInput, Pressable, StyleSheet, Platform } from "react-native";
import Search from "../../../assets/Search.icon";

const SearchBar = () => {
  return (
    <Pressable style={styles.searchContainer}>
      <Search size={16}/>
      <TextInput
        placeholder="Search..."
        style={styles.search}
        // onChangeText={onChangeText}
        // value={text}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    padding: 8,
    backgroundColor: "#F8F8F8",
    borderRadius: 30,
    maxWidth: 200,
  },
  search: {
    color: "#9EA3A9",
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    fontSize: 14,
    lineHeight: 14 * 1.4,
    fontWeight: "400",
    fontStyle: "normal",
  },
  searchIcon: {
    width: 16,
    height: 16,
  },
});

export default SearchBar;
