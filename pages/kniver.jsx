import React, { useEffect } from "react";
import Link from "next/link";
import KniverStartpage from "../src/components/kniver/KniverStartpage";
import red from "../assets/kniver/red.jpeg";
import HeaderTool from "../src/components/common/HeaderTool";

const kniver = () => {
  return (
    <>
      <div className="container">
        <HeaderTool />
        <h1 className="header">Kniver og motstål</h1>
        <KniverStartpage img={red} />
      </div>
      <style jsx>
        {`
          .container {
            margin: 2rem 30rem;
          }
          .header {
            margin: 2rem 0 6rem 0;
          }
          .backContainer {
            display: flex;
          }
          .backContainer:hover {
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

export default kniver;
