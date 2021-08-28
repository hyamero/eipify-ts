/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import React, { useState } from "react";

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

  return (
    <div
      className="Button-center"
      css={css`
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
          background: #16202c;
          transition: linear 0.3s;
          cursor: pointer;

          &:hover {
            background: #1f2d3e;
            font-size: 2.01rem;
          }
        }
      `}
    >
      {showBtn && (
        <button
          onClick={() => {
            setShowBtn(false);
            setLoader();
            getIpData();
          }}
        >
          GET IP DETAILS
        </button>
      )}
    </div>
  );
};
