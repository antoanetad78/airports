import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadRunwayList } from "../actions/runways";

function TextareaForm({ loadRunwayList }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadRunwayList(data);
  }, [data, loadRunwayList]);

  const getData = textareaValue => {
    const temp = JSON.parse(textareaValue);
    console.log(temp);

    const extractTemp = Object.values(temp.RWY);
    const smallLabels = extractTemp.filter(rwy => {
      if (Number(rwy.DESIGNATOR.slice(0, rwy.DESIGNATOR.length - 1)) < 19) {
        console.log(
          Number(rwy.DESIGNATOR.slice(0, rwy.DESIGNATOR.length - 1)),
          "designator"
        );

        return rwy;
      }
    });
    console.log(smallLabels, "low temporary");

    // const highTemp = extractTemp.filter(rwy => {
    //   if (Number(rwy.MAGNETICHEADING) > 180) {
    //     return rwy;
    //   }
    // });
    // console.log(highTemp, "high temporary");

    // const extractRWY = Object.values(temp.RWY).filter(rwy => {
    //   if (rwy.NAME.includes("FULL")) {
    //     return rwy;
    //   }
    // });
    // console.log(extractRWY);
    const extractCoord = coordinate => {
      const degrees = coordinate / 10000;
      const minutes = (coordinate % 10000) / 100;
      const seconds = (coordinate % 10000) % 100;

      const converted =
        degrees * 10000 + (minutes / 60) * 100 + seconds / (60 * 60);
      return converted;
    };
    const extractWRYvars = smallLabels.map(rwy => {
      return {
        name1: rwy.RWYNO,
        wid: rwy.WIDTH,
        len: rwy.ASDA,
        angle: Number(rwy.HDG),
        x: extractCoord(
          Number(
            rwy.THRESHOLDLATITUDE.slice(0, rwy.THRESHOLDLATITUDE.length - 3)
          )
        ),
        y: extractCoord(
          Number(
            rwy.THRESHOLDLONGITUDE.slice(0, rwy.THRESHOLDLONGITUDE.length - 3)
          )
        )
      };
    });
    setData([...data, ...extractWRYvars]);
  };
  console.log(data, "extraxted data");

  return (
    <Fragment>
      <form>
        <textarea
          onChange={e => {
            getData(e.target.value);
          }}
        ></textarea>
      </form>
    </Fragment>
  );
}

export default connect(
  null,
  { loadRunwayList }
)(TextareaForm);
