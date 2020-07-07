const { sq } = require('./constants');

class Geometry {
  equationOfLine(m, b) {
    return `y = ${m}x + ${b}`;
  }

  equationOfCircle(x0, y0, r) {
    return `(x - ${x0})² + (y - ${y0})² = ${sq(r)}`;
  }
}

const g = new Geometry();

console.log(g.equationOfCircle(2, 4, 8));
