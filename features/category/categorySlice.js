import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeBtn: 'allProducts',
    id:''
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setActiveBtn: (state, action) => {
            state.activeBtn = action?.payload?.value;
            state.id = action?.payload?.id;
        },
      
    },
});

export const {  setActiveBtn } = categorySlice.actions;
export default categorySlice.reducer;