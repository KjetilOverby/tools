import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const CalendarPicker = ({
  month,
  year,
  setMonthRequest,
  setMonthRequest2,
  setYearRequest,
  setUpdate,
  update,
}) => {
  const [namedMonth, setNamedMonth] = useState();
  useEffect(() => {
    setNamedMonth(month);
  }, [month]);
  const monthCountDownHandler = () => {
    setMonthRequest(month - 1);
    setMonthRequest2(month - 1);
    if (month < 12) {
      setMonthRequest(1);
      setMonthRequest2(12);
    }
    setTimeout(() => {
      setUpdate(!update);
    }, 200);
  };
  const monthCountUpHandler = () => {
    setMonthRequest(month + 1);
    setMonthRequest2(month + 1);
    if (month === 13) {
      setMonthRequest(1);
      setMonthRequest2(12);
    }
    setTimeout(() => {
      setUpdate(!update);
    }, 200);
  };
  const yearCountDownHandler = () => {
    setYearRequest(year - 1);
    setTimeout(() => {
      setUpdate(!update);
    }, 200);
  };
  const yearCountUpHandler = () => {
    setYearRequest(year + 1);
    setTimeout(() => {
      setUpdate(!update);
    }, 200);
  };

  useEffect(() => {
    switch (namedMonth) {
      case 1:
        setNamedMonth("januar");
        break;
      case 2:
        setNamedMonth("februar");
        break;
      case 3:
        setNamedMonth("mars");
        break;
      case 4:
        setNamedMonth("april");
        break;
      case 5:
        setNamedMonth("mai");
        break;
      case 6:
        setNamedMonth("juni");
        break;
      case 7:
        setNamedMonth("juli");
        break;
      case 8:
        setNamedMonth("august");
        break;
      case 9:
        setNamedMonth("september");
        break;
      case 10:
        setNamedMonth("oktober");
        break;
      case 11:
        setNamedMonth("november");
        break;
      case 12:
        setNamedMonth("desember");
        break;
      case 13:
        setNamedMonth("januar - desember");
        break;
    }
  }, [namedMonth]);
  return (
    <>
      <div className="container">
        <div className="arrow-container">
          <div>
            <MdKeyboardArrowLeft
              style={{ fontSize: "2rem", color: "red", cursor: "pointer" }}
              onClick={monthCountDownHandler}
            />
            <MdKeyboardArrowRight
              style={{
                fontSize: "2rem",
                color: "green",
                cursor: "pointer",
              }}
              onClick={monthCountUpHandler}
            />
          </div>
          <div>
            <p>{namedMonth}</p>
          </div>
        </div>
        <div className="arrow-container">
          <div>
            <MdKeyboardArrowLeft
              style={{ fontSize: "2rem", color: "red", cursor: "pointer" }}
              onClick={yearCountDownHandler}
            />
            <MdKeyboardArrowRight
              style={{
                fontSize: "2rem",
                color: "green",
                cursor: "pointer",
              }}
              onClick={yearCountUpHandler}
            />
          </div>
          <div>
            <p>{year}</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            width: 10rem;
            justify-content: space-between;
          }
          .arrow-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};

export default CalendarPicker;
