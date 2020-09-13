import React from "react";

export default function Input(props) {
  const onChange = (e) => {
    props.change(e.target.value);
  };
  return (
    <>
      <input
        id="textbox"
        placeholder={props.value}
        onChange={onChange}
        class="bg-white mb-10 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
      ></input>
    </>
  );
}
