import React from "react";
import PieChartsWaste from "./PieChartsWaste";
import Colors from "../../../config/Colors";
import TypeInputRetip from "./TypeInputRetip";

const ChartRetip = ({
  allBladesRetip,
  zeroA,
  oneA,
  twoA,
  threeA,
  fourA,
  moreA,
  title,
  text,
  input,
}) => {
  return (
    <>
      <div className="chart-container">
        <div className="text-container">
          <h3 className="header mb">
            {title} ({allBladesRetip && allBladesRetip.length})
          </h3>
          <p className="text text-box">{text}</p>

          {input ? (
            <TypeInputRetip />
          ) : (
            <h3 className="invisible-text">Sagbladutnyttelse</h3>
          )}
        </div>
        <div className="piechart-waste-container">
          <PieChartsWaste
            zero={zeroA}
            one={oneA}
            two={twoA}
            three={threeA}
            four={fourA}
            more={moreA}
            color1={Colors.three}
            color2={Colors.secondRetip}
            color3={Colors.one}
            color4={Colors.zero}
            color5={Colors.four}
            color6={Colors.more}
            title={title}
          />
          <div className="description-container">
            <div className="box-description-container">
              <p className="number">{zeroA}</p>
              <div className="color-box box1"></div>
              <p className="waste-description">Nye blad</p>
            </div>
            <div className="box-description-container">
              <p className="number">{oneA}</p>
              <div className="color-box box2"></div>
              <p className="waste-description">1 omlodding</p>
            </div>
            <div className="box-description-container">
              <p className="number">{twoA}</p>
              <div className="color-box box3"></div>
              <p className="waste-description">2 omloddinger</p>
            </div>
            <div className="box-description-container">
              <p className="number">{threeA}</p>
              <div className="color-box box4"></div>
              <p className="waste-description">3 omloddinger</p>
            </div>
            <div className="box-description-container">
              <p className="number">{fourA}</p>
              <div className="color-box box5"></div>
              <p className="waste-description">4 omloddinger</p>
            </div>
            <div className="box-description-container">
              <p className="number">{moreA}</p>
              <div className="color-box box6"></div>
              <p className="waste-description">5 eller fler</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .color-box {
            height: 1rem;
            width: 1rem;
          }
          .box1 {
            background: ${Colors.three};
          }
          .box2 {
            background: ${Colors.secondRetip};
          }
          .box3 {
            background: ${Colors.one};
          }
          .box4 {
            background: ${Colors.zero};
          }
          .box5 {
            background: ${Colors.four};
          }
          .box6 {
            background: ${Colors.more};
          }
          .box-description-container {
            display: flex;
            align-items: center;
            width: 10rem;
          }
          .container {
          }
          .chart-container {
            display: grid;
            place-items: center;
            width: 30rem;
          }
          .header {
            color: ${Colors.textColor};
          }
          .number {
            width: 2rem;
          }
          .invisible-text {
            color: transparent;
          }
          .piechart-waste-container {
            display: grid;
            grid-template-columns: 14rem 1fr;
            width: 25rem;
            place-items: center;
          }
          .text {
            color: ${Colors.textColor};
            text-align: center;
          }
          .text-container {
            display: grid;
            place-items: center;
            width: 24rem;
          }
          .text-box {
            height: 8rem;
          }
          .waste-description {
            margin-left: 0.5rem;
          }

          @media (max-width: 1000px) {
            .image-container {
              height: 10rem;
            }
            .content-container {
              margin: 5rem 0;
            }
            .piechart-waste-container {
              grid-template-columns: auto;
              grid-template-rows: 22rem 1fr;
              width: 100%;
            }
            .chart-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default ChartRetip;
