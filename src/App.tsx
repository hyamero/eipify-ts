/**@jsx jsx */
import { css, jsx, Global } from "@emotion/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Navbar } from "./components/Navbar";
import { Button } from "./components/Button";
import { Content } from "./components/Content";
import { Loader } from "./components/Loader";
//image by Sebastian Svenson
import background from "./img/background1.jpg";

const App: React.FC = () => {
  const [IP, setIP] = useState<string>();
  const [dataIP, setDataIP] = useState<any>();
  const [loading, setLoading] = useState<boolean | undefined>();
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    getIP();
  }, []);

  useEffect(() => {
    getIpData();
  }, [IP]);

  const getIP = async () => {
    const url = "https://api.techniknews.net/ip/";
    try {
      //get user IP
      const ip = await axios.get(url);
      setIP(ip.data);
      console.log(ip.data);
    } catch (err) {
      console.log(err, "Failed to grab user IP");
    }
  };

  const getIpData = async () => {
    const url = "https://api.techniknews.net/ipgeo/";
    try {
      //get full IP data
      const res = await axios.get(`${url}${IP}`);
      setDataIP(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err, "Failed to grab user IP details");
    }
  };

  const setLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      className="App"
      css={css`
        height: 100vh;
        background: url(${background});
        background-size: cover;
        text-align: center;
        overflow: hidden;

        span {
          font-size: 7rem;
          font-weight: 500;
          color: #e6ebf2;
        }
      `}
    >
      <Navbar />
      {loading && <Loader />}
      <Button
        setLoader={setLoader}
        loading={loading}
        setShowContent={setShowContent}
      />
      <Content dataIP={dataIP} loading={loading} showContent={showContent} />
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
