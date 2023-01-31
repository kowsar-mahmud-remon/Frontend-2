const Timeline = ({ status }) => {
    
    if (status === 'Processing') {
        return (
          <div>
            <div className="flex justify-center items-center relative">
              <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
              <div className="h-1 w-4/5 bg-[#F2F2F2]"></div>
              <div className="w-3 h-3 rounded-full border-2 absolute left-2/4 z-10 bg-[#F2F2F2]"></div>
              <div className="w-3 h-3 rounded-full border-2 bg-[#F2F2F2]"></div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="flex justify-between items-center w-[70%]">
                <p>Processing</p>
                <p>Shipping</p>
                <p>Delivered</p>
              </div>
            </div>
          </div>
        );
    }

    if (status === "Shipped") {
        return (
          <div>
            <div className="flex justify-center items-center relative">
              <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
              <div className="h-1 w-4/5 bg-[#F2F2F2]">
                <div className="w-1/2 h-full bg-[#026C51]"></div>
              </div>
              <div className="w-3 h-3 rounded-full border-2 absolute left-2/4 z-10 bg-[#026C51] border-[#026C51]"></div>
              <div className="w-3 h-3 rounded-full border-2 bg-[#F2F2F2]"></div>
            </div>
            <div className="flex justify-center items-center ">
              <div className="flex justify-between items-center w-[70%]">
                <p>Processing</p>
                <p>Shipping</p>
                <p>Delivered</p>
              </div>
            </div>
          </div>
        );
    }

    if (status === "Delivered") {
      return (
        <div>
          <div className="flex justify-center items-center relative">
            <div className="w-3 h-3 rounded-full border-2 border-[#026C51] bg-[#026C51]"></div>
            <div className="h-1 w-3/5 bg-[#F2F2F2]">
              <div className="w-full h-full bg-[#026C51]"></div>
            </div>
            <div className="w-3 h-3 rounded-full border-2 absolute left-2/4 z-10 bg-[#026C51] border-[#026C51]"></div>
            <div className="w-3 h-3 rounded-full border-2 bg-[#026C51] border-[#026C51]"></div>
          </div>
          <div className="flex justify-center items-center ">
            <div className="flex justify-between items-center w-[70%]">
              <p>Processing</p>
              <p>Shipping</p>
              <p>Delivered</p>
            </div>
          </div>
        </div>
      );
    }
};

export default Timeline;
