const { pi, sq, cube } = require('./constants');

class Volume {
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
}
