import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { loginSuccess } from "../authSlice";


const USER_API="http://localhost:8080/api/v1/user/";
export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: USER_API,
        credentials: "include",
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (inputData) => ({
                url: "login",
                method: "POST",
                body:inputData,
            }),
            async onQueryStarted(_,{queryFulfilled,dispatch}){
                try {
                    const response = await queryFulfilled;
                    dispatch(loginSuccess({user:response.data.user}));
                } catch (error) {
                    console.log(error);
                }
            }
        }),
        registerUser: builder.mutation({
            query: (inputData) => ({
                url: "register",
                method: "POST",
                body:inputData,
            }),
        }),
    }),
});

export const {useRegisterUserMutation,useLoginUserMutation} = authApi