import React from "react";

interface ButtonProps {
  getIP: () => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  getIpData: () => void;
}

export const Button: React.FC<ButtonProps> = ({ getIpData, setLoading }) => {
  return (
    <div>
      <button
        onClick={() => {
          setLoading(true);
          getIpData();
        }}
      >
        GET IP
      </button>
    </div>
  );
};
