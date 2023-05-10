import { Spinner } from "flowbite-react";
import React from "react";

export default function Spin(props) {
  return props?.isLoading ? (
    <Spinner aria-label="Default status example" />
  ) : props?.error ? (
    <p className="text-sm text-red-300">something wrong</p>
  ) : (
    props.children
  );
}
