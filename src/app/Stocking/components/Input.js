import React from "react";

export default function Input() {
  return (
    <>
      <label
        class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4"
        for="textbox"
      >
        Search
      </label>
      <input
        id="textbox"
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
      ></input>
      <button
        class="shadow bg-purple-500 mt-4 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="button"
      >
        search
      </button>
    </>
  );
}
