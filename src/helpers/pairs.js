export const pairs = listToPair =>
  Object.values(
    listToPair.reduce((acc, curr) => {
      if (acc[curr.DESIGNATOR]) {
        return acc;
      }
      const number = Number(
        curr.DESIGNATOR.slice(0, curr.DESIGNATOR.length - 1)
      );

      const letter = curr.DESIGNATOR.slice(curr.DESIGNATOR.length - 1);

      const match = listToPair.filter(elem => {
        const num = Number(
          elem.DESIGNATOR.slice(0, elem.DESIGNATOR.length - 1)
        );
        const lett = elem.DESIGNATOR.slice(elem.DESIGNATOR.length - 1);
        if (number < 19) {
          switch (letter) {
            case "R":
              return number + 18 === num && lett === "L" ? elem : null;
            case "L":
              return number + 18 === num && lett === "R" ? elem : null;
            case "C":
              return number + 18 === num && lett === "C" ? elem : null;
            default:
              break;
          }
        }
        if (number > 18) {
          switch (letter) {
            case "R":
              return number - 18 === num && lett === "L" ? elem : null;
            case "L":
              return number - 18 === num && lett === "R" ? elem : null;
            case "C":
              return number - 18 === num && lett === "C" ? elem : null;
            default:
              break;
          }
        }
      });

      if (number > 18 && match.length > 0) {
        return acc;
      }
      if (number > 18 && match.length === 0) {
        acc[curr.DESIGNATOR] = {
          NAME: curr.DESIGNATOR,
          PNAME: "",
          HDG: curr.HDG,
          LENGTH: curr.MAXLENGTH,
          WIDTH: curr.WIDTH,
          LAT: curr.THRESHOLDLATITUDE,
          LON: curr.THRESHOLDLONGITUDE
        };
        return acc;
      }
      if (number < 19 && match.length === 0) {
        acc[curr.DESIGNATOR] = {
          NAME: curr.DESIGNATOR,
          PNAME: "",
          HDG: curr.HDG,
          LENGTH: curr.MAXLENGTH,
          WIDTH: curr.WIDTH,
          LAT: curr.THRESHOLDLATITUDE,
          LON: curr.THRESHOLDLONGITUDE
        };
        return acc;
      }
      if (number < 19 && match.length > 0) {
        acc[curr.DESIGNATOR] = {
          NAME: curr.DESIGNATOR,
          PNAME: match[0].DESIGNATOR,
          HDG: curr.HDG,
          LENGTH: curr.MAXLENGTH,
          WIDTH: curr.WIDTH,
          LAT: curr.THRESHOLDLATITUDE,
          LON: curr.THRESHOLDLONGITUDE
        };
        return acc;
      }
      return acc;
    }, {})
  );
