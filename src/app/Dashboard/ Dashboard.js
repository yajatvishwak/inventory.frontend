import React from "react";
import Sidenav from "../shared/SideNav";
import Card from "./components/Card";
import Card2 from "./components/Card2";

export default function Dashboard() {
  return (
    <>
      <Sidenav />
      <div
        style={{ fontWeight: 700, fontSize: 50 }}
        className="text-center ml-auto mt-20"
      >
        Inventory
      </div>
      <div className="flex flex-row content-center justify-center ">
        <div className="flex flex-wrap">
          <Card value="20%" title="sold today" />
          <Card value="70" title="active inventory" />
          <Card value="0" title="quantity inhand" />
          <Card />
        </div>
      </div>

      <div
        style={{ fontWeight: 700, fontSize: 30 }}
        className="text-center ml-auto mt-20"
      >
        {" "}
        top selling today
      </div>

      <div className="flex flex-wrap  flex-row content-center  justify-center ">
        <Card2 value="Maggie" />
      </div>
    </>
  );
}
