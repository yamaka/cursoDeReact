import React, { useState, useEffect, useContext } from "react";
import {Link} from "react-router-dom"
import { CartContext } from "../../../context/CartContext";
const CartPage = () => {
  const [cartStateContext] = useContext(CartContext);
  const { cursos } = cartStateContext;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold">detalle del carrito</h1>
      <br />
      <br />
      <div className="flex w-11/12">
        <div className="flex flex-col w-2/3">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Titulo
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Descripcion
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Estado
                      </th>

                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {cursos.map((curso) => {
                      return (
                        <tr key={curso.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={curso.imagen}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {curso.titulo}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {curso.descripcion}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {curso.publicado ? "Si" : "No"}
                            </span>
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link
                              to={`/cursos/${curso.id}`}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Ver
                            </Link>
                            &nbsp; &nbsp;
                            <a
                              href="#!"
                              className="text-indigo-600 hover:text-indigo-900"
                              onClick={() => this.editarCurso(curso.id)}
                            >
                              Edit
                            </a>
                            &nbsp; &nbsp;
                            <a
                              href="#!"
                              className="text-red-400 hover:text-indigo-900"
                              onClick={() => this.eliminarCurso(curso.id)}
                            >
                              Eliminar
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
