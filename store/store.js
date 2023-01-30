import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import categorySliceReducer from "../features/category/categorySlice";
import paginateSliceReducer from "../features/paginate/paginate.slice";
import productReducer, { getTotals } from "../features/product/productSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        category: categorySliceReducer,
        paginate: paginateSliceReducer,
        cart: productReducer
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});

store.dispatch(getTotals());
