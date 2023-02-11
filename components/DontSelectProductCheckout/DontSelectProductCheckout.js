import React, { useState } from 'react';
import { RiDeleteBinFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addCartProduct, addCartSection, addSingleCartProduct, addToCart, decreaseCart, getTotals, removeFromCart, setProduct } from '../../features/cart/cartSlice';
import { useEffect } from 'react';




const DontSelectProductCheckout = () => {
  const { cartItems, cartProduct } = useSelector(state => state.cart);
  const [priceAmount, setPriceAmount] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = (product, category) => {
    dispatch(addToCart({ product, category }));
  };

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const cart = useSelector((state) => state.cart);


  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  useEffect(() => {
    const amount = cartProduct.reduce((cartItm, item) => {
      console.log(cartItm);
      item.items.forEach(e => {
        const { price, cartQuantity } = e;
        const itemTotal = price * cartQuantity;
        cartItm.total += itemTotal;
      });
      return cartItm;
    }, { total: 0, quantity: 0 });
    console.log(amount);
  }, [cartProduct]);


  const handleChange = (e, c, s, cart) => {
    const { name, checked } = e.target;
    if (s) {
      let tempProduct = cartItems.map(product => {
        let links = product.items.map(p => {
          return p.name === name ? { ...p, isChecked: checked } : p;
        });
        return { ...product, items: links };
      });
      cart.checked = checked;
      dispatch(addSingleCartProduct(cart));
      dispatch(setProduct(tempProduct));
      return;
    }
    if (name === "allProductSelect") {
      let tempProduct = cartItems.map(product => {
        let links = product.items.map(p => { return { ...p, isChecked: checked }; });
        return { ...product, isChecked: checked, items: links };
      });
      dispatch(addCartProduct({ cartItems, checked }));
      dispatch(setProduct(tempProduct));

    }
    else if (name === c) {
      let tempProduct = cartItems.map(product => {
        if (product?.category === c) {
          let links = product?.items?.map(p => { return { ...p, isChecked: checked }; });

          return { ...product, isChecked: checked, items: links };
        }
        return product;
      });
      dispatch(addCartSection({ cart, checked }));
      dispatch(setProduct(tempProduct));
    }
  };

  console.log(cartProduct);

  return (
    <div className=' mt-8 mb-72 lg:w-[1200px] mx-auto'>
      <div className="m-4 lg:m-0">
        <p className=' text-base text-[#686868] mb-2'>Home / Add to Cart / <span className='text-[#287DF3]'>Checkout</span></p>
        <h4 className=' text-2xl font-medium text-[#FB641B]'>Ready to Checkout!</h4>
      </div>

      <div className="lg:flex m-6 lg:m-0">
        <div className="lg:w-[788px] mr-6 mb-28">
          <div className="text-[#686868] flex justify-between p-6 shadow-xl mt-4">
            <div className="flex rounded">

              <input
                type="checkbox"
                name='allProductSelect'
                onChange={handleChange}
                className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]" />

              <p className=' text-base '>SELECT ALL 1 ITEM(S)</p>
            </div>
            <div className="flex">
              <RiDeleteBinFill className='text-[18px] mr-2'></RiDeleteBinFill>
              <p className='text-[10px]'>Delete</p>
            </div>
          </div>
          <div className="p-6 mt-4 mb-[16px] shadow-xl">
            {
              cartItems.map((cart, i) => <div
                key={i}
              >
                <div className="pb-4 flex text-[#686868] border-b border-[#B7B7B7] my-7">
                  <input
                    onChange={e => handleChange(e, cart?.category, undefined, cart)}
                    checked={cart?.isChecked || false}
                    name={cart?.category}
                    type="checkbox"
                    className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]" />

                  <div className="flex items-center">
                    <p className=' text-base mr-1'>{cart?.category}</p>
                    <FaAngleRight></FaAngleRight>
                  </div>
                </div>
                {
                  cart?.items?.map((product, i) => <div key={i} className="flex mt-5 items-center">
                    <input
                      type="checkbox"
                      name={product?.name}
                      onChange={e => handleChange(e, product?.name, 'singleItem', {
                        category: cart.category, items: [
                          product
                        ]
                      })}
                      checked={product?.isChecked || false}
                      className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]" />
                    <Image
                      className='w-auto mr-5' src={product.img}
                      alt="Picture of the author"
                      width={127}
                      height={103}
                    />
                    <div className="justify-between lg:flex w-full">
                      <div className="mb-2">
                        <p className='text-lg font-medium mb-4'>{product.name}</p>
                        <p className='text-[#686868] text-base'>{product.subTitle}</p>
                      </div>
                      <div className=" text-[#707070] flex lg:block justify-between">
                        <div className="flex lg:block items-center">
                          <p className='text-base text-[#FB641B] font-medium mb-4 mr-2'>TK {product.price}</p>
                          <p className='text-[10px] mb-4 line-through mr-1'>Tk {product.previousPrice}</p>
                          <p className='text-[10px] mb-4'>({product.discount} % off)</p>
                        </div>
                        <div className="flex">
                          <AiOutlineHeart className='text-[20px] mr-4'></AiOutlineHeart>
                          <RiDeleteBinFill onClick={() => handleRemoveFromCart(product)} className='text-[18px] cursor-pointer'></RiDeleteBinFill>
                        </div>
                      </div>
                      <div className="flex">
                        <button onClick={() => handleDecreaseCart(product)} className="btn btn-ghost text-3xl w-[34px] h-[34px] pt-0 font-bold text-[#686868] mr-5 ">-</button>
                        <p className='text-2xl mr-5 text-[#FB641B]'>{product.cartQuantity}</p>
                        <button onClick={() => handleAddToCart(product, cart.category)} className='btn btn-ghost text-3xl w-[34px] h-[34px] pt-0 font-bold text-[#686868]'>+</button>

                      </div>
                    </div>
                  </div>)
                }
              </div>)
            }

          </div>

        </div>

        <div className="lg:w-[388px] p-4 mt-2">
          <p className=" text-lg font-medium text-[#FB641B]">Order Summary</p>
          <div className="flex justify-between mt-4 text-[#686868]">
            <p className="text-base">Subtotal ({cart.cartTotalQuantity} items)</p>
            <p className="text-base font-medium">Tk {cart.cartTotalAmount}</p>
          </div>
          <div className="flex mt-4 lg:hidden">
            <input type="text" placeholder="Enter Promo Code" className="input input-bordered w-full max-w-xs mr-4" />
            <button className="btn bg-[#FB641B] w-20 h-9 rounded-md text-white">APPLY</button>
          </div>
          <div className="flex justify-between mt-4 mb-52">
            <p className=" text-base text-[#001E00]">Total: </p>
            <p className=" text-base font-medium text-[#FB641B]">Tk {cart.cartTotalAmount}</p>
          </div>
          <button className="btn bg-[#FB641B] w-full h-12 rounded-md text-white">PROCEED TO CHECKOUT ({cart.cartTotalAmount})</button>
        </div>
      </div>
    </div>
  );
};

export default DontSelectProductCheckout;