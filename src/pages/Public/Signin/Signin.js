import React, { useEffect, useState } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"

const Signin = ({ setIsLoggedIn, setUsername }) => {
    const history = useHistory();
  const [signinForm, setSigninForm] = useState({
    username: "",
    password: "",
  });

  const handleChangeForm = (value, keyForm) => {
    const newValue = {
      [keyForm]: value,
    };
    setSigninForm({ ...signinForm, ...newValue });
  };

  const handleSignin = async () => {
    console.log("handleSignup");
    const { username, email, password } = signinForm;
    if (username != "" && email != "" && password != "") {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/auth/signin",
          signinForm
        );
        if (response.data) {
          setIsLoggedIn(true);
          setUsername(response.data.username);
          history.push("/")
        }
      } catch (error) {
        console.error(
          "Error al crear curso",
          error.message ? error.message : error
        );
      }
    }
  };
  const validateInfo = () => {
    const { username, email, password } = signinForm;
    if (username != "" && email != "" && password != "") {
      return false;
    }
    return true;
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex flex-col flex-1 items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Ingresar</h1>
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="text"
            placeholder="Usuario"
            onChange={(e) => handleChangeForm(e.target.value, "username")}
          />
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            placeholder="Contraseña"
            onChange={(e) => handleChangeForm(e.target.value, "password")}
          />
          <button
            disabled={validateInfo()}
            className="bg-green-500 w-full text-center py-3 rounded text-white hover:bg-green-dark focus-outline-none my-1 "
            onClick={() => handleSignin()}
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
