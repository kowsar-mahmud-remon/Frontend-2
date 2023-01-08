import { apiSlice } from "../api/apiSlice";


export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => `/products/home-product`
            
        })
    }),
});

export const { useGetCategoryQuery } = categoryApi;