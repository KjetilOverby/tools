import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import HeaderStartPage from "../../src/components/common/HeaderStartPage";
import { MyContext } from "../../src/contexts/MyContext";
import ToolWasteCount from "../../src/components/oversikt/ToolWasteCount";
import OversiktLinckBlad from "../../src/components/oversikt/OversiktLinckBlad";
const axios = require("axios");
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const api = axios.create({
  baseURL: process.env.api,
});

const Oversikt = () => {
  const [linckBladesTab, setLinckBladesTab] = useState();
  const [serviceTab, setServiceTab] = useState();
  const [wasteTab, setWasteTab] = useState();
  const [newbladesTab, setNewbladesTab] = useState();

  const [yearRequest, setYearRequest] = useState(new Date().getFullYear());
  const [monthRequest, setMonthRequest] = useState(new Date().getMonth() + 1);
  const [monthRequest2, setMonthRequest2] = useState(new Date().getMonth() + 1);
  const [nameOfMonth, setNameOfMonth] = useState();

  const [linckBladesSum, setLinckBladesSum] = useState();
  const [retipSum, setRetipSum] = useState();
  const [vrakSum, setVrakSum] = useState();
  const [newBladesSum, setNewBladesSum] = useState();

  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (linckBladesTab) {
      setLinckBladesSum(
        linckBladesTab.reduce(function (a, b) {
          return a + b.typeCount;
        }, 0)
      );
    }
  }, [linckBladesTab, monthRequest, retipSum]);
  useEffect(() => {
    if (serviceTab) {
      setRetipSum(
        serviceTab.reduce(function (a, b) {
          return a + b.typeCount;
        }, 0)
      );
    }
  }, [serviceTab, monthRequest, retipSum]);
  useEffect(() => {
    if (wasteTab) {
      setVrakSum(
        wasteTab.reduce(function (a, b) {
          return a + b.typeCount;
        }, 0)
      );
    }
  }, [wasteTab, monthRequest, retipSum]);
  useEffect(() => {
    if (newbladesTab) {
      setNewBladesSum(
        newbladesTab.reduce(function (a, b) {
          return a + b.typeCount;
        }, 0)
      );
    }
  }, [newbladesTab, monthRequest, retipSum]);

  const monthPickerDown = () => {
    setMonthRequest2(monthRequest - 1);
    setMonthRequest(monthRequest2 - 1);
    if (monthRequest2 === 1 && monthRequest === 12) {
      setMonthRequest(new Date().getMonth() + 1);
      setMonthRequest2(new Date().getMonth() + 1);
    }
  };
  const monthPickerUp = () => {
    setMonthRequest2(monthRequest + 1);
    setMonthRequest(monthRequest2 + 1);
    if (monthRequest2 === 1 && monthRequest === 12) {
      setMonthRequest(new Date().getMonth() + 1);
      setMonthRequest2(new Date().getMonth() + 1);
    }
  };

  useEffect(() => {
    if (monthRequest === 0) {
      setMonthRequest2(1);
      setMonthRequest(12);
    } else if (monthRequest === 13) {
      setMonthRequest2(1);
      setMonthRequest(12);
    }
  }, [monthRequest]);

  useEffect(() => {
    switch (monthRequest) {
      case 1:
        setNameOfMonth("januar");
        break;
      case 2:
        setNameOfMonth("februar");
        break;
      case 3:
        setNameOfMonth("mars");
        break;
      case 4:
        setNameOfMonth("april");
        break;
      case 5:
        setNameOfMonth("mai");
        break;
      case 6:
        setNameOfMonth("juni");
        break;
      case 7:
        setNameOfMonth("juli");
        break;
      case 8:
        setNameOfMonth("august");
        break;
      case 9:
        setNameOfMonth("september");
        break;
      case 10:
        setNameOfMonth("oktober");
        break;
      case 11:
        setNameOfMonth("november");
        break;
      case 12:
        setNameOfMonth("desember");
        break;
    }
  }, [monthRequest, monthRequest2]);
  useEffect(() => {
    if (monthRequest2 === 1 && monthRequest === 12) {
      setNameOfMonth("januar - desember");
    }
  }, [monthRequest]);

  useEffect(() => {
    api
      .get(`/api/oversikt/linckBladesTabell`)
      .then(function (response) {
        setLinckBladesTab(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  useEffect(() => {
    api
      .get(
        `/api/oversikt/serviceCountYearType?year=${yearRequest}&month=${monthRequest}&month2=${monthRequest2}`
      )
      .then(function (response) {
        setServiceTab(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [yearRequest, monthRequest, monthRequest2, reload]);
  useEffect(() => {
    api
      .get(
        `/api/oversikt/wastecountType?year=${yearRequest}&month=${monthRequest}&month2=${monthRequest2}`
      )
      .then(function (response) {
        setWasteTab(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [yearRequest, monthRequest, monthRequest2, reload]);
  useEffect(() => {
    setTimeout(() => {
      setReload(!reload);
    }, 1000);
  }, [yearRequest, monthRequest, monthRequest2]);
  useEffect(() => {
    api
      .get(
        `/api/oversikt/newBladesCountType?year=${yearRequest}&month=${monthRequest}&month2=${monthRequest2}`
      )
      .then(function (response) {
        setNewbladesTab(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [yearRequest, monthRequest, monthRequest2, reload]);
  return (
    <>
      <div className="container">
        <div className="header-container">
          <HeaderStartPage color="black" />
        </div>

      {/*   <div className="image-container">
          <h1 className="header">Oversikt over Linckblad</h1>
        </div> */}
        <div className="page-container">
          <button onClick={() => setReload(!reload)}>Reload</button>
          <div className="arrow-btn-container">
            <div className="arrow-btn-each-container">
              <h5>{nameOfMonth}</h5>
              <div>
                <MdKeyboardArrowLeft
                  onClick={monthPickerDown}
                  style={{ fontSize: "2rem", color: "red" }}
                />
                <MdKeyboardArrowRight
                  onClick={monthPickerUp}
                  style={{ fontSize: "2rem", color: "seagreen" }}
                />
              </div>
            </div>
            <div className="arrow-btn-each-container">
              <h5>{yearRequest}</h5>
              <div>
                <MdKeyboardArrowLeft
                  onClick={() => setYearRequest(yearRequest - 1)}
                  style={{ fontSize: "2rem", color: "red" }}
                />
                <MdKeyboardArrowRight
                  onClick={() => setYearRequest(yearRequest + 1)}
                  style={{ fontSize: "2rem", color: "seagreen" }}
                />
              </div>
            </div>
          </div>
          <div>
            <ToolWasteCount />
          </div>
          <div>
            <OversiktLinckBlad
              linckBladesTab={linckBladesTab}
              serviceTab={serviceTab}
              wasteTab={wasteTab}
              newbladesTab={newbladesTab}
              retipSum={retipSum}
              vrakSum={vrakSum}
              newBladesSum={newBladesSum}
              linckBladesSum={linckBladesSum}
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .arrow-btn-container {
            display: flex;
            justify-content: space-between;
            width: 16rem;
            margin: 2rem 0;
          }
          .arrow-btn-each-container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 5rem;
            align-items: center;
            width: 8rem;
          }
          .container {
          }
          .header {
            color: white;
            font-size: 4rem;
            font-weight: 100;
          }
          .header-container {
            display: grid;
            place-items: center;
          }
          .page-container {
            margin: 2rem 5rem;
          }
          .image-container {
            height: 20rem;
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url("https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: grid;
            place-items: center;
          }
          p {
            text-transform: uppercase;
          }
          p:hover {
            cursor: pointer;
          }
          @media (max-width: 1000px) {
            .header {
              font-size: 2.3rem;
            }
            .page-container {
              margin: 2rem;
            }
            .image-container {
              height: 10rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Oversikt;
