import { tagsType } from "../tag-types";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagsType.department],
    }),
  }),
  overrideExisting: false,
});

export const { useUserLoginMutation } = authApi;
