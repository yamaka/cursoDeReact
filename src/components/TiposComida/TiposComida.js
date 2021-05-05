import React, { Component } from 'react'

import Frutas from './Frutas';
import Vegetales from './Vegetales';

export default class TiposComida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiposComida: [
        {
          nombre: "Frutas",
          elementos: ["Manzana", "Pera", "Platana", "Frutilla"],
        },
        {
          nombre: "Vegetales",
          elementos: ["Brocoli", "Acelga", "Zanahoria", "NAbo"],
        },
      /*   {
          nombre: "Cereales",
          elementos: ["Arroz", "Trigo", "Avena"],
        }, */
      ],
    };
  }
  renderTiposComida=()=>{
      
    const {tiposComida} = this.state;
    return <React.Fragment>
            {tiposComida.map(comida => {
                let  Componente = null;
                switch (comida.nombre) {
                    case "Frutas": Componente = Frutas; break;
                    case "Vegetales": Componente = Vegetales; break;

                }
               return <Componente elementos={comida.elementos} />;
            } )}
    </React.Fragment>
  }


  render() {
    return (
      <div>
        <h1>Tipos de Comida</h1>

        {this.renderTiposComida()}
       {/*  <Frutas />
        <Vegetales /> */}
      </div>
    );
  }
}
