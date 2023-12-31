import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../interfaces/register-user";


export const loginApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-api.itrum.ru/api/",
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    login: build.mutation<User, Partial<User>>({
      query: (body) => ({
        url: "auth/token/login/",
        method: "POST",
        body,
      }),
    }),
  }),
}) 


export const {useLoginMutation} = loginApi;