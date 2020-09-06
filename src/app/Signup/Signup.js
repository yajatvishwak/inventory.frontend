import React, { useState } from "react";
import Topbar from "./components/Topbar";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";

export default function Signup() {
  const [menu, setMenu] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ppassword, setPpassword] = useState("");

  const next = () => {
    setMenu(menu + 1);
  };
  const prev = () => {
    setMenu(menu - 1);
  };
  const submit = () => {
    console.log("submitted");
  };
  var slide;
  switch (menu) {
    case 1:
      slide = <Slide1 next={next} prev={prev} />;
      break;
    case 2:
      slide = <Slide2 next={next} prev={prev} submit={submit} />;
      break;
    default:
      slide = <Slide1 />;
  }

  return (
    <>
      <Topbar />
      <div class="flex flex-col justify-center content-center ">
        <div class="text-center px-4 py-2 m-2">
          <div style={{ fontWeight: 700, fontSize: 56, opacity: 0.7 }}>
            Inventory
          </div>
        </div>
        <div class="text-center px-4 py-2 m-2">{slide}</div>
      </div>
    </>
  );
}
