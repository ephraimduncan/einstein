const { sq, sin } = require('./constants');

class Physics {
  kineticEnergy(m, v) {
    return 0.5 * m * sq(v);
  }

  refractiveIndex(i, r, d, ad) {
    let index;
    if (i && r) {
      index = sin(i) / sin(r);
    }
    if (d && ad) {
      index = d / ad;
    }
    return index;
  }

  relativityEnergy(m) {
    return m * sq(3.0 * Math.pow(10, 8));
  }
}
