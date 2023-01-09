import { apiSlice } from "../api/apiSlice";


export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => `/category/get-category`
            
        }),
        getSingleCategory: builder.query({
            query: (id) => `/category/get-single-subCategory-name/${id}`
            
        }),
    }),
});

export const { useGetCategoryQuery,useGetSingleCategoryQuery } = categoryApi;