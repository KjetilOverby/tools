import React from "react";
import Image from "next/image";



const BoltCard = ({ img, type, antallImaskin }) => {
  return (
    <>
      <div className="container">
        <div>
          <h4 className="header">Bolter/skruer</h4>
          <div className="img-text-container">
            <div className="img-container">
              <Image src={img} />
            </div>
            <div>
              <p>Type: {type}</p>
              <p>Antall i maskin: {antallImaskin}</p>
            </div>
          </div>
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

export default BoltCard;
