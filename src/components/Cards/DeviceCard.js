import React from "react";
import { HiOutlineDeviceMobile, HiOutlineDeviceTablet } from "react-icons/hi";
import { GoDeviceDesktop } from "react-icons/go";

export default function DeviceCard() {
  return (
    <div class=" p-6 bg-white  rounded-xl  dark:bg-gray-800 dark:border-gray-700">
      <p className="text-lg text-center p-4 font-extralight">Device Category</p>
      <div className="flex justify-around items-center text-xl mt-8">
        <button
          type="button"
          class="bg-gray-100 flex justify-between items-center font-medium rounded-full pr-2"
        >
          <HiOutlineDeviceMobile className="text-5xl rounded-full bg-violet-200 p-2 mr-2" />
          <span>Mobile</span>
        </button>
        <p className="text-black">96.4%</p>
      </div>
      <div className="flex justify-around items-center text-xl mt-8">
        <button
          type="button"
          class="bg-gray-100 flex justify-between items-center font-medium rounded-full pr-2"
        >
          <HiOutlineDeviceTablet className="text-5xl rounded-full bg-violet-200 p-2 mr-2" />
          <span>Tablet</span>
        </button>
        <p className="text-black">96.4%</p>
      </div>
      <div className="flex justify-around items-center text-xl  mt-8">
        <button
          type="button"
          class="bg-gray-100 flex justify-between items-center font-medium rounded-full pr-2"
        >
          <GoDeviceDesktop className="text-5xl rounded-full bg-violet-200 p-2 mr-2" />
          <span>Mobile</span>
        </button>
        <p className="text-black">96.4%</p>
      </div>
    </div>
  );
}
