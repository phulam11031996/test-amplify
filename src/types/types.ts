export enum ModalType {
  HEADER_HELP = "HeaderHelp",
  HEADER_ADD_MEMBER = "HeaderAddMember",
  HEADER_NO_NAME = "HeaderNoName",
  ADD_A_NEW_PATIENT = "AddANewPatient",
  SHARE_ENGAGE_LINK = "ShareEngageLink",
  NONE = "None",
}

export enum DropdownType {
  STATE = "State",
  ROLE = "Role",
  TITLE = "Title",
  SORT = "Sort",
}

export enum TabType {
  DASHBOARD = "Dashboard",
  PATIENT = "Patient",
}

export enum LogoType {
  PLUS = "Plus",
  DOWNLOAD = "Download",
  SORT = "Sort",
  NONE = "None",
}

export type PatientDetailType = {
  firstName: string;
  lastName: string;
  dob: Date;
  email: string;
  phone: string;
  sex: "Male" | "Female";
  areaInterest: "Torso" | "Head" | "Leg" | "Other";
  procedure: string;
  image: "Scanning" | "Upload Photo" | "Pick Model";
  appointmentStatus: "Yes" | "No";
  appointmentType: "In-person" | "Phone Call";
  dataAndTime: string;
};

export const patientDetails: PatientDetailType[] = [];

for (let i = 0; i < 100; i++) {
  const newPatientDetail: PatientDetailType = {
    firstName: "First " + i,
    lastName: "Last " + i,
    dob: new Date(),
    email: `example${i}@example.com`,
    phone: "(707) 123 4567",
    sex: i % 2 === 0 ? "Female" : "Male",
    areaInterest:
      i % 4 === 0
        ? "Torso"
        : i % 4 === 1
          ? "Head"
          : i % 4 === 2
            ? "Other"
            : "Leg",
    procedure:
      i % 3 === 0 ? "BBL" : i % 3 === 1 ? "Breast Lift" : "Breast Augmentation",
    image:
      i % 3 === 0 ? "Scanning" : i % 3 === 1 ? "Upload Photo" : "Pick Model",
    appointmentStatus: i % 2 === 0 ? "Yes" : "No",
    appointmentType: i % 2 === 0 ? "In-person" : "Phone Call",
    dataAndTime: "03/29/2024 - 12pm",
  };
  patientDetails.push(newPatientDetail);
}
