import React from "react";
import { View, StyleSheet } from "react-native";
import { PatientDetailType } from "../../types/types";
import PatientManagement from "../uncommon/PatientManagement";
import PatientList from "../uncommon/PatientList";

type PatientManagementProps = {
  storePatientDetail: (patientDetail: PatientDetailType) => void;
};

const Patient: React.FC<PatientManagementProps> = ({ storePatientDetail }) => {
  return (
    <View>
      <PatientManagement />
      <PatientList storePatientDetail={storePatientDetail} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Patient;
