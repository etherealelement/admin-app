import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { User } from "../interfaces/register-user";



export const registerApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://test-api.itrum.ru/api/",
    }),
    tagTypes: ["Post"],
    endpoints: (build) => ({
        addUser: build.mutation<User, Partial<User>>({
            query: (body) => ({
                url: "auth/users/",
                method: "POST",
                body,
            }),
        }),
    }),
})

export const { useAddUserMutation } = registerApi
