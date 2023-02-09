import React from "react";
import { Radio, RadioGroup } from "react-radio-group";

const UploadProduct = () => {
  const options = [
    {
      option: "Delivery time is too long",
      value: "Delivery time is too long",
    },
    {
      option: "Wrong Delivery Address",
      value: "Wrong Delivery Address",
    },
    {
      option: "Currently No need this Product",
      value: "Currently No need this Product",
    },
    {
      option: "Not Good This Product",
      value: "Not Good This Product",
    },
    {
      option: "Not Original Product",
      value: "Not Original Product",
    },
  ];
  return (
    <div className="p-6">
      <form action="">
        <div className="flex max-w-[1426px] rounded shadow-xl p-6">
          <div className="w-2/5">{/* image */}</div>

          <div className="w-3/5 ">
            {/* line 1 */}
            <div className="flex mb-6">
              <label className="mr-4 w-[140px] label justify-end">
                <span className="">Product Name:</span>
              </label>
              <input
                type="text"
                className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
              />
            </div>

            {/* line 2 */}
            <div className="grid grid-cols-2">
              <div className="flex mb-6">
                <label className="mr-4 w-[140px] label justify-end">
                  <span className="">Brand Name:</span>
                </label>
                <input
                  type="text"
                  className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                />
              </div>
              <div className="flex mb-6">
                <div className="mr-4 w-[140px]">
                  <label className=" label justify-end">
                    <span className="">Color:</span>
                  </label>
                </div>
                <input
                  type="text"
                  className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                />
                <div className="ml-2">
                  <input
                    type="text"
                    className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                  />
                </div>
              </div>
            </div>
            {/* line 3 */}
            <div className="grid grid-cols-2">
              <div className="flex mb-6">
                <label className="mr-4 w-[140px] label justify-end">
                  <span className="">Price:</span>
                </label>
                <input
                  type="text"
                  className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                />
              </div>
              <div className="flex mb-6">
                <div className="mr-4 w-[140px]">
                  <label className=" label justify-end">
                    <span className="">Discount:</span>
                  </label>
                </div>
                <input
                  type="text"
                  className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                />
                <div className="ml-2">
                  <input
                    type="text"
                    className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                  />
                </div>
              </div>
            </div>

            {/* line 4 */}
            <div className="grid grid-cols-2">
              <div className="flex mb-6">
                <label className="mr-4 w-[140px] label justify-end">
                  <span className="">Product Stock:</span>
                </label>
                <input
                  type="text"
                  className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                />
              </div>
            </div>
            {/* line  5 */}
            <div className="flex mb-6">
              <label className="mr-4 w-[140px] label justify-end items-start p-0">
                <span className="">Delivery Time:</span>
              </label>
              <RadioGroup
                name="fruit"
                // selectedValue={this.state.selectedValue}
                // onChange={this.handleChange}
                className="w-full"
              >
                <div className="flex items-center">
                  <Radio value="apple" />
                  <p className="ml-4">General Delivery 24/72h</p>
                </div>
                <div className="flex items-center">
                  <Radio value="apple" />
                  <p className="ml-4">Long Time Delivery 3 Days to 7 Days</p>
                </div>
                <div className="flex items-center">
                  <Radio value="apple" />
                  <p className="ml-4">Instant Delivery 30 min</p>
                </div>
              </RadioGroup>
            </div>

            <div className="flex mb-6">
              <label className="mr-4 w-[140px] label justify-end">
                <span className="">Product Stock:</span>
              </label>
              <RadioGroup
                name="fruit"
                // selectedValue={this.state.selectedValue}
                // onChange={this.handleChange}
                className="flex w-full gap-5"
              >
                <div className="flex items-center">
                  <Radio value="apple" />
                  <p className="ml-4">Cash On Delivery Available</p>
                </div>
                <div className="flex items-center">
                  <Radio value="apple" />
                  <p className="ml-4">Digital Payment</p>
                </div>
              </RadioGroup>
            </div>

            {/* line 6 */}

            <div className="flex mb-6">
              <label className="mr-4 w-[140px] label justify-end items-start p-0">
                <span className="">Description:</span>
              </label>
              <textarea className="bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full h-[128px]"></textarea>
            </div>
            {/* line 7 */}
            <div className="flex mb-6">
              <label className="mr-4 w-[140px] label justify-end">
                <span className="">Category:</span>
              </label>
              <select
                name="slot"
                className="bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                required
              >
                <option className="selected disabled hidden"></option>
                {options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.option}
                  </option>
                ))}
                {/*  */}
              </select>
            </div>
            {/* line 8 */}
            <div className="flex mb-6">
              <label className="mr-4 w-[140px] label justify-end">
                <span className="">Sub Category:</span>
              </label>
              <select
                name="slot"
                className="bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                required
              >
                <option className="selected disabled hidden"></option>
                {options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.option}
                  </option>
                ))}
                {/*  */}
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadProduct;
