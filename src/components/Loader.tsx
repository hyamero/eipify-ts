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

        .loader {
          position: relative;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: linear-gradient(
            45deg,
            transparent,
            transparent 40%,
            #e5f403
          );
          animation: animate 2s linear infinite;
        }
        @keyframes animate {
          0% {
            transform: rotate(0deg);
            filter: hue-rotate(0deg);
          }

          100% {
            transform: rotate(720deg);
            filter: hue-rotate(720deg);
          }
        }
        .loader:before {
          content: "";
          position: absolute;
          top: 6px;
          left: 6px;
          right: 6px;
          bottom: 6px;
          background: #16202c;
          border-radius: 50%;
          z-index: 1000;
        }
        .loader:after {
          content: "";
          position: absolute;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 0px;
          background: linear-gradient(
            45deg,
            transparent,
            transparent 40%,
            #e5f403
          );
          border-radius: 50%;
          z-index: 1000;
          z-index: 1;
          filter: blur(30px);
        }
      `}
    >
      <div className="loader"></div>
    </div>
  );
};
