const { sqrt, sq, log } = require('./constants');

class Chemistry {
  electricCurrent(q, t) {
    return q / t;
  }

  molarHeatCapacity(deltaH, deltaT) {
    return deltaH / deltaT;
  }

  partialPressureOfAGas(Pt, nM, Mt) {
    return Pt * (nM / Mt);
  }

  totalPressure(...partialPressures) {
    return partialPressures.reduce((index, pressure) => (pressure += index), 0);
  }

  numberOfMole(m, M) {
    return m / M;
  }

  toKelvin(C) {
    return C + 273;
  }

  rmsVelocityOfGasMolecules(R, T, M) {
    return sqrt((3 * R * T) / M);
  }

  rmsVelocityOfGasMoleculesWithK(k, T, m) {
    return sqrt((3 * k * T) / m);
  }

  kineticEnergyOfAMolecule(m, v) {
    return 0.5 * m * sq(v);
  }

  kineticEnergyOfAMole(R, T, n) {
    return 1.5 * R * T * n;
  }

  molarity(ms, s) {
    return ms / s;
  }

  freezingPointOfDepression(i, Kf, M) {
    return i * Kf * M;
  }

  boilingPointOfElevation(i, Kb, M) {
    return i * Kb * M;
  }

  osmoticPressure(n, R, T, V, i) {
    return (n * R * T * i) / V;
  }

  specificHeatCapacity(m, c, deltaT) {
    return m * c * deltaT;
  }

  acidIonisationConstant(H, A, HA) {
    return (H * A) / HA;
  }

  baseIonisationConstant(OH, HB, B) {
    return (OH * HB) / B;
  }

  ionicProductConstantOfWater(OH, H) {
    return OH * H;
  }

  ionicProductConstantOfWaterWithConstants(Ka, Kb) {
    return Ka * Kb;
  }

  pH(H) {
    return -log(H);
  }

  pOH(OH) {
    return -log(OH);
  }

  pKa(Ka) {
    return -log(Ka);
  }

  pKb(Kb) {
    return -log(Kb);
  }
}
