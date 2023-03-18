import { useState } from "react";

const Timeline = ({ status, payOption }) => {
  const [show, setShow] = useState(false);
  // const stat='Delivered'
  const details = [
    {
      id: 1,
      info: "Your package has been handed over to BD-RedX-API.",
      time: "02 Jan 2023 - 16:52 ",
    },
    {
      id: 2,
      info: "Your package has been packed and is being handed over to a logistics partner.",
      time: "02 Jan 2023 - 16:52 ",
    },
    {
      id: 3,
      info: "Your order has been successfully verified",
      time: "02 Jan 2023 - 16:52 ",
    },
  ];
  const [timelineDetails, setTimeLineDetails] = useState(details.slice(0, 1));
  const handleClick=() => {
    if (!show) {
      setTimeLineDetails(details)
    }else{
      setTimeLineDetails(details.slice(0,1))
    }
    setShow(!show)
  }
  
  if (status === "Processing") {
    return (
      <div>
        <div className="hidden lg:block">
          {payOption === "Cash On Delivery" ? (
            <div className="flex justify-center items-center relative">
              <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
              <div className="h-1 w-4/5 bg-[#F2F2F2]"></div>
              <div className="w-3 h-3 rounded-full border-2 absolute left-2/4 z-10 bg-[#F2F2F2]"></div>
              <div className="w-3 h-3 rounded-full border-2 bg-[#F2F2F2]"></div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="flex justify-center items-center relative w-3/5">
                <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                <div className="h-1 w-full bg-[#F2F2F2] relative">
                  <div className="w-[38%] h-full bg-[#026C51]"></div>
                </div>
                <div className="w-3 h-3 rounded-full border-2 absolute left-[38%]  z-10 bg-[#026C51] border-[#026C51] "></div>
                <div className="w-3 h-3 rounded-full border-2 absolute left-[70%]  z-10 bg-[#F2F2F2] border-[#F2F2F2] "></div>
                <div className="w-3 h-3 rounded-full border-2 bg-[#F2F2F2] border-[#F2F2F2]"></div>
              </div>
            </div>
          )}

          <div className="flex justify-center items-center ">
            <div className="flex justify-between items-center w-[70%]">
              {payOption !== "Cash On Delivery" && <p>Payment Success</p>}
              <p>Processing</p>
              <p>Shipping</p>
              <p>Delivered</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-4/5 p-7 bg-[#F2F3F7] rounded mt-3 relative">
              <div className="w-5 h-5 bg-[#F2F3F7] absolute -top-2 left-16 rotate-45"></div>
              {timelineDetails?.map((data) => (
                <>
                  <p>
                    {data.time} <span className="font-[500]">{data.info}</span>
                  </p>
                </>
              ))}

              <p className="text-[#287DF3] text-center">
                <span onClick={handleClick} className=" cursor-pointer">
                  {!show ? "View More" : "View Less"}
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* mobile */}
        {payOption == "Cash On Delivery" ? (
          <div className="lg:hidden flex h-[260px]">
            <div className="flex flex-col justify-center items-center  my-1">
              <div className="h-full w-1 my-1">
                <div className="w-full h-full bg-[#F2F2F2] "></div>
              </div>
            </div>
            <div className="relative w-full">
              <div className="flex flex-col justify-between h-[260px]  absolute  -left-2 w-full">
                <div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                    <p className="ml-2">Processing</p>
                  </div>
                  <div className="">
                    <div className=" h-[96px] p-2 bg-[#F2F3F7] rounded mt-3 relative text-[12px] ml-6 overflow-y-scroll">
                      <div className="w-3 h-3 bg-[#F2F3F7] absolute -top-1 -z-10 left-4 rotate-45"></div>
                      {timelineDetails?.map((data) => (
                        <>
                          <p className="mb-2">
                            {data.time}{" "}
                            <span className="font-[500]">{data.info}</span>
                          </p>
                        </>
                      ))}
                      <p className="text-[#287DF3]">
                        <span onClick={handleClick} className=" cursor-pointer">
                          {!show ? "View More" : "View Less"}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full border-2 border-[#F2F2F2] bg-[#F2F2F2]"></div>
                      <p className="ml-2">Shipping</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-[#F2F2F2] bg-[#F2F2F2]"></div>
                  <p className="ml-2">Delivered</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:hidden flex h-[320px]">
            <div className="flex flex-col justify-center items-center  my-1">
              <div className="h-full w-1 my-1 bg-[#F2F2F2]">
                <div className="w-full h-[45%] bg-[#026C51] "></div>
              </div>
            </div>
            <div className="relative w-full">
              <div className="flex flex-col justify-between h-[320px]  absolute  -left-2 w-full">
                <div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                    <p className="ml-2">Payment Success</p>
                  </div>
                  <div className="">
                    <div className=" h-[96px] p-2 bg-[#F2F3F7] rounded mt-3 relative text-[12px] ml-6 overflow-y-scroll">
                      <div className="w-3 h-3 bg-[#F2F3F7] absolute -top-1 -z-10 left-4 rotate-45"></div>
                      {timelineDetails?.map((data) => (
                        <>
                          <p className="mb-2">
                            {data.time}{" "}
                            <span className="font-[500]">{data.info}</span>
                          </p>
                        </>
                      ))}
                      <p className="text-[#287DF3] ">
                        <span onClick={handleClick} className=" cursor-pointer">
                          {!show ? "View More" : "View Less"}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                      <p className="ml-2">Processing</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-[#F2F2F2] bg-[#F2F2F2]"></div>
                  <p className="ml-2">Shipping</p>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-[#F2F2F2] bg-[#F2F2F2]"></div>
                  <p className="ml-2">Delivered</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (status === "Shipped") {
    return (
      <div>
        <div className="hidden lg:block">
          {payOption === "Cash On Delivery" ? (
            <div className="flex justify-center items-center relative">
              <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
              <div className="h-1 w-4/5 bg-[#F2F2F2]">
                <div className="w-1/2 h-full bg-[#026C51]"></div>
              </div>
              <div className="w-3 h-3 rounded-full border-2 absolute left-2/4 z-10 bg-[#026C51] border-[#026C51]"></div>
              <div className="w-3 h-3 rounded-full border-2 bg-[#F2F2F2]"></div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="flex justify-center items-center relative w-3/5">
                <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                <div className="h-1 w-full bg-[#F2F2F2] relative">
                  <div className="w-[72%] h-full bg-[#026C51]"></div>
                </div>
                <div className="w-3 h-3 rounded-full border-2 absolute left-[38%]  z-10 bg-[#026C51] border-[#026C51] "></div>
                <div className="w-3 h-3 rounded-full border-2 absolute left-[70%]  z-10 bg-[#026C51] border-[#026C51] "></div>
                <div className="w-3 h-3 rounded-full border-2 bg-[#F2F2F2] border-[#F2F2F2]"></div>
              </div>
            </div>
          )}

          <div className="flex justify-center items-center ">
            <div className="flex justify-between items-center w-[70%]">
              {payOption !== "Cash On Delivery" && <p>Payment Success</p>}
              <p>Processing</p>
              <p>Shipping</p>
              <p>Delivered</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-4/5 p-7 bg-[#F2F3F7] rounded mt-3 relative">
              <div className="w-5 h-5 bg-[#F2F3F7] absolute -top-2 left-16 rotate-45"></div>
              {timelineDetails?.map((data) => (
                <>
                  <p>
                    {data.time} <span className="font-[500]">{data.info}</span>
                  </p>
                </>
              ))}

              <p className="text-[#287DF3] text-center">
                <span onClick={handleClick} className=" cursor-pointer">
                  {!show ? "View More" : "View Less"}
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* mobile */}
        {payOption == "Cash On Delivery" ? (
          <div className="lg:hidden flex h-[260px]">
            <div className="flex flex-col justify-center items-center  my-1">
              <div className="h-full w-1 my-1 bg-[#F2F2F2]">
                <div className="w-full h-[55%] bg-[#026C51] "></div>
              </div>
            </div>
            <div className="relative w-full">
              <div className="flex flex-col justify-between h-[260px]  absolute  -left-2 w-full">
                <div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                    <p className="ml-2">Processing</p>
                  </div>
                  <div className="">
                    <div className=" h-[96px] p-2 bg-[#F2F3F7] rounded mt-3 relative text-[12px] ml-6 overflow-y-scroll">
                      <div className="w-3 h-3 bg-[#F2F3F7] absolute -top-1 -z-10 left-4 rotate-45"></div>
                      {timelineDetails?.map((data) => (
                        <>
                          <p className="mb-2">
                            {data.time}{" "}
                            <span className="font-[500]">{data.info}</span>
                          </p>
                        </>
                      ))}
                      <p className="text-[#287DF3]">
                        <span onClick={handleClick} className=" cursor-pointer">
                          {!show ? "View More" : "View Less"}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                      <p className="ml-2">Shipping</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-[#F2F2F2] bg-[#F2F2F2]"></div>
                  <p className="ml-2">Delivered</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:hidden flex h-[320px]">
            <div className="flex flex-col justify-center items-center  my-1">
              <div className="h-full w-1 my-1 bg-[#F2F2F2]">
                <div className="w-full h-[73%] bg-[#026C51] "></div>
              </div>
            </div>
            <div className="relative w-full">
              <div className="flex flex-col justify-between h-[320px]  absolute  -left-2 w-full">
                <div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                    <p className="ml-2">Payment Success</p>
                  </div>
                  <div className="">
                    <div className=" h-[96px] p-2 bg-[#F2F3F7] rounded mt-3 relative text-[12px] ml-6 overflow-y-scroll">
                      <div className="w-3 h-3 bg-[#F2F3F7] absolute -top-1 -z-10 left-4 rotate-45"></div>
                      {timelineDetails?.map((data) => (
                        <>
                          <p className="mb-2">
                            {data.time}{" "}
                            <span className="font-[500]">{data.info}</span>
                          </p>
                        </>
                      ))}
                      <p className="text-[#287DF3]">
                        <span onClick={handleClick} className=" cursor-pointer">
                          {!show ? "View More" : "View Less"}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                      <p className="ml-2">Processing</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                  <p className="ml-2">Shipping</p>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-[#F2F2F2] bg-[#F2F2F2]"></div>
                  <p className="ml-2">Delivered</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (status === "Delivered") {
    return (
      <div>
        <div className="hidden lg:block">
          {payOption === "Cash On Delivery" ? (
            <div className="flex justify-center items-center relative">
              <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
              <div className="h-1 w-3/5 bg-[#F2F2F2]">
                <div className="w-full h-full bg-[#026C51]"></div>
              </div>
              <div className="w-3 h-3 rounded-full border-2 absolute left-2/4 z-10 bg-[#026C51] border-[#026C51]"></div>
              <div className="w-3 h-3 rounded-full border-2 bg-[#026C51] border-[#026C51]"></div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="flex justify-center items-center relative w-3/5">
                <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                <div className="h-1 w-full bg-[#F2F2F2] relative">
                  <div className="w-full h-full bg-[#026C51]"></div>
                </div>
                <div className="w-3 h-3 rounded-full border-2 absolute left-[38%]  z-10 bg-[#026C51] border-[#026C51] "></div>
                <div className="w-3 h-3 rounded-full border-2 absolute left-[70%]  z-10 bg-[#026C51] border-[#026C51] "></div>
                <div className="w-3 h-3 rounded-full border-2 bg-[#026C51] border-[#026C51]"></div>
              </div>
            </div>
          )}

          <div className="flex justify-center items-center ">
            <div className="flex justify-between items-center w-[70%]">
              {payOption !== "Cash On Delivery" && <p>Payment Success</p>}
              <p>Processing</p>
              <p>Shipping</p>
              <p>Delivered</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-4/5 p-7 bg-[#F2F3F7] rounded mt-3 relative">
              <div className="w-5 h-5 bg-[#F2F3F7] absolute -top-2 left-16 rotate-45"></div>
              {timelineDetails?.map((data) => (
                <>
                  <p>
                    {data.time} <span className="font-[500]">{data.info}</span>
                  </p>
                </>
              ))}

              <p className="text-[#287DF3] text-center">
                <span onClick={handleClick} className=" cursor-pointer">
                  {!show ? "View More" : "View Less"}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* mobile */}
        {payOption == "Cash On Delivery" ? (
          <div className="lg:hidden flex h-[260px]">
            <div className="flex flex-col justify-center items-center  my-1">
              <div className="h-full w-1 my-1">
                <div className="w-full h-full bg-[#026C51] "></div>
              </div>
            </div>
            <div className="relative w-full">
              <div className="flex flex-col justify-between h-[260px]  absolute  -left-2 w-full">
                <div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                    <p className="ml-2">Processing</p>
                  </div>
                  <div className="">
                    <div className=" h-[96px] p-2 bg-[#F2F3F7] rounded mt-3 relative text-[12px] ml-6 overflow-y-scroll">
                      <div className="w-3 h-3 bg-[#F2F3F7] absolute -top-1 -z-10 left-4 rotate-45"></div>
                      {timelineDetails?.map((data) => (
                        <>
                          <p className="mb-2">
                            {data.time}{" "}
                            <span className="font-[500]">{data.info}</span>
                          </p>
                        </>
                      ))}
                      <p className="text-[#287DF3]">
                        <span onClick={handleClick} className=" cursor-pointer">
                          {!show ? "View More" : "View Less"}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                      <p className="ml-2">Shipping</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                  <p className="ml-2">Delivered</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:hidden flex h-[320px]">
            <div className="flex flex-col justify-center items-center  my-1">
              <div className="h-full w-1 my-1">
                <div className="w-full h-full bg-[#026C51] "></div>
              </div>
            </div>
            <div className="relative w-full">
              <div className="flex flex-col justify-between h-[320px]  absolute  -left-2 w-full">
                <div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                    <p className="ml-2">Payment Success</p>
                  </div>
                  <div className="">
                    <div className=" h-[96px] p-2 bg-[#F2F3F7] rounded mt-3 relative text-[12px] ml-6 overflow-y-scroll">
                      <div className="w-3 h-3 bg-[#F2F3F7] absolute -top-1 -z-10 left-4 rotate-45"></div>
                      {timelineDetails?.map((data) => (
                        <>
                          <p className="mb-2">
                            {data.time}{" "}
                            <span className="font-[500]">{data.info}</span>
                          </p>
                        </>
                      ))}
                      <p className="text-[#287DF3]">
                        <span onClick={handleClick} className=" cursor-pointer">
                          {!show ? "View More" : "View Less"}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                      <p className="ml-2">Processing</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                  <p className="ml-2">Shipping</p>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
                  <p className="ml-2">Delivered</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Timeline;
