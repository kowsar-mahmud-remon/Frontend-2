const MyOrderDetails = () => {
  const data = {
    id: "1",
    orderId: "121312323213432",
    orderDate: "Placed On 21 Dec 2022 10:21:00",
    image: "/image 8.png",
    peoductName: "Tomato(Local) 500+30 gm",
    qty: "1",
    status: "Delivered",
      deliveredDate: "Delivered on 21 Dec 2022",
    total: '123'
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-4 py-5 shadow-lg rounded">
        <div className="">
          <h3 className="font-[500]">
            Order{" "}
            <span
              className="text-[#287DF3] font-[400]"
            >
              #{data.orderId}
            </span>
          </h3>
          <p className="text-[14px]">{data.orderDate}</p>
        </div>
        <div className="">
          <h3>
            Total: <span className="font-[500]">{data.total}tk</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MyOrderDetails;
