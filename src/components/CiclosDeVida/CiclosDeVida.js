import React, { Component } from 'react'
import Interfaz1 from './Interfaz1';
import Interfaz2 from './Interfaz2';
import Interfaz3Hook from './Interfaz3Hook';

export default class CiclosDeVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showInterfaz1: true,
      showInterfaz2: false,

    };
  }

   /* componentDidMount(){
        localStorage.setItem('COUNTER', 0)
    } */

    /* componentWillUnmount(){
        alert("componentWillUnmount CiclosDeVida");
    } */

  cambiarInterface= ()=>{
      const {showInterfaz1, showInterfaz2, counter} = this.state;
      
          this.setState({
              showInterfaz1: !showInterfaz1,
              showInterfaz2: !showInterfaz2,
              counter: counter+1,
          }, () =>{


  localStorage.setItem("COUNTER", counter + 1);

          })

          
      
  }
  render() {
    const { showInterfaz1, showInterfaz2, counter } = this.state;
    /* let Interface = null; */
    /*   if(showInterfaz1){
            Interface = Interfaz1
        }
        if(showInterfaz2){
            Interface = Interfaz2
        } */

    return (
      <div>
        <h1>Ciclos de vida</h1>
        {/* <Interface/> */}
        {/* {showInterfaz1? <Interfaz1/> : showInterfaz2? <Interfaz2/>: null } */}

        {showInterfaz1 && <Interfaz1 />}
        {showInterfaz2 && <Interfaz3Hook/>}

        <h3>{counter}</h3>
        <button onClick={() => this.cambiarInterface()}>
          {" "}
          cambiar de interface
        </button>
      </div>
    );
  }
}
