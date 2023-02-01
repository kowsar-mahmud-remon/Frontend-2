import React from 'react';
import { RiDeleteBinFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCart, getTotals, setProduct } from '../../features/cart/cartSlice';
import { useEffect } from 'react';




const DontSelectProductCheckout = () => {
  const { cartItems } = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const cart = useSelector((state) => state.cart);
  // console.log("cart", cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleChange = (e) => {
    const { name, checked } = e.target;

    if (name === "allProductSelect") {
      let tempProduct = cartItems.map(product => { return { ...product, isChecked: checked }; });
      dispatch(setProduct(tempProduct));
    }
    else if (name === "allSelect") {
      let tempProduct = cartItems.map(product => { return { ...product, isChecked: checked }; });
      dispatch(setProduct(tempProduct));
    }
    else {
      let tempProduct = cartItems.map(product => product.name === name ? { ...product, isChecked: checked } : product);
      dispatch(setProduct(tempProduct));
    }
  };


  return (
    <div className=' mt-8 mb-72 lg:w-[1200px] mx-auto'>
      <div className="m-4 lg:m-0">
        <p className=' text-base text-[#686868] mb-2'>Home / Add to Cart / <span>Checkout</span></p>
        <h4 className=' text-2xl font-medium text-[#FB641B]'>Ready to Checkout!</h4>
      </div>

      <div className="lg:flex m-6 lg:m-0">
        <div className="lg:w-[788px] mr-6 mb-28">
          <div className="text-[#686868] flex justify-between p-6 shadow-lg mt-4">
            <div className="flex">

              <input
                type="checkbox"
                name='allProductSelect'
                onChange={handleChange}
                className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]" />

              <p className=' text-base'>SELECT ALL 1 ITEM(S)</p>
            </div>
            <div className="flex">
              <RiDeleteBinFill className='text-[18px] mr-2'></RiDeleteBinFill>
              <p className='text-[10px]'>Delete</p>
            </div>
          </div>
          <div className="p-6 mt-4">
            <div className="pb-4 flex text-[#686868] border-b border-[#B7B7B7]">

              <input
                onChange={handleChange}
                checked={!cartItems.some((product) => product?.isChecked !== true)}
                name="allSelect"
                type="checkbox"
                className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]" />

              <div className="flex items-center">
                <p className=' text-base mr-1'>Banglar Big Store</p>
                <FaAngleRight></FaAngleRight>
              </div>
            </div>
            {
              cartItems.map((product, i) => <div key={i} className="flex mt-5 items-center">

                <input
                  type="checkbox"
                  name={product.name}
                  onChange={handleChange}
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
                      <RiDeleteBinFill className='text-[18px]'></RiDeleteBinFill>
                    </div>
                  </div>
                  <div className="flex">
                    <button onClick={() => handleDecreaseCart(product)} className="btn btn-ghost text-3xl w-[34px] h-[34px] pt-0 font-bold text-[#686868] mr-5 ">-</button>

                    <p className='text-2xl mr-5 text-[#FB641B]'>{product.cartQuantity}</p>

                    <button onClick={() => handleAddToCart(product)} className='btn btn-ghost text-3xl w-[34px] h-[34px] pt-0 font-bold text-[#686868]'>+</button>

                  </div>
                </div>
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
          <button className="btn bg-[#FB641B] w-full h-12 rounded-md text-white">PROCEED TO CHECKOUT ({cart.cartTotalQuantity})</button>
        </div>
      </div>
    </div>
  );
};

export default DontSelectProductCheckout;