import React from "react";

export default function Card(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: "#C6C6C6",
          width: 700,
          height: 230,
          borderRadius: 21,
          margin: 50,
        }}
      >
        <div
          style={{
            textAlign: "left",
            fontSize: 40,
            fontWeight: 400,
            marginTop: 10,
            marginLeft: 25,
          }}
        >
          {props.value}
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: 700,
            marginTop: 75,
          }}
        >
          {props.title}
        </div>
      </div>
    </>
  );
}
