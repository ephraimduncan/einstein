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

  // Volume
  /**
   * Returns the Spiral of Archimedes in Polar Coordinates
   * @param {number} a
   * @param {number} angle
   */
  static archmedianSpiral(a, angle) {
    return Volume.archimedianSpiral(a, angle);
  }

  /**
   * Returns the Arclength of a Sector of a Circle
   * @param {number} radius
   * @param {number} angle
   */
  static arclength(radius, angle) {
    return Volume.arclength(radius, angle);
  }

  /**
   * Returns the Circumference of a Circle
   * @param {number} radius
   */
  static circumferenceOfCircle(radius) {
    return Volume.perimeterOfCircle(radius);
  }

  /**
   * Returns the Perimeter of a Rectangle
   * @param {number} length
   * @param {number} width
   */
  static perimeterOfRectangle(length, width) {
    return Volume.perimeterOfRectangle(length, width);
  }

  /**
   * Returns the Perimeter of a Regular Polygon
   * @param {number} numberOfSides
   * @param {number} sideLength
   */
  static perimeterOfRegularPolygon(numberOfSides, sideLength) {
    return Volume.perimeterOfRegularPolygon(numberOfSides, sideLength);
  }

  /**
   * Returns the Perimeter of a Square
   * @param {number} length
   */
  static perimeterOfSquare(length) {
    return Volume.perimeterOfSquare(length);
  }

  /**
   * Returns the Perimeter of a Triangle
   * @param {*number} side1
   * @param {*number} side2
   * @param {*number} side3
   */
  static perimeterOfTriangle(side1, side2, side3) {
    return Volume.perimeterOfTriangle(side1, side2, side3);
  }

  /**
   * Returns the Volume of a Cone
   * @param {number} radius
   * @param {number} height
   */
  static volumeOfCone(radius, height) {
    return Volume.volumeCone(radius, height);
  }

  /**
   * Returns the Volume of a Cube
   * @param {number} length
   */
  static volumeOfCube(length) {
    return Volume.volumeCube(length);
  }

  /**
   * Return the Volume of a Cuboid
   * @param {number} length
   * @param {number} width
   * @param {number} height
   */
  static volumeOfCuboid(length, width, height) {
    return Volume.volumeCuboid(length, width, height);
  }

  /**
   * Returns the Volume of a cylinder
   * @param {number} radius
   * @param {number} height
   */
  static volumeOfCylinder(radius, height) {
    return Volume.volumeCylinder(radius, height);
  }

  /**
   * Returns the Volume of a Pyramid
   * @param {number} baseArea
   * @param {number} height
   */
  static volumeOfPyramid(baseArea, height) {
    return Volume.volumePyramid(baseArea, height);
  }

  /**
   * Returns the Volume of a Sphere
   * @param {number} radius
   */
  static volumeOfSphere(radius) {
    return Volume.volumeSphere(radius);
  }
  // Chemistry
  // Physics
  // Geometry
}

Formulae.areaOfTrapezoid();
