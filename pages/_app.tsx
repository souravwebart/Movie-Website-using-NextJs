import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Head>
        <title>NextMovie</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {show && (
          <div className="sidebar" style={{ backgroundColor: "#000" }}>
            <Sidebar setShow={setShow} show={show} />
          </div>
        )}

        <div
          className="component-main"
          style={{
            width: "100%",
            marginLeft: show ? "auto" : "0px",
          }}
        >
          <Header setShow={setShow} show={show} />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
