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
        })
    }),
});

export const { useAddUserMutation } = categoryNavApi;