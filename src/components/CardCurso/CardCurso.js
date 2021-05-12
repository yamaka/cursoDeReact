import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const CardCurso = ({ titulo, descripcion, imagen, id }) => {
    const history = useHistory();
    const redirectTo = () =>{
        history.push(`/cursos/${id}`);
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
      <button className="bg-green-500 text-white p-2 rounded font-semibold w-11/12">
        Carrito
      </button>
    </figure>
  );
};

export default CardCurso;
