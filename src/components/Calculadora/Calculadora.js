import React from 'react';

import './Calculadora.css';

export default class Caculadora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0,
      valor1: 0,
      valor2: 0,
      resultado: 0,
      operador: '+'
    };
  }

  procesarOperadorAritmetico = (operador) => {
      this.setState({
          display: '',
          operador: operador
      })
  
  };

  handleDisplayValue = (valor) =>{
    const {resultado, valor1, valor2} = this.state;

    if(resultado === 0 ){
        this.setState({
            display: valor
        })
        if(valor1 == 0 && valor2 == 0){
            this.setState({valor1:valor})
        }else if(valor1>0 && valor2 == 0){
            this.setState({ valor2: valor });
        }else if(valor1> 0 && valor2>0){
            console.log('valores 1 y 2 seteados');
        }
    }
  }

    procesarResultado = () =>{
        const {valor1, valor2, operador} = this.state;
          switch (operador) {
            case "+":
              console.log("sumar");
              this.setState({ resultado: parseInt( valor1) + parseInt(valor2) }, ()=>{
                  this.actualizarDisplayResultado();
              });
              break;
            case "-":
              console.log("restar");
              this.setState({ resultado: parseInt( valor1) - parseInt( valor2 )}, ()=>this.actualizarDisplayResultado());
              break;
            case "*":
              console.log("multiplicarr");
              this.setState({ resultado: parseInt( valor1) * parseInt( valor2) }, ()=>this.actualizarDisplayResultado());
              break;
            case "/":
              console.log("dividir");
              this.setState({ resultado: parseInt( valor1) / parseInt( valor2) }, ()=>this.actualizarDisplayResultado());
              break;
          }

    }

    actualizarDisplayResultado = () =>{
        const {resultado} = this.state;
        this.setState({
            display: resultado
        })
    }
  

  render() {
    const { display, valor1, valor2, resultado } = this.state;
    return (
      <div className="container">
        <div className="containerCalculadora">
          <h1>Calculadora</h1>

          <input
            className="inputCalculadora"
            type="number"
            value={display}
            onChange={(e) => this.handleDisplayValue(e.target.value)}
          />

          <div className="inputCalculadora">
            <button
              className="boton"
              onClick={() => this.procesarOperadorAritmetico("+")}
            >
              +
            </button>
            <button
              className="boton"
              onClick={() => this.procesarOperadorAritmetico("-")}
            >
              -
            </button>
            <button
              className="boton"
              onClick={() => this.procesarOperadorAritmetico("*")}
            >
              *
            </button>
            <button
              className="boton"
              onClick={() => this.procesarOperadorAritmetico("/")}
            >
              /
            </button>
            <button
              className="boton"
              onClick={() => this.procesarResultado()}
            >
              =
            </button>
          </div>
          <div>
            <button
              className="boton"
              onClick={() => this.setState({
                  display: '',
                  valor1:0,
                  valor2: 0,
                  resultado:0
              })}
            >
              C
            </button>
          </div>
        </div>
      </div>
    );
  }
}
