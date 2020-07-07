const { pi, sqrt, sq, sin } = require('../constants');

module.exports = class Area {
  areaCircle(r) {
    return pi * sq(r);
  }

  areaEllipse(r1, r2) {
    return pi * r1 * r2;
  }

  areaEquiTriangle(h) {
    return (sq(h) * sqrt(3)) / 3;
  }

  areaParallelogram(b, h) {
    return b * h;
  }

  areaRectangle(l, w) {
    return l * w;
  }

  areaRegularPolygon(noSides, b, h) {
    return (noSides * b * h) / 2;
  }

  areaRhombus(s1, s2) {
    return (s1 * s2) / 2;
  }

  areaSector(angle, r) {
    return (angle * sq(r)) / 2;
  }

  areaSquare(l) {
    return sq(l);
  }

  areaTrapezoid(s1, s2, h) {
    return 0.5 * (s1 + s2) * h;
  }

  areaTriangle(b, h) {
    return 0.5 * b * h;
  }

  surfaceAreaSphere(r) {
    return 4 * pi * sq(r);
  }

  surfaceAreaCylinder(r, h) {
    return 2 * pi * sq(r) + 2 * pi * r * h;
  }

  surfaceAreaCuboid(l, w, h) {
    return 2(l * w + l * h + w * h);
  }

  surfaceAreaCube(l) {
    return 6 * sq(l);
  }

  areaOfArbitraryTriangle(a, b, C) {
    return 0.5 * a * b * sin(C);
  }
};
