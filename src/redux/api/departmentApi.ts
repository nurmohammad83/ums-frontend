import { IDepartments, IMeta } from "@/types";
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

    departments: build.query({
      query: () => ({
        url: DEPARTMENT_URL,
        method: "GET",
      }),
      transformResponse: (response: IDepartments, meta: IMeta) => {
        return {
          departments: response,
          meta,
        };
      },
      providesTags: [tagsType.user],
    }),
  }),
  overrideExisting: false,
});

export const { useAddDepartmentMutation, useDepartmentsQuery } = departmentApi;
