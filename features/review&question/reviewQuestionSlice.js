import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeBtn: 'allProducts',
    id:'',
    page:0,
    categoryName:''
};

const reviewQuestionSlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setActiveBtn: (state, action) => {
            state.activeBtn = action?.payload?.value;
            state.id = action?.payload?.id;
        },
        increasePage: (state, action) => {
            state.page+=action?.payload?.page;
        },
        addCategoryName:(state,action)=>{
            state.categoryName = action?.payload.name
        }
    },
});

export const {  setActiveBtn,increasePage,addCategoryName } = reviewQuestionSlice.actions;
export default reviewQuestionSlice.reducer;