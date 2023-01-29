import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0, count2: 0, price: 0, price2: 0, totalCount: 0, totalPrice: 0 },
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
      state.price = state.count * action.payload;
      state.totalCount = state.count + state.count2;
      state.totalPrice = state.price + state.price2;
    },

    decrement: (state, action) => {
      state.count = state.count - 1;
      state.price = state.price - action.payload;
      state.totalCount = state.count + state.count2;
      state.totalPrice = state.price + state.price2;
    },

    productIncrement: (state, action) => {
      state.count2 = state.count2 + 1;
      state.price2 = state.count2 * action.payload;
      state.totalCount = state.count + state.count2;
      state.totalPrice = state.price + state.price2;
    },

    productDecrement: (state, action) => {
      state.count2 = state.count2 - 1;
      state.price2 = state.price2 - action.payload;
      state.totalCount = state.count + state.count2;
      state.totalPrice = state.price + state.price2;
    },

  }
});

export const { increment, productIncrement, productDecrement, decrement } = counterSlice.actions;

export default counterSlice.reducer;