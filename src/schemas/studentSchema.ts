import * as yup from "yup";

export const student = yup.object().shape({
  password: yup.string().min(6).max(32).required("password is required"),
  student: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First name is required"),
      middleName: yup.string().optional(),
      lastName: yup.string().required("Last name is required"),
    }),
    email: yup.string().email().required("Email is required"),
    contactNo: yup.string().required("Contact No. is required"),
    bloodGroup: yup.string().required("Blood Group is required"),
    academicDepartment: yup
      .string()
      .required("Academic Department is required"),
    academicFaculty: yup.string().required("Academic Faculty is required"),
    academicSemester: yup.string().required("Academic Semester is required"),
    dateOfBirth: yup.string().required("Date Of Birth is required"),
    guardian: yup.object().shape({
      fatherName: yup.string().required("Father Name is required"),
      motherName: yup.string().required("Mother Name is required"),
      fatherContactNo: yup.string().required("Father ContactNo is required"),
    }),
    localGuardian: yup.object().shape({
      name: yup.string().required("Local guardian name  is required"),
      contactNo: yup.string().required("Local guardian ContactNo is required"),
    }),
  }),
});
