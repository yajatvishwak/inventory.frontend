import React from "react";
export default function Input(props) {
  if (props.password === true) {
    return (
      <input
        class="bg-gray-200 appearance-none border-2 border-gray-200  rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="password"
        placeholder={props.value}
        onChange={(e) => props.change(e.target.value)}
      ></input>
    );
  } else {
    return (
      <input
        class="bg-gray-200 appearance-none border-2 border-gray-200  rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        type="text"
        placeholder={props.value}
        onChange={(e) => props.change(e.target.value)}
      ></input>
    );
  }
}
