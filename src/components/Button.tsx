import React from "react";

interface ButtonProps {
  getIpData: () => void;
  setLoader: () => void;
}

export const Button: React.FC<ButtonProps> = ({ getIpData, setLoader }) => {
  return (
    <div>
      <button
        onClick={() => {
          setLoader();
          getIpData();
        }}
      >
        GET IP
      </button>
    </div>
  );
};
