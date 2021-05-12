import React, { useEffect, useState } from "react";
import axios from "axios"


const Signup = () => {
    const [signupForm, setSignupForm] = useState({
        username:"",
        email:"",
        password:"",
    })

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
                    alert("usuario registrado exitosamente")
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

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex flex-col flex-1 items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Registrate</h1>
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="text"
            placeholder="Usuario"
            onChange={(e)=> handleChangeForm(e.target.value, "username")}
            
          />
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="email"
            placeholder="Correo"
            onChange={(e)=> handleChangeForm(e.target.value, "email")}
          />
          <input
            className="block border border-grey-light w-full p-3 rounded mb-4"
            type="password"
            placeholder="Contraseña"
            onChange={(e)=> handleChangeForm(e.target.value, "password")}
          />
          <button
            disabled={validateInfo()} 
            className="bg-green-500 w-full text-center py-3 rounded text-white hover:bg-green-dark focus-outline-none my-1 "
            onClick={() => handleSignup()}
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
