import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';


const SellerProductsModal = () => {
  const [hidden, setHidden] = useState(false);


  return (
    <div className="mt-[1000px]">
      <label htmlFor="my-modal-4" onClick={() => setHidden(!hidden)} className="btn">open modal</label>
      {
        hidden && (
          <OutsideClickHandler onOutsideClick={() => {
            setHidden(!hidden);
          }}>

            <div className="">

              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative max-w-[713px]" htmlFor="">
                  <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <div className="">
                    <label className="label mb-10">
                      <span className="label-text text-lg font-normal">Rename Folder</span>
                    </label>
                    <input type="text" placeholder="Folder name, no more than 40 Charcters" className="input input-bordered w-[665px] h-[56px]" />
                  </div>
                  <div className="modal-action mt-16 justify-end">
                    <label htmlFor="my-modal-4" className="btn bg-[#FB641B] text-white w-[62px]">Ok</label>
                    <label htmlFor="my-modal-4" className="btn bg-white border border-[#B7B7B7] w-[103px]">Cancel</label>
                  </div>
                </label>
              </label>
            </div>
          </OutsideClickHandler>
        )
      }
    </div >
  );
};

export default SellerProductsModal;