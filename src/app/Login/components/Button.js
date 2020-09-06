import React from "react";
export default function Button(props) {
  return (
    <button
      onClick={props.login()}
      class="bg-gradient-to-r from-teal-500 to-blue-500  text-white font-bold py-2 px-4 rounded-md"
    >
      login >
    </button>
  );
}
