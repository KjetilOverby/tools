import React, { useState, useEffect, useContext } from "react";
const axios = require("axios");
import { MyContext } from "../../src/contexts/MyContext";

import { useAuth0 } from "@auth0/auth0-react";
import HeaderComponent from "../../src/components/common/HeaderStartPage";

const Edit_types_tools = () => {
  const { user, isAuthenticated } = useAuth0();
  const [tools, setTools] = useState();
  const [getID, setGetID] = useState();
  const [type, setType] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [openModal, setOpenModal] = useState(false);

  const { setUpdate, update, antallInputSum, setAntallInputSum, setUserID } =
    useContext(MyContext);
  const api = axios.create({
    baseURL: process.env.api,
  });

  useEffect(() => {
    setUserID(user);
  });

  useEffect(() => {
    api
      .get("/api/tool/getToolregist")
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
  }, [update]);

  const editToolNumberHandler = () => {
    api
      .patch(`/api/tool/editTool?user=${user.sub}&ids=${getID}`, {
        antallSum: antallInputSum,
      })
      .then((res) => {
        if (res.status === 200) {
          setUpdate(Math.random());
        }
        console.log(res.status);
      });
    setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <div className="modal-container">
          <div>
            <h3 style={{ fontWeight: "100" }}>{type}</h3>
            <img style={{ width: "100%" }} src={imgUrl} />
          </div>

          <div>
            <p>Sett inn nytt antall.</p>
            <input onChange={(e) => setAntallInputSum(e.target.value)} />
            <button onClick={editToolNumberHandler}>Submit</button>
          </div>
          <button onClick={() => setOpenModal(false)}>Avbryt</button>
        </div>
      )}
      <div className="header-container">
        <HeaderComponent editHeader={true} />
      </div>
      <div className="image-container">
        <h1 className="image-header">Rediger antall</h1>
      </div>
      <div className="container">
        {tools &&
          tools.map((item) => {
            const openModalHandler = () => {
              setImgUrl(item.img);
              setType(item.type);
              setGetID(item._id);
              setOpenModal(true);
            };
            return (
              <div key={item._id}>
                <div className="tool-container">
                  <div className="img-container">
                    <img className="img" src={item.img} />
                  </div>
                  <div>
                    <h4>{item.type}</h4>
                    <p>antall: {item.antall}</p>
                    {user && user.sub === process.env.USER_SUB && (
                      <button onClick={openModalHandler}>Rediger antall</button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
            place-items: center;
          }
          .header-container {
            width: 100%;
            display: flex;
            justify-content: center;
            grid-area: top;
          }
          .image-container {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url("https://images.unsplash.com/photo-1569950044272-e04b4b26300a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80");
            height: 20rem;
            background-position: 40%;
            background-repeat: no-repeat;
            background-size: cover;
            display: grid;
            place-items: center;
            grid-area: middle;
          }
          .image-header {
            font-size: 4rem;
            color: white;
            font-weight: 100;
          }
          .img {
            width: 100%;
            border-radius: 10px;
          }
          .img-container {
            width: 14rem;
          }
          .modal-container {
            background: linear-gradient(#2c3e50, #bdc3c7);
            width: 20rem;
            padding: 2rem;
            position: fixed;
            top: 0;
            left: 0;
            border-bottom-right-radius: 10px;
            color: #fff;
          }
          .tool-container {
            display: grid;
            border: 1px solid #c4c4c4;
            margin: 1rem;
            padding: 0.2rem;
            width: 18rem;
            height: 20rem;
            place-items: center;
            padding: 0.5rem;
            border-radius: 10px;
            box-shadow: 5px 5px 10px #e0e0e0;
            background: linear-gradient(#2c3e50, #bdc3c7);
          }
          @media (max-width: 1000px) {
            .image-container {
              height: 10rem;
            }
          }
          @media (max-width: 756px) {
            .tool-container {
              width: 20rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Edit_types_tools;

// background: linear-gradient(#536976, #bbd2c5);
