import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const OrderHistoryDate = () => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="bg-[#ffffff] relative">
      <div  className="lg:w-[611px] md:w-[611px] w-full bg-[#F2F3F7] flex justify-between items-center p-2 rounded lg:-mt-2 md:-mt-2">
        <input
          value={`${format(range[0].startDate, "MM/dd/yyyy")}`}
          readOnly
          className="lg:w-[284px] md:w-[284px] w-full h-[40px] rounded pl-4 cursor-pointer border border-[#B7B7B7] text-[#686868]"
          onClick={() => setOpen((open) => !open)}
        />
        <span className="text-[#686868]">-</span>
        <input
          value={` ${format(range[0].endDate, "MM/dd/yyyy")}`}
          readOnly
          className="lg:w-[284px] md:w-[284px] w-full h-[40px] rounded pl-4 cursor-pointer border border-[#B7B7B7] text-[#686868]"
          onClick={() => setOpen((open) => !open)}
        />
      </div>

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className="lg:w-[611px] md:w-[611px] w-[370px] bg-[#F2F3F7]"
          />
        )}
      </div>
    </div>
  );
};

export default OrderHistoryDate;
