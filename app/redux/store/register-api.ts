import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const registerApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://test-api.itrum.ru/api/",
    }),
    tagTypes: ["Post"],
    endpoints: (build) => ({
        addUser: build.mutation({
            query: (body) => {
                url: "auth/users/set_username/"

            }
        }),
    }),
})