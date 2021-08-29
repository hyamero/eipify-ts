/** @jsx jsx */
/** @jsxFrag */
import { css, jsx } from "@emotion/react";
import React from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

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
        .center-details {
          width: 45vw;
          margin: auto;
          height: 96vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .details {
          font-size: 2rem;
          color: #e0e0e0;
          font-weight: 500;
          background: #131c27;
          padding: 40px 60px;
          border-top-right-radius: 50px;
          border-top-left-radius: 50px;
          margin: 50px 0;

          .arrow-down {
            position: relative;
            top: 30px;

            h5 {
              font-weight: 400;
              font-size: 1rem;
            }
          }
        }

        ul {
          text-align: left;
          list-style: none;
          display: flex;
          justify-content: space-between;

          .flex-ul {
            flex-basis: 50%;
          }

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
        <div className="center-details">
          <p className="details">
            Your public IP is {dataIP.ip}, <br /> located in {dataIP.city},{" "}
            {dataIP.country}
            <div className="arrow-down">
              <h5>more details</h5>
              <MdKeyboardArrowDown />
            </div>
          </p>
          <ul>
            <div className="flex-ul">
              <li>
                <h3>IP: </h3> {dataIP.ip}
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
            </div>
            <div className="flex-ul">
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
                <h3>ISP: </h3> {dataIP.isp}
              </li>
            </div>
          </ul>
        </div>
      ) : null}
    </section>
  );
};
