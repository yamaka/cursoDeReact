import React, { Component } from 'react'

export default class Interfaz1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: false

    };
  }

  componentDidMount() {
      //aca se deben hacer la llamadas a su servidor

    //simaulando una peticion
    this.setState({isLoading: true}, () => this.traerDatos())
    
    //alert("componentDidMount Interfaz1");
  }

  traerDatos = () =>{
    setTimeout(() => { this.setState({isLoading:false})}, 3000);
  }

  componentWillUnmount() {
    alert("componentWillUnmount Interfaz1");
  }

  render() {
    const {isLoading} = this.state;
    if(isLoading){
        return <div><p>Cargando...</p></div>
    }
    return (
      <div>
        <h2>soy la interfaz 1</h2>
      </div>
    );
  }
}
