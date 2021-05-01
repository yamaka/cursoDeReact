import React from "react";

import "./App.css";

//componente como funcion
/* const App = ()=>{
  return (
    <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center'}}>
      <div className='container'>
        <h1>hola JSX</h1>
        <div>
          <span>titulo</span>
          <p>texto</p>
        </div>
      </div>
    </div>
  );
} */

const Contador = ({valorContador, handleContador}) => {
  //es lo mismo que
  //const {valorContador,handleContador }= props
  return (
    <div style={{ border: "solid 1px", borderColor: "#eee" }}>
      <button className="boton" onClick={handleContador}>
        +
      </button>
      <span style={{ marginLeft: "2rem" }}>{valorContador}</span>
    </div>
  );
};

export const Hijo2 = () => {
  return <h1>soy un componente</h1>;
};


//componnete como clase

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     contador: 0 
    }
  }

  handleContador= ()=>{
    const {contador } = this.state;
    this.setState({
      contador: contador + 1,
    })
    console.log('contador');
  }

  render() {
    const { contador } = this.state
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div className="container">
          <h1>hola JSX componente como clase</h1>
          <Contador
            valorContador={contador}
            handleContador={this.handleContador}
          />
          <Hijo2 />
        </div>
      </div>
    );
  }
}
