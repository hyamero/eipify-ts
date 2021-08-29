/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

import React from "react";

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <div
      className="loader-container"
      css={css`
        height: 96vh;
        width: 100vw;
        position: absolute;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .Loader {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 14.6rem;
          margin-top: 7.3rem;
          margin-bottom: 7.3rem;
        }
        .Loader:before,
        .Loader:after {
          content: "";
          position: absolute;
          border-radius: 50%;
          animation-duration: 1.8s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          filter: drop-shadow(0 0 0.7555555556rem rgba(255, 255, 255, 0.75));
        }
        .Loader:before {
          width: 100%;
          padding-bottom: 100%;
          box-shadow: inset 0 0 0 1.7rem #fff;
          animation-name: pulsA;
        }
        .Loader:after {
          width: calc(100% - 1.7rem * 2);
          padding-bottom: calc(100% - 1.7rem * 2);
          box-shadow: 0 0 0 0 #fff;
          animation-name: pulsB;
        }
        @keyframes pulsA {
          0% {
            box-shadow: inset 0 0 0 1.7rem #fff;
            opacity: 1;
          }
          50%,
          100% {
            box-shadow: inset 0 0 0 0 #fff;
            opacity: 0;
          }
        }
        @keyframes pulsB {
          0%,
          50% {
            box-shadow: 0 0 0 0 #fff;
            opacity: 0;
          }
          100% {
            box-shadow: 0 0 0 1.7rem #fff;
            opacity: 1;
          }
        }
      `}
    >
      <div className="Loader"></div>
    </div>
  );
};
//Loader by Sonja Strieder
