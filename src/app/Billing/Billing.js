import React from "react";
import Sidenav from "../shared/SideNav";

export default function Billing() {
  return (
    <>
      <Sidenav />
      <div
        style={{ fontWeight: 700, fontSize: 50 }}
        className="text-center ml-auto mt-20"
      >
        Billing
      </div>
    </>
  );
}
