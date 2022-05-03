import React, { useEffect, useState } from "react";
import HeaderComponent from "../src/components/common/HeaderStartPage";
import PieChartsWaste from "../src/components/omloddinger/PieChartsWaste";
const axios = require("axios");
import Colors from "../config/Colors";
import CalendarPicker from "../src/components/common/CalendarPicker";
import ChartRetip from "../src/components/omloddinger/ChartRetip";

const api = axios.create({
  baseURL: process.env.api,
});


const Omlodding = () => {
  const [deletedBlades, setDeletedBlades] = useState();
  const [getTypeRetip, setGetTypeRetip] = useState('Kanefusa 2.2-3.6');


  
  const currentYear = new Date().getFullYear();
  const firstDate = 1;
  const lastDate = 12;
  
  const [yearRequest, setYearRequest] = useState(new Date().getFullYear());
  const [monthRequest, setMonthRequest] = useState(new Date().getMonth() + 1);
  const [monthRequest2, setMonthRequest2] = useState(new Date().getMonth() + 1);
  const [update, setUpdate] = useState(false);
  
  const [zero, setZero] = useState("");
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [more, setMore] = useState("");
  const [zeroS, setZeroS] = useState("");
  const [oneS, setOneS] = useState("");
  const [twoS, setTwoS] = useState("");
  const [threeS, setThreeS] = useState("");
  const [fourS, setFourS] = useState("");
  const [moreS, setMoreS] = useState("");
  
  useEffect(() => {
    setTimeout(() => {
      setUpdate(!update);
    }, 2200);
  }, []);
  
  const [allBladesRetip, setAllBladesRetip] = useState();
   const [bladeTypeFilter, setBladeTypeFilter] = useState()
useEffect(() => {
if(allBladesRetip) {
 setBladeTypeFilter(allBladesRetip.filter(item => item.type === getTypeRetip))
 
}
}, [allBladesRetip, getTypeRetip])




useEffect(() => {
  if (bladeTypeFilter) {
    setZeroS(bladeTypeFilter.filter((item) => item.performer.length == "0"));
    setOneS(bladeTypeFilter.filter((item) => item.performer.length == "1"));
    setTwoS(bladeTypeFilter.filter((item) => item.performer.length == "2"));
    setThreeS(bladeTypeFilter.filter((item) => item.performer.length == "3"));
    setFourS(bladeTypeFilter.filter((item) => item.performer.length == "4"));
    setMoreS(bladeTypeFilter.filter((item) => item.performer.length > 4));
  }
}, [bladeTypeFilter]);

  useEffect(() => {
    api
      .get(`/api/linck/linckblades`)
      .then(function (response) {
        setAllBladesRetip(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  const [zeroA, setZeroA] = useState();
  const [oneA, setOneA] = useState();
  const [twoA, setTwoA] = useState();
  const [threeA, setThreeA] = useState();
  const [fourA, setFourA] = useState();
  const [moreA, setMoreA] = useState();
  useEffect(() => {
    if (allBladesRetip) {
      setZeroA(allBladesRetip.filter((item) => item.performer.length == "0"));
      setOneA(allBladesRetip.filter((item) => item.performer.length == "1"));
      setTwoA(allBladesRetip.filter((item) => item.performer.length == "2"));
      setThreeA(allBladesRetip.filter((item) => item.performer.length == "3"));
      setFourA(allBladesRetip.filter((item) => item.performer.length == "4"));
      setMoreA(allBladesRetip.filter((item) => item.performer.length > 4));
    }
  }, [allBladesRetip]);

  const [updateCalc, setUpdateCalc] = useState(false)

  useEffect(() => {
    api
      .get(
        `/api/linck/deletedBlades?month=${monthRequest}&month2=${monthRequest2}&yearRequest=${yearRequest}`
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
      setTimeout(() => {
        setUpdateCalc(!updateCalc)
      }, 1000);
  }, [monthRequest, yearRequest]);

  useEffect(() => {
    if (deletedBlades) {
      setZero(deletedBlades.filter((item) => item.wasteNumberOfRetip === "0"));
      setOne(deletedBlades.filter((item) => item.wasteNumberOfRetip === "1"));
      setTwo(deletedBlades.filter((item) => item.wasteNumberOfRetip === "2"));
      setThree(deletedBlades.filter((item) => item.wasteNumberOfRetip === "3"));
      setFour(deletedBlades.filter((item) => item.wasteNumberOfRetip === "4"));
      setMore(deletedBlades.filter((item) => item.wasteNumberOfRetip > 4));
    }
  }, [update]);

  const zeroM = zero.length / 4;
  const oneM = one.length / 3;
  const twoM = two.length / 2;
  const threeM = three.length;
  const fourM = four.length;
  const moreM = more.length;

  const [retipCount, setRetipCount] = useState();
  const [percentage, setPercentage] = useState();

  const [allBlades, setAllblades] = useState()
  
  useEffect(() => {
  setTimeout(() => {
    setUpdateCalc(!updateCalc)
  }, 1000);
  
  }, [allBlades]);
  useEffect(() => {
    if (deletedBlades) {
      setAllblades(deletedBlades.length)
      setRetipCount(zeroM + oneM + twoM + threeM + fourM + moreM);
      setUpdate(!update)
    }
  }, [updateCalc]);
  
  useEffect(() => {
    setPercentage((retipCount / allBlades) * 100);
   
  }, [update]);



 

  return (
    <>
      <div className="container">
        <div className="header-container">
          <HeaderComponent />
        </div>
        <div className="image-container">
          <h1 className="image-header">Omlodding</h1>
        </div>
        <div className="content-container">
          <div className="date-picker-container">
            <CalendarPicker
              month={monthRequest}
              year={yearRequest}
              setMonthRequest={setMonthRequest}
              setMonthRequest2={setMonthRequest2}
              monthRequest={monthRequest}
              monthRequest2={monthRequest2}
              setYearRequest={setYearRequest}
              setUpdate={setUpdate}
              update={update}
            />
          </div>

          <div className="main-chart-container">
            <div className="chart-container">
              <div className="text-container">
                <h3 className="header mb">
                  Omlodding vrakede blad (
                  {deletedBlades && deletedBlades.length})
                </h3>
                <p className="text text-box">
                  Her ser man statistikk på hvor mange omloddinger som var gjort
                  når sagbladet ble vraket. Et sagblad som har blitt omloddet 3
                  eller fler ganger får 100% score. Under det gir det gradvis
                  dårligere score.
                </p>
                <h3 className="text">
                  Sagbladutnyttelse: {percentage && percentage.toFixed()}%
                </h3>
              </div>
              <div className="piechart-waste-container">
                <PieChartsWaste
                  zero={zero.length}
                  one={one.length}
                  two={two.length}
                  three={three.length}
                  four={four.length}
                  more={more.length}
                  color1={Colors.zero}
                  color2={Colors.one}
                  color3={Colors.two}
                  color4={Colors.three}
                  color5={Colors.four}
                  color6={Colors.more}
                />
                <div className="description-container">
                  <div className="box-description-container">
                    <p className="number">{zero.length}</p>
                    <div className="color-box box1"></div>
                    <p className="waste-description">Nye blad</p>
                  </div>
                  <div className="box-description-container">
                    <p className="number">{one.length}</p>
                    <div className="color-box box2"></div>
                    <p className="waste-description">1 omlodding</p>
                  </div>
                  <div className="box-description-container">
                    <p className="number">{two.length}</p>
                    <div className="color-box box3"></div>
                    <p className="waste-description">2 omloddinger</p>
                  </div>
                  <div className="box-description-container">
                    <p className="number">{three.length}</p>
                    <div className="color-box box4"></div>
                    <p className="waste-description">3 omloddinger</p>
                  </div>
                  <div className="box-description-container">
                    <p className="number">{four.length}</p>
                    <div className="color-box box5"></div>
                    <p className="waste-description">4 omloddinger</p>
                  </div>
                  <div className="box-description-container">
                    <p className="number">{more.length}</p>
                    <div className="color-box box6"></div>
                    <p className="waste-description">5 eller fler</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ChartRetip
                allBladesRetip={allBladesRetip}
                zeroA={zeroA && zeroA.length}
                oneA={oneA && oneA.length}
                twoA={twoA && twoA.length}
                threeA={threeA && threeA.length}
                fourA={fourA && fourA.length}
                moreA={moreA && moreA.length}
                title="Omloddinger på alle blad i bruk"
                text="Her er oversikt over hvor mange omloddinger som er gjort på alle blad. Her kan man få en indikasjon på hvor mange blader som snart skal vrakes."
              />
            </div>
            <div>
              <ChartRetip
                deletedBlades={deletedBlades}
                title="Omloddinger på individuelle blad"
                text={`Her ser du omloddinger på ${getTypeRetip}. Velg nedenfor hvilken bladtype du vil se.`}
                allBladesRetip={bladeTypeFilter}
                zeroA={zeroS && zeroS.length}
                oneA={oneS && oneS.length}
                twoA={twoS && twoS.length}
                threeA={threeS && threeS.length}
                fourA={fourS && fourS.length}
                moreA={moreS && moreS.length}
                input={true}
                getTypeInput={setGetTypeRetip}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .color-box {
            height: 1rem;
            width: 1rem;
          }
          .box1 {
            background: ${Colors.zero};
          }
          .box2 {
            background: ${Colors.one};
          }
          .box3 {
            background: ${Colors.two};
          }
          .box4 {
            background: ${Colors.three};
          }
          .box5 {
            background: ${Colors.four};
          }
          .box6 {
            background: ${Colors.more};
          }
          .box-description-container {
            display: flex;
            align-items: center;
            width: 10rem;
          }
          .chart-container {
            display: grid;
            place-items: center;
            width: 28rem;
          }
          .container {
          }
          .content-container {
            margin: 2rem 25rem;
          }
          .date-picker-container {
            margin-bottom: 5rem;
          }

          .header {
            color: ${Colors.textColor};
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
          .main-chart-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 4rem;
          }
          .number {
            width: 2rem;
          }
          .piechart-waste-container {
            display: grid;
            grid-template-columns: 14rem 1fr;
            width: 25rem;
            place-items: center;
          }
          .text {
            color: ${Colors.textColor};
            text-align: center;
          }
          .text-box {
            height: 8rem;
          }
          .text-container {
            display: grid;
            place-items: center;
            width: 24rem;
          }
          .waste-description {
            margin-left: 0.5rem;
          }
          @media (max-width: 2100px) {
            .content-container {
              margin: 2rem 10rem;
            }
          }
          @media (max-width: 1855px) {
            .main-chart-container {
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 1fr 1fr;
              grid-column-gap: 0;
              grid-row-gap: 4rem;
            }
          }
          @media (max-width: 1000px) {
            .image-container {
              height: 10rem;
            }
            .content-container {
              margin: 5rem 0;
            }
            .main-chart-container {
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr 1fr;
              grid-column-gap: 0;
              grid-row-gap: 4rem;
            }
            .piechart-waste-container {
              grid-template-columns: auto;
              grid-template-rows: 22rem 1fr;
              width: 100%;
            }
            .chart-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Omlodding;
