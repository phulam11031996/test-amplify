import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

import global from "../../styles/globalStyles";
import { PatientDetailType } from "../../types/types";

import InputPatientDetail from "../common/native/InputPatientDetail";
import InputPatientDetailDropdown from "../common/native/InputPatientDetailDropdown";
import PrimaryButton from "../common/native/PrimaryButton";
import FourSquareDisplay from "../../assets/FourSquareDisplay.icon";
import OneSquareDisplay from "../../assets/OneSquareDisplay.icon";
import OneEightyDisplay from "../../assets/OneEightyDisplay";

import DisplayFourSquare from "../uncommon/DisplayFourSquare";
import DisplayOneSquare from "../uncommon/DisplayOneSquare";
import DisplayOneEighty from "../uncommon/DisplayOneEighty";
import DisplayOneSquareCompare from "../uncommon/DisplayOneSquareCompare";

type PatientListProps = {
  // use this when done developing
  // patientDetail: PatientDetailType;
  patientDetail: PatientDetailType | null;
  storeNullToPatientDetail: () => void;
};

const patientDetail1 = {
  firstName: "First",
  lastName: "Last",
  dob: new Date(),
  email: `example@example.com`,
  phone: "(707) 123 4567",
  sex: "Male",
  areaInterest: "Leg",
  procedure: "Breast Augmentation",
  image: "Pick Model",
  appointmentStatus: "No",
  appointmentType: "Phone call",
  dataAndTime: "03/29/2024 - 12pm",
};

const PatientDetail: React.FC<PatientListProps> = ({
  patientDetail,
  storeNullToPatientDetail,
}) => {
  const [showProfileOrImage, setShowProfileOrImage] = useState<
    "Profile" | "Image"
  >("Image");

  const [selectedButton, setSelectedButton] = useState<
    "Before" | "AI" | "Compare"
  >("Before");

  const [selectedIcon, setSelectedIcon] = useState<
    "FourSquare" | "OneSquare" | "OneEighty"
  >("FourSquare");

  const handleButtonPress = (button: "Before" | "AI" | "Compare") => {
    if (button === "Compare") {
      setSelectedIcon("OneSquare");
    }
    setSelectedButton(button);
  };

  const handleIconPress = (icon: "FourSquare" | "OneSquare" | "OneEighty") => {
    setSelectedIcon(icon);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={storeNullToPatientDetail}>
            <Text
              style={[global.text, global.fontSize24, global.fontWeight500]}
            >
              Patient /{" "}
            </Text>
          </Pressable>
          <Text style={[global.text, global.fontSize24, global.fontWeight700]}>
            {patientDetail1.firstName}
          </Text>
        </View>
        <PrimaryButton
          text={"Share report"}
          style={[global.widthAuto, global.borderRadius80]}
          onPress={() => console.log("")}
        />
      </View>
      <View style={styles.tabContainer}>
        <Pressable
          style={[
            showProfileOrImage === "Profile"
              ? styles.selectedProfileImage
              : styles.unselectedProfileImage,
          ]}
          onPress={() => setShowProfileOrImage("Profile")}
        >
          <Text
            style={[
              global.text,
              global.fontWeight600,
              global.fontSize20,
              showProfileOrImage === "Profile" && global.colorBlue,
            ]}
          >
            Profile
          </Text>
        </Pressable>
        <Pressable
          style={
            showProfileOrImage === "Image"
              ? styles.selectedProfileImage
              : styles.unselectedProfileImage
          }
          onPress={() => setShowProfileOrImage("Image")}
        >
          <Text
            style={[
              global.text,
              global.fontWeight600,
              global.fontSize20,
              showProfileOrImage === "Image" && global.colorBlue,
            ]}
          >
            Image
          </Text>
        </Pressable>
        <View style={styles.grayline} />
      </View>
      {showProfileOrImage === "Profile" && (
        <View style={{ gap: 10 }}>
          <InputPatientDetail
            name={"First name"}
            value={patientDetail1.firstName}
          />
          <InputPatientDetail
            name={"Last name"}
            value={patientDetail1.lastName}
          />
          <InputPatientDetail
            name={"DOB"}
            value={patientDetail1.dob.toDateString()}
          />
          <InputPatientDetail name={"Email"} value={patientDetail1.email} />
          <InputPatientDetail name={"Phone"} value={patientDetail1.phone} />
          <View style={{ zIndex: 5 }}>
            <InputPatientDetailDropdown
              name="Sex"
              onSelect={() => console.log("")}
              value={patientDetail1.sex}
            />
          </View>
          <View style={{ zIndex: 4 }}>
            <InputPatientDetailDropdown
              name="Area Interest"
              onSelect={() => console.log("")}
              value={patientDetail1.areaInterest}
            />
          </View>

          <View style={{ zIndex: 3 }}>
            <InputPatientDetailDropdown
              name="Procedure"
              allowSearch
              onSelect={() => console.log("")}
              value={patientDetail1.procedure}
            />
          </View>
          <View style={{ zIndex: 2 }}>
            <InputPatientDetailDropdown
              name="Appointment Status"
              onSelect={() => console.log("")}
              value={patientDetail1.appointmentStatus}
            />
          </View>
          <View style={{ zIndex: 1 }}>
            <InputPatientDetailDropdown
              name="Appointment Type"
              allowSearch
              onSelect={() => console.log("")}
              value={patientDetail1.appointmentType}
            />
          </View>
          <InputPatientDetail
            name={"Date & Time"}
            value={patientDetail1.dataAndTime}
          />
          <InputPatientDetail
            name={"Note"}
            inputHeight={160}
            value={"This is some note from doctor"}
          />
        </View>
      )}
      {showProfileOrImage === "Image" && (
        <View
          style={{
            flexDirection: "column",
            gap: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 10,
              width: "100%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                backgroundColor: "#F8F8F8",
                borderRadius: 10,
              }}
            >
              <Pressable
                style={styles.beforeAICompareButton}
                onPress={() => handleButtonPress("Before")}
              >
                <Text
                  style={[
                    global.text,
                    global.fontWeight600,
                    selectedButton === "Before" &&
                      styles.beforeAICompareButtonSelected,
                  ]}
                >
                  Before
                </Text>
              </Pressable>
              <Pressable
                style={styles.beforeAICompareButton}
                onPress={() => handleButtonPress("AI")}
              >
                <Text
                  style={[
                    global.text,
                    global.fontWeight600,
                    selectedButton === "AI" &&
                      styles.beforeAICompareButtonSelected,
                  ]}
                >
                  AI
                </Text>
              </Pressable>
              <Pressable
                style={styles.beforeAICompareButton}
                onPress={() => handleButtonPress("Compare")}
              >
                <Text
                  style={[
                    global.text,
                    global.fontWeight600,
                    selectedButton === "Compare" &&
                      styles.beforeAICompareButtonSelected,
                  ]}
                >
                  Compare
                </Text>
              </Pressable>
            </View>
            {selectedButton !== "Compare" && (
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Pressable onPress={() => handleIconPress("FourSquare")}>
                  <FourSquareDisplay selected={selectedIcon === "FourSquare"} />
                </Pressable>
                <View
                  style={{ height: 25, borderColor: "#DDDEE0", borderWidth: 1 }}
                />
                <Pressable onPress={() => handleIconPress("OneSquare")}>
                  <OneSquareDisplay selected={selectedIcon === "OneSquare"} />
                </Pressable>
                <View
                  style={{
                    height: 25,
                    borderColor: "#DDDEE0",
                    borderWidth: 1,
                    marginLeft: 8,
                    marginRight: -3,
                  }}
                />
                <Pressable onPress={() => handleIconPress("OneEighty")}>
                  <OneEightyDisplay selected={selectedIcon === "OneEighty"} />
                </Pressable>
              </View>
            )}
            {selectedButton === "Compare" && (
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Pressable onPress={() => handleIconPress("OneSquare")}>
                  <OneSquareDisplay selected={selectedIcon === "OneSquare"} />
                </Pressable>
              </View>
            )}
          </View>
          {selectedButton === "Before" && selectedIcon === "FourSquare" && (
            <DisplayFourSquare />
          )}
          {selectedButton === "Before" && selectedIcon === "OneSquare" && (
            <DisplayOneSquare />
          )}
          {selectedButton === "Before" && selectedIcon === "OneEighty" && (
            <DisplayOneEighty />
          )}

          {selectedButton === "AI" && selectedIcon === "FourSquare" && (
            <DisplayFourSquare />
          )}
          {selectedButton === "AI" && selectedIcon === "OneSquare" && (
            <DisplayOneSquare />
          )}
          {selectedButton === "AI" && selectedIcon === "OneEighty" && (
            <DisplayOneEighty />
          )}

          {selectedButton === "Compare" && selectedIcon === "OneSquare" && (
            <DisplayOneSquareCompare />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  grayline: {
    gap: 10,
    flexDirection: "row",
    width: "100%",
    borderBottomColor: "#DDDEE0",
    borderBottomWidth: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  tabContainer: {
    flexDirection: "row",
    position: "relative",
    gap: 24,
    marginBottom: 10,
  },
  unselectedProfileImage: {
    color: "#00B7F4",
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  selectedProfileImage: {
    color: "#00B7F4",
    borderBottomColor: "#00B7F4",
    borderBottomWidth: 1,
    zIndex: 2,
    paddingVertical: 12,
    paddingHorizontal: 5,
  },
  beforeAICompareButton: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  beforeAICompareButtonSelected: {
    backgroundColor: "#00B7F41A",
    textAlign: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: 100,
    borderRadius: 10,
  },
});

export default PatientDetail;
