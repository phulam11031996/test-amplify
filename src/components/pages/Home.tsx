import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
} from "react-native";

import global from "../../styles/globalStyles";
import { PatientDetailType, TabType } from "../../types/types";
import DashboardIcon from "../../assets/Dashboard.icon";
import PatientIcon from "../../assets/Patient.icon";

import DashboardHeader from "../uncommon/DashboardHeader";
import PatientDetail from "../tab-pages/PatientDetail";
import Dashboard from "../tab-pages/Dashboard";
import Patient from "../tab-pages/Patient";

const TABSIZE = 200;

const Home = () => {
  const { width, height } = useWindowDimensions();
  const [selectedTab, setSelectedTab] = useState<TabType>(TabType.PATIENT);
  const [patientDetail, setPatientDetail] = useState<PatientDetailType | null>(
    null
  );

  const storeNullToPatientDetail = () => {
    setPatientDetail(null);
  };

  const storePatientDetail = (patientDetail: PatientDetailType) => {
    setPatientDetail(patientDetail);
  };

  const handleTabPress = (tab: TabType) => {
    setSelectedTab(tab);
  };

  useEffect(() => {}, [width, height]);

  return (
    <View style={[styles.dashboard, { height: height - 77 }]}>
      <DashboardHeader />
      <View style={[styles.dashboardBody, { height: height - 77 }]}>
        <View style={[styles.dashboardBodyLeft, { width: TABSIZE }]}>
          <Text style={[global.text, global.fontWeight600]}>Business name</Text>
          <Pressable
            style={[
              styles.tabButton,
              selectedTab === TabType.DASHBOARD && styles.selectedTab,
            ]}
            onPress={() => handleTabPress(TabType.DASHBOARD)}
          >
            <DashboardIcon />
            <Text style={[global.text, global.fontWeight600]}>Dashboard</Text>
          </Pressable>
          <Pressable
            style={[
              styles.tabButton,
              selectedTab === TabType.PATIENT && styles.selectedTab,
            ]}
            onPress={() => handleTabPress(TabType.PATIENT)}
          >
            <PatientIcon />
            <Text style={[global.text, global.fontWeight600]}>Patient</Text>
          </Pressable>
        </View>
        <View style={[styles.dashboardBodyRight, { width: width - TABSIZE }]}>
          {patientDetail && (
            <PatientDetail
              patientDetail={patientDetail}
              storeNullToPatientDetail={storeNullToPatientDetail}
            />
          )}
          {!patientDetail && selectedTab === TabType.DASHBOARD && <Dashboard />}
          {!patientDetail && selectedTab === TabType.PATIENT && (
            <Patient storePatientDetail={storePatientDetail} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  dashboardBody: {
    flexDirection: "row",
    width: "100%",
  },
  dashboardBodyLeft: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRightColor: "#DDDEE0",
    borderRightWidth: 1,
  },
  dashboardBodyRight: {
    padding: 20,
  },
  tabButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 24,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
  },
  selectedTab: {
    backgroundColor: "rgba(0, 183, 244, 0.1)",
  },
});

export default Home;
