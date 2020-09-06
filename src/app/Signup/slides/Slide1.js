import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
export default function Slide1(props) {
  return (
    <>
      <div style={{ fontWeight: 600, fontSize: 36, opacity: 0.7 }}>
        <Input value="name" />
      </div>
      <div
        style={{
          fontWeight: 600,
          marginTop: 50,
          fontSize: 36,
          opacity: 0.7,
        }}
      >
        <Input value="email" />
      </div>

      <div
        style={{
          fontWeight: 600,
          marginTop: 50,
          fontSize: 36,
          opacity: 0.7,
        }}
      >
        <div class="flex  flex-row justify-center content-center ">
          <div class=" m-8">
            <Button name="next >" action={() => props.next} />
          </div>
        </div>
      </div>
    </>
  );
}
