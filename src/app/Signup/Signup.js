import React, { useState } from "react";
import Topbar from "./components/Topbar";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Axios from "axios";
import { Redirect } from "react-router-dom";

export default function Signup() {
  const [created, setCreated] = useState(false);
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
    Axios.post("http://localhost:5000/signUp", {
      first_name: name,
      email: email,
      username: username,
      password: password,
      confirmation: ppassword,
    }).then((res) => {
      //console.log("submitted");
      console.log(res.data);
      if (res.data.code === true) {
        setCreated(true);
      }
    });
  };
  var slide;
  switch (menu) {
    case 1:
      slide = (
        <Slide1
          next={next}
          prev={prev}
          onChangeName={(val) => {
            setName(val);
          }}
          onChangeEmail={(val) => {
            setEmail(val);
          }}
        />
      );
      break;
    case 2:
      slide = (
        <Slide2
          next={next}
          prev={prev}
          onChangeUserName={(val) => {
            setUsername(val);
          }}
          onChangePassword={(val) => {
            setPassword(val);
          }}
          onChangePpassword={(val) => {
            setPpassword(val);
          }}
          submit={submit}
        />
      );
      break;
    default:
      slide = (
        <Slide1
          next={next}
          prev={prev}
          onChangeName={(val) => {
            setName(val);
          }}
          onChangeEmail={(val) => {
            setEmail(val);
          }}
        />
      );
  }

  return (
    <>
      {created ? (
        <Redirect to="/login" />
      ) : (
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
      )}
    </>
  );
}
