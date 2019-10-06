import React, { Fragment } from "react";

function Drawing({ list, angleVariation }) {
  return list.length > 0 ? (
    <svg
      className="border"
      width="800"
      height="800"
      viewBox={`0 0 800 800`}
      preserveAspectRatio="xMidYMid meet"
    >
      {list.map((rwy, i) => {
        return (
          <Fragment key={i}>
            <rect
              x={`${rwy.x * 100}`}
              y={`${rwy.y * 100}`}
              width={rwy.LENGTH / 10}
              height={rwy.WIDTH / 10}
              transform={`rotate(${-(90 - Number(rwy.HDG)) +
                angleVariation}, ${Number(rwy.x * 100)}, ${Number(
                rwy.y * 100
              )})`}
              fill="#000000"
            ></rect>
            <text
              x={rwy.x * 100 - 20}
              y={rwy.y * 100 + 20}
              fill="#ff0000"
              transform={`rotate(${-(90 - Number(rwy.HDG)) +
                angleVariation}, ${Number(rwy.x * 100)}, ${Number(
                rwy.y * 100
              )})`}
            >
              {rwy.NAME}/{rwy.PNAME}
            </text>
          </Fragment>
        );
      })}
    </svg>
  ) : (
    "waiting ..."
  );
}

export default Drawing;
