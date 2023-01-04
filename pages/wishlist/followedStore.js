import Link from "next/link";

const followedStore = () => {
    return (
        <div className=' m-4'>
            <div className="border-b-2 border-gray-400  shadow-xl">
                <div className="flex m-2 ">
                    <Link href='/wishlist/myWishlist'> <h1 className="text-orange-600 mr-5">My Wishlist(1)</h1> </Link>

                    <Link href="/wishlist/pastPurchase"> <h1 className="mr-5">Past Purchase</h1>  </Link>
                    <Link href="/wishlist/followedStore"> <h1>Followed Store</h1>  </Link>

                </div>
            </div>


            <div className=" my-3 card shadow-xl">
                <h1 className='font-semibold'>Banglar Big Store</h1>
                <p>FOLLOWING | <span className='text-sky-600'>VISIT</span></p>
                <small className="bg-sky-600 w-11 text-white">verified</small>
            </div>
            <div className="card flex shadow-xl">
                <div>
                    <h1 className='font-semibold'>Banglar Big Store</h1>

                    <small className="bg-sky-600 w-11 text-white">verified</small>
                </div>
                <div>
                    <p>FOLLOWING | <span className='text-sky-600'>VISIT</span></p>
                </div>
            </div>

        </div>
    );
};

export default followedStore;