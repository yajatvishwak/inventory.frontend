import React from "react";
import Sidenav from "../shared/SideNav";
import Input from "../Stocking/components/Input";
import Searchresult from "./components/SearchResult";
import Forminput from "./components/FormInput";
import Table from "./components/Table";

export default function Stocking() {
  return (
    <div>
      <Sidenav />
      <div
        style={{ fontWeight: 700, fontSize: 50 }}
        className="text-center ml-auto mt-20  "
      >
        Stocking
      </div>

      <div className="flex h-screen overflow-hidden ">
        <div className=" w-1/3 mt-24 ml-64   m-auto">
          <Input value="Search" />
          <Searchresult />
        </div>
        <div className="ml-56 mt-24 w-1/3 ">
          <Forminput />
          <button className="bg-blue-500 w-40 h-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {" "}
            submit
          </button>
        </div>
        <div className="ml-56 mt-24 w-1/3 mr-24">
          <Table />
        </div>
      </div>
    </div>
  );
}
