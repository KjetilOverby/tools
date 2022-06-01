import React, { useEffect, useState, useContext } from "react";
import HeaderStartPage from "../src/components/common/HeaderStartPage";
const axios = require("axios");
import dateFormat, { masks } from "dateformat";
import ModalComponentEdit from "../src/components/common/ModalComponentEdit";
import { FaTrashAlt } from "react-icons/fa";
import { MyContext } from "../src/contexts/MyContext";
import { useAuth0 } from "@auth0/auth0-react";
import AddBladesInputComponent from "../src/components/addblades/AddBladesInputComponent";
import { v4 as uuidv4 } from "uuid";
import CalendarPicker from '../src/components/common/CalendarPicker'

const api = axios.create({
  baseURL: process.env.api,
});

const Addblades = () => {
  const { user, isAuthenticated } = useAuth0();
  const { userID, setUserID, setLinckUpdate, linckUpdate } =
    useContext(MyContext);

  useEffect(() => {
    setUserID(user);
  });

  const [newBlades, setNewBlades] = useState();
  const [updateNewblades, setUpdateNewblades] = useState(false);
  const [createdMonth, setCreatedMonth] = useState(new Date().getMonth() + 1);
  const [openDeleteNewbladesModal, setOpenDeleteNewbladesModal] =
    useState(false);
  const [bladeInfo, setBladeInfo] = useState({});
  const [error, setError] = useState();

  const [selectorValue, setSelectorValue] = useState();
  const [serialInput, setSerialInput] = useState();
  const [uuid, setUuid] = useState();

  const [yearRequest, setYearRequest] = useState(new Date().getFullYear());
  const [monthRequest, setMonthRequest] = useState(new Date().getMonth() + 1);
  const [monthRequest2, setMonthRequest2] = useState(new Date().getMonth() + 2);
  const [update, setUpdate] = useState(false);

  console.log(monthRequest2);

  useEffect(() => {
    setUuid(uuidv4());
  }, [updateNewblades]);

  useEffect(() => {
    api
      .get(`/api/linck/newblades/createdBlades?month=${monthRequest}&month2=${monthRequest2}&yearRequest=${yearRequest}`)
      .then(function (response) {
        setNewBlades(response.data.data);
        updateNewblades(!updateNewblades)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [updateNewblades, monthRequest, monthRequest2]);

  const deleteCreatedBladeHandler = () => {
    deleteCreatedBladeHandler2();
    try {
      api
        .delete(
          `/api/linck/deletecreatedblades/?del=${bladeInfo.id}&user=${user.sub}`
        )
        .then((res) => {
          if (res.status === 200) {
            setOpenDeleteNewbladesModal(false);
            setUpdateNewblades(!updateNewblades);
          }
        });
    } catch (error) {
      console.log(error);
      setError("Du er ikke innlogget og kan ikke slette bladet. " + error);
    }
  };
  const deleteCreatedBladeHandler2 = () => {
    try {
      api
        .delete(
          `/api/linck/deletecreatedblades2/?del=${bladeInfo.id}&user=${user.sub}`
        )
        .then((res) => {
          if (res.status === 200) {
            setOpenDeleteNewbladesModal(false);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const createNewBladeHandler = (e) => {
    if (
      serialInput === "" ||
      serialInput === undefined ||
      selectorValue === "" ||
      selectorValue === undefined
    ) {
      alert("Du må fylle ut bladtype og serienummer!");
    } else {
      api
        .post(`/api/linck/newblades/createNewBlade/?user=${user.sub}`, {
          type: selectorValue,
          serial: serialInput,
          updated: new Date(),
          newid: uuid,
        })
        .then(function (response) {
          if (response.status === 200) {
            createNewBladeListHandler();
            setTimeout(() => {
              setUpdateNewblades(!updateNewblades);
            }, 1000);
          }
        });
    }
  };

  const createNewBladeListHandler = () => {
    api
      .post(`/api/linck/newblades/createNewBladeList/?user=${user.sub}`, {
        type: selectorValue,
        serial: serialInput,
        updated: new Date(),
        newid: uuid,
      })
      .then(function (response) {
        if (response.status === 200) {
          setUpdateNewblades(!updateNewblades);
        }
      });
  };
  const onSubmit = (e) => {
    if (e.code === "Enter") {
      createNewBladeHandler();
    }
  };

  return (
    <>
      {openDeleteNewbladesModal && (
        <ModalComponentEdit
          cancel={setOpenDeleteNewbladesModal}
          title="Slette "
          getSerial={bladeInfo.serial}
          actionBtnTxt="SLETT"
          icon={<FaTrashAlt style={{ color: "red", fontSize: "1.5rem" }} />}
          btnBorder="red"
          actionHover="#dadada"
          actionBtn={deleteCreatedBladeHandler}
          error={error}
        />
      )}
      <div className="container">
        <div className="header-container">
          <HeaderStartPage />
        </div>
        {/* <div className="image-container"></div> */}
        <div className="calendar-container">

        <CalendarPicker 
         month={monthRequest}
         year={yearRequest}
         setMonthRequest={setMonthRequest}
         setMonthRequest2={setMonthRequest2}
         monthRequest={monthRequest}
         monthRequest2={monthRequest2}
         setYearRequest={setYearRequest}
         setUpdate={setUpdate}
         update={update}
        />
        </div>
        <div className="newblades-main-container">
          
          <div className="newblades-container">
            <p>Antall: {newBlades && newBlades.length}</p>
            {newBlades &&
              newBlades.map((item) => {
                const openDeleteNewbladesHandler = () => {
                  setOpenDeleteNewbladesModal(true);
                  setBladeInfo({
                    serial: item.serial,
                    type: item.type,
                    id: item.newid,
                  });
                };
                return (
                  <>
                    <p
                      onClick={openDeleteNewbladesHandler}
                      className="newblades-text"
                    >
                      {item.serial}, {item.type},{" "}
                      {dateFormat(item.updated, "dd.mm.yyyy HH:MM")}
                    </p>
                  </>
                );
              })}
          </div>
          {user && user.sub === process.env.USER_SUB && (
            <AddBladesInputComponent
              setSelectorValue={setSelectorValue}
              setSerialInput={setSerialInput}
              createNewBladeHandler={createNewBladeHandler}
              onSubmit={onSubmit}
            />
          )}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: relative;
          }
          .calendar-container {
            padding: 2rem
          }
          .header-container {
            width: 100%;
            display: flex;
            justify-content: center;
            grid-area: top;
          }
          .image-container {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
              url("https://images.unsplash.com/photo-1568832359672-e36cf5d74f54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
            height: 20rem;
            background-position: bottom;
            background-repeat: no-repeat;
            background-size: cover;
            display: grid;
            place-items: center;
            grid-area: middle;
          }

          .newblades-container {
            height: auto;
            grid-area: list;
            min-width: 10rem;
          }
          .newblades-main-container {
            width: auto;
            padding: 1rem;
            display: grid;
            grid-template-columns: auto 12.5rem 1fr;
            grid-template-areas: "list input .";
            grid-column-gap: 2rem;
          }
          .newblades-text {
            font-size: 0.8rem;
            margin: 0;
            font-style: italic;
            color: grey;
          }
          .newblades-text:hover {
            cursor: pointer;
            color: blue;
          }
          @media (max-width: 1000px) {
            .image-container {
              height: 10rem;
            }
            .newblades-main-container {
              grid-template-rows: auto auto;
              grid-template-areas:
                "input input ."
                "list list .";
            }
            .newblades-container {
              margin-top: 2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Addblades;
