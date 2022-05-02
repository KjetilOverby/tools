import React from "react";
import HeaderComponent from "../common/HeaderStartPage";

const StartPage2 = () => {
  return (
    <>
      <div className="container">
        <HeaderComponent />
      </div>
      <div className="content-container"></div>
      <style jsx>
        {`
          .container {
          }
          .content-container {
            background: linear-gradient(
                rgba(22, 29, 26, 0.9),
                rgba(0, 0, 0, 0.5)
              ),
              url("https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80");
            min-height: 100vh;
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
    </>
  );
};

export default StartPage2;
