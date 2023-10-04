import { tagsType } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagsType.user],
    }),
  }),
  overrideExisting: false,
});

export const { useAddDepartmentMutation } = departmentApi;
