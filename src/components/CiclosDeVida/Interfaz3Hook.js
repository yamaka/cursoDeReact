import React, {useEffect, useState} from 'react';

//componente funcional hook con estados y ciclos de los componentes
const Interfaz3Hook = () => {
    const [miEstadoHook, setMiEstadoHook] = useState(0);

    useEffect(()=>{
        //aca hacer llamadas al servidor
        alert("didMount Interfaz3Hook");
    }, [])

    return <div>
            <h2>interfaz 3 hook</h2>
            <h3>mi estado hook {miEstadoHook}</h3>
    </div>    
}

export default Interfaz3Hook