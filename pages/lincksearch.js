import React, { useContext, useEffect, useState } from "react";
import HeaderStartPage from "../src/components/common/HeaderStartPage";
import LinckCards from "../src/components/LinckSearch/LinckCards";
import { MyContext } from "../src/contexts/MyContext";
import search from "../assets/lincksearch/kikkert.jpg";
import Image from "next/image";
import ModalComponentEdit from "../src/components/common/ModalComponentEdit";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiRapidshareArrow } from "react-icons/gi";
import dateFormat, { masks } from "dateformat";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaComments } from "react-icons/fa";
const axios = require("axios");
import { useAuth0 } from "@auth0/auth0-react";

const api = axios.create({
  baseURL: process.env.api,
});

const Lincksearch = () => {
  const { user, isAuthenticated } = useAuth0();

  const {
    linckBlades,
    userID,
    setUserID,
    setLinckUpdate,
    linckUpdate,
    getType,
    setGetType,
    getNumberOfRetip,
    setGetNumberOfRetip,
  } = useContext(MyContext);
  useEffect(() => {
    setUserID(user);
  });
  const [filteredBlades, setFilteredBlades] = useState();
  const [searchInput, setSearchInput] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openRetipModal, setOpenRetipModal] = useState(false);
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [getSerial, setGetSerial] = useState();
  const [linckID, setLinckID] = useState();
  const [deletedBlades, setDeletedBlades] = useState();
  const [wasteMonth, setWasteMonth] = useState(new Date().getMonth() + 1);
  const [wasteMonth2, setWasteMonth2] = useState(new Date().getMonth() + 2);
  const [namedMonth, setNamedMonth] = useState();
  const [wasteUpdate, setWasteUpdate] = useState(false);
  const currentYear = new Date().getFullYear();
  const [wasteListColor, setWasteListColor] = useState("grey");

  const [yearRequest, setYearRequest] = useState(new Date().getFullYear());

  useEffect(() => {
    switch (wasteMonth) {
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
    }
  }, [wasteMonth]);
  const monthCountDownHandler = () => {
    setWasteMonth(wasteMonth - 1);
    setWasteMonth2(wasteMonth2 - 1);
    if (wasteMonth < 2) {
      setWasteMonth(12);
    }
  };
  const monthCountUpHandler = () => {
    setWasteMonth(wasteMonth + 1);
    setWasteMonth2(wasteMonth2 + 1);
    if (wasteMonth >= 12) {
      setWasteMonth(1);
    }
  };

  useEffect(() => {
    if (linckBlades) {
      setFilteredBlades(
        linckBlades.filter((item) => item.serial.includes(searchInput))
      );
    }
  }, [searchInput]);

  useEffect(() => {
    api
      .get(
        `/api/linck/deletedBlades?month=${wasteMonth}&month2=${wasteMonth2}&yearRequest=${yearRequest}`
      )
      .then(function (response) {
        setDeletedBlades(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [wasteMonth, wasteUpdate]);

  const [createDeletedBladeConfirm, setCreateDeletedBladeConfirm] = useState();

  const [confirmCreateDeletedBlade, setConfirmCreateDeletedBlade] = useState();

  const createDeletedBladeHandler = () => {
    api
      .post(`/api/linck/createDeletedBlade/?user=${user.sub}`, {
        type: getType,
        serial: getSerial,
        wasteNumberOfRetip: getNumberOfRetip,
        wasteDate: new Date(),
      })
      .then(function (response) {
        console.log(response);
        setCreateDeletedBladeConfirm(response);

        setConfirmCreateDeletedBlade(response.status);
      });
  };

  const deleteBladeCurrentBladeHandler = () => {
    try {
      api
        .delete(`/api/linck/deleteBlade/?del=${linckID}&user=${user.sub}`)
        .then((res) => {
          if (res.status === 200) {
            setOpenDeleteModal(false);
            setLinckUpdate(!linckUpdate);
            setSearchInput("");
            setTimeout(() => {
              setWasteUpdate(!wasteUpdate);
            }, 1000);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBladeHandler = () => {
    createDeletedBladeHandler();
  };

  useEffect(() => {
    if (confirmCreateDeletedBlade === 200) {
      deleteBladeCurrentBladeHandler();
      setConfirmCreateDeletedBlade();
    } else if (confirmCreateDeletedBlade === undefined) {
    } else {
      alert("Noe gikk galt");
    }
  }, [confirmCreateDeletedBlade]);

  // SERVICE
  const [retipBlades, setRetipBlades] = useState();
  useEffect(() => {
    api
      .get(`/api/linck/service/serviceblades?month=${wasteMonth}&month2=${wasteMonth2}`)
      .then(function (response) {
        setRetipBlades(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [wasteMonth, wasteUpdate]);

  const createServiceBladeHandler = () => {
    api
      .post(`/api/linck/service/createserviceBlade/?user=${user.sub}`, {
        type: getType,
        serial: getSerial,

        serviceDate: new Date(),
      })
      .then(function (response) {});
  };

  const retipUpdateHandler = () => {
    api
      .post(`/api/linck/service/updateretip/?ids=${linckID}&user=${user.sub}`, {
        type: getType,
        performer: "Stridsbergs",
        date: dateFormat(new Date(), "dd.mm.yyyy HH:MM"),
      })
      .then(function (res) {
        if (res.status === 200) {
          setOpenRetipModal(false);
          setLinckUpdate(!linckUpdate);
          setTimeout(() => {
            setSearchInput("");
            setSearchInput(getSerial);
            setWasteUpdate(!wasteUpdate);
          }, 1600);
          createServiceBladeHandler();
        }
      });
  };

  // COMMENT
  const [getCommentInput, setGetCommentInput] = useState();

  const commentUpdateHandler = () => {
    api
      .post(`/api/linck/comment/?ids=${linckID}&user=${user.sub}`, {
        comment: getCommentInput,
        commentDate: dateFormat(new Date(), "dd.mm.yyyy HH:MM"),
      })
      .then(function (res) {
        if (res.status === 200) {
          setOpenCommentModal(false);
          setLinckUpdate(!linckUpdate);
          setTimeout(() => {
            setSearchInput("");
            setSearchInput(getSerial);
            setWasteUpdate(!wasteUpdate);
          }, 1600);
        }
      });
  };

  return (
    <>
      {createDeletedBladeConfirm ? (
        <h4
          style={{
            position: "fixed",
            left: 0,
            bottom: 0,
            background: "seagreen",
            color: "white",
            zIndex: 100,
            padding: ".3rem",
            fontWeight: 100,
          }}
        >
          status: {createDeletedBladeConfirm.status}.{" "}
          {createDeletedBladeConfirm.headers.connection}, status text:
          {createDeletedBladeConfirm.statusText},{" "}
          {createDeletedBladeConfirm.status === 200
            ? "create deleted blade success."
            : "creating a deleted blade not succeed."}
        </h4>
      ) : null}
      {openDeleteModal && (
        <ModalComponentEdit
          title="Slette"
          cancel={setOpenDeleteModal}
          icon={<RiDeleteBin6Line style={{ color: "red", fontSize: "2rem" }} />}
          btnBorder="red"
          actionBtnTxt="SLETT"
          description="Slettingen er permanent og kan ikke reverseres."
          actionHover="#a34a4a60"
          getSerial={getSerial}
          actionBtn={deleteBladeHandler}
        />
      )}
      {openRetipModal && (
        <ModalComponentEdit
          title="Omlodding"
          cancel={setOpenRetipModal}
          icon={
            <GiRapidshareArrow
              style={{ color: "cornflowerblue", fontSize: "2.5rem" }}
            />
          }
          btnBorder="cornflowerblue"
          actionBtnTxt="OPPDATER"
          description="Legg til omlodding fra Stridsbergs med dagens dato."
          getSerial={getSerial}
          actionHover="blue"
          actionBtn={retipUpdateHandler}
        />
      )}
      {openCommentModal && (
        <ModalComponentEdit
          title="Legg til kommentar"
          actionBtnTxt="LEGG TIL"
          icon={
            <FaComments style={{ color: "seagreen", fontSize: "2.5rem" }} />
          }
          actionHover="green"
          commentInput={true}
          cancel={() => setOpenCommentModal(false)}
          setGetCommentInput={setGetCommentInput}
          actionBtn={commentUpdateHandler}
        />
      )}
      <div className="container">
        <div className="header-container">
          <HeaderStartPage />
        </div>
        <div className="image-container">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            className="input"
            placeholder="Search"
            value={searchInput}
          />
        </div>
        {searchInput && searchInput.length >= 2 && filteredBlades.length > 0 ? (
          <div className="blades-container">
            {filteredBlades &&
              filteredBlades.map((blade) => {
                return (
                  <div key={blade._id}>
                    <LinckCards
                      keyID={blade._id}
                      serial={blade.serial}
                      type={blade.type}
                      regDate={blade.registDate}
                      updated={blade.updated}
                      performer={blade.performer}
                      date={blade.date}
                      setOpenDeleteModal={setOpenDeleteModal}
                      setOpenRetipModal={setOpenRetipModal}
                      setOpenCommentModal={setOpenCommentModal}
                      setGetSerial={setGetSerial}
                      setLinckID={setLinckID}
                      setGetType={setGetType}
                      setGetNumberOfRetip={setGetNumberOfRetip}
                      wasteUpdate={wasteUpdate}
                      comment={blade.comment}
                      commentDate={blade.commentDate}
                    />
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="img-text-container">
            <h1 className="blades-header">Ingen søk eller treff</h1>
            <div className="bladesImg-container">
              <Image src={search} />
            </div>
            <div className="waste-container">
              <h5>
                Vrakede blad {namedMonth} {currentYear}
              </h5>
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
              <p className="waste-list">
                Antall: {deletedBlades && deletedBlades.length}
              </p>
              {deletedBlades &&
                deletedBlades.map((item) => {
                  return (
                    <>
                      <p key={item._id} className={`waste-list`}>
                        {item.serial}, {item.type}, Oml:{" "}
                        {item.wasteNumberOfRetip}, dato:{" "}
                        {dateFormat(item.wasteDate, "dd.mm.yyyy HH:MM")}
                      </p>
                    </>
                  );
                })}
              <h5 style={{ margin: "1rem 0" }}>
                Omloddede blad {namedMonth} {currentYear}
              </h5>
              <p className="waste-list">
                Antall: {retipBlades && retipBlades.length}
              </p>
              {retipBlades &&
                retipBlades.map((item) => {
                 
                  return (
                    <>
                      <p key={item._id} className="waste-list">
                        {item.serial}, {item.type},{" "}
                        {dateFormat(item.serviceDate, "dd.mm.yyyy HH:MM")}
                      </p>
                    </>
                  );
                })}
            </div>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .blades-container {
            display: flex;
            flex-direction: column;
            grid-area: bottom;
            max-width: 100vw;
          }

          .bladesImg-container {
            width: 50rem;
          }
          .blades-header {
            margin-bottom: 2rem;
          }
          .container {
            display: grid;
            grid-template-rows: 6rem 20rem 1fr;
            grid-template-areas:
              "top"
              "middle"
              "bottom";
            min-height: 100vh;
            max-width: 100vw;
          }
          .image-container {
            background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),
              url("https://images.unsplash.com/photo-1559006321-0edcc6981d06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1517&q=80");
            height: 20rem;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: grid;
            place-items: center;
            grid-area: middle;
          }
          .img-text-container {
            display: flex;
            flex-direction: column;
            width: auto;
            justify-content: center;
            align-items: center;
            position: relative;
            margin: 1rem;
          }
          .header-container {
            width: 100%;
            display: flex;
            justify-content: center;
            grid-area: top;
          }
          .input {
            height: 3rem;
            width: 20rem;
            border-radius: 10px;
            border: none;
            font-size: 2rem;
            padding: 0.5rem;
            font-weight: 100;
            outline: none;
          }
          .waste-container {
            position: absolute;
            top: 0;
            left: 0;
          }
          .waste-list {
            color: grey;
            font-style: italic;
            font-size: 0.8rem;
            color: ${wasteListColor};
          }
          @media (max-width: 1400px) {
            .container {
              grid-template-rows: 6rem 12rem 1fr;
            }
            .bladesImg-container {
              width: 30rem;
            }
            .image-container {
              height: 10rem;
            }
          }
          @media (max-width: 1150px) {
            .container {
              grid-template-rows: 6rem 12rem 1fr;
            }
            .bladesImg-container {
              width: 40rem;
            }
            .image-container {
              height: 10rem;
            }
            .img-text-container {
              margin: 0rem;
            }
            .waste-container {
              position: relative;
              top: 0;
              left: 0;
            }
          }
          @media (max-width: 850px) {
            .bladesImg-container {
              width: 100vw;
            }
            .blades-container {
              margin-bottom: 0;
            }
            .container {
              grid-template-rows: 6rem 10rem 1fr;
            }
            .image-container {
            }
          }
        `}
      </style>
    </>
  );
};

export default Lincksearch;
