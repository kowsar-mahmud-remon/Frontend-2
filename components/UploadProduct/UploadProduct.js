import React from 'react';

const UploadProduct = () => {
    return (
      <div className="p-6">
        <form action="">
          <div className="flex max-w-[1426px] rounded shadow-xl p-6">
            <div className="w-2/5">{/* image */}</div>

            <div className="w-3/5 ">
              {/* line 1 */}
              <div className="flex mb-2">
                <label className="mr-2 w-[140px] label justify-end">
                  <span className="label-text">Product Name:</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                />
              </div>

              {/* line 2 */}
              <div className="grid grid-cols-2">
                <div className="flex mb-2">
                  <label className="mr-2 w-[140px] label justify-end">
                    <span className="label-text">Brand Name:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                  />
                </div>
                <div className="flex mb-2">
                  <div className="mr-2 w-[140px]">
                    <label className=" label justify-end">
                      <span className="label-text">Color:</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="email"
                    className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                  />
                  <div className='ml-2'>
                    <input
                      type="text"
                      placeholder="email"
                      className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                    />
                  </div>
                </div>
              </div>
              {/* line 3 */}
              <div className="grid grid-cols-2">
                <div className="flex mb-2">
                  <label className="mr-2 w-[140px] label justify-end">
                    <span className="label-text">Price:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                  />
                </div>
                <div className="flex mb-2">
                  <div className="mr-2 w-[140px]">
                    <label className=" label justify-end">
                      <span className="label-text">Discount:</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="email"
                    className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                  />
                  <div className="ml-2">
                    <input
                      type="text"
                      placeholder="email"
                      className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                    />
                  </div>
                </div>
              </div>
              {/* line 4 */}
              <div className="grid grid-cols-2">
                <div className="flex mb-2">
                  <label className="mr-2 w-[140px] label justify-end">
                    <span className="label-text">Product Stock:</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                  />
                </div>
                
              </div>
              {/* line 6 */}
              <div className="grid grid-cols-2">
                <div className="flex mb-2">
                  <label className="mr-2 w-[140px] label justify-end">
                    <span className="label-text">Product Stock:</span>
                                </label>
                                <textarea className="h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full" placeholder="Bio"></textarea>
                                
                </div>
                
              </div>
            </div>
          </div>
        </form>
      </div>
    );
};

export default UploadProduct;