import React from 'react';
import { Radio, RadioGroup } from 'react-radio-group';

const RightSide = ({ options}) => {
    return (
      <div className="">
        {/* line 1 */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          <label className="label justify-end">
            <span className="">Product Name:</span>
          </label>
          <input
            type="text"
            className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full col-span-3"
          />
        </div>

        {/* line 2 */}
        <div className="grid grid-cols-4 mb-6 gap-3">
          <label className="label justify-end">
            <span className="">Brand Name:</span>
          </label>
          <div className="col-span-3">
            <div className="grid grid-cols-3">
              <input
                type="text"
                className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
              />
              <div className="col-span-2">
                <div className="grid grid-cols-4 gap-3">
                  <label className=" label justify-end">
                    <span className="">Color:</span>
                  </label>
                  <input
                    type="text"
                    className="col-span-2 h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                  />
                  <input
                    type="text"
                    className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* line 3 */}
        <div className="grid grid-cols-4 mb-6 gap-3">
          <label className="label justify-end">
            <span className="">Price:</span>
          </label>
          <div className="col-span-3">
            <div className="grid grid-cols-3">
              <input
                type="text"
                className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
              />
              <div className="col-span-2">
                <div className="grid grid-cols-4 gap-3">
                  <label className=" label justify-end">
                    <span className="">Discount:</span>
                  </label>
                  <input
                    type="text"
                    className="col-span-2 h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                  />
                  <input
                    type="text"
                    className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* line 4 */}
        <div className="grid grid-cols-4 mb-6 gap-3">
          <label className="label justify-end">
            <span className="">Product Stock:</span>
          </label>
          <input
            type="text"
            className=" h-10 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full col-span-2"
          />
        </div>
        {/* line  5 */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          <label className="label justify-end items-start p-0">
            <span className="">Delivery Time:</span>
          </label>
          <RadioGroup
            name="fruit"
            // selectedValue={this.state.selectedValue}
            // onChange={this.handleChange}
            className="w-full col-span-3"
          >
            <div className="flex items-center">
              <Radio id='one' value="apple" />
              <label htmlFor='one' className="ml-4">General Delivery 24/72h</label>
            </div>
            <div className="flex items-center">
              <Radio id='two' value="apple" />
              <label htmlFor='two' className="ml-4">Long Time Delivery 3 Days to 7 Days</label>
            </div>
            <div className="flex items-center">
              <Radio id='three' value="apple" />
              <label htmlFor='three' className="ml-4">Instant Delivery 30 min</label>
            </div>
          </RadioGroup>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-6">
          <label className=" label justify-end">
            <span className="">Product Stock:</span>
          </label>
          <RadioGroup
            name="fruit"
            // selectedValue={this.state.selectedValue}
            // onChange={this.handleChange}
            className="flex w-full gap-5 col-span-3"
          >
            <div className="flex items-center">
              <Radio id='four' value="apple" />
              <label htmlFor='four' className="ml-4">Cash On Delivery Available</label>
            </div>
            <div className="flex items-center">
              <Radio id='five' value="apple" />
              <label htmlFor='five' className="ml-4">Digital Payment</label>
            </div>
          </RadioGroup>
        </div>

        {/* line 6 */}

        <div className="grid grid-cols-4 gap-3 mb-6">
          <label className="label justify-end items-start p-0">
            <span className="">Description:</span>
          </label>
          <textarea className="col-span-3 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full h-[128px]"></textarea>
        </div>
        {/* line 7 */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          <label className="label justify-end">
            <span className="">Category:</span>
          </label>
          <select
            name="slot"
            className="col-span-3 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
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
        <div className="grid grid-cols-4 gap-3 mb-6">
          <label className="label justify-end">
            <span className="">Sub Category:</span>
          </label>
          <select
            name="slot"
            className="col-span-3 bg-[#F2F3F7] border-2 border-dashed px-2 rounded w-full"
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
    );
};

export default RightSide;