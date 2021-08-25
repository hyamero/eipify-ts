/**@jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import React from "react";

import { Navbar } from "./components/Navbar";
import background from "./img/sebastian-svenson-unsplash.jpg";

const App: React.FC = () => {
  return (
    <div
      className="App"
      css={css`
        height: 100vh;
        background: url(${background});
        background-size: cover;
        text-align: center;

        span {
          font-size: 7rem;
          font-weight: 500;
          color: #e6ebf2;
        }
      `}
    >
      <Navbar />
      <span>work in progress</span>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

          * {
            margin: 0;
            padding: 0;
            font-family: "Poppins", sans-serif;
          }
        `}
      />
    </div>
  );
};

export default App;
