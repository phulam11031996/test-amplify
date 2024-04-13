import React, { useState } from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

import global from "../../styles/globalStyles";
import { LogoType, ModalType } from "../../types/types";

import PopupModal from "./PopupModal";
import PrimaryButton from "../common/native/PrimaryButton";
import SecondaryButton from "../common/native/SecondaryButton";

const PatientManagement = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModelType] = useState<ModalType>(ModalType.NONE);

  const handleButtonClick = (modalType: ModalType) => {
    setShowModal(true);
    setModelType(modalType);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <View>
      <View style={styles.patientManagementContainer}>
        <Text style={[global.text, global.fontWeight600, global.fontSize24]}>
          Patient Management
        </Text>
        <View style={styles.patientManagementButtonContainer}>
          <PrimaryButton
            text={"Add a new patient"}
            logoType={LogoType.PLUS}
            style={{ width: "auto", borderRadius: 80 }}
            onPress={() => handleButtonClick(ModalType.ADD_A_NEW_PATIENT)}
          />
          <SecondaryButton
            text={"Share engage link"}
            logoType={LogoType.DOWNLOAD}
            style={{ width: "auto", borderRadius: 80 }}
            onPress={() => handleButtonClick(ModalType.SHARE_ENGAGE_LINK)}
          />
        </View>
      </View>
      <PopupModal
        visible={showModal}
        onClose={handleModalClose}
        modalType={modalType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  patientManagementContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  patientManagementButtonContainer: {
    flexDirection: "row",
    gap: 12,
  },
});

export default PatientManagement;
