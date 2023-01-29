import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeBtn: 'allProducts',
    id:'',
    page:0,
    categoryName:'',
    isActiveCategory:false,
};

const categorySlice = createSlice({
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
        },
        handleCategorySideNav:(state)=>{
            state.isActiveCategory = !state.isActiveCategory
        }
    },
});

export const {  setActiveBtn,increasePage,addCategoryName,handleCategorySideNav } = categorySlice.actions;
export default categorySlice.reducer;