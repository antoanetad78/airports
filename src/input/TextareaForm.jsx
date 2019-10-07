import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadRunwayList } from "../actions/runways";
import { getAirportData } from "../actions/airport";
import { pairs } from "../helpers/pairs";
import { TEXT_DEFAULT } from "../constants";

function TextareaForm({ loadRunwayList, getAirportData }) {
  const [data, setData] = useState([]);
  const [airportData, setAirportData] = useState({});
  const [textareaValue, setTextareaValue] = useState(TEXT_DEFAULT);
  useEffect(() => {
    loadRunwayList(data);
    getAirportData(airportData);
  }, [data, loadRunwayList, airportData, getAirportData]);
  useEffect(() => {
    getData(TEXT_DEFAULT);
    airportDataAll(TEXT_DEFAULT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getData = textareaValue => {
    if (textareaValue.length > 0) {
      const temp = JSON.parse(textareaValue);
      const extractTemp = Object.values(temp.RWY);
      const listToPair = extractTemp.filter(rwy => {
        return rwy.FULLORINTERSECTION === "Full runway" ? rwy : null;
      });
      const pairsList = pairs(listToPair);
      setData([...data, ...pairsList]);
    }
  };
  const airportDataAll = textareaValue => {
    const airportDataAll = JSON.parse(textareaValue);
    const airport = {
      NAME: airportDataAll.NAME,
      MAGNETICVARIATION: airportDataAll.MAGNETICVARIATION
    };
    setAirportData({ ...airportData, ...airport });
  };
  return (
    <Fragment>
      <div className="form">
        <p>
          To change the image delete the existing data and paste a new set. The
          form expects the same structure.
        </p>
        <form>
          <textarea
            value={textareaValue}
            onChange={e => {
              setTextareaValue(e.target.value);
              getData(e.target.value);
              airportDataAll(e.target.value);
            }}
          ></textarea>
        </form>
        <button
          onClick={() => {
            setTextareaValue("");
            setData([]);
            setAirportData({});
          }}
        >
          Clear form
        </button>
      </div>
    </Fragment>
  );
}

export default connect(
  null,
  { loadRunwayList, getAirportData }
)(TextareaForm);
