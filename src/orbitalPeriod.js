const orbitalPeriod = function(celestialBodies) {
  const gm = 398600.4418;
  const earthRadius = 6367.4447;

  return celestialBodies.map((body) => {
    const semiMajorAxis = Math.pow(earthRadius + body.avgAlt, 3)

    body.orbitalPeriod = Math.round(Math.PI * 2 * Math.sqrt(semiMajorAxis / gm));
    delete body.avgAlt;

    return body;
  });
};

module.exports = orbitalPeriod;