const { sq, sin } = require('./constants');

class Physics {
  kineticEnergy(m, v) {
    return 0.5 * m * sq(v);
  }

  refractiveIndex(i, r, d, ad) {
    let index;
    if (i && r) {
      index = sin(i) / sin(r);
      d = undefined;
      ad = undefined;
    }
    if (d && ad) {
      index = d / ad;
      i = undefined;
      r = undefined;
    }
    return index;
  }

  relativityEnergy(m, c) {
    return m * sq(c);
  }

  springConstant(F, x) {
    return F / x;
  }

  // shmAcceleration()

  adiabaticChange(P, V) {
    return P * V;
  }

  angularMomentum(I, w) {
    return I * w;
  }

  beatFrequency(f1, f2) {
    return f1 - f2;
  }

  charlesLaw(V, t) {
    return V / t;
  }

  deBroglieWavelength(h, m, v) {
    return h / (m * v);
  }

  voltageEquation(I, R) {
    return I * R;
  }

  zurichSunspotNumber(k, f) {
    return k * (f + 10);
  }

  stress(F, A) {
    return F / A;
  }

  strain(l, L) {
    return l / L;
  }

  youngsModulus(stress, strain) {
    return stress / strain;
  }

  force(m, a) {
    return m * a;
  }

  ohmsLaw(I, R) {
    return this.voltageEquation(I, R);
  }
}
