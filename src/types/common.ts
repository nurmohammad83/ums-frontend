export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export interface ResponseSuccessData {
  data: any;
  meta?: IMeta;
}

export interface IGenericErrorResponse {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
}

export interface IGenericErrorMessage {
  path: string | number;
  message: string;
}

export interface IDepartments {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IAcadmicFaculty {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IAcadmicDepartment {
  id: string;
  title: string;
  academicFacultyId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IAcadmicSemester {
  id: string;
  title: string;
  year: number;
  code: string;
  startMonth: string;
  endMonth: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type UserName = {
  firstName: string;
  lastName: string;
  middleName?: string;
};

export type IAdmin = {
  id: string;
  name: UserName;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  gender: string;
  permanentAddress: string;
  presentAddress: string;
  bloodGroup: string;
  managementDepartment: string;
  designation: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
