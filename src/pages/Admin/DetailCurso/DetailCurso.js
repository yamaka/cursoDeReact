import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

const DetailCurso = () => {
    const {id} = useParams();

    const [curso, setCurso] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        getCurso()
    },[])

    const getCurso = async () =>{
        try {
            const response = await axios.get(`http://localhost:8080/api/cursos/${id}`);
            if(response){
                setCurso(response.data);
            }
            
        } catch (error) {
             console.error(
               "Error al crear curso",
               error.message ? error.message : error
             );
        }
    }

    return <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl">DETALLE DEL CURSO</h1>
        { curso && <h2 className="text-xl font-semibold">{curso.titulo}</h2>}
        
    </div>
}

export default DetailCurso