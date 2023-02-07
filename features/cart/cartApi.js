import { apiSlice } from "../api/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addCart: builder.mutation({
            query: (data) => ({
                url: "/add-to-cart",
                method: "POST",
                body: data
            }),

        }),
        // loginUser: builder.mutation({
        //     query: (data) => ({
        //         url: "/user/login",
        //         method: "POST",
        //         body: data
        //     }),
        // }),
    }),
});

export const { useAddCartMutation } = cartApi;