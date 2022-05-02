import React from "react";
import HeaderTool from "../src/components/common/HeaderTool";
import SagbladStartPage from "../src/components/sagblad/SagbladStartPage";

const sagblad = () => {
  return (
    <>
      <div className="container">
        <HeaderTool />
        <h1 className="header">Trimmerblad</h1>
        <SagbladStartPage />
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

export default sagblad;
