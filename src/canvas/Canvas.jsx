import React, { Fragment } from "react";

function Canvas({ list }) {
  console.log(list);
  return list.length > 0
    ? list.map((rwy, i) => {
        return (
          <Fragment key={i}>
            <svg
              id="svg_dep"
              version="1.1"
              width="612"
              height="881"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 612 881"
            >
              <rect
                id="XMLID_1_"
                x="247.7"
                y="135.6"
                className="st0"
                width="106.7"
                height="670.6"
                transform={`translate(${50},${-335}) rotate(${
                  rwy.angle
                } ${106.7} ${670.6})`}
              />
              <g id="XMLID_2_">
                <g id="XMLID_16_">
                  <line
                    id="XMLID_19_"
                    className="st1"
                    x1="301"
                    y1="252"
                    x2="301"
                    y2="258"
                    transform={`translate(${50},${-335})  rotate(${
                      rwy.angle
                    } ${106.7} ${670.6})`}
                  />
                  <line
                    id="XMLID_18_"
                    className="st2"
                    x1="301"
                    y1="270.2"
                    x2="301"
                    y2="678.2"
                    transform={`translate(${50},${-335}) rotate(${
                      rwy.angle
                    } ${106.7} ${670.6})`}
                  />
                  <line
                    id="XMLID_17_"
                    className="st1"
                    x1="301"
                    y1="684.3"
                    x2="301"
                    y2="690.3"
                    transform={`translate(${50},${-335}) rotate(${
                      rwy.angle
                    } ${106.7} ${670.6})`}
                  />
                </g>
              </g>
              <line
                id="XMLID_3_"
                className="st3"
                x1="247.7"
                y1="805.3"
                x2="354.3"
                y2="805.3"
                transform={`translate(${50},${-335}) rotate(${
                  rwy.angle
                } ${106.7} ${670.6})`}
              />
              <rect
                id="XMLID_4_"
                x="247.7"
                y="757"
                className="st1"
                width="106.7"
                height="41.7"
                transform={`translate(${50},${-335}) rotate(${
                  rwy.angle
                } ${106.7} ${670.6})`}
              />
              <rect
                id="XMLID_5_"
                x="247.7"
                y="709.5"
                className="st1"
                width="106.7"
                height="41.7"
                transform={`translate(${50},${-335}) rotate(${
                  rwy.angle
                } ${106.7} ${670.6})`}
              />
              <line
                id="XMLID_6_"
                className="st4"
                x1="255.3"
                y1="141.2"
                x2="255.3"
                y2="187.8"
                transform={`translate(${50},${-335}) rotate(${
                  rwy.angle
                } ${106.7} ${670.6})`}
              />
              <line
                id="XMLID_7_"
                className="st4"
                x1="265.2"
                y1="141.2"
                x2="265.2"
                y2="187.8"
                transform={`translate(${50},${-335}) rotate(${
                  rwy.angle
                } ${106.7} ${670.6})`}
              />
              <line
                id="XMLID_8_"
                className="st4"
                x1="275.2"
                y1="141.2"
                x2="275.2"
                y2="187.8"
                transform={`translate(${50},${-335}) rotate(${
                  rwy.angle
                } ${106.7} ${670.6})`}
              />
              <line
                id="XMLID_11_"
                className="st4"
                x1="283.7"
                y1="141.2"
                x2="283.7"
                y2="187.8"
                transform={`translate(${50},${-335}) rotate(${
                  rwy.angle
                } ${106.7} ${670.6})`}
              />
              <line
                id="XMLID_10_"
                className="st4"
                x1="293.5"
                y1="141.2"
                x2="293.5"
                y2="187.8"
                transform={`translate(${50},${-335}) rotate(${
                  rwy.angle
                } ${106.7} ${670.6})`}
              />
              <line
                id="XMLID_9_"
                className="st4"
                x1="303.5"
                y1="141.2"
                x2="303.5"
                y2="187.8"
                transform={`translate(${50},${-335}) rotate(${
                  rwy.angle
                } ${106.7} ${670.6})`}
              />
              <line
                id="XMLID_14_"
                className="st4"
                x1="314"
                y1="141.2"
                x2="314"
                y2="187.8"
                transform={`translate(${50},${-335}) rotate(${
                  rwy.angle
                } ${106.7} ${670.6})`}
              />
              <line
                id="XMLID_13_"
                className="st4"
                x1="324.8"
                y1="141.2"
                x2="324.8"
                y2="187.8"
                transform={`translate(${50},${-335}) rotate(${
                  rwy.angle
                } ${106.7} ${670.6})`}
              />
              <line
                id="XMLID_12_"
                className="st4"
                x1="335.8"
                y1="141.2"
                x2="335.8"
                y2="187.8"
                transform={`translate(${50},${-335}) rotate(${
                  rwy.angle
                } ${106.7} ${670.6})`}
              />
              <line
                id="XMLID_20_"
                className="st4"
                x1="346.2"
                y1="141.2"
                x2="346.2"
                y2="187.8"
                transform={`translate(${50},${-335}) rotate(${
                  rwy.angle
                } ${106.7} ${670.6})`}
              />
              <text
                id="XMLID_21_"
                x="247.7"
                y="709.5"
                transform={`translate(${50},${-300}) rotate(${
                  rwy.angle
                } ${106.7} ${670.6})`}
                className="st5 st6"
              >
                {rwy.name}
              </text>
              <text
                id="XMLID_22_"
                transform="matrix(1 0 0 1 278.5068 785.333)"
                className="st5 st6"
              >
                rwy2
              </text>
            </svg>
          </Fragment>
        );
      })
    : "loading";
}

export default Canvas;
