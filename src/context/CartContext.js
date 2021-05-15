import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

//context
import { AuthContext } from "./AuthContext";

export default ({ children }) => {
  const [authStateContext, setAuthStateContext] = useContext(AuthContext);
  const { username, email, isLoggedIn, id } = authStateContext;

  const [cartStateContext, setCartStateContext] = useState({
    cursos: [],
    countCursos: 0,
    idUser: null,
    idCart: null,
  });

  

  const tieneCarrito = (idUser) => {
    console.log("asdfsad");
  };
  const addToCart = async (newCurso) => {
    const { cursos, countCursos, idCart } = cartStateContext;

    const cursoBuscado = cursos.find((curso) => curso.id == newCurso.id);
    debugger;
    if (!newCurso || typeof cursoBuscado == "undefined") {
      try {
        const params = {
          idCurso: newCurso.id,
          idCarrito: idCart,
        };
        const response = await axios.post(
          "http://localhost:8080/api/carrito/add-curso",
          params
        );
        if (response.data) {
          setCartStateContext({
            ...cartStateContext,
            ...{
              cursos: [...cursos, newCurso],
              countCursos: countCursos + 1,
            },
          });
        }
      } catch (error) {
        console.error(
          "Error al crear curso",
          error.message ? error.message : error
        );
      }
    }
  };

  const getCursosInCart = async () =>{
    const { cursos, countCursos, idCart } = cartStateContext;
     if (authStateContext.id) {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/carrito/get-cursos/${idCart}`
        );
        if (response.data) {
          debugger
          setCartStateContext({
            ...cartStateContext,
            ...{
              cursos: response.data[0].cursos,
              countCursos: response.data[0].cursos.length,
            },
          });
          //setListCursos(response.data[0].cursos);

        }
      } catch (error) {
        console.error('getCursosInCart', error.message ? error.message : error)
      }
    } 
  }

  return (
    <CartContext.Provider
      value={[
        cartStateContext,
        setCartStateContext,
        addToCart,
        getCursosInCart,
      ]}
    >
      {children}
    </CartContext.Provider>
  );
};

export const CartContext = createContext();
