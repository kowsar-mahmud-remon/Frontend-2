import React from 'react';

const ManageOrdersModal = () => {
    return (
        <div>
            <input type="checkbox" id="manageOrdersModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="manageOrdersModal" className="btn btn-sm w-[10px] bg-white border-none absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-semibold mb-[32px]">Are Your Confirmed Change <strong>Shipped</strong></h3>
                    <div className='flex justify-center'>
                        <button className="btn btn-outline btn-[#686868] text-[16px] w-[114px] mr-4 text-[#686868]">Cancel</button>
                        <button className="btn btn-outline bg-[#FB641B] w-[114px] text-white text-[16px]">Confirm</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ManageOrdersModal;