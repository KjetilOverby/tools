import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../contexts/MyContext";

const OversiktLinckBlad = ({
  linckBladesTab,
  serviceTab,
  wasteTab,
  newbladesTab,
  retipSum,
  vrakSum,
  newBladesSum,
  linckBladesSum,
}) => {
  const { linckBlades, toolwasteData, toolCreateData } = useContext(MyContext);

  // const nom = [20, 20, 60, 60, 30, 60, 25, 25, 25, 25, 25, 25, 25];
  const nom = [
    {
      ant: 20,
      id: 1,
    },
    {
      ant: 20,
      id: 2,
    },
    {
      ant: 60,
      id: 3,
    },
    {
      ant: 60,
      id: 4,
    },
    {
      ant: 30,
      id: 5,
    },
    {
      ant: 60,
      id: 6,
    },
    {
      ant: 25,
      id: 7,
    },
    {
      ant: 25,
      id: 8,
    },
    {
      ant: 25,
      id: 9,
    },
    {
      ant: 25,
      id: 10,
    },
    {
      ant: 25,
      id: 11,
    },
    {
      ant: 25,
      id: 12,
    },
    {
      ant: 25,
      id: 13,
    },
  ];

  return (
    <>
      {linckBlades ? (
        <div className="container">
          <div className="list-container antall-container">
            <h5 className="table-header">Antall sagblad ({linckBladesSum})</h5>
            <div className="table-ant-nom-container">
              <div>
                {linckBladesTab &&
                  linckBladesTab.map((item) => {
                    return (
                      <div key={item._id.type}>
                        <div className="oversikt-container">
                          <p>{item._id.type}</p>
                          <p>{item.typeCount}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div>
                {nom.map((item) => (
                  <p key={item.id} className="nom">
                    {item.ant}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="list-container omlodd-container">
            <h5 className="table-header">Antall omloddet ({retipSum})</h5>
            {serviceTab &&
              serviceTab.map((item) => {
                return (
                  <div key={item._id.type}>
                    <div className="oversikt-container">
                      <p>{item._id.type}</p>
                      <p>{item.typeCount}</p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="list-container vrak-container">
            <h5 className="table-header">Antall vrak ({vrakSum})</h5>
            {wasteTab &&
              wasteTab.map((item) => {
                return (
                  <div key={item._id.type}>
                    <div className="oversikt-container">
                      <p>{item._id.type}</p>
                      <p>{item.typeCount}</p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="list-container new-container">
            <h5 className="table-header">Antall nye ({newBladesSum})</h5>
            {newbladesTab &&
              newbladesTab.map((item) => {
                return (
                  <div key={item._id.type}>
                    <div className="oversikt-container">
                      <p>{item._id.type}</p>
                      <p>{item.typeCount}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <h1>Laster data...</h1>
      )}
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            margin: 0 20rem;
            grid-template-areas: "antall omlodd vrak nye";
          }
          .antall-container {
            grid-area: antall;
          }
          .table-ant-nom-container {
            display: flex;
          }
          .nom {
            margin-left: 1.5rem;
            color: blue;
          }
          .omlodd-container {
            grid-area: omlodd;
          }
          .vrak-container {
            grid-area: vrak;
          }
          .new-container {
            grid-area: nye;
          }
          .list-container {
          }
          .oversikt-container {
            display: flex;
            justify-content: space-between;
            width: 11rem;
          }
          .table-header {
            color: #203e90;
          }
          p {
            font-size: 0.8rem;
            font-style: italic;
            color: #707070;
          }
          @media (max-width: 2100px) {
            .container {
              margin: 0 10rem;
            }
          }
          @media (max-width: 1400px) {
            .container {
              margin: 0 1rem;
            }
          }
          @media (max-width: 1000px) {
            .container {
              grid-template-rows: repeat(4, auto);
              grid-template-areas:
                "antall"
                "omlodd"
                "vrak"
                "nye";
              margin: 0;
            }
            .list-container {
              margin-bottom: 2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default OversiktLinckBlad;
