import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
    reducerPath: 'todosApi',
    tagTypes: ['users'],
    baseQuery: fetchBaseQuery({baseUrl: "https://65745baef941bda3f2afa539.mockapi.io/"}),
    endpoints: build => ({
        getUsers: build.query({
            query: (search = "") => `users?${search && `filter=${search}`}`,
            invalidatesTags: [{type: "users", id: "LIST"}],
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({id}) => ({type: 'users' as const, id})),
                        {type: 'users', id: 'LIST'},
                    ]
                    : [{type: 'users', id: 'LIST'}],

        }),
        addUser: build.mutation({
            query: (body) => ({
                url: "users",
                method: "POST",
                body,
            }),
            invalidatesTags: [{type: "users", id: "LIST"}]
        }),
        deleteUser: build.mutation({
            query: (id) => ({
                url: `users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{type: "users", id: "LIST"}]
        }),
        filterUser: build.query({
            query: (search = "") => `users?${search && `name=${search}`}`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({id}) => ({type: 'users' as const, id})),
                        {type: 'users', id: 'LIST'},
                    ]
                    : [{type: 'users', id: 'LIST'}],
        })
    })
})

export const {useGetUsersQuery, useAddUserMutation, useDeleteUserMutation, useFilterUserQuery} = todosApi