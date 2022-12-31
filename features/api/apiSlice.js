import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `https://banglar-big-store.onrender.com/api`,
        prepareHeaders: async (headers, { getState, endpoint }) => {
            const token = getState()?.auth?.accessToken;
          
                headers.set("Authorization", `Bearer ${token}`);
            
            return headers;
        },
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),
});