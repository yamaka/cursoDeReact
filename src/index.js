import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import {App, Hijo2} from './App';
import reportWebVitals from './reportWebVitals';

//import Calculadora from './components/Calculadora/Calculadora';
//import TiposComida from './components/TiposComida/TiposComida';
//import CiclosDeVida from './components/CiclosDeVida/CiclosDeVida';
//import Cursos from './Admin/Cursos/Cursos';
import AppRouter from './router';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Calculadora/> */}
    {/* <TiposComida/> */}
    {/* <CiclosDeVida/> */}
    {/* <Cursos/> */}
    <AppRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);


//Clase 2
//Variables
/* var nombre = 'Rosa';
//console.log(nombre);
var nombre = 'Eliana';
//console.log(nombre); */

/*let nombre1 = 'Rosa';
//console.log(nombre1);
let nombre2 = 'Eliana';
//console.log(nombre2);

//Constantes

const colegio = 'Don bosco';
//colegio = 'Ayacucho';
//console.log(colegio);

//Arroy functions(funciones flecha)
function miFuncion(){
  //console.log('my funcion');
}
miFuncion();

const miFuncionFlecha = () =>{
  //console.log("mi funcion flecha");
}
miFuncionFlecha();

/* setTimeout(function(){
  //console.log('paso 2 segs.')
}, 2000)

setTimeout(()=>{
  //console.log('paso 3 segs.')
}, 3000)

const suma = (n1, n2) => n1 + n2;

//console.log('la suma de 2 + 3 = ', suma(2,3));

const numeros = [ 2,5,1,6];
let dobles = [0,0,0,0];
/* for(let i = 0 ; i<numeros.length; i++){
  dobles[i] = numeros[i] * 2;
} 

dobles = numeros.map( numero => numero * 2);

//console.log('el doble de numeros', numeros);
//console.log('es :', dobles);

//Destructuracion en es6 

const persona = {
  nombre: 'Ricardo',
  apellido: 'Lopez',
  cursos:{
    backend: 'Laravel',
    front: 'React'
  }
}

//console.log(persona.nombre + ' esta cursando en front: ' + persona.cursos.front);
const {nombre, cursos:{front}} = persona;
//console.log(nombre + " esta cursando en front: " + front);

//Spread Operator
const numeros2 = [2,4,6,8]; //harcodeado
const numeros3 = [1,3,5,7];

let numerosResult = [];

/* for(let i=0; i<numeros2.length * 2 ; i++){
  if( i== numeros2.length -1){
    numerosResult.push(numeros2[i])
  }else{
    numerosResult.push(numeros3[numeros3.length - i])
  }
} 

numerosResult = [...numeros2, ...numeros3];
//console.log('la union de los arrays 2 y 3 es: ', numerosResult)

//Spread Operator en Objetos

const departamento = {
  direccion: 'calle xxx # 1323',
  habitaciones: 2,
  banos: 1,
  sala: true,
}

const proyecto = {
  nombre: 'Edifcio Ayala',
  oficina: 'yanacocha',
  telefono: 76232222
}

//console.log({...departamento, ...proyecto});

//template literals
const extensionDep = 70;
const numHabitaciones = 2;

//console.log('el departamento tiene una extension de: '+ extensionDep + ' y cuenta con: ' + numHabitaciones + ' habitaciones');
//console.log(`el departamento tiene una extension de: ${extensionDep} y cuenta con: ${numHabitaciones} habitaciones`);

//Clases

class Auto {
  constructor(marca){
    this.marca = marca;
  }
  mostrarMarca(){
    return 'la marca es: '+ this.marca; 
  }
}

const auto = new Auto('BMW');
//auto.mostrarMarca();

class Auto2 extends Auto{
  constructor(marca, modelo){
    super(marca);
    this.modelo = modelo
  }

  mostrarModelo(){
    return 'el modelo es: ' +  this.modelo;
  }
}

const auto2 = new Auto2('TOYOTA', 2021);

/* auto2.mostrarMarca();
 auto2.mostrarModelo();*/

//console.log(auto2.mostrarMarca() +' y '+auto2.mostrarModelo());
 




























// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
