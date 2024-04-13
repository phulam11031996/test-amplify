import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";

import global from "../../styles/globalStyles";
import { PatientDetailType } from "../../types/types";
import { patientDetails } from "../../types/types";

import SearchBar from "../common/native/SearchBar";
import InputDropdownSortBy from "../common/native/InputDropdownSortBy";

type PatietListProps = {
  storePatientDetail: (patientDetail: PatientDetailType) => void;
};

const PatientList: React.FC<PatietListProps> = ({ storePatientDetail }) => {
  const [sortBy, setSortBy] = useState<string>("");
  const { width, height } = useWindowDimensions();
  useEffect(() => {}, [width, height]);

  const sortPatientData = (
    data: PatientDetailType[],
    sortBy: string
  ): PatientDetailType[] => {
    switch (sortBy) {
      case "FirstName":
        return [...data].sort((a, b) => a.firstName.localeCompare(b.firstName));
      case "LastName":
        return [...data].sort((a, b) => a.lastName.localeCompare(b.lastName));
      case "DOB":
        return [...data].sort((a, b) => a.dob.getTime() - b.dob.getTime());
      case "Email":
        return [...data].sort((a, b) => a.email.localeCompare(b.email));
      case "Procedure":
        return [...data].sort((a, b) => a.procedure.localeCompare(b.procedure));
      case "Date and TIME":
        return [...data].sort(
          (a, b) =>
            new Date(a.dataAndTime).getTime() -
            new Date(b.dataAndTime).getTime()
        );
      default:
        return data;
    }
  };

  const sortedPatientData = sortPatientData(patientDetails, sortBy);

  const renderPatientRow = ({ item }: { item: PatientDetailType }) => (
    <Pressable onPress={() => storePatientDetail(item)}>
      <View style={styles.patientListRow}>
        <Text style={global.text}>{item.firstName}</Text>
        <Text style={global.text}>{item.lastName}</Text>
        <Text style={global.text}>{item.dob.toLocaleDateString()}</Text>
        <Text style={global.text}>{item.email}</Text>
        <Text style={global.text}>{item.phone}</Text>
        <Text style={global.text}>{item.sex}</Text>
        <Text style={global.text}>{item.areaInterest}</Text>
        <Text style={global.text}>{item.procedure}</Text>
        <Text style={global.text}>{item.image}</Text>
        <Text style={global.text}>{item.appointmentStatus}</Text>
        <Text style={global.text}>{item.appointmentType}</Text>
        <Text style={global.text}>{item.dataAndTime}</Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.patientListContainer}>
      <View style={styles.searchSortByContainer}>
        <View style={styles.searchContainer}>
          <Text style={[global.text, global.fontWeight600]}>Search by</Text>
          <SearchBar />
        </View>
        <InputDropdownSortBy onSelect={(value: string) => setSortBy(value)} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View style={{ flexDirection: "column" }}>
          <View style={styles.patientListHeader}>
            <Text style={[global.text, global.fontWeight600]}>First Name</Text>
            <Text style={[global.text, global.fontWeight600]}>Last Name</Text>
            <Text style={[global.text, global.fontWeight600]}>DOB</Text>
            <Text style={[global.text, global.fontWeight600]}>Email</Text>
            <Text style={[global.text, global.fontWeight600]}>Phone</Text>
            <Text style={[global.text, global.fontWeight600]}>Sex</Text>
            <Text style={[global.text, global.fontWeight600]}>
              Area Interest
            </Text>
            <Text style={[global.text, global.fontWeight600]}>Procedure</Text>
            <Text style={[global.text, global.fontWeight600]}>Image</Text>
            <Text style={[global.text, global.fontWeight600]}>
              Appointment Status
            </Text>
            <Text style={[global.text, global.fontWeight600]}>
              Appointment Type
            </Text>
            <Text style={[global.text, global.fontWeight600]}>Date & Time</Text>
          </View>
          <View style={{ height: height - 230 }}>
            <FlatList
              data={sortedPatientData}
              keyExtractor={(item, index) => `${index}`}
              renderItem={renderPatientRow}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  patientListContainer: {},
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  searchSortByContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    zIndex: 9999,
  },
  patientListHeader: {
    display: "grid",
    gridTemplateColumns:
      "100px 110px 100px 300px 120px 70px 170px 170px 110px 150px 150px 140px",
    borderBottomColor: "#DDDEE0",
    borderBottomWidth: 1,
    paddingBottom: 0,
  },
  patientListRow: {
    display: "grid",
    gridTemplateColumns:
      "100px 110px 100px 300px 120px 70px 170px 170px 110px 150px 150px 140px",
    paddingVertical: 10,
  },
});

export default PatientList;
