import { IAcadmicDepartment, IMeta } from "@/types";

import { baseApi } from "../baseApi";
import { tagsType } from "@/redux/tag-types";

const ACADEMIC_DEPARTMENT_URL = "/academic-departments";

export const academicDepartmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all academic faculties api endpoint
    academicDepartments: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ACADEMIC_DEPARTMENT_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAcadmicDepartment[], meta: IMeta) => {
        return {
          academicDepartments: response,
          meta,
        };
      },
      providesTags: [tagsType.academicDepartment],
    }),
    // get single academic faculty by id api endpoint
    academicDepartment: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ACADEMIC_DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagsType.academicDepartment],
    }),
    // create academic faculty api endpoint
    addAcademicDepartment: build.mutation({
      query: (data) => ({
        url: ACADEMIC_DEPARTMENT_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagsType.academicDepartment],
    }),
    // update academic faculty api endpoint
    updateAcademicDepartment: build.mutation({
      query: (data) => ({
        url: `${ACADEMIC_DEPARTMENT_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagsType.academicDepartment],
    }),
    // delete academic faculty api endpoint
    deleteAcademicDepartment: build.mutation({
      query: (id) => ({
        url: `${ACADEMIC_DEPARTMENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagsType.academicDepartment],
    }),
  }),
});

export const {
  useAcademicDepartmentQuery,
  useAcademicDepartmentsQuery,
  useAddAcademicDepartmentMutation,
  useDeleteAcademicDepartmentMutation,
  useUpdateAcademicDepartmentMutation,
} = academicDepartmentApi;
