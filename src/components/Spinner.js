import { Spinner } from "flowbite-react";
import React from "react";

export default function Spin(props) {
  return props?.isLoading ? (
    <div className="flex flex-col items-center justify-center w-full h-64  rounded-lg bg-gray-50">
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <Spinner aria-label="Default status example" />
      </div>
    </div>
  ) : props?.error ? (
    <p className="text-sm text-red-300">something wrong</p>
  ) : (
    props.children
  );
}
