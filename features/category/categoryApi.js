import { apiSlice } from "../api/apiSlice";


export const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => `/category/get-category`

        }),
        getSingleCategory: builder.query({
            query: (id) => `/category/get-single-subCategory-name/${id}`

        }),
        getAllSelectedCategory: builder.query({
            query: (id) => `/products/selected-category-product/${id}`
        }),
        getAllCategoryForHomePage: builder.query({
            query: ({ page, limit }) => `/products/home-product?page=${page}&limit=${limit}`
        }),
        getAllCategoryCount: builder.query({
            query: () => `/products/home-category-count`
        }),
    }),
});

export const { useGetCategoryQuery, useGetSingleCategoryQuery, useGetAllSelectedCategoryQuery, useGetAllCategoryForHomePageQuery, useGetAllCategoryCountQuery } = categoryApi;