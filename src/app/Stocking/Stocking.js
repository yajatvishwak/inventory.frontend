import React from "react";
import Sidenav from "../shared/SideNav";
import Input from "../Stocking/components/Input";
import Searchresult from "./components/SearchResult";

export default function Stocking() {
  return (
    <>
      <Sidenav />
      <div className="mt-56 ml-56 w-64">
        <Input />
      </div>
      <div className=" ml-56 mt-6 w-64">
        <Searchresult />
      </div>
    </>
  );
}
