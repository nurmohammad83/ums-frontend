import { IAcadmicFaculty, IMeta } from "@/types";

import { baseApi } from "../baseApi";
import { tagsType } from "@/redux/tag-types";

const ACADEMIC_FACULTY_URL = "/academic-faculties";

export const academicFacultyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all academic faculties api endpoint
    academicFaculties: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: ACADEMIC_FACULTY_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: IAcadmicFaculty[], meta: IMeta) => {
        return {
          academicFaculties: response,
          meta,
        };
      },
      providesTags: [tagsType.academicFaculty],
    }),
    // get single academic faculty by id api endpoint
    academicFaculty: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${ACADEMIC_FACULTY_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagsType.academicFaculty],
    }),
    // create academic faculty api endpoint
    addAcademicFaculty: build.mutation({
      query: (data) => ({
        url: ACADEMIC_FACULTY_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagsType.academicFaculty],
    }),
    // update academic faculty api endpoint
    updateAcademicFaculty: build.mutation({
      query: (data) => ({
        url: `${ACADEMIC_FACULTY_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagsType.academicFaculty],
    }),
    // delete academic faculty api endpoint
    deleteAcademicFaculty: build.mutation({
      query: (id) => ({
        url: `${ACADEMIC_FACULTY_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagsType.academicFaculty],
    }),
  }),
});

export const {
  useAddAcademicFacultyMutation, // create ac faculty hook
  useAcademicFacultiesQuery, // get all faculties hook
  useAcademicFacultyQuery, // get single faculty hook
  useUpdateAcademicFacultyMutation, // update existing faculty hook
  useDeleteAcademicFacultyMutation, // delete existing faculty hook
} = academicFacultyApi;
