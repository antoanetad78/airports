const coordDegreeToRadian = degree => {
  return degree * (Math.PI / 180);
};
//get the decimal degree from the geo coordinate. Fised to 8 decmial positions.
const getCoordinates = coordinate => {
  const coordValue = Number(coordinate.slice(0, coordinate.length - 3));
  const degrees = Math.floor(coordValue / 10000);
  const minutes = Math.floor((coordValue % 10000) / 100);
  const seconds = (coordValue % 10000) % 100;
  const decimalDegree =
    coordinate[coordinate.length - 1] === "N" ||
    coordinate[coordinate.length - 1] === "E"
      ? degrees + minutes / 60 + seconds / 3600
      : -1 * (degrees + minutes / 60 + seconds / 3600);
  return Number(decimalDegree.toFixed(8));
};
const decimalToCoordinates = decimal => {
  const decDeg = Math.abs(decimal);
  const coordDeg = Math.floor(decDeg);
  let coordMin = Math.floor((decDeg - coordDeg) * 60);
  let coordSec = Math.floor((decDeg - coordDeg - coordMin / 60) * 3600);
  coordMin = coordMin.toString().length === 1 ? `0${coordMin}` : coordMin;
  coordSec = coordSec.toString().length === 1 ? `0${coordSec}` : coordSec;
  return `${coordDeg}${coordMin}${coordSec}00`;
};
export const getVariation = variation => {
  return variation[variation.length - 1] === "W"
    ? (-1 * Number(variation.slice(0, variation.length - 3))) / 10000
    : Number(variation.slice(0, variation.length - 3)) / 10000;
};
//Calculate the distance (in km) between two points given their geo-coordinates. Returns a number.
const indDistance = (lat1, lon1, lat2, lon2, getCoord, convertToRad) => {
  const R = 6371;

  const x1 = convertToRad(getCoord(lat1));
  const y1 = convertToRad(getCoord(lon1));
  const x2 = convertToRad(getCoord(lat2));
  const y2 = convertToRad(getCoord(lon2));
  const distanceLat = x1 - x2;
  const distanceLon = y1 - y2;
  const a =
    Math.sin(distanceLat / 2) * Math.sin(distanceLat / 2) +
    Math.cos(x1) *
      Math.cos(x2) *
      Math.sin(distanceLon / 2) *
      Math.sin(distanceLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
};

//set the geo-coordinates that will be used as the pixel point 0,0.
// They are calculated by taking the northern-most geo-coordinate and the western-most geo-coordinate present in the list of runways
// And adding 2 geo-seconds to each value.
export const NORTH_POINT = list => {
  const lats = list.map(rwy => {
    return Number(rwy.LAT.slice(0, rwy.LAT.length - 1));
  });
  lats.sort((a, b) => b - a);
  let Ncoord = list.filter(rwy => {
    return rwy.LAT.includes(lats[0]);
  })[0].LAT;
  const coordLetter = Ncoord.slice(Ncoord.length - 1);
  let N = (getCoordinates(Ncoord) + 2 / 3600).toFixed(8);
  N = decimalToCoordinates(N) + coordLetter;
  return N;
};
export const WEST_POINT = list => {
  const lons = list.map(rwy => {
    return Number(rwy.LON.slice(0, rwy.LON.length - 1));
  });
  lons.sort((a, b) => b - a);
  let Wcoord = list.filter(rwy => {
    return rwy.LON.includes(lons[0]);
  })[0].LON;
  const coordLetter = Wcoord.slice(Wcoord.length - 1);
  let W = (getCoordinates(Wcoord) - 2 / 3600).toFixed(8);
  W = decimalToCoordinates(W) + coordLetter;
  return W;
};

//take the geo coordinates and return the pixel ones relative to the px0,0, where the y is calculated as the distance between the north parallel(y-axys) and x is
export function getRwyPxCoord(lat, lon, NORTH_POINT, WEST_POINT) {
  const pxX = indDistance(
    NORTH_POINT,
    WEST_POINT,
    NORTH_POINT,
    lon,
    getCoordinates,
    coordDegreeToRadian
  );
  const pxY = indDistance(
    NORTH_POINT,
    WEST_POINT,
    lat,
    WEST_POINT,
    getCoordinates,
    coordDegreeToRadian
  );
  return { x: pxX, y: pxY };
}
