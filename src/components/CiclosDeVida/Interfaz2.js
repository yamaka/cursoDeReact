import React, { Component } from "react";

export default class Interfaz2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    alert("componentDidMount Interfaz2");
  }

  componentWillUnmount() {
      
    alert("componentWillUnmount Interfaz2");

    debugger;
    const counter = localStorage.getItem('COUNTER')
    if(counter && counter > 3){
        localStorage.setItem('COUNTER', 0);
    }
  }

  render() {
    return (
      <div>
        <h2>soy la interfaz 2</h2>
      </div>
    );
  }
}
