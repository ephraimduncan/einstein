const { pi, sqrt, sq } = require('./constants');

class Area {
  /**
   * Area of a circle
   * @param {number} radius
   */
  areaCircle(radius) {
    return pi * sq(radius);
  }
  /**
   * Area of an ellipse
   * @param {number} radius1
   * @param {number} radius2
   */
  areaEllipse(radius1, radius2) {
    return pi * radius1 * radius2;
  }

  areaEquiTriangle(height) {
    return (sq(height) * sqrt(3)) / 3;
  }

  areaParallelogram(base, height) {
    return base * height;
  }

  areaRectangle(length, width) {
    return length * width;
  }

  areaRegularPolygon(noSides, base, height) {
    return (noSides * base * height) / 2;
  }

  areaRhombus(side1, side2) {
    return (side1 * side2) / 2;
  }

  areaSector(angle, radius) {
    return (angle * sq(radius)) / 2;
  }

  areaSquare(length) {
    return sq(length);
  }

  areaTrapezoid(side1, side2, height) {
    return 0.5 * (side1 + side2) * height;
  }

  areaTriangle(base, height) {
    return 0.5 * base * height;
  }
}
