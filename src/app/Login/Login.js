import React, { useState } from "react";
import "../../styles/tailwind.css";
import Topbar from "./components/Topbar";
import Input from "./components/Input";
import Button from "./components/Button";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

const Login = (props) => {
  Cookies.set("authed", false);
  const notify = (message) => toast(message);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [isLogged, setisLogged] = useState(false);

  const login = () => {
    Axios.post("http://localhost:5000/login", {
      user_inp: Username,
      password: Password,
    })
      .then((res) => {
        if (res.data.code === true) {
          console.log("logged in");
          setisLogged(true);
          Cookies.set("authed", true);
        } else {
          notify(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeUsername = (text) => {
    setUsername(text);
  };
  const changePassword = (text) => {
    setPassword(text);
  };
  return (
    <>
      {" "}
      {isLogged ? (
        <Redirect to="/dashboard/home" />
      ) : (
        <>
          <Topbar />
          <ToastContainer />

          <div class="flex flex-col justify-center ">
            <div class="text-center px-4 py-2 m-2">
              <div style={{ fontWeight: 700, fontSize: 56, opacity: 0.7 }}>
                Inventory
              </div>
            </div>
            <div class="text-center px-4 py-2 m-2">
              <div style={{ fontWeight: 600, fontSize: 36, opacity: 0.7 }}>
                <Input change={changeUsername} value="username or email" />
              </div>
              <div
                style={{
                  fontWeight: 600,
                  marginTop: 50,
                  fontSize: 36,
                  opacity: 0.7,
                }}
              >
                <Input password change={changePassword} value="password" />
              </div>
              <div
                style={{
                  fontWeight: 600,
                  marginTop: 50,
                  fontSize: 36,
                  opacity: 0.7,
                }}
              >
                <Button login={() => login} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
