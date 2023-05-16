import React from "react";

import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

export default function Sessions({ data }) {
  return (
    <div class="p-2 bg-white border border-gray-200 rounded-lg shadow ">
      <div className="flex justify-around">
        <span className="block text-xs 2xl:text-sm">
          {data.type.slice(0, 10)}...
        </span>
        <button
          type="button"
          class={`flex items-center px-2 ${
            data?.upd
              ? "bg-green-100 text-green-500"
              : "bg-red-100 text-red-500"
          } text-xs 2xl:text-sm hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold font-roboto rounded text-center `}
        >
          {data.upd ? (
            <span>
              <RiArrowDownSFill />
            </span>
          ) : (
            <span>
              <RiArrowUpSFill />
            </span>
          )}
          {data?.percent}
        </button>
      </div>
      <div className="flex my-10 items-center justify-center font-extrabold 2xl:text-4xl text-xl">
        {data?.value}%
      </div>
    </div>
  );
}
