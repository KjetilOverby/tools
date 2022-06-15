import React from "react";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
import ButtonComponent from "./ButtonComponent";
import HeaderStartPage from "../../components/common/HeaderStartPage";
import ArticleCard from "../common/ArticleCard";
import Link from "next/link";
import kniv from "../../../assets/startpage/kniv.jpeg";
import linckblad from "../../../assets/startpage/linckblad.jpeg";
import segment from "../../../assets/startpage/segmentT.png";
import trimmerBlade from "../../../assets/startpage/trimmerBlade.png";

const StartPage = () => {
  return (
    <>
      <div className="image-container">
        <div className="container">
          <div className="menu-header">
            <HeaderStartPage color="dodgerblue" />
          </div>
          <div className="header-container">
            <h1 className="header">Verktøyregister</h1>
            <div className="text-container">
              <p className="text">
                Registrering av sagblader, kniver og segmenter.
              </p>
            </div>
            <Link href="/lincksearch">
              <button className="btn-search">Søk i Linckblad</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="page-container">
        <div className="btn-container">
          <ButtonComponent
            link="/lincksawblades"
            header="Linck sagblad"
            img={
              "https://www.leuco.com/EN/US/media/PIC_PRO_KSN_80337192_ING.jpg"
            }
            image={linckblad}
          />
          <ButtonComponent
            link="/segmenter"
            header="Segmenter"
            img={
              "https://lh3.googleusercontent.com/pw/AM-JKLV4wxsxB2iKcCPzRSmNtDmWTNoHJF_26durwkNx-58zgjbnVN-tIfh3uw10VHfprS7hGqMcTPrUWSVF-YmQI2QbIwf5pUZAFEkSXbmnyrCUbRtWwnDfmyDuAf2AHZjU9dSQjcXbs7OtOnhsB51Gr791=w536-h438-no?authuser=0"
            }
            image={segment}
          />
          <ButtonComponent
            link="/kniver"
            header="Kniver"
            img={
              "https://shop.leuco.com/medias/?context=bWFzdGVyfHRlYW1jZW50ZXJJbXBvcnR8NDUyOXxpbWFnZS9qcGVnfGg4NC9oMDUvODg3Nzg3MzkyMjA3OHw1OGY1N2E4MmVkODg1M2E4MjljMTBkMDNiMTlkMmY0NjY5OWViMzg1NGEyYWQ3MTRjN2E1MDkwOWUyZDY4OWQ5"
            }
            image={kniv}
          />
          <ButtonComponent
            link="/sagblad"
            header="Trimmerblad"
            img={
              "https://5.imimg.com/data5/FL/UZ/ZT/SELLER-1201415/tct-circular-saw-blades-500x500.jpg"
            }
            image={trimmerBlade}
          />
        </div>
        <div className="section-container">
          <ArticleCard
            header="Statistikk omlodding"
            img="https://static.spreadsheetweb.com/ssweb/wp-content/uploads/2019/04/pie-chart-excel-1080x675.jpg"
            text="Statistikk på omlodding av blader som er i bruk. Man kan også se omloddingsstatistikk av blader som har blitt vraket."
            link="/omlodding"
          />
          <ArticleCard
            header="Rediger data"
            img="https://www.gimp.org/images/frontpage/200px-Scribus_logo.svg.png"
            text="Hvis feil data har blitt lagt inn så er det på noen steder mulighet for å rette opp."
            link="/edit/edit"
          />
          <ArticleCard
            header="Utgifter verktøyhold"
            img="https://image.freepik.com/free-vector/global-economy_24877-49255.jpg"
            text="Se utgifter på omlodding av sagblader og kostnader på innkjøp av nytt verktøy"
            link="/utgifter"
          />
        </div>
      </div>

      <style jsx>
        {`
          .btn-search {
            background: #154c50;
            padding: 1rem;
            width: 10rem;
            margin-top: 2rem;
            color: #fff;
            border: none;
            transition: background 0.5s;
          }
          .btn-search:hover {
            cursor: pointer;
            background: #0d3033;
          }
          .container {
            padding-top: 2rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }
          .image-container {
            background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)),
              url("https://images.unsplash.com/photo-1589691962030-8d2b7f2a1ffe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
            background-size: cover;
            height: 30rem;
            background-position: center;
          }
          .btn-container {
            display: flex;
            flex-direction: column;
            width: 50rem;
          }
          .header {
            color: #388f92;
            margin: 3rem 0 0 0;
            font-weight: 100;
            font-size: 4rem;
          }
          .header-container {
            display: grid;
            place-items: center;
            width: 45rem;
            color: white;
            text-align: center;
          }
          .menu-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 50rem;
          }
          .page-container {
            margin: 8rem 15rem;
            display: grid;
            grid-template-rows: auto 6rem auto;
            grid-template-areas:
              "btn"
              "."
              "section";
          }
          .btn-container {
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
            grid-area: btn;
          }
          .section-container {
            grid-area: section;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .tab {
            color: #9c9c9c;
            text-transform: uppercase;
          }
          .tab:hover {
            cursor: pointer;
          }
          .text {
            font-size: 0.9rem;
            font-weight: 100;
            color: #388f92;
          }

          @media (max-width: 2100px) {
            .image-container {
              height: 30rem;
            }
            .page-container {
              grid-template-rows: auto 4rem auto;
              margin: 8rem 10rem;
            }
          }
          @media (max-width: 1800px) {
            .page-container {
              margin: 8rem 5rem;
            }
          }
          @media (max-width: 1500px) {
            .header {
              margin: 0 0 1rem 0;
            }
            .page-container {
              margin: 8rem 0.5rem;
            }
          }
          @media (max-width: 1000px) {
            .container {
              padding-top: 0;
            }
            .menu-header {
              width: 100%;
            }
            .header {
              margin: 0 0 1rem 0;
            }
            .image-container {
              height: 22rem;
            }
            .header-container {
              width: 100%;
            }
          }
          @media (max-width: 850px) {
            .btn-container {
              width: 100%;
            }
            .header {
              font-size: 2rem;
            }
            .header-container {
              margin-top: -2rem;
            }
            .page-container {
              margin: 2rem 0rem;
            }
            .text-container {
              width: 60%;
            }
          }
        `}
      </style>
    </>
  );
};

export default StartPage;

// https://images.unsplash.com/photo-1560090535-922ec7b32bb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80
