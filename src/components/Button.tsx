/** @jsx jsx */
/** @jsxFrag */
import { css, jsx } from "@emotion/react";

import React, { useState } from "react";
import hand from "../img/3dhand-cmprsd.png";

interface ButtonProps {
  getIpData: () => void;
  setLoader: () => void;
  loading: undefined | boolean;
}

export const Button: React.FC<ButtonProps> = ({
  getIpData,
  setLoader,
  loading,
}) => {
  const [showBtn, setShowBtn] = useState<boolean>(true);
  const [onHover, setOnHover] = useState<boolean>(false);

  return (
    <div
      className="Button-center"
      css={css`
        .grid-button {
          display: grid;
          grid-template-columns: 1fr;
          place-items: center;
        }

        .hand {
          height: 400px;
          position: relative;
          top: 40px;
          transform: rotate(60deg);
          cursor: pointer;
        }

        button {
          color: #e0e0e0;
          height: 100px;
          width: 400px;
          outline: none;
          border: #e0e0e0 3px solid;
          border-radius: 50px;
          font-size: 2rem;
          font-weight: 600;
          position: relative;
          top: 150px;
          background: transparent;
          transition: linear 0.3s;
          cursor: pointer;

          &:hover {
            background: #1f2d3e;
            font-size: 2.01rem;
          }
        }
        .btn-hover {
          background: #1f2d3e;
          font-size: 2.01rem;
        }
      `}
    >
      {showBtn && (
        <div className="grid-button">
          <button
            className={onHover ? "btn-hover" : ""}
            onClick={() => {
              setShowBtn(false);
              setLoader();
              getIpData();
            }}
          >
            GET IP DETAILS
          </button>
          <img
            className="hand"
            src={hand}
            alt="3d hand"
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            onClick={() => {
              setShowBtn(false);
              setLoader();
              getIpData();
            }}
          />
        </div>
      )}
    </div>
  );
};
