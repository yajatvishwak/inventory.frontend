import React from "react";
export default function Input(props) {
  return (
    <input
      class="bg-gray-200 w-6/12 appearance-none border-2 border-gray-200  rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      type="text"
      placeholder={props.value}
      onChange={(e) => props.change(e.target.value)}
    ></input>
  );
}
