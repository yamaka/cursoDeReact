import React from 'react'

export default function ListaVegetales({aVegetales}) {

    const RenderVegetales = () =>{
        return (
          <ul>
            {aVegetales.map((vegetal) => (
              <li>{vegetal}</li>
            ))}
          </ul>
        );
    }

    return (
        <div>
            <RenderVegetales/>
        </div>
    )
}
