const { pi, sq, cube } = require('../constants');

module.exports = class Volume {
  volumeCone(r, h) {
    return (pi * sq(r) * h) / 3;
  }

  volumeSphere(r) {
    return (4 * pi * cube(r)) / 3;
  }

  volumePyramid(bA, h) {
    return (bA * h) / 3;
  }

  volumeCube(l) {
    return cube(l);
  }

  volumeCuboid(l, h, w) {
    return l * h * w;
  }

  volumeCylinder(r, h) {
    return pi * sq(r) * h;
  }

  // Perimeter
  perimeterOfCircle(r) {
    return 2 * pi * r;
  }

  perimeterOfRectangle(l, w) {
    return 2 * (l + w);
  }

  perimeterOfSquare(l) {
    return 4 * l;
  }

  perimeterOfTriangle(a, b, c) {
    return a + b + c;
  }

  perimeterOfRegularPolygon(n, s) {
    return n * s;
  }

  archimedianSpiral(a, angle) {
    return a * angle;
  }

  arclength(r, angle) {
    return r * angle;
  }
};
