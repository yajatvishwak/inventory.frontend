import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
export default function Slide2(props) {
  return (
    <>
      <div style={{ fontWeight: 600, fontSize: 36, opacity: 0.7 }}>
        <Input value="username" />
      </div>
      <div
        style={{
          fontWeight: 600,
          marginTop: 50,
          fontSize: 36,
          opacity: 0.7,
        }}
      >
        <Input value="password" />
      </div>
      <div
        style={{
          fontWeight: 600,
          marginTop: 50,
          fontSize: 36,
          opacity: 0.7,
        }}
      >
        <Input value="password again" />
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
            <Button name="< back" action={() => props.prev} />
          </div>
          <div class=" m-8">
            <Button name="submit >" action={() => props.submit} />
          </div>
        </div>
      </div>
    </>
  );
}
