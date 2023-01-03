import Link from "next/link";

const pastPurchase = () => {
    return (
        <div className='m-4'>
            <div className="border-b-2 border-slate-300   shadow-xl">
                <div className="flex m-2 ">
                    <Link href='/wishlist/myWishlist'> <h1 className="text-orange-600 mr-5">My Wishlist(1)</h1> </Link>

                    <Link href="/wishlist/pastPurchase"> <h1 className="mr-5">Past Purchase</h1>  </Link>
                    <Link href="/wishlist/followedStore"> <h1>Followed Store</h1>  </Link>

                </div>
            </div>
            <div className='text-center'>
                <p>There are no favorites yet. <br /> Add your favorites to wishlist and they will show</p>
                <button className="btn w-48 btn-active mt-2 bg-white text-orange-600">CONTINUE SHOPPING</button>
            </div>
            <h1 className="py-3 font-semibold text-xl">Just for fun</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="mb-4" >
                    <div>
                        <img className="w-42 h-32" src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=2000" alt="" />
                    </div>
                    <div>
                        <h1 className="py-2"><span className="text-orange-600  text-xl "> Tk 18</span>  <small><del>Tk 20</del> (2% off)</small></h1>
                        <h3 className="font-semibold">Kacha Morich (Green <br /> Chill) 250 + 15 gm</h3>

                        <p className="py-2"><span className="text-white  bg-orange-600">3.9 *</span> <small>24 Rating & 5 Reviews</small></p>
                        <p>Seller: <span className="text-white bg-green-800">Assured</span></p>
                    </div>
                </div>
                <div className="mb-4" >
                    <div>
                        <img className="w-42 h-32" src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=2000" alt="" />
                    </div>
                    <div>
                        <h1 className="py-2"><span className="text-orange-600  text-xl "> Tk 18</span>  <small><del>Tk 20</del> (2% off)</small></h1>
                        <h3 className="font-semibold">Kacha Morich (Green <br /> Chill) 250 + 15 gm</h3>

                        <p className="py-2"><span className="text-white  bg-orange-600">3.9 *</span> <small>24 Rating & 5 Reviews</small></p>
                        <p>Seller: <span className="text-white bg-green-800">Assured</span></p>
                    </div>
                </div>
                <div className="mb-4" >
                    <div>
                        <img className="w-42 h-32" src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=2000" alt="" />
                    </div>
                    <div>
                        <h1 className="py-2"><span className="text-orange-600  text-xl "> Tk 18</span>  <small><del>Tk 20</del> (2% off)</small></h1>
                        <h3 className="font-semibold">Kacha Morich (Green <br /> Chill) 250 + 15 gm</h3>

                        <p className="py-2"><span className="text-white  bg-orange-600">3.9 *</span> <small>24 Rating & 5 Reviews</small></p>
                        <p>Seller: <span className="text-white bg-green-800">Assured</span></p>
                    </div>
                </div>
                <div className="mb-4" >
                    <div>
                        <img className="w-42 h-32" src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=2000" alt="" />
                    </div>
                    <div>
                        <h1 className="py-2"><span className="text-orange-600  text-xl "> Tk 18</span>  <small><del>Tk 20</del> (2% off)</small></h1>
                        <h3 className="font-semibold">Kacha Morich (Green <br /> Chill) 250 + 15 gm</h3>

                        <p className="py-2"><span className="text-white  bg-orange-600">3.9 *</span> <small>24 Rating & 5 Reviews</small></p>
                        <p>Seller: <span className="text-white bg-green-800">Assured</span></p>
                    </div>
                </div>
                <div className="mb-4" >
                    <div>
                        <img className="w-42 h-32" src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=2000" alt="" />
                    </div>
                    <div>
                        <h1 className="py-2"><span className="text-orange-600  text-xl "> Tk 18</span>  <small><del>Tk 20</del> (2% off)</small></h1>
                        <h3 className="font-semibold">Kacha Morich (Green <br /> Chill) 250 + 15 gm</h3>

                        <p className="py-2"><span className="text-white  bg-orange-600">3.9 *</span> <small>24 Rating & 5 Reviews</small></p>
                        <p>Seller: <span className="text-white bg-green-800">Assured</span></p>
                    </div>
                </div>
                <div className="mb-4" >
                    <div>
                        <img className="w-42 h-32" src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=2000" alt="" />
                    </div>
                    <div>
                        <h1 className="py-2"><span className="text-orange-600  text-xl "> Tk 18</span>  <small><del>Tk 20</del> (2% off)</small></h1>
                        <h3 className="font-semibold">Kacha Morich (Green <br /> Chill) 250 + 15 gm</h3>

                        <p className="py-2"><span className="text-white  bg-orange-600">3.9 *</span> <small>24 Rating & 5 Reviews</small></p>
                        <p>Seller: <span className="text-white bg-green-800">Assured</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default pastPurchase;