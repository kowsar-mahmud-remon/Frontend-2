import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeBtn: 'allProducts',
    id:'',
    page:0
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
    },
});

export const {  setActiveBtn,increasePage } = categorySlice.actions;
export default categorySlice.reducer;