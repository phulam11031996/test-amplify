import React, { useState } from "react";
import { View, Image, Pressable } from "react-native";
import { StyleSheet } from "react-native";

import { ModalType } from "../../types/types";
import { signOut } from "../../services/api";
import Person from "../../assets/Person.icon";
import PersonAdd from "../../assets/PersonAdd.icon";
import ClarifyHelp from "../../assets/ClarifyHelp.icon";

import PopupModal from "./PopupModal";
import SearchBar from "../common/native/SearchBar";
import PrimaryButton from "../common/native/PrimaryButton";

const DashboardHeader = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalType, setModelType] = useState<ModalType>(ModalType.NONE);
  const [loading, setLoading] = useState<boolean>(false);

  const handleButtonClick = (modalType: ModalType) => {
    setShowModal(true);
    setModelType(modalType);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: "https://clinic-os.com/user-app-assets/header-clinicos.png",
        }}
        style={styles.image}
      />
      <View style={styles.rightContainer}>
        <SearchBar />
        <Pressable onPress={() => handleButtonClick(ModalType.HEADER_HELP)}>
          <ClarifyHelp />
        </Pressable>
        <Pressable
          onPress={() => handleButtonClick(ModalType.HEADER_ADD_MEMBER)}
        >
          <PersonAdd />
        </Pressable>
        <Pressable onPress={() => handleButtonClick(ModalType.HEADER_NO_NAME)}>
          <Person />
        </Pressable>
        <PrimaryButton
          text="Sign Out"
          style={{ width: "120px" }}
          onPress={async () => {
            setLoading(true);
            try {
              const { error } = await signOut();
              console.log(error);
            } catch (error) {
              console.log(error);
            }
            setLoading(false);
          }}
          loading={loading}
        />
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
  headerContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#DDDEE0",
    backgroundColor: "#fff",
  },
  rightContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  image: {
    width: 116,
    height: 52,
  },
});

export default DashboardHeader;
