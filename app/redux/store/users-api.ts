import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com/"}),
    endpoints: build => ({
        getUsers: build.query({
            query: () => "users",
        })
    })
})

export  const {useGetUsersQuery} = todosApi