"use strict";

import Receptor from "./PL3_Receptor.js";
import Estructurador from "./PL3_Estructurador.js";

function limpiar() {
  document.getElementById("Interpolación").reset();
}

class App {
  constructor() {
    this.btnRegister = document.querySelector("#btnRegister");
    btnRegister.addEventListener("click", this.readForm);
    this._estructura = new Estructurador();
  }

  readForm = () => {
    let receptor = Receptor.readForm();

    let completado = this._estructura.add(receptor);
    console.log(this._estructura);

    this._printResolution(receptor);
    Swal.fire("Bien!", "Ecuación Registrada", "success");
  };

  _printResolution(receptor) {
    document.getElementById("tituloObj").innerHTML = "Función Objetivo";
    document.getElementById("textFunc").innerHTML = `${this._estructura.tipo(
      receptor
    )} = ${this._estructura.forObj(receptor)}`;
    document.getElementById("tituloSuj").innerHTML = "Sujeto a: ";
    document.getElementById(
      "R1"
    ).innerHTML = `Restricción 1: ${this._estructura.forRes1(receptor)}
    `;
    document.getElementById(
      "R2"
    ).innerHTML = `Restricción 2: ${this._estructura.forRes2(receptor)}`;
    document.getElementById(
      "R3"
    ).innerHTML = `Restricción 3: ${this._estructura.forRes3(receptor)}`;
    this._estructura.tableInfo(receptor);

    /*
    document.getElementById("colFormula").innerHTML =
      this._estructura.formarFormula(receptor);
    document.getElementById("colAltura").innerHTML =
      this._estructura.clacularPendiente(receptor);
    document.getElementById("colIntegral").innerHTML =
      this._estructura.diseñoIntegral(receptor);
    document.getElementById("colIntegralI").innerHTML =
      this._estructura.primeraIntegral(receptor) + " u²";
    document.getElementById("colI").innerHTML =
      this._estructura.ecuacionI(receptor) + " u²";
    document.getElementById("colEr").innerHTML =
      this._estructura.calcularER(receptor) + "%";*/
  }
}

new App();
