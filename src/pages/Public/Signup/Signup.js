import React, { useEffect, useState } from "react";
import axios from "axios"
import GoogleLogin from "react-google-login"
import {useHistory} from "react-router-dom"


const Signup = () => {
  const history = useHistory();
    const [signupForm, setSignupForm] = useState({
        username:"",
        email:"",
        password:"",
    })

    const [fromGoogle, setFromGoogle] = useState(false);

    useEffect(() => {
        if(fromGoogle){
          handleSignup()
        }
    }, [fromGoogle])

    const handleChangeForm = (value, keyForm) =>{
        const newValue = {
            [keyForm]: value
        };
        setSignupForm({...signupForm, ...newValue})
    }

    const handleSignup = async () =>{
        console.log("handleSignup");
        const { username, email, password} = signupForm
        if (username!= "" && email!="" && password != "" ) {
            try {

                const response = await axios.post(
                  "http://localhost:8080/api/auth/signup",
                  signupForm
                );
                if(response.data){
                    alert("usuario registrado exitosamente");
                    history.push("/signin")
                }
            } catch (error) {
                 console.error(
                   "Error al crear curso",
                   error.message ? error.message : error
                 );
            }
        }

    }
    const validateInfo = () => {
        const {username, email, password} = signupForm;
        if (username!= "" && email!="" && password != "" ) {
            return false
        }
        return true
    }

    const responseGoogle = (response) => {
      console.log("login google", response);
      const username = response.profileObj.name;
      const email = response.profileObj.email;
      const hashLength = 8;
      const password = "12345678";
      const confirmPassword = "12345678";
      setSignupForm({
        ...signupForm,
        ...{ username, email, password },
      });

      setFromGoogle(true);
    };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex flex-col flex-1 items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Registrate</h1>
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="text"
            placeholder="Usuario"
            value={signupForm.username}
            onChange={(e) => handleChangeForm(e.target.value, "username")}
          />
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="email"
            placeholder="Correo"
            value={signupForm.email}
            onChange={(e) => handleChangeForm(e.target.value, "email")}
          />
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            placeholder="Contraseña"
            value={signupForm.password}
            onChange={(e) => handleChangeForm(e.target.value, "password")}
          />
          <button
            disabled={validateInfo()}
            className="bg-green-500 w-full text-center py-3 rounded text-white hover:bg-green-dark focus-outline-none my-1 "
            onClick={() => handleSignup()}
          >
            Registrarse
          </button>
        </div>
        <div className=" flex flex-col items-center text-grey-dark mt-6">
          <div>Hazlo con google o facebook</div>
          <GoogleLogin
            clientId="585612183624-ro55sv0ggkclm8a31tvqlfsfe21j19au.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
