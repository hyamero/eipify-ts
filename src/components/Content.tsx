/** @jsx jsx */
/** @jsxFrag */
import { css, jsx } from "@emotion/react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

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
  const [showDetails, setShowDetails] = useState<boolean>(false);

  //emotion.sh media query
  const breakpoints = [576, 768, 992, 1200];
  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <section
      className="Content"
      css={css`
        .center-details {
          width: 70vw;
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
          padding: 40px 50px;
          border-radius: 50px;
          /* border-top-right-radius: 50px;
          border-top-left-radius: 50px; */
          margin: 50px 0;
          display: flex;
          flex-direction: column;
          z-index: 2;

          ${mq[3]} {
            font-size: 1.6rem;
            padding: 30px 40px;
          }

          ${mq[1]} {
            font-size: 1.3rem;
            padding: 30px 40px;
          }

          ${mq[0]} {
            font-size: 1rem;
            margin: 20px 0 50px 0;
          }

          .ip-text {
            display: inline;
            color: #7fb8ff;
          }

          .arrow-down {
            position: relative;
            top: 30px;
            cursor: pointer;
            display: inline-block;
            opacity: 0.8;

            h5 {
              font-weight: 300;
              font-size: 0.8rem;
              position: relative;
              top: 10px;
            }

            .less-btn {
              top: -20px;
            }
          }
        }
        .ul-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 50px 0;
          background: #131c27;
          border-radius: 50px;
          position: relative;
          bottom: 30px;

          ${mq[1]} {
            display: initial;
            width: 50%;
            padding: 50px 30px;
          }

          ul.flex-ul {
            text-align: center;
            list-style: none;
            flex-basis: 50%;

            li {
              font-size: 1.2rem;
              font-weight: 300;
              color: #e0e0e0;
              margin: 0 10px;

              h3 {
                display: inline;
                font-size: 1rem;
                font-weight: 600;
                text-transform: uppercase;
                color: #7fb8ff;
              }

              ${mq[2]} {
                font-size: 1.1rem;

                h3 {
                  font-size: 0.9rem;
                }
              }

              ${mq[1]} {
                font-size: 0.9rem;

                h3 {
                  font-size: 0.7rem;
                }
              }

              ${mq[0]} {
                font-size: 0.8rem;

                h3 {
                  font-size: 0.6rem;
                }
              }
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
          <motion.div
            className="details"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="text-wrapper">
              Your public IP is <p className="ip-text"> {dataIP.ip}</p>, <br />{" "}
              located in {dataIP.city}, {dataIP.country}{" "}
            </div>
            {!showDetails ? (
              <div className="arrow-down" onClick={() => setShowDetails(true)}>
                <h5>more details</h5>
                <MdKeyboardArrowDown />
              </div>
            ) : (
              <div className="arrow-down" onClick={() => setShowDetails(false)}>
                <MdKeyboardArrowUp />
              </div>
            )}
          </motion.div>
          <AnimatePresence>
            {showDetails && (
              <motion.div
                className="ul-container"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -200, opacity: 0, scale: 0.4 }}
              >
                <ul className="flex-ul margin-right">
                  {/* <li>
                <h3>IP: </h3> {dataIP.ip}
              </li> */}
                  <li>
                    <h3>Continent:</h3> {dataIP.continent}
                  </li>
                  {/* <li>
                <h3>Country:</h3> {dataIP.country}
              </li> */}
                  <li>
                    <h3>Region:</h3> {dataIP.regionName}
                  </li>
                  {/* <li>
                <h3>City:</h3> {dataIP.city}
              </li> */}
                  <li>
                    <h3>Country Code:</h3> {dataIP.countryCode}
                  </li>
                  <li>
                    <h3>Zip Code:</h3> {dataIP.zip}
                  </li>
                  <li>
                    <h3>Timezone:</h3> {dataIP.timezone}
                  </li>
                </ul>
                <ul className="flex-ul">
                  <li>
                    <h3>Latitude:</h3> {dataIP.lat}
                  </li>
                  <li>
                    <h3>Longitude:</h3> {dataIP.lon}
                  </li>
                  <li>
                    <h3>ASN: </h3> {dataIP.as.split(" ").slice(0, 1).join("")}
                  </li>
                  <li>
                    <h3>ISP: </h3> {dataIP.isp}
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : null}
    </section>
  );
};
