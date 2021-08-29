/** @jsx jsx */
/** @jsxFrag */
import { css, jsx } from "@emotion/react";
import { motion } from "framer-motion";

import React, { useState } from "react";
import hand from "../img/3dhand.png";

interface ButtonProps {
  getIpData: () => void;
  setLoader: () => void;
  setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
  loading: undefined | boolean;
}

export const Button: React.FC<ButtonProps> = ({
  getIpData,
  setLoader,
  loading,
  setShowContent,
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

        .hide-element {
          z-index: -5;
        }
      `}
    >
      {showBtn && !loading ? (
        <div className={loading ? "hide-element" : "grid-button"}>
          <button
            className={onHover ? "btn-hover" : ""}
            onClick={() => {
              setShowBtn(false);
              setLoader();
              getIpData();
              setShowContent(true);
            }}
          >
            GET IP DETAILS
          </button>
          <motion.img
            initial={{ rotate: 60 }}
            whileHover={{ rotate: 30, y: 60 }}
            className="hand"
            src={hand}
            alt="3d hand"
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
            onClick={() => {
              setShowBtn(false);
              setLoader();
              getIpData();
              setShowContent(true);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};
