import React from "react";
import "../../../styles/tailwind.css";
import { Link } from "react-router-dom";
var time = new Date();

export default function Topbar() {
  return (
    <>
      <div className="flex flex-row justify-between m-16  ">
        <div className="opacity-25 hover:opacity-50">
          <div
            style={{
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: 36,
            }}
          >
            {time.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </div>
        </div>
        <div className="opacity-50 hover:opacity-100">
          <div style={{ fontWeight: 700, fontSize: 36 }}>
            <Link to="/signup">sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
}
