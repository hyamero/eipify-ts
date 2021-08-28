/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import React from "react";

interface ContentProps {
  dataIP: any;
  loading: undefined | boolean;
  showContent: boolean;
}

export const Content: React.FC<ContentProps> = ({
  dataIP,
  loading,
  showContent,
}) => {
  return (
    <section
      className="Content"
      css={css`
        width: 45vw;
        margin: auto;

        .details {
          font-size: 2rem;
          color: #e0e0e0;
          font-weight: 500;
        }

        ul {
          text-align: left;
          list-style: none;

          li {
            font-size: 1.2rem;
            font-weight: 300;
            color: #e0e0e0;

            h3 {
              display: inline;
              font-size: 1rem;
              font-weight: 600;
            }
          }

          span {
            font-size: 2rem;
          }
        }
      `}
    >
      {loading === false && showContent ? (
        <div>
          <p className="details">
            Your public IP is {dataIP.ip}, <br /> located in {dataIP.city},{" "}
            {dataIP.country}
          </p>
          <ul>
            <li>
              <h3>IP: </h3> {dataIP.ip}
            </li>
            <li>
              <h3>ISP: </h3> {dataIP.isp}
            </li>
            <li>
              <h3>Continent:</h3> {dataIP.continent}
            </li>
            <li>
              <h3>Country:</h3> {dataIP.country}
            </li>
            <li>
              <h3>Region:</h3> {dataIP.regionName}
            </li>
            <li>
              <h3>City:</h3> {dataIP.city}
            </li>
            <li>
              <h3>Country Code:</h3> {dataIP.countryCode}
            </li>
            <li>
              <h3>Zip Code:</h3> {dataIP.zip}
            </li>
            <li>
              <h3>Timezone:</h3> {dataIP.timezone}
            </li>
            <li>
              <h3>Latitude:</h3> {dataIP.lat}
            </li>
            <li>
              <h3>Longitude:</h3> {dataIP.lon}
            </li>
            <li>
              <h3>ASN:</h3> {dataIP.as.split(" ").slice(0, 1).join("")}
            </li>
          </ul>
        </div>
      ) : null}
    </section>
  );
};
