
const CouponList = ({ menu }) => {
    return (
        <div>
            <div className="text-center text-[#001E00] text-[16px]">
                    <p>
                        {menu?.text}
                    </p>
            </div>
        </div>
    );
};

export default CouponList;