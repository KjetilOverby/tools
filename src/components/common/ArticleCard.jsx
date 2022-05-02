import React from "react";
import Link from "next/link";
import Colors from "../../../config/Colors";

const ArticleCard = ({ img, header, text, link }) => {
  return (
    <>
      <div className="container">
        <h3 className="header">{header}</h3>
        <p className="text">{text}</p>

        <img className="image" src={img} alt="" />
        <Link href={`${link}`}>
          <button className="btn">Se mer</button>
        </Link>
      </div>

      <style jsx>
        {`
          .container {
            width: 20rem;
            display: grid;
            grid-template-rows: 6rem 2rem 14rem 1fr;
            margin-bottom: 5rem;
            place-items: center;
          }
          .btn {
            padding: 1rem;
            background: transparent;
            border: 1px solid ${Colors.textColor};
            color: ${Colors.textColor};
            border-radius: 5px;
            transition: background 0.5s;
            width: 100%;
          }
          .btn:hover {
            background: #ebebeb;
            cursor: pointer;
          }
          .header {
            color: ${Colors.textColor};
          }
          .image {
            filter: grayscale(50%);
            width: 55%;
          }
          .text {
            text-align: center;
            color: ${Colors.textColor};
          }
          @media screen and (max-width: 1000px) {
            .container {
            }
          }
        `}
      </style>
    </>
  );
};

export default ArticleCard;
