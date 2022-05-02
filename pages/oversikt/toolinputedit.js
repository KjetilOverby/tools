import React, { useContext, useEffect, useState } from "react";
import ToolInputCard from "../../src/components/oversikt/ToolInputCard";
import { MyContext } from "../../src/contexts/MyContext";
import HeaderStartPage from "../../src/components/common/HeaderStartPage";
import ToolOptions from "../../src/components/common/ToolOptions";
import HeaderComponent from "../../src/components/common/HeaderStartPage";
import ModalComponentEdit from "../../src/components/common/ModalComponentEdit";
const axios = require("axios");
import { useAuth0 } from "@auth0/auth0-react";

const Toolinputedit = () => {
  const { user, isAuthenticated } = useAuth0();
  const { toolwasteData, toolCreateData, setUpdate, setUserID } =
    useContext(MyContext);

  const [typeList, setTypeList] = useState();
  const [type, setType] = useState();
  const [optionValue, setOptionValue] = useState("a");
  const [waste, setWaste] = useState(true);
  const [openModal, setOpenModal] = useState();
  const [getID, setGetID] = useState();
  const [tools, setTools] = useState();
  const [toolID, setToolID] = useState();

  const [toolType, setToolType] = useState("");

  const [getToolNumber, setGetToolNumber] = useState();
  const [addDeleteAndSum, setAddDeleteAndSum] = useState();
  const [antallSlett, setAntallSlett] = useState();

  const [delay, setDelay] = useState(false);

  const api = axios.create({
    baseURL: process.env.api,
  });
  useEffect(() => {
    setUserID(user);
  });

  useEffect(() => {
    setToolType(type);
    setDelay(!delay);
  }, [getID]);

  useEffect(() => {
    if (tools) {
      setTimeout(() => {
        setGetToolNumber(tools.map((item) => item.antall));
        setToolID(tools.map((item) => item._id));
      }, 1000);
    }
  }, [tools, delay]);

  useEffect(() => {
    setAddDeleteAndSum(Number(getToolNumber) + Number(antallSlett));
  }, [getToolNumber]);

  useEffect(() => {
    if (toolwasteData) {
      setTypeList(toolwasteData.filter((item) => item.type === optionValue));
    }
  }, [toolwasteData, optionValue]);

  useEffect(() => {
    api
      .get(`/api/tool/toolRegistType?tooltype=${toolType}`)
      .then(function (response) {
        setTools(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [getID, delay]);

  const handleChange = (e) => {
    setOptionValue(e.target.value);
  };
  const setBackNumberTools = () => {
    api
      .patch(`/api/tool/editToolNew?user=${user.sub}&ids=${toolID}`, {
        antallSum: addDeleteAndSum,
      })
      .then((res) => {
        if (res.status === 200) {
          setUpdate(Math.random());
        }
        console.log(res.status);
      });
  };

  const deleteToolWasteCardHandler = () => {
    try {
      api
        .delete(`/api/tool/deleteToolCards/?del=${getID}&user=${user.sub}`)
        .then((res) => {
          if (res.status === 200) {
            setOpenModal(false);
            setUpdate(Math.random());
            setTimeout(() => {
              setBackNumberTools();
            }, 200);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(addDeleteAndSum);
  console.log(getID);
  console.log(toolID);

  return (
    <>
      {openModal && (
        <ModalComponentEdit
          title={`Slette ${type}`}
          description="Sletting kan ikke angres."
          cancel={setOpenModal}
          actionBtnTxt="SLETT"
          btnBorder="red"
          actionBtn={deleteToolWasteCardHandler}
        />
      )}
      <div className="header-container">
        <HeaderComponent editHeader={true} />
      </div>
      <div className="image-container">
        <h1 className="image-header">Rediger Data</h1>
      </div>
      <div>
        <button onClick={() => setWaste(!waste)}>
          {waste ? "Nye" : "vrak"}
        </button>
      </div>
      <div className="container">
        <h1>{waste ? "Vraket" : "Nye"}</h1>
        <ToolOptions handleChange={handleChange} />
        {waste ? (
          <div className="card-container">
            {optionValue !== "a"
              ? typeList.map((item) => {
                  const openModalHandle = () => {
                    setTimeout(() => {
                      setOpenModal(true);
                    }, 800);
                    setType(item.type);
                    setGetID(item._id);
                    setAntallSlett(Math.abs(item.input));
                  };
                  return (
                    <ToolInputCard
                      type={item.type}
                      antall={item.antall}
                      inputText="Antall slettet"
                      input={item.input}
                      date={item.date}
                      img={item.img}
                      color="linear-gradient(to top, #09203f 0%, #537895 100%);"
                      key={item._id}
                      delBtn={openModalHandle}
                    />
                  );
                })
              : optionValue === "a" &&
                toolwasteData &&
                toolwasteData.map((item) => {
                  const openModalHandle = () => {
                    setTimeout(() => {
                      setOpenModal(true);
                    }, 800);
                    setType(item.type);
                    setGetID(item._id);
                    setAntallSlett(Math.abs(item.input));
                  };
                  return (
                    <ToolInputCard
                      type={item.type}
                      antall={item.antall}
                      inputText="Antall slettet"
                      input={item.input}
                      date={item.date}
                      img={item.img}
                      color="linear-gradient(to top, #09203f 0%, #537895 100%);"
                      key={item._id}
                      delBtn={openModalHandle}
                    />
                  );
                })}
          </div>
        ) : (
          <div className="card-container">
            {optionValue !== "a"
              ? typeList.map((item) => {
                  const openModalHandle = () => {
                    setTimeout(() => {
                      setOpenModal(true);
                    }, 800);
                    setType(item.type);
                    setGetID(item._id);
                    setAntallSlett(Math.abs(item.input));
                  };
                  return (
                    <ToolInputCard
                      type={item.type}
                      antall={item.antall}
                      inputText="Antall nye"
                      input={item.input}
                      date={item.date}
                      img={item.img}
                      color="linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);"
                      key={item._id}
                      delBtn={openModalHandle}
                    />
                  );
                })
              : optionValue === "a" &&
                toolCreateData &&
                toolCreateData.map((item) => {
                  const openModalHandle = () => {
                    setTimeout(() => {
                      setOpenModal(true);
                    }, 800);
                    setType(item.type);
                    setGetID(item._id);
                    setAntallSlett(Math.abs(item.input));
                  };
                  return (
                    <ToolInputCard
                      type={item.type}
                      antall={item.antall}
                      inputText="Antall nye"
                      input={item.input}
                      date={item.date}
                      img={item.img}
                      color="linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);"
                      key={item._id}
                      delBtn={openModalHandle}
                    />
                  );
                })}
          </div>
        )}
      </div>
      <style jsx>
        {`
          .card-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
          }
          .header-container {
            width: 100%;
            display: flex;
            justify-content: center;
            grid-area: top;
          }
          .image-container {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url("https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
            height: 20rem;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: grid;
            place-items: center;
            grid-area: middle;
          }
          .image-header {
            color: white;
            font-size: 3rem;
          }

          .container {
            display: grid;
            grid-template-columns: 1fr;
            margin: 2rem 2rem;
          }
          @media (max-width: 2100px) {
            .container {
              margin: 2rem 3rem;
            }
          }
          @media (max-width: 1800px) {
            .container {
              margin: 2rem 15rem;
            }
          }
          @media (max-width: 1500px) {
            .container {
              margin: 2rem 5rem;
            }
          }
          @media (max-width: 1142px) {
            .container {
              margin: 2rem 5rem;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr;
            }
          }
          @media (max-width: 1000px) {
            .image-container {
              height: 10rem;
            }
          }
          @media (max-width: 800px) {
            .container {
              margin: 2rem 0.5rem;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr;
            }
          }
        `}
      </style>
    </>
  );
};

export default Toolinputedit;
