import React, { useEffect, useState } from "react";
import axios from "axios";
import LinckBladesStartPage from "../src/components/lincksawblades/LinckBladesStartPage";
import HeaderTool from "../src/components/common/HeaderTool";
import Link from "next/link";
const api = axios.create({
  baseURL: process.env.api,
});

const lincksawblades = () => {
  return (
    <>
      <div className="container">
        <HeaderTool />

        <h1 className="header">Sagblad Linck</h1>
        <div className="linck-menu-container">
          <Link href="/lincksearch">
            <p className="linck-menu-tabs">SØK</p>
          </Link>
          <Link href="/addblades">
            <p className="linck-menu-tabs">NYE</p>
          </Link>
        </div>
        <LinckBladesStartPage />
      </div>
      <style jsx>
        {`
          .container {
            margin: 2rem 30rem;
          }
          .header {
            margin: 2rem 0 1rem 0;
          }
          .backContainer {
            display: flex;
          }
          .backContainer:hover {
            cursor: pointer;
          }
          .linck-menu-container {
            display: flex;
            width: 5rem;
            justify-content: space-between;
            margin-bottom: 4rem;
          }
          .linck-menu-tabs:hover {
            cursor: pointer;
          }
          @media (max-width: 2100px) {
            .container {
              margin: 2rem 10rem;
            }
          }
          @media (max-width: 756px) {
            .container {
              margin: 2rem 0rem;
              padding: 0 0.5rem;
            }
            .header {
              margin: 0 0 1rem 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default lincksawblades;
