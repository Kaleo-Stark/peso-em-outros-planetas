const names = [
    'Mercúrio',
    'Vênus',
    'Marte',
    'Júpiter',
    'Saturno',
    'Urano',
    'Netuno',
    'Plutão'
];

const oneKiloIn = {
    mercurio: 0.37,
    venus:    0.88,
    terra:    1,
    marte:    0.38,
    jupiter:  2.64,
    saturno:  1.15,
    urano:    1.17,
    netuno:   1.18,
    plutao:   0.11
};

module.exports = {
    names: names,
    oneKiloIn: oneKiloIn,
    calculeteWeight: (weigth, planet) => weigth * oneKiloIn[planet]
}