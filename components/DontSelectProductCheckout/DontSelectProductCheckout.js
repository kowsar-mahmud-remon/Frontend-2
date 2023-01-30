import React from 'react';
import { RiDeleteBinFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';
import img from '../../assets/images/image 7.png';
import img2 from '../../assets/images/image 88.png';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCart, decrement, getTotals, increment, productDecrement, productIncrement, removeFromCart } from '../../features/product/productSlice';
import { useState } from 'react';
import { useEffect } from 'react';




const DontSelectProductCheckout = () => {
  const [products, setProducts] = useState([]);
  const [anotherProduct, setAnotherProduct] = useState([]);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // const handleRemoveFromCart = (cartItem) => {
  //   dispatch(removeFromCart(cartItem));
  // };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const cart = useSelector((state) => state.cart);
  console.log("cart", cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);


  const productData =
    [
      {
        category: "Banglar Big Store",
        product: [
          {
            _id: 1,
            img: img,
            name: "Tomato (Local) 500 ±30 gm",
            subTitle: "No Brand, Color Family:Black",
            price: 60,
            previousPrice: 80,
            discount: "20",
            quantity: 1
          },
          {
            _id: 2,
            img: img,
            name: "Tomato (Local) 500 ±30 gn",
            subTitle: "No Brand, Color Family:Black",
            price: 60,
            previousPrice: 80,
            discount: "20",
            quantity: 1
          }
        ]
      },
      {
        category:
          product: [
            {
              _id: 11,
              img: img2,
              name: "Potol (Pointed Gourd ) 500 ±30 gm",
              subTitle: "No Brand, Color Family:Black",
              price: 40,
              previousPrice: 50,
              discount: "10",
              quantity: 1
            },
            {
              _id: 12,
              img: img2,
              name: "Potol (Pointed Gourd ) 500 ±30 gn",
              subTitle: "No Brand, Color Family:Black",
              price: 40,
              previousPrice: 50,
              discount: "10",
              quantity: 1
            },
        ];
      }
    ];

  const anotherProductData =


    useEffect(() => {
      setProducts(productData);
      setAnotherProduct(anotherProductData);

    }, []);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    console.log("name", name, value);

    if (name === "allSelect") {
      let tempProduct = products.map((product) => {
        return { ...product, isChecked: checked };
      });
      setProducts(tempProduct);
    } else {
      let tempProduct = products.map((product) =>
        product.name === name ? { ...product, isChecked: checked } : product
      );
      setProducts(tempProduct);
    }
  };

  const handleChangeData = (e) => {
    const { name, value, checked } = e.target;
    console.log("name", name, value);

    if (name === "allSelect") {
      let tempAnotherProduct = anotherProduct.map((anotherProduct) => {
        return { ...anotherProduct, isChecked: checked };
      });
      setAnotherProduct(tempAnotherProduct);
    } else {
      let tempAnotherProduct = anotherProduct.map((anotherProduct) =>
        anotherProduct.name === name ? { ...anotherProduct, isChecked: checked } : anotherProduct
      );
      setAnotherProduct(tempAnotherProduct);
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
                className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]"
                name="allSelect"
                // checked={
                //   products.filter((product) => product?.isChecked !== true).length < 1
                // }
                checked={!products.some((product) => product?.isChecked !== true) && !anotherProduct.some((product) => product?.isChecked !== true)}
                onChange={handleChange}
                onClick={handleChangeData}
              />

              {/* <input type="checkbox" className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]" /> */}

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
                type="checkbox"
                className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]"
                name="allSelect"
                // checked={
                //   products.filter((product) => product?.isChecked !== true).length < 1
                // }
                checked={!products.some((product) => product?.isChecked !== true)}
                onChange={handleChange}
              />

              <div className="flex items-center">
                <p className=' text-base mr-1'>Banglar Big Store</p>
                <FaAngleRight></FaAngleRight>
              </div>
            </div>
            {
              products.map((product, i) => <div key={i} className="flex mt-5 items-center">

                <input
                  type="checkbox"
                  className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]"
                  name={product.name}
                  value={product.price}
                  checked={product?.isChecked || false}
                  onChange={handleChange}
                />
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

                    <p className='text-2xl mr-5 text-[#FB641B]'>{product.quantity}</p>

                    <button onClick={() => handleAddToCart(product)} className='btn btn-ghost text-3xl w-[34px] h-[34px] pt-0 font-bold text-[#686868]'>+</button>

                  </div>
                </div>
              </div>)

            }
          </div>

          <div className="p-6 mt-4">
            <div className="pb-4 flex text-[#686868] border-b border-[#B7B7B7]">

              <input
                type="checkbox"
                className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]"
                name="allSelect"
                checked={!anotherProduct.some((anotherProduct) => anotherProduct?.isChecked !== true)}
                onChange={handleChangeData}
              />
              <div className="flex items-center">
                <p className=' text-base mr-1'>Banglar Big Store</p>
                <FaAngleRight></FaAngleRight>
              </div>
            </div>
            {
              anotherProduct.map((anotherProduct, i) => <div key={i} className="flex mt-5 items-center">

                <input
                  type="checkbox"
                  className="w-[19px] h-[19px] rounded checkbox checkbox-primary mr-4 border border-[#686868]"
                  name={anotherProduct.name}
                  value={anotherProduct.price}
                  checked={anotherProduct?.isChecked || false}
                  onChange={handleChangeData}
                />

                <Image
                  className='w-auto mr-5' src={anotherProduct.img}
                  alt="Picture of the author"
                  width={127}
                  height={103}
                />
                <div className="justify-between lg:flex w-full">
                  <div className="mb-2">
                    <p className='text-lg font-medium mb-4'>{anotherProduct.name}</p>
                    <p className='text-[#686868] text-base'>{anotherProduct.subTitle}</p>
                  </div>
                  <div className=" text-[#707070] flex lg:block justify-between">
                    <div className="flex lg:block items-center">
                      <p className='text-base text-[#FB641B] font-medium mb-4 mr-2'>TK {anotherProduct.price}</p>
                      <p className='text-[10px] mb-4 line-through mr-1'>Tk {anotherProduct.previousPrice}</p>
                      <p className='text-[10px] mb-4'>({anotherProduct.discount} % off)</p>
                    </div>
                    <div className="flex">
                      <AiOutlineHeart className='text-[20px] mr-4'></AiOutlineHeart>
                      <RiDeleteBinFill className='text-[18px]'></RiDeleteBinFill>
                    </div>
                  </div>
                  <div className="flex">
                    <button onClick={() => handleDecreaseCart(anotherProduct)} className="btn btn-ghost text-3xl w-[34px] h-[34px] pt-0 font-bold text-[#686868] mr-5">-</button>

                    <p className='text-2xl mr-5 text-[#FB641B]'>{anotherProduct.quantity}</p>

                    <button onClick={() => handleAddToCart(anotherProduct)} className='btn btn-ghost text-3xl w-[34px] h-[34px] pt-0 font-bold text-[#686868]'>+</button>

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