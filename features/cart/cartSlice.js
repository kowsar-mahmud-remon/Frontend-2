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
    cartProductPage: {}
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {

            const itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id);
            const cartIndex = state.cartProduct.findIndex(item => item._id === action.payload._id);
           
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].items.forEach(d => {
                 
                    if (d._id === action.payload.product._id) {
                        console.log(d);
                        d.quantity += 1;
                    }
                });
            }
            if (cartIndex >= 0) {
                state.cartProduct[cartIndex].items.forEach(d => {
                    if (d._id === action.payload.product._id) {
                        console.log(d);
                        d.quantity += 1;
                    }
                });
            }


        },

        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(cartItem => cartItem._id !== action.payload._id);

            state.cartItems = nextCartItems;
        },

        decreaseCart(state, action) {
         
            const itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id);
            const cartIndex = state.cartProduct.findIndex(item => item._id === action.payload._id);

            if (itemIndex >= 0) {
                state.cartItems[itemIndex].items.forEach(d => {

                    if (d._id === action.payload.product._id && d.quantity > 1) {
                        console.log('het')
                        d.quantity -= 1;
                    }
                });
            }
            if (cartIndex >= 0) {
                state.cartProduct[cartIndex].items.forEach(d => {
                    if (d._id === action.payload.product._id && d.quantity > 1) {

                        d.quantity -= 1;
                    }
                });
            }


        },

        setProduct(state, action) {
            state.cartItems = action.payload;
        },

        getTotals(state, action) {
            let { total, quantity } = state.cartProduct.reduce((cartTotal, cartItem) => {
                cartItem.items.forEach((cart) => {
                    const { price, quantity } = cart;
                    const itemTotal = price * quantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += quantity;

                });
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
                state.cartProduct = action.payload.cartItems;
            } else {
                state.cartProduct = [];
            }
        },

        addSingleCartProduct(state, action) {
           
            const data = state.cartProduct.findIndex(d => d._id === action.payload._id);
            
            if (data > -1) {

                if (state.cartProduct[data].items.length > 0) {

                    state.cartProduct[data].items.forEach(element => {

                        if (element.productId === action.payload.items[0].productId ) {
                            console.log('hey')
                            const links = state.cartProduct[data].items.filter(e => e.productId !== action.payload.items[0].productId);
                            console.log(links)
                            state.cartProduct[data].items = links;
                            return;
                        } else {
                            state.cartProduct[data].items.push(action.payload.items[0]);
                        }

                    });
                } else {
                   
                        state.cartProduct[data].items.push(action.payload.items[0]);
                    
                }
            } else {
                state.cartProduct.push(action.payload);
            }
        },

        addCartSection(state, action) {
            if (action.payload.checked && state.cartProduct) {
                const data = state.cartProduct.findIndex(d =>{ 
                    
                    return d._id === action.payload.cart._id});
          
                if (data > -1 ) {
                    state.cartProduct[data] = action.payload.cart
                } else {
                    state.cartProduct.push(action.payload.cart);
                }
            } else {
                const data = state.cartProduct.filter(d => d._id !== action.payload.cart._id);
                state.cartProduct = data;
            }
        },
        addCartProductPageIncrease: (state, action) => {
            state.cartProductPage.quantity += action.payload
        },
        addCartProductPageDecrease: (state, action) => {
            if (state.cartProductPage.quantity > 1) {
                state.cartProductPage.quantity -= action.payload
            }
        },
        addCartProductPage: (state, action) => {
            state.cartProductPage = action.payload
        },
        setProductToCart: (state, action) => {

            state.cartItems = action.payload

        }
    }
});

export const { addToCart, removeFromCart, decreaseCart, setProduct, getTotals, addSingleCartProduct, addCartProduct, addCartSection, addCartProductPageIncrease, addCartProductPageDecrease, addCartProductPage, setProductToCart } = cartSlice.actions;

export default cartSlice.reducer;