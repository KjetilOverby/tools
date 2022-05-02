import React from "react";
import { FaRegCopyright } from "react-icons/fa";

const LoginText = () => {
  return (
    <>
      <div className="container">
        <p>
          Innlogged som Moelven Sliperi *{" "}
          <FaRegCopyright style={{ fontSize: ".8rem" }} /> copyright 2022
        </p>
      </div>
      <style jsx>
        {`
          .container {
            position: absolute;
            bottom: 0;
            left: 0;
            color: grey;
            animation: move 3s forwards;
            -webkit-animation-timing-function: linear;
            margin-left: 1rem;
          }
          @keyframes move {
            0% {
              transform: translateX(-30rem);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default LoginText;
