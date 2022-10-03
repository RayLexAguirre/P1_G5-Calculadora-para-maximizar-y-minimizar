"use strict";

export default class Estructurador {
  constructor() {
    this._estructura = new Array();
  }

  tipo(receptor) {
    let tipo = receptor.getMinMax();

    return tipo;
  }

  forObj(receptor) {
    let forObj = `(${receptor.getObjX1()}) + (${receptor.getObjX2()})`;

    return forObj;
  }

  forRes1(receptor) {
    let forRes1 = `(${receptor.getRes1X1()}) + (${receptor.getRes1X2()}) ${receptor.getSimRes1()} ${receptor.getRes1()}`;

    return forRes1;
  }

  forRes2(receptor) {
    let forRes2 = `(${receptor.getRes2X1()}) + (${receptor.getRes2X2()}) ${receptor.getSimRes2()} ${receptor.getRes2()}`;

    return forRes2;
  }
}
