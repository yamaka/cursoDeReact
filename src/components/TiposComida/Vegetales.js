import React from 'react'
import ListaVegetales from './ListaVegetales'

export default function Vegetales({elementos}) {

    //const aVegetales = ["Brocoli", "Acelga", "Zanahoria", "Nabo", "Coliflor"];
    return (
      <div>
        <h2>Vegetales</h2>
        <ListaVegetales aVegetales={elementos}/>
      </div>
    );
}
