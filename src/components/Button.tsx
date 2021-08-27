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
    <div>
      {showBtn && (
        <button
          onClick={() => {
            setShowBtn(false);
            setLoader();
            getIpData();
          }}
        >
          GET IP Details
        </button>
      )}
    </div>
  );
};
