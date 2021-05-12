import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCurso from "../../../components/CardCurso/CardCurso";

const Home = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    getCursos();
  }, []);

  const getCursos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/cursos");
      if (response.data.length > 0) {
        setCursos(response.data);
      }
    } catch (error) {
      console.error(
        "Error al crear curso",
        error.message ? error.message : error
      );
    }
  };

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-2xl font-semibold text-gray-700">
        Nuestros Mejores Cursos
      </h1>
      <div className="flex flex-row py-8 px-32 w-11/12 justify-center flex-wrap">
        {cursos.map((curso) => <CardCurso {...curso}/>)}
      </div>
    </div>
  );
};

export default Home;
