import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";


export default class Cursos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: [],
      titulo: "",
      descripcion: "",
      imagen: "",
      cursoEdit: null,
      showForm: false,
    };
  }

  componentDidMount() {
    this.getCursos();
  }

  getCursos = () => {
    //fetch forma nativa de hacer llamada a un api rest
    /* fetch("http://localhost:8080/api/cursos")
      .then((response) => response.json())
      .then((jsonData) => console.log("response:", jsonData)); */

    //axios segunda forma de hacer request
    axios
      .get("http://localhost:8080/api/cursos")
      .then((res) => this.setState({ cursos: res.data }));
  };

  crearCurso = () => {
    this.setState({
      cursoEdit: null,
      showForm: true,
    });
  };

  guardarCurso = async () => {
    const { titulo, descripcion, imagen, cursos, cursoEdit } = this.state;
    const params = {
      titulo,
      descripcion,
      imagen,
    };
    try {
      let url = "http://localhost:8080/api/cursos";
      let response = null;
      if (cursoEdit) {
        url = url + "/" + cursoEdit.id;
        response = await axios.put(url, params);
      } else if (!cursoEdit) {
        response = await axios.post(url, params);
      }

      if (response) {
        //alert("se creo el curso correctamente");
        this.getCursos();
        this.setState({ showForm: false });
        /* this.setState({
          cursos: [...cursos, response.data],
        }); */
      }
    } catch (error) {
      console.error(
        "Error al crear curso",
        error.message ? error.message : error
      );
    }
  };

  handleOnChange = (valor, propiedad) => {
    this.setState({
      [propiedad]: valor,
    });
  };

  eliminarCurso = async (idCurso) => {
    const { cursos } = this.state;
    try {
      const response = await axios.delete(
        "http://localhost:8080/api/cursos/" + idCurso
      );
      if (response) {
        //this.getCursos();
        this.setState({
          cursos: cursos.filter((curso) => curso.id !== idCurso),
        });
      }
    } catch (error) {
      console.error(
        "Error al crear curso",
        error.message ? error.message : error
      );
    }
  };

  editarCurso = async (idCurso) => {
    const { titulo, descripcion, imagen, cursos } = this.state;
    debugger;
    const cursoEdit = cursos.find((curso) => curso.id == idCurso);
    if (cursoEdit) {
      this.setState({
        showForm: true,
        titulo: cursoEdit.titulo,
        descripcion: cursoEdit.descripcion,
        imagen: cursoEdit.imagen,
        cursoEdit,
      });
    }
  };

  detalleCurso = (idCurso) =>{
    
  }

  render() {
    const { titulo, descripcion, imagen, cursos, showForm } = this.state;
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-semibold">Listado de Cursos</h1>
        <br />
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => this.crearCurso()}
        >
          Agregar
        </button>
        <br />

        {/* formulario para agregar un curso */}

        {showForm && (
          <div className="border-solid border-2 border-black p-2 rounded">
            <input
              placeholder="titulo"
              value={titulo}
              onChange={(e) => this.handleOnChange(e.target.value, "titulo")}
            />
            <input
              placeholder="descripcion"
              value={descripcion}
              onChange={(e) =>
                this.handleOnChange(e.target.value, "descripcion")
              }
            />
            <input
              placeholder="imagen"
              value={imagen}
              onChange={(e) => this.handleOnChange(e.target.value, "imagen")}
            />
            {/* <input
            placeholder="publicado"
            
          /> */}
            <button
              className="bg-green-500 text-white p-2 rounded"
              onClick={() => this.guardarCurso()}
            >
              {" "}
              guardar
            </button>
          </div>
        )}

        <br />

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
    );
  }
}
