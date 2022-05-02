import React from "react";
import SegmenterStartPage from "../src/components/segmenter/SegmenterStartPage";
import img from "../assets/segmenter/bolt2.jpeg";
import HeaderTool from "../src/components/common/HeaderTool";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import Header from "../src/components/common/Header";

const segmenter = () => {
  return (
    <>
      <div className="container">
        <HeaderTool />
        <h1 className="header">Segmenter</h1>
        <SegmenterStartPage />
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
              margin: 2rem 0.5rem;
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

export default segmenter;
