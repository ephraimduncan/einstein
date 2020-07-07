const { sq, sin, cos } = require('./constants');

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

  phaseDifferenceSingleSlitDefractionPattern(lambda, a, angle) {
    return ((2 * pi) / lambda) * a * sin(angle);
  }

  intensity(P, a, A) {
    return (P * a) / A;
  }

  energyByHarmonicWave(µ, w, A, x) {
    return 0.5 * µ * sq(w) * sq(A) * x;
  }

  powerByHarmonicWave(µ, w, A, v) {
    return 0.5 * µ * sq(w) * sq(A) * v;
  }

  harmonicWaveFunction(A, x, lambda, t, T) {
    return `y(x,t) = ${A}sin[2π(${eval(x / lambda) - eval(t / T)})]`;
  }

  harmonicWaveFunctionK(A, k, x, v, t) {
    return `y(x,t) = ${A}sin(${k * (x - v * t)})`;
  }

  velocityOfDrivenOscillator(A, w, t) {
    return A * w * cos(w * t);
  }

  amplitideOfDrivenOscilattor(F, m, w0, w, b) {
    return F / sqrt(sq(m) * sq(sq(w0) - sq(w)) + sq(b) * sq(w));
  }

  displacementOfDrivenOscilattor(A, w, t, delta) {
    return A * cos(w * t + delta);
  }

  totalEnergyOfSHM(k, A) {
    return 0.5 * k * sq(A);
  }

  visousFlow(eta, upsilon, A, z) {
    return eta * ((upsilon * A) / z);
  }

  continuityEquation(upsilon, A) {
    return upsilon * A;
  }

  shearStress(Fs, A) {
    return Fs / A;
  }

  shearStrain(x, L) {
    return x / L;
  }

  shearModulus(shearStress, shearStrain) {
    return shearStress / shearStrain;
  }

  centripetalAcceleration(v, r) {
    return sq(v) / r;
  }

  acceleration(v, t) {
    return v / t;
  }

  velocity(d, t) {
    return d / t;
  }

  velocityWithDisplacement(v0, a, x) {
    return sqrt(sq(v0) + 2 * a * x);
  }

  velocityWithAcceleration(v0, a, t) {
    return v0 + a * t;
  }

  displacement(x, x0) {
    return x - x0;
  }

  displacementWithAcceleration(v0, a, t) {
    return v0 * t + 0.5 * a * sq(t);
  }

  averageAcceleration(deltaV, deltaT) {
    return deltaV / deltaT;
  }
}
