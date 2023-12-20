import {configureStore} from "@reduxjs/toolkit";
import {todosApi} from "./store/users-api";
import {registerApi} from "./store/register-api";

export const store = configureStore({
    reducer: {
        [todosApi.reducerPath]: todosApi.reducer,
        [registerApi.reducerPath]: registerApi.reducer,
    },
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware).concat(registerApi.middleware),
})