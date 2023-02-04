import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const categoryNavApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addUser: builder.mutation({
            query: (data) => ({
                url: "/user/register",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                const result = await queryFulfilled;
                dispatch(userLoggedIn(result.data))
            }
        }),
        loginUser: builder.mutation({
            query: (data) => ({
                url: "/user/login",
                method: "POST",
                body: data
            }),
        }),
        getMe: builder.query({
            query: () => `/user/getMe`
        }),
    }),
});

export const { useAddUserMutation, useLoginUserMutation,useGetMeQuery } = categoryNavApi;