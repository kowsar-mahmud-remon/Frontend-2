import { apiSlice } from "../api/apiSlice";


export const reviewQuestionApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductQuestionCount: builder.query({
            query: (productId) => `/question/get-product-question-count/${productId}`
        }),
        getProductQuestion: builder.query({
            query: ({ productId, page, limit }) => `/question/get-product-question?page=${page}&limit=${limit}&productId=${productId}`
        }),
        getProductReviewCount: builder.query({
            query: (productId) => `/review/get-product-review-count/${productId}`
        }),
        getProductReview: builder.query({
            query: ({ productId, page, limit }) => `/review/get-product-review?page=${page}&limit=${limit}&productId=${productId}`
        }),
        getProductRating: builder.query({
            query: (id) => `/review/get-product-ratings/${id}`
        }),
    }),
});

export const { useGetProductQuestionCountQuery, useGetProductQuestionQuery, useGetProductReviewCountQuery, useGetProductReviewQuery,useGetProductRatingQuery } = reviewQuestionApi;