import { IAcadmicSemester, IMeta } from "@/types";

import { baseApi } from "../baseApi";
import { tagsType } from "@/redux/tag-types";

const ACADEMIC_SEMESTER_URL = "/academic-semesters";

export const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all academic faculties api endpoint
    academicSemesters: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ACADEMIC_SEMESTER_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAcadmicSemester[], meta: IMeta) => {
        return {
          academicSemesters: response,
          meta,
        };
      },
      providesTags: [tagsType.academicSemester],
    }),
    // get single academic faculty by id api endpoint
    academicSemester: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ACADEMIC_SEMESTER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagsType.academicSemester],
    }),
    // create academic faculty api endpoint
    addAcademicSemester: build.mutation({
      query: (data) => ({
        url: ACADEMIC_SEMESTER_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagsType.academicSemester],
    }),
    // update academic faculty api endpoint
    updateAcademicSemester: build.mutation({
      query: (data) => ({
        url: `${ACADEMIC_SEMESTER_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagsType.academicSemester],
    }),
    // delete academic faculty api endpoint
    deleteAcademicSemester: build.mutation({
      query: (id) => ({
        url: `${ACADEMIC_SEMESTER_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagsType.academicSemester],
    }),
  }),
});

export const {
  useAcademicSemesterQuery,
  useAcademicSemestersQuery,
  useAddAcademicSemesterMutation,
  useDeleteAcademicSemesterMutation,
  useUpdateAcademicSemesterMutation,
} = academicSemesterApi;
