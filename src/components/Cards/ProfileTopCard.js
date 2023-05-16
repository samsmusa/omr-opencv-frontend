import React from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
export default function ProfileTopCard({ data }) {
  return (
    <div class=" bg-white  p-5 ">
      <div className="flex justify-around">
        <button
          type="button"
          class={`${
            data?.up
              ? "text-green-500 bg-green-200 hover:bg-green-300 focus:ring-4 focus:ring-green-300"
              : "text-red-500 bg-red-200 hover:bg-red-300 focus:ring-4 focus:ring-red-300"
          } font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none`}
        >
          {data?.up ? (
            <BiUpArrow className="text-2xl" />
          ) : (
            <BiDownArrow className="text-2xl" />
          )}
        </button>
        <div className="flex flex-col">
          <span className="text-xs text-left text-gray-300">{data?.type}</span>
          <span className="text-3xl font-extrabold text-left">
            {data?.value}k
          </span>
        </div>
      </div>
    </div>
  );
}
