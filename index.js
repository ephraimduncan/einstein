const area = require('./src/maths/area');
const chemistry = require('./src/chemistry');
const physics = require('./src/physics');
const geometry = require('./src/maths/geometry');
const volume = require('./src/maths/volume');

// New Classes
const Area = new area();
const Chemistry = new chemistry();
const Physics = new physics();
const Geometry = new geometry();
const Volume = new volume();

class Formulae {
  // Area

  /**
   * Returns the Area of a Circle
   * @param {number} radius
   */
  static areaOfCircle(radius) {
    return Area.areaCircle(radius);
  }
  /**
   * Returns the Area of an Ellipse
   * @param {number} radius1
   * @param {number} radius2
   */
  static areaOfEllipse(radius1, radius2) {
    return Area.areaEllipse(radius1, radius2);
  }
  /**
   * Returns the Area of an Equilateral Triangle
   * @param {number} height
   */
  static areaOfEquilateralTriangle(height) {
    return Area.areaEquiTriangle(height);
  }

  /**
   * Returns the Area of a Triangle with two sides and a given angle.
   * Uses the sine rule
   * @param {number} side1
   * @param {number} side2
   * @param {number} angle
   */
  static areaOfArbitraryTriangle(side1, side2, angle) {
    return Area.areaOfArbitraryTriangle(side1, side2, angle);
  }

  /**
   * Returns the Area of a Parallelogram
   * @param {number} base
   * @param {number} height
   */
  static areaOfParalellogram(base, height) {
    return Area.areaParallelogram(base, height);
  }

  /**
   * Returns the Area of a Rectangle
   * @param {number} length
   * @param {number} width
   */
  static areaOfRectangle(length, width) {
    return Area.areaRectangle(length, width);
  }

  /**
   * Returns the Area of a Regular Polygon
   * @param {number} numberOfSides
   * @param {number} base
   * @param {number} height
   */
  static areaOfRegularPolygon(numberOfSides, base, height) {
    return Area.areaRegularPolygon(numberOfSides, base, height);
  }

  /**
   * Returns the Area of a Rhombus with two sides known
   * @param {number} side1
   * @param {number} side2
   */
  static areaOfRhombus(side1, side2) {
    return Area.areaRhombus(side1, side2);
  }

  /**
   * Returns the Area of a Sector of a circle
   * @param {number} angle
   * @param {number} radius
   */
  static areaOfSectorOfCircle(angle, radius) {
    return Area.areaSector(angle, radius);
  }

  /**
   * Returns the Area of a Square
   * @param {number} length
   */
  static areaOfSquare(length) {
    return Area.areaSquare(length);
  }

  /**
   * Returns the Area of a Trapeziod or Trapezium
   * @param {number} side1
   * @param {number} side2
   * @param {number} height
   */
  static areaOfTrapezoid(side1, side2, height) {
    return Area.areaTrapezoid(side1, side2, height);
  }

  /**
   * Returns the Area of a Triangle
   * @param {number} base
   * @param {number} height
   */
  static areaOfTriangle(base, height) {
    return Area.areaTriangle(base, height);
  }

  /**
   * Returns the Surface Area of a Cube
   * @param {number} length
   */
  static surfaceAreaOfCube(length) {
    return Area.surfaceAreaCube(length);
  }

  /**
   * Returns the Area of a Cuboid
   * @param {number} length
   * @param {number} width
   * @param {number} breath
   */
  static surfaceAreaOfCuboid(length, width, breath) {
    return Area.surfaceAreaCuboid(length, width, breath);
  }

  /**
   * Returns the Surface Area of a Cylinder
   * @param {number} radius
   * @param {number} height
   */
  static surfaceAreaOfCylinder(radius, height) {
    return Area.surfaceAreaCylinder(radius, height);
  }

  /**
   * Returns the Surface Area of a Sphere
   * @param {number} radius
   */
  static surfaceAreaOfSphere(radius) {
    return Area.surfaceAreaSphere(radius);
  }

  // Geometry
  // Volume
  // Chemistry
  // Physics
}

Formulae.areaOfTrapezoid();
