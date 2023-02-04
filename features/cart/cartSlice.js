import { createSlice } from "@reduxjs/toolkit";
import img from '../../assets/images/image 7.png';
import img2 from '../../assets/images/image 88.png';


const initialState = {
    cartItems: [
        {
            category: 'Banglar Big Store',
            items: [
                {
                    _id: 1,
                    img: img,
                    name: "Tomato (Local) 500 ±30 gm ",
                    subTitle: "No Brand, Color Family:Black",
                    price: 60,
                    previousPrice: 80,
                    discount: "20",
                    cartQuantity: 1
                },
                {
                    _id: 2,
                    img: img2,
                    name: "Potol (Pointed ) 500 ±30 gm",
                    subTitle: "No Brand, Color Family:Black",
                    price: 40,
                    previousPrice: 50,
                    discount: "10",
                    cartQuantity: 1
                },
            ]
        },
        {
            category: 'Family Store',
            items: [
                {
                    _id: 3,
                    img: img,
                    name: "Tomato (Local) 500 ±30 gm1",
                    subTitle: "No Brand, Color Family:Black",
                    price: 60,
                    previousPrice: 80,
                    discount: "20",
                    cartQuantity: 1
                },
                {
                    _id: 4,
                    img: img2,
                    name: "Poto (Pointed ) 500 ±30 gm",
                    subTitle: "No Brand, Color Family:Black",
                    price: 40,
                    previousPrice: 50,
                    discount: "10",
                    cartQuantity: 1
                },
            ]
        },

    ]

    ,
    cartProduct: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {

            const itemIndex = state.cartItems.findIndex(item => item.category === action.payload.category);
            const cartIndex = state.cartProduct.findIndex(item => item.category === action.payload.category);
            // state.cartItems.forEach(d=>{
            //     d.items.forEach(i=>{

            //     })
            // })
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].items.forEach(d => {
                    if (d._id === action.payload.product._id) {
                        
                        d.cartQuantity += 1
                    }
                })
            }
            if (cartIndex >= 0) {
                state.cartProduct[cartIndex].items.forEach(d => {
                    if (d._id === action.payload.product._id) {
                      
                        d.cartQuantity += 1
                    }
                })
            }

           
        },

        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(cartItem => cartItem._id !== action.payload._id);

            state.cartItems = nextCartItems;
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
            let { total, quantity } = state.cartProduct.reduce((cartTotal, cartItem) => {
                cartItem.items.forEach((cart) => {
                    const { price, cartQuantity } = cart;
                    const itemTotal = price * cartQuantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                })
                return cartTotal;

            },
                {
                    total: 0,
                    quantity: 0
                }
            );

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;

        },

        addCartProduct(state, action) {
            if (action.payload.checked) {
                state.cartProduct = action.payload.cartItems
            } else {
                state.cartProduct = []
            }
        },

        addSingleCartProduct(state, action) {
            const data = state.cartProduct.findIndex(d => d.category === action.payload.category)
          
            if (data > -1) {

                if (state.cartProduct[data].items.length > 0) {

                    state.cartProduct[data].items.forEach(element => {
                    
                   

                        if (element._id === action.payload.items[0]._id) {
                         
                            const links = state.cartProduct[data].items.filter(e => e._id !== action.payload.items[0]._id)
                            state.cartProduct[data].items = links
                            return
                        } else {
                            state.cartProduct[data].items.push(action.payload.items[0])
                        }

                    })
                } else {
                    if (action.payload.checked) {
                     
                        state.cartProduct[data].items.push(action.payload.items[0])
                    }
                }
            } else {
                state.cartProduct.push(action.payload)
            }
        },

        addCartSection(state, action) {
            if (action.payload.checked) {
                state.cartProduct.push(action.payload.cart)
            } else {
                const data = state.cartProduct.filter(d => d.category !== action.payload.cart.category)
                state.cartProduct = data
            }
        }

    }
});

export const { addToCart, removeFromCart, decreaseCart, setProduct, getTotals, addSingleCartProduct, addCartProduct, addCartSection } = cartSlice.actions;

export default cartSlice.reducer;