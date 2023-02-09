import React from "react";

const Delivery = ({ delivery, active, setActive }) => {
    const {text} = delivery;
  return (
    <div>
      <button
        className={`mr-2  text-[#686868] py-2 px-6 ${style.boxbuttonshadow}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Delivery;
