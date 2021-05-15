import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//configs
//import Config from "../../Config";
//context
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";

import "./Cart.css";

export default (props) => {
  const { counter } = props;
  // context
  const [cartStateContext, setCartStateContext,addToCart, getCursosInCart] =
    useContext(CartContext);
  const [authStateContext, setAuthStateContext] = useContext(AuthContext);

  const { cursos, countCursos, idUser, idCart } = cartStateContext;
  // state
  const [floatCart, setFloatCart] = useState(false);
  const [listCursos, setListCursos] = useState([]);

  // life cicles useEffect
  useEffect(() => {
    setTimeout(() => {
      getCartUser();
    }, 500);
    console.log("mounted cart!!!");
  }, []);

  useEffect(() => {
      if (idCart != null) {
          cursosInCart();
      }
    
  }, [idCart]);

  const getCartUser = async () => {
    const { id } = authStateContext; 
    const params = {
      userId: id,
    };
    try {
      const response = await axios.post(
        `http://localhost:8080/api/carrito`,
        params
      );
      if (response.data) {
        setCartStateContext({
          ...cartStateContext,
          ...{ idCart: response.data.id },
        });
      }
    } catch (error) {
      console.error("getCartUser", error.message ? error.message : error);
    }
  };

  const cursosInCart = async () => {
    await getCursosInCart();
    /* if (authStateContext.id) {
      try {
        const response = await axios.get(`${Config.WEB_ROOT}/carrito/get-cursos/${carritoId}`)
        if (response.data) {
          debugger
          setCarritoStateContext({
            ...carritoStateContext,
            ...{ cursos: response.data[0].cursos, cursosCount: response.data[0].cursos.length },
          });
          //setListCursos(response.data[0].cursos);

        }
      } catch (error) {
        console.error('getCursosInCart', error.message ? error.message : error)
      }
    } */
  };
  const showFloatCart = () => {
    setFloatCart(!floatCart);
  };

  return (
    <div className="block  lg:inline-block lg:mt-0 text-teal-lighter hover:text-gray-500 mx-4">
      <div className="flex justify-center">
        <div className="relative ">
          <div
            className="flex flex-row cursor-pointer truncate  px-4  rounded"
            onClick={() => showFloatCart()}
          >
            <div></div>
            <div className="flex flex-row-reverse ml-2 w-full">
              <div slot="icon" className="relative">
                <div className="absolute text-xs rounded-full -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white z-10">
                  {countCursos > 0 && countCursos}
                </div>
                <FontAwesomeIcon icon={faShoppingCart} color="white" />
              </div>
            </div>
          </div>
          {floatCart && (
            <div className="absolute w-full  rounded-b border-t-0 z-10 right-24">
              <div className="shadow-xl w-64 bg-white">
                {cursos.length > 0 &&
                  cursos.map((curso, index) => {
                    return (
                      <div
                        key={index}
                        className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100"
                      >
                        <div div className="p-2 w-12">
                          <img src={curso.imagen} alt="img product" />
                        </div>
                        <div className="flex-auto text-sm w-32">
                          <div className="font-bold">{curso.titulo}</div>
                          <div className="truncate">{curso.descripcion}</div>
                        </div>
                        <div className="flex flex-col w-18 font-medium items-end">
                          <div className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-trash-2 "
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <div className="p-4 justify-center flex">
                  <button
                    className="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-teal-700 hover:text-teal-100 
                    bg-teal-100 
                    text-teal-700 
                    border duration-200 ease-in-out 
                    border-teal-600 transition"
                  >
                    Más detalles
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
