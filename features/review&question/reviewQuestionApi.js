import { apiSlice } from "../api/apiSlice";


export const reviewQuestionApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductQuestionCount: builder.query({
            query: (slugId) => `/question/get-product-question-count/${slugId}`
        }),
        getProductQuestion: builder.query({
            query: ({slugId,page,limit}) => `/question/get-product-question?page=${page}&limit=${limit}&productSlug=${slugId}`
        }),
        getProductReviewCount: builder.query({
            query: (slugId) => `/review/get-product-review-count/${slugId}`
        }),
        getProductReview: builder.query({
            query: ({slugId,page,limit}) => `/review/get-product-review?page=${page}&limit=${limit}&productSlug=${slugId}`
        }),
    }),
});

export const { useGetProductQuestionCountQuery,useGetProductQuestionQuery,useGetProductReviewCountQuery,useGetProductReviewQuery} = reviewQuestionApi;