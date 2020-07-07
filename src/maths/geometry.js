const { sq, sqrt } = require('../constants');

module.exports = class Geometry {
  equationOfLine(m, b) {
    return `y = ${m}x + ${b}`;
  }

  equationOfCircle(x0, y0, r) {
    return `(x - ${x0})² + (y - ${y0})² = ${sq(r)}`;
  }

  equationOfSphere(x0, y0, z0, r) {
    return `(x - ${x0})² + (y - ${y0})² + (z - ${z0})² = ${sq(r)}`;
  }

  equationOfEllipsoid(x0, y0, z0, a, b, c) {
    return `${sq(b) * sq(c)}(x - ${x0})² + ${sq(a) * sq(c)}(y - ${y0})² + ${
      sq(b) * sq(a)
    }(z - ${z0})² = ${sq(a) * sq(b) * sq(c)}`;
  }

  equationOfEllipse(x0, y0, a, b) {
    return `${sq(b)}(x - ${x0})² + ${sq(a)}(y - ${y0})²  = ${sq(a) * sq(b)}`;
  }

  equationOfHyperbola(x0, y0, a, b) {
    return `${sq(b)}(x - ${x0})² - ${sq(a)}(y - ${y0})²  = ${sq(a) * sq(b)}`;
  }

  equationOfAPlane(A, B, C, D) {
    return `${A}x + ${B}y + ${C}z + ${D}`;
  }

  equationOfHyperboloidOfOneSheet(x0, y0, z0, a, b, c) {
    return `${sq(b) * sq(c)}(x - ${x0})² + ${sq(a) * sq(c)}(y - ${y0})² - ${
      sq(b) * sq(a)
    }(z - ${z0})² = ${sq(a) * sq(b) * sq(c)}`;
  }

  equationOfEllipticCone(x0, y0, z0, a, b, c) {
    return `${sq(b) * sq(c)}(x - ${x0})² + ${sq(a) * sq(c)}(y - ${y0})² = ${
      sq(b) * sq(a)
    }(z - ${z0})²`;
  }

  equationOfEllipticCylinder(x0, y0, a, b) {
    return this.equationOfEllipse(x0, y0, a, b);
  }

  equationOfHyperboloidOfTwoSheet(x0, y0, z0, a, b, c) {
    return `${sq(b) * sq(c)}(x - ${x0})² - ${sq(a) * sq(c)}(y - ${y0})² - ${
      sq(b) * sq(a)
    }(z - ${z0})² = ${sq(a) * sq(b) * sq(c)}`;
  }

  equationOfEllipticParaboloid(x0, y0, z0, a, b, c) {
    return `${sq(b) * sq(c)}(x - ${x0})² + ${sq(a) * sq(c)}(y - ${y0})² = ${
      sq(b) * sq(a)
    }(z - ${z0})`;
  }

  equationOfHyperbolicParaboloid(x0, y0, z0, a, b, c) {
    return `${sq(b) * sq(c)}(x - ${x0})² - ${sq(a) * sq(c)}(y - ${y0})² = ${
      sq(b) * sq(a)
    }(z - ${z0})`;
  }

  equationOfParabola(x0, y0, a) {
    return `(y - ${y0})² = ${4 * a}(x - ${x0})²`;
  }

  distanceBetweenTwoPoints2D(x1, x2, y1, y2) {
    return sqrt(sq(x1 - x2) + sq(y1 - y2));
  }

  distanceBetweenTwoPoints3D(x1, x2, y1, y2, z1, z2) {
    return sqrt(sq(x1 - x2) + sq(y1 - y2) + sq(z1 - z2));
  }

  eccentricityOfAnEllipse(a, b) {
    return sqrt(sq(a) - sq(b)) / a;
  }

  eccentricityOfAnHyperbola(a, b) {
    return sqrt(sq(a) + sq(b)) / a;
  }
};
