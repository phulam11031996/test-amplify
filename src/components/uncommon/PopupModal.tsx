import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Platform,
} from "react-native";

import global from "../../styles/globalStyles";
import Close from "../../assets/Close.icon";
import { DropdownType, ModalType } from "../../types/types";

import Input from "../common/native/Input";
import InputDropdown from "../common/native/InputDropdown";
import PrimaryButton from "../common/native/PrimaryButton";
import SecondaryButton from "../common/native/SecondaryButton";

interface PopupModalProps { visible: boolean;
  modalType: ModalType;
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({
  visible,
  onClose,
  modalType,
}) => {
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const handleModalClose = () => {
    onClose();
  };

  if (ModalType.HEADER_ADD_MEMBER === modalType)
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Add People</Text>
              <Pressable onPress={handleModalClose}>
                <Close />
              </Pressable>
            </View>
            <Input
              type="email-address"
              name="Email"
              placeholder="name@work-email.com"
              value={email}
              onChangeText={setEmail}
              required
            />
            <InputDropdown
              dropdownType={DropdownType.ROLE}
              onSelect={setRole}
              required
            />
            <View style={styles.buttonContainer}>
              <PrimaryButton
                text="Add"
                onPress={handleModalClose}
                style={[global.widthAuto, global.borderRadius80]}
              />
              <SecondaryButton
                text="Cancel"
                onPress={handleModalClose}
                style={[global.widthAuto, global.borderRadius80]}
              />
            </View>
          </View>
        </View>
      </Modal>
    );

  if (ModalType.HEADER_HELP === modalType)
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>No Name</Text>
              <Pressable onPress={handleModalClose}>
                <Close />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );

  if (ModalType.HEADER_NO_NAME === modalType)
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>No Name</Text>
              <Pressable onPress={handleModalClose}>
                <Close />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );

  if (ModalType.ADD_A_NEW_PATIENT === modalType)
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Add a new patient</Text>
              <Pressable onPress={handleModalClose}>
                <Close />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );

  if (ModalType.SHARE_ENGAGE_LINK === modalType)
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Share engage link</Text>
              <Pressable onPress={handleModalClose}>
                <Close />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );

  if (ModalType.NONE === modalType)
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={handleModalClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>None</Text>
              <Pressable onPress={handleModalClose}>
                <Close />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: 465,
    height: 358,
    padding: 24,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    position: "relative",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: Platform.select({
      ios: "",
      android: "",
      web: "Urbanist",
    }),
    fontSize: 20,
    lineHeight: 20 * 1.4,
    letterSpacing: 0.2,
    fontStyle: "normal",
    fontWeight: "600",
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
});

export default PopupModal;
