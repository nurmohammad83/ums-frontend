export interface IMeta {
  limit: number;
  page: number;
  size: number;
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
