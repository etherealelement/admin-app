import {configureStore} from "@reduxjs/toolkit";
import {todosApi} from "./store/users-api";

export  const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware),
})