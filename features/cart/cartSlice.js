import { createSlice } from "@reduxjs/toolkit";
import img from '../../assets/images/image 7.png';
import img2 from '../../assets/images/image 88.png';


const initialState = {
  cartItems: [
    {
      _id: 1,
      img: img,
      name: "Tomato (Local) 500 ±30 gm",
      subTitle: "No Brand, Color Family:Black",
      price: 60,
      previousPrice: 80,
      discount: "20",
      cartQuantity: 1
    },
    {
      _id: 2,
      img: img2,
      name: "Potol (Pointed Gourd ) 500 ±30 gm",
      subTitle: "No Brand, Color Family:Black",
      price: 40,
      previousPrice: 50,
      discount: "10",
      cartQuantity: 1
    },
  ]
  ,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {

      const itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id);

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      }
      else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }


    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(cartItem => cartItem._id === action.payload._id);

      if (state.cartItems[itemIndex]?.cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      }
      else if (state.cartItems[itemIndex]?.cartQuantity === 1) {
        // const nextCartItems = state.cartItems.filter(cartItem => cartItem._id !== action.payload._id);

        // state.cartItems = nextCartItems;
      }
    },

    setProduct(state, action) {
      state.cartItems = action.payload;
    },

    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
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

export const { addToCart, removeFromCart, decreaseCart, setProduct, getTotals } = cartSlice.actions;

export default cartSlice.reducer;
