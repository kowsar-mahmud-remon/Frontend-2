import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    limit:2,
    reviewPage:0,
    questionPage:0,
  
};

const paginateSlice = createSlice({
    name: "paginate",
    initialState,
    reducers: {
        
        increaseReviewPage: (state, action) => {
            state.reviewPage=action?.payload?.page;
        },
        increaseQuestionPage: (state, action) => {
            state.questionPage=action?.payload?.page;
        },
    },
});

export const {  increaseReviewPage,increaseQuestionPage } = paginateSlice.actions;
export default paginateSlice.reducer;