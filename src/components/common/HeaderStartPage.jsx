import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { IoMenuSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";

const HeaderComponent = ({ color, editHeader }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
  const openSidebarHandler = () => {
    setHideSidebar(true);
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <div className="container">
        <div className="tabContainer">
          {isMobile ? (
            <>
              <IoMenuSharp
                onClick={openSidebarHandler}
                className="drawerIcon"
                style={{ fontSize: "2rem", color: "grey" }}
              />
              {hideSidebar && (
                <div
                  className={`sidebar-container ${
                    openSidebar ? "sidebar-open" : "sidebar-close"
                  }`}
                >
                  <Link href="/">
                    <p className="tabs-mobile">Hjem</p>
                  </Link>
                  {editHeader && (
                    <Link href="/edit/edit">
                      <p className="tabs-mobile">Rediger</p>
                    </Link>
                  )}
                  <Link href="/lincksearch">
                    <p className="tabs-mobile">Søk i linckblad</p>
                  </Link>
                  <Link href="/oversikt/startpage">
                    <p className="tabs-mobile">Oversikt.</p>
                  </Link>
                  <Link href="/addblades">
                    <p className="tabs-mobile">Nye blad</p>
                  </Link>

                  <LoginButton />
                </div>
              )}
              {openSidebar && (
                <div
                  onClick={openSidebarHandler}
                  style={{
                    background: "rgba(256,256,256,.0)",
                    height: "100vh",
                    width: "100vw",
                    position: "absolute",
                    top: "0",
                    left: "0",
                  }}
                ></div>
              )}
            </>
          ) : (
            <>
              <Link href="/">
                <p className="tabs">Hjem</p>
              </Link>
              {editHeader && (
                <Link href="/edit/edit">
                  <p className="tabs">Rediger.</p>
                </Link>
              )}
              <Link href="/lincksearch">
                <p className="tabs">Søk i linckblad</p>
              </Link>
              <Link href="/addblades">
                <p className="tabs">Nye Blad</p>
              </Link>
              <Link href="/oversikt/startpage">
                <p className="tabs">Oversikt</p>
              </Link>
             

              <LoginButton />
              <LogoutButton />
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .container {
          height: 6rem;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5rem;
          width: 55rem;
          z-index: 1000;
        }

        .sidebar-container {
          position: absolute;
          background-color: #353535;
          left: 0;
          width: 13rem;
          height: 100vh;
          top: 0;
          padding-left: 1rem;
          padding-top: 2rem;
          left: -10rem;
          z-index: 100;
        }
        .sidebar-open {
          animation: slide 0.3s forwards;
        }
        .sidebar-close {
          animation: slideClose 0.5s forwards;
        }
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(10rem);
          }
        }
        @keyframes slideClose {
          0% {
            transform: translateX(10rem);
          }
          100% {
            transform: translateX(-10rem);
          }
        }
        .tabs {
          text-transform: uppercase;
          transition: 0.5s;
          color: ${color};
          font-size: 1rem;
          font-weight: 100;
        }
        .tabs-mobile {
          text-transform: uppercase;
          margin-bottom: 1rem;
          color: white;
          font-size: 1rem;
          font-weight: 100;
        }
        .tabs:hover {
          cursor: pointer;
          color: #747474;
        }
        .tabContainer {
          width: 45rem;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        @media screen and (max-width: 1000px) {
          .container {
            padding: 0 1rem;

            width: 100vw;
          }
          .tabContainer {
            justify-content: flex-end;
          }
          .tabContainer {
            width: 30rem;
          }
        }
        @media screen and (max-width: 650px) {
          .logoContainer {
            width: 20rem;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderComponent;
