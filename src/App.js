import React from "react";
import "./style.css";
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() { 
  try {
    calcularIMC = function (){
 var formulario1 = document.getElementById("formulario");
 var kilos = +formulario1.quilos.value;
 var metros = +formulario1.metros.value;  
 var centimetros = +formulario1.centimetros.value;
 var altura = (metros*100 + centimetros)/100;    
 var imc = kilos / (altura * altura);    
 formulario.imc.value = imc.toFixed(2);
 }
   } catch(err) {
       alert(err);
   }
 function baixo(){
   console.log ("Abaixo de 17: Muito abaixo do peso");
 }
 function baixoPeso(){
   console.log ("Entre 17 e 18,49: Abaixo do peso");
 }
 function acimaPeso(){
   setTimeout(function(){
     console.log ("Entre 35 e 39,99: Obesidade II");5000});
 }
 function normal(){
   console.log ("Entre 18,5 e 24,99: Peso normal");
 }
 function acima(){
   console.log ("Entre 25 e 29,99: Acima do peso");
 }
 function acimaPouco(){
   console.log ("Entre 30 e 34,99: Obesidade I");
 }
 baixo();
 baixoPeso();
 acimaPeso();
 normal();
 acima();
 acimaPouco();

  }
return (
  

);
}

export default App;