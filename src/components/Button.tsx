/** @jsx jsx */
/** @jsxFrag */
import { css, jsx } from "@emotion/react";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import hand from "../img/3dhand.png";

interface ButtonProps {
  setLoader: () => void;
  setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
  loading: undefined | boolean;
}

export const Button: React.FC<ButtonProps> = ({
  setLoader,
  loading,
  setShowContent,
}) => {
  const [showBtn, setShowBtn] = useState<boolean>(true);
  const [onHover, setOnHover] = useState<boolean>(false);

  const constraintsRef = useRef<HTMLImageElement>(null);

  //emotion.sh media query
  const breakpoints = [576, 768, 992, 1200];
  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
  return (
    <div
      className="Button-center"
      css={css`
        .grid-button {
          display: grid;
          grid-template-columns: 1fr;
          place-items: center;
          margin: auto;
        }

        .hand {
          height: 400px;
          position: relative;
          top: 40px;
          cursor: pointer;
          -webkit-user-drag: none;

          ${mq[1]} {
            height: 330px;
            top: 60px;
          }
          ${mq[0]} {
            height: 290px;
            top: 70px;
          }
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

          ${mq[1]} {
            height: 90px;
            width: 340px;
            font-size: 1.8rem;
          }

          ${mq[0]} {
            height: 80px;
            width: 280px;
            font-size: 1.6rem;
          }

          &:hover {
            background: #1f2d3e;
          }
        }
        .btn-hover {
          background: #1f2d3e;
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
              setShowContent(true);
            }}
          >
            GET IP DETAILS
          </button>
          <motion.img
            drag
            ref={constraintsRef}
            dragConstraints={constraintsRef}
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
              setShowContent(true);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};
