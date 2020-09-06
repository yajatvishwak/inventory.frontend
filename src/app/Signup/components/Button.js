import React from "react";
export default function Button(props) {
  return (
    <button
      onClick={props.action()}
      class="bg-gradient-to-r from-teal-500 to-blue-500  text-white font-bold py-2 px-4 rounded-md"
    >
      {props.name}
    </button>
  );
}
