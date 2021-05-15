import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
//constext
import {CartContext} from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

const CardCurso = (props) => {
  const { curso, curso:{titulo, descripcion, imagen, id} } = props;
    const history = useHistory();

    const [cartStateContext, setCartStateContext, addToCart] = useContext(CartContext);
    const {cursos, idCart} = cartStateContext;
    const [authStateContext, setAuthStateContext] = useContext(AuthContext);
    const { username, email, isLoggedIn } = authStateContext;
    const redirectTo = () =>{
        history.push(`/cursos/${id}`);
    }
    const isInCartCourse = () =>{
      const result = cursos.find((cursoCarrito) => cursoCarrito.id == id); 
      return typeof result != "undefined";
    }
    const toCartPage = () => {
      if (!isLoggedIn) {
        history.push("/signin");
      }else{
        history.push("/cart/" + idCart);
      }
      
    };
    const agregarAlCarrito =()=>{
       if (!isLoggedIn) {
         history.push("/signin");
       }else{
         addToCart(curso)
       }
    }
  return (
    <figure className="flex flex-col items-center bg-gray-100 rounded-xl p-8 w-1/4 mx-8 my-8 cursor-pointer">
      <div className="flex flex-col items-center" onClick={() => redirectTo()}>
        <span className="text-xl font-semibold">{titulo}</span>
        <br />
        <img
          class="w-32 h-32 rounded-full mx-auto"
          src={imagen}
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 text-center space-y-4">
          <blockquote>
            <p class="text-lg font-semibold">{`"${descripcion}"`}</p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-cyan-600">Sarah Dayan</div>
            <div class="text-gray-500">Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </div>
      <br />
      {!isInCartCourse() && (
        <button
          className="bg-green-500 text-white p-2 rounded font-semibold w-11/12"
          onClick={() => agregarAlCarrito()}
        >
          Carrito
        </button>
      )}
      {isInCartCourse() && (
        <button
          className="bg-green-500 text-white p-2 rounded font-semibold w-11/12"
          onClick={() => toCartPage()}
        >
          Ir al carrito
        </button>
      )}
    </figure>
  );
};

export default CardCurso;
