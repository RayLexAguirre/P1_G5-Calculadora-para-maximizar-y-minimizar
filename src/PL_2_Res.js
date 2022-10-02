"use strict";

function limpiar() {
  document.getElementById("Interpolación").reset();
}

function solucionar() {
  var X = Number(document.getElementById("numero1").value);
  var X0 = Number(document.getElementById("numero2").value);
  var fX0 = Number(document.getElementById("numero3").value);
  var X1 = Number(document.getElementById("numero4").value);
  var fX1 = Number(document.getElementById("numero5").value);
  let f1;

  let paso1 = `f1(${X}) = ${fX0} + ((${fX1} - ${fX0}) / (${X1} - ${X0})) * (${X} - ${X0})`;
  let paso2 = `f1(${X}) = ${fX0} + ((${fX1 - fX0}) / (${X1 - X0}))(${X - X0})`;
  let paso3 = `f1(${X}) = ${fX0} + (${(fX1 - fX0) / (X1 - X0)})(${X - X0})`;
  let paso4 = `f1(${X}) = ${fX0} + (${((fX1 - fX0) / (X1 - X0)) * (X - X0)})`;
  let paso5 = `f1(${X}) = ${fX0 + ((fX1 - fX0) / (X1 - X0)) * (X - X0)}`;
  f1 = fX0 + ((fX1 - fX0) / (X1 - X0)) * (X - X0);

  document.getElementById("primerR").innerHTML = paso1;
  document.getElementById("segundoR").innerHTML = paso2;
  document.getElementById("tercerR").innerHTML = paso3;
  document.getElementById("cuartoR").innerHTML = paso4;
  document.getElementById("quintoR").innerHTML = paso5;
  document.getElementById("respuesta").innerHTML = ("f1 =", f1);

  var bug = document.getElementById("error").value;

  document.getElementById("errorVerdadero").innerHTML = bug - f1;

  document.getElementById("errorPorcentual").innerHTML =
    ((bug - f1) / bug) * 100 + "%";
}
