import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {

      const itemIndex = state.cartItem.findIndex(item => item._id === action.payload._id);

      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
      }
      else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(tempProduct);
      }


    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItem.filter(cartItem => cartItem._id !== action.payload._id);

      state.cartItem = nextCartItems;
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItem.findIndex(cartItem => cartItem._id === action.payload._id);

      if (state.cartItem[itemIndex]?.cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
      }
      else if (state.cartItem[itemIndex]?.cartQuantity === 1) {
        const nextCartItems = state.cartItem.filter(cartItem => cartItem._id !== action.payload._id);

        state.cartItem = nextCartItems;
      }
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItem.reduce((cartTotal, cartItem) => {
        const { price, cartQuantity } = cartItem;
        const itemTotal = price * cartQuantity;
        cartTotal.total += itemTotal;
        cartTotal.quantity += cartQuantity;

        return cartTotal;

      },
        {
          total: 0,
          quantity: 0
        });

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;

    }
  }
});

export const { addToCart, removeFromCart, decreaseCart, getTotals } = cartSlice.actions;

export default cartSlice.reducer;