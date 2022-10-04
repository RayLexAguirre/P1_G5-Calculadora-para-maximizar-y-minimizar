"use strict";

export default class Estructurador {
  constructor() {
    this._estructura = new Array();
    this._intX1 = 0;
    this._intX2 = 0;
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
    let forRes1 = `(${receptor.getRes1X1()})X₁ + (${receptor.getRes1X2()})X₂ ${receptor.getSimRes1()} ${receptor.getRes1()}`;

    return forRes1;
  }

  forRes2(receptor) {
    let forRes2 = `(${receptor.getRes2X1()})X₁ + (${receptor.getRes2X2()})X₂ ${receptor.getSimRes2()} ${receptor.getRes2()}`;

    return forRes2;
  }

  forRes3(receptor) {
    let forRes3 = `(${receptor.getRes3X1()})X₁ + (${receptor.getRes3X2()})X₂ ${receptor.getSimRes3()} ${receptor.getRes3()}`;

    return forRes3;
  }

  cordeRes1x1(receptor) {
    let x1 = receptor.getRes1() / receptor.getRes1X1();

    return parseFloat(x1.toFixed(2));
  }

  cordeRes1x2(receptor) {
    let x2 = receptor.getRes1() / receptor.getRes1X2();

    return parseFloat(x2.toFixed(2));
  }

  cordeRes2x1(receptor) {
    let x1 = receptor.getRes2() / receptor.getRes2X1();

    return parseFloat(x1.toFixed(2));
  }

  cordeRes2x2(receptor) {
    let x2 = receptor.getRes2() / receptor.getRes2X2();

    return parseFloat(x2.toFixed(2));
  }

  cordeRes3x1(receptor) {
    let x1 = receptor.getRes3() / receptor.getRes3X1();

    return parseFloat(x1.toFixed(2));
  }

  cordeRes3x2(receptor) {
    let x2 = receptor.getRes3() / receptor.getRes3X2();

    return parseFloat(x2.toFixed(2));
  }

  metodoSumaResta(receptor) {
    if (receptor.getRes2X1() < 0) {
      let mulr2x1 = -receptor.getRes2X1() * receptor.getRes3X1();
      let mulr2x2 = -receptor.getRes2X1() * receptor.getRes3X2();
      let mulT2 = -receptor.getRes2X1() * receptor.getRes3();
      let mulr1x1 = receptor.getRes3X1() * receptor.getRes2X1();
      let mulr1x2 = receptor.getRes3X1() * receptor.getRes2X2();
      let mulT1 = receptor.getRes3X1() * receptor.getRes2();

      let sumx1 = mulr1x1 + mulr2x1;
      let sumx2 = mulr1x2 + mulr2x2;
      let sumT = mulT1 + mulT2;

      let x2 = sumT / sumx2;

      let x1 =
        (receptor.getRes2() - receptor.getRes2X2() * x2) / receptor.getRes2X1();

      this._intX1 = parseFloat(x1.toFixed(2));
      this._intX2 = parseFloat(x2.toFixed(2));

      return `(${parseFloat(x1.toFixed(2))}, ${parseFloat(x2.toFixed(2))})`;
    } else if (receptor.getRes2X2() < 0) {
      let mulr2x1 = -receptor.getRes2X2() * receptor.getRes3X1();
      let mulr2x2 = -receptor.getRes2X2() * receptor.getRes3X2();
      let mulT2 = -receptor.getRes2X2() * receptor.getRes3();
      let mulr1x1 = receptor.getRes3X2() * receptor.getRes2X1();
      let mulr1x2 = receptor.getRes3X2() * receptor.getRes2X2();
      let mulT1 = receptor.getRes3X2() * receptor.getRes2();

      let sumx1 = mulr1x1 + mulr2x1;
      let sumx2 = mulr1x2 + mulr2x2;
      let sumT = mulT1 + mulT2;

      let x1 = sumT / sumx1;

      let x2 =
        (receptor.getRes2() - receptor.getRes2X1() * x1) / receptor.getRes2X2();

      this._intX1 = parseFloat(x1.toFixed(2));
      this._intX2 = parseFloat(x2.toFixed(2));

      return `(${parseFloat(x1.toFixed(2))}, ${parseFloat(x2.toFixed(2))})`;
    } else if (receptor.getRes3X1() < 0) {
      let mulr2x1 = receptor.getRes2X1() * receptor.getRes3X1();
      let mulr2x2 = receptor.getRes2X1() * receptor.getRes3X2();
      let mulT2 = receptor.getRes2X1() * receptor.getRes3();
      let mulr1x1 = -receptor.getRes3X1() * receptor.getRes2X1();
      let mulr1x2 = -receptor.getRes3X1() * receptor.getRes2X2();
      let mulT1 = -receptor.getRes3X1() * receptor.getRes2();

      let sumx1 = mulr1x1 + mulr2x1;
      let sumx2 = mulr1x2 + mulr2x2;
      let sumT = mulT1 + mulT2;

      let x2 = sumT / sumx2;

      let x1 =
        (receptor.getRes2() - receptor.getRes2X2() * x2) / receptor.getRes2X1();

      this._intX1 = parseFloat(x1.toFixed(2));
      this._intX2 = parseFloat(x2.toFixed(2));

      return `(${parseFloat(x1.toFixed(2))}, ${parseFloat(x2.toFixed(2))})`;
    } else if (receptor.getRes3X2() < 0) {
      let mulr2x1 = receptor.getRes2X2() * receptor.getRes3X1();
      let mulr2x2 = receptor.getRes2X2() * receptor.getRes3X2();
      let mulT2 = receptor.getRes2X2() * receptor.getRes3();
      let mulr1x1 = -receptor.getRes3X2() * receptor.getRes2X1();
      let mulr1x2 = -receptor.getRes3X2() * receptor.getRes2X2();
      let mulT1 = -receptor.getRes3X2() * receptor.getRes2();

      let sumx1 = mulr1x1 + mulr2x1;
      let sumx2 = mulr1x2 + mulr2x2;
      let sumT = mulT1 + mulT2;

      let x1 = sumT / sumx1;

      let x2 =
        (receptor.getRes2() - receptor.getRes2X1() * x1) / receptor.getRes2X2();

      this._intX1 = parseFloat(x1.toFixed(2));
      this._intX2 = parseFloat(x2.toFixed(2));

      return `(${parseFloat(x1.toFixed(2))}, ${parseFloat(x2.toFixed(2))})`;
    } else {
      let mulr2x1 = receptor.getRes2X1() * receptor.getRes3X1();
      let mulr2x2 = receptor.getRes2X1() * receptor.getRes3X2();
      let mulT2 = receptor.getRes2X1() * receptor.getRes3();
      let mulr1x1 = receptor.getRes3X1() * receptor.getRes2X1();
      let mulr1x2 = receptor.getRes3X1() * receptor.getRes2X2();
      let mulT1 = receptor.getRes3X1() * receptor.getRes2();

      let sumx1 = -mulr1x1 + mulr2x1;
      let sumx2 = -mulr1x2 + mulr2x2;
      let sumT = -mulT1 + mulT2;

      let x2 = sumT / sumx2;

      let x1 =
        (receptor.getRes2() - receptor.getRes2X2() * x2) / receptor.getRes2X1();

      this._intX1 = parseFloat(x1.toFixed(2));
      this._intX2 = parseFloat(x2.toFixed(2));

      return `(${parseFloat(x1.toFixed(2))}, ${parseFloat(x2.toFixed(2))})`;
    }
  }

  tableInfo(receptor) {
    let info = [
      {
        Letra: "A",
        Cordenada: `(${this.cordeRes1x1(receptor)}, ${0})`,
        Resultado: parseFloat(
          receptor.getObjX1() * this.cordeRes1x1(receptor)
        ).toFixed(2),
      },
      {
        Letra: "B",
        Cordenada: `(${0}, ${this.cordeRes1x2(receptor)})`,
        Resultado: parseFloat(
          receptor.getObjX2() * this.cordeRes1x2(receptor)
        ).toFixed(2),
      },
      {
        Letra: "C",
        Cordenada: `(${this.cordeRes2x1(receptor)}, ${0})`,
        Resultado: parseFloat(
          receptor.getObjX1() * this.cordeRes2x1(receptor)
        ).toFixed(2),
      },
      {
        Letra: "D",
        Cordenada: `(${0}, ${this.cordeRes2x2(receptor)})`,
        Resultado: parseFloat(
          receptor.getObjX2() * this.cordeRes2x2(receptor)
        ).toFixed(2),
      },
      {
        Letra: "E",
        Cordenada: `(${this.cordeRes3x1(receptor)}, ${0})`,
        Resultado: parseFloat(
          receptor.getObjX1() * this.cordeRes3x1(receptor)
        ).toFixed(2),
      },
      {
        Letra: "F",
        Cordenada: `(${0}, ${this.cordeRes3x2(receptor)})`,
        Resultado: parseFloat(
          receptor.getObjX2() * this.cordeRes3x2(receptor)
        ).toFixed(2),
      },
      {
        Letra: "G",
        Cordenada: this.metodoSumaResta(receptor),
        Resultado: parseFloat(
          receptor.getObjX1() * this._intX1 + receptor.getObjX2() * this._intX2
        ).toFixed(2),
      },
    ];
    console.log(info);
    return info;
  }

  add(receptor) {
    this._estructura.push(receptor);

    return true;
  }
}
