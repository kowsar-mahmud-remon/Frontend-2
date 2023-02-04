import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from 'next-redux-wrapper'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:5000/api`,
        prepareHeaders: async (headers, { getState, endpoint }) => {
            const token = getState()?.auth?.accessToken;
            console.log('token',getState()?.auth)
            headers.set("Authorization", `Bearer ${token}`);
            return headers;
        },
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    tagTypes: [],
    endpoints: (builder) => ({}),
});