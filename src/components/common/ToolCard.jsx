import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";
import Image from "next/image";

const ToolCard = ({
  title,
  img,
  antallImaskin,
  type,
  antallTenner,
  maskin,
  dim,
  totalt,
  ID,
  imgUrl,
  toolType,
  btnTitle,
  vrak,
}) => {
  const { setOpenModal, setGetAntall, setGetImgUrl, setGetID, setType } =
    useContext(MyContext);
  const openModal = () => {
    setGetID(ID);
    setGetAntall(totalt);
    setGetImgUrl(imgUrl);
    setType(toolType);
    setOpenModal(true);
  };
  return (
    <>
      <div className="container">
        <div>
          <h4 className="header">{title}</h4>
          <div className="img-text-container">
            <div className="img-container">
              <Image src={img} />
            </div>

            <div>
              <p className="antall">Antall totalt: {totalt}</p>
              <p>Type: {type}</p>
              <p>Dim: {dim}</p>
              {antallTenner && <p>Antall tenner: {antallTenner}</p>}
              <p>Antall i maskin: {antallImaskin}</p>
              <p>Maskin: {maskin}</p>
              {vrak && <p className="vrak">Antall vraket i år: {vrak}</p>}
              {/* <p className="nye">Antall nye i år: 20</p> */}
            </div>
          </div>
          <h5 className="btn" onClick={openModal}>
            {btnTitle}
          </h5>
        </div>
        <div></div>
      </div>

      <style jsx>
        {`
          .container {
            display: flex;
            margin-bottom: 4rem;
            min-width: 30rem;
          }
          .btn {
            margin-top: 0.5rem;
          }
          .btn:hover {
            cursor: pointer;
          }
          .header {
            margin: 1rem 0;
            font-size: 1.2rem;
          }
          .img-container {
            width: 15rem;
            margin-right: 1rem;
            border-radius: 15px;
            overflow: hidden;
            height: 11rem;
          }
          .img-text-container {
            display: flex;
          }
          .antall {
            color: #0a50a0;
          }
          .vrak {
            color: red;
          }
          .nye {
            color: #218d57;
          }
          @media screen and (max-width: 756px) {
            .container {
              min-width: 10rem;
            }
            .img-text-container {
              flex-direction: column;
            }
            .img-container {
              width: 100%;
              height: auto;
            }
          }
        `}
      </style>
    </>
  );
};

export default ToolCard;
