import React from 'react'
import ListaFrutas from './ListaFrutas'

export default function Frutas({elementos}) {
    
    //const aFrutas = ["Manzana", "Pera", "Platano", "Frutilla"];

    return (
      <div>
        <h2>Frutas</h2>
        <ListaFrutas aFrutas={elementos} />
      </div>
    );
}
