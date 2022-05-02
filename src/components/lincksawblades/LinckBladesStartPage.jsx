import React, { useContext } from "react";
import mkv36 from "../../../assets/linckblad/mkv3.6.jpg";
import mkv38 from "../../../assets/linckblad/mkv3.8.jpg";
import mkv40 from "../../../assets/linckblad/mkv4.0.jpg";
import mkv42 from "../../../assets/linckblad/mkv4.2.jpg";
import mkv44 from "../../../assets/linckblad/mkv4.4.jpg";
import mkv46 from "../../../assets/linckblad/mkv4.6.jpg";
import nBlad from "../../../assets/linckblad/nBlad.jpg";
import nessjoH from "../../../assets/linckblad/nessjoH.jpg";
import nessjoV from "../../../assets/linckblad/nessjoV.jpg";
import vs66HF from "../../../assets/linckblad/vs66FlensH.jpg";
import vs66VF from "../../../assets/linckblad/vs66FlensV.jpg";
import vs66H from "../../../assets/linckblad/vs66H.jpg";
import vs66V from "../../../assets/linckblad/vs66V.jpg";
import { MyContext } from "../../contexts/MyContext";
import ModalComponent from "../common/ModalComponent";
import ToolCard from "../common/ToolCard";

const LinckBladesStartPage = () => {
  const toolCardLinckBtnTitle = "VIS";
  const { openModal, tools } = useContext(MyContext);

  return (
    <>
      {openModal && <ModalComponent linck={true} />}
      <div className="container">
        <div>
          <div>
            <h2>MKV delingssag</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              img={mkv36}
              antallImaskin=""
              antallTenner="30"
              type="Kanefusa Hi-MAX"
              dim="Ø445x2,2-3,6 ø150"
              maskin="MKV"
              title="Kanefusa MKV 2,2-3,6"
              ID={tools && tools[27]._id}
              imgUrl={tools && tools[27].img}
              toolType={tools && tools[27].type}
              btnTitle={toolCardLinckBtnTitle}
            />
            <ToolCard
              img={mkv38}
              antallImaskin=""
              antallTenner="36"
              type="Kanefusa Hi-MAX"
              dim="Ø445x2,4-3,8 ø150"
              maskin="MKV"
              title="Kanefusa MKV 2,4-3,8"
              ID={tools && tools[28]._id}
              imgUrl={tools && tools[28].img}
              toolType={tools && tools[28].type}
              btnTitle={toolCardLinckBtnTitle}
            />
            <ToolCard
              img={mkv40}
              antallImaskin=""
              antallTenner="36"
              type="Kanefusa TIMBERMAX"
              dim="Ø445x2,6-4,0 ø150"
              maskin="MKV"
              title="Kanefusa MKV 2,6-4,0"
              ID={tools && tools[29]._id}
              imgUrl={tools && tools[29].img}
              toolType={tools && tools[29].type}
              btnTitle={toolCardLinckBtnTitle}
            />
            <ToolCard
              img={mkv42}
              antallImaskin=""
              antallTenner="36"
              type="Kanefusa TIMBERMAX"
              dim="Ø445x2,8-4,2 ø150"
              maskin="MKV"
              title="Kanefusa MKV 2,8-4,2"
              ID={tools && tools[30]._id}
              imgUrl={tools && tools[30].img}
              toolType={tools && tools[30].type}
              btnTitle={toolCardLinckBtnTitle}
            />
            <ToolCard
              img={mkv44}
              antallImaskin=""
              antallTenner="36"
              type="Kanefusa Hi-MAX"
              dim="Ø445x3,0-4,4 ø150"
              maskin="MKV"
              title="Kanefusa MKV 3,0-4,4"
              ID={tools && tools[31]._id}
              imgUrl={tools && tools[31].img}
              toolType={tools && tools[31].type}
              btnTitle={toolCardLinckBtnTitle}
            />
            <ToolCard
              img={mkv46}
              antallImaskin=""
              antallTenner="36"
              type="Kanefusa Hi-MAX"
              dim="Ø510x3,2-4,6 ø150"
              maskin="MKV"
              title="Kanefusa MKV 3,2-4,6"
              ID={tools && tools[32]._id}
              imgUrl={tools && tools[32].img}
              toolType={tools && tools[32].type}
              btnTitle={toolCardLinckBtnTitle}
            />
          </div>
        </div>
        <div>
          <div>
            <h2>Bordsag (VS-66)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              img={vs66H}
              antallImaskin="2"
              antallTenner="27"
              type="Kanefusa HM Himax"
              dim="Ø475x3,6/5,0 ø120"
              maskin="VS-66"
              title="Kanefusa VS-66 høyre"
              ID={tools && tools[33]._id}
              imgUrl={tools && tools[33].img}
              toolType={tools && tools[33].type}
              btnTitle={toolCardLinckBtnTitle}
            />
            <ToolCard
              img={vs66V}
              antallImaskin="2"
              antallTenner="27"
              type="Kanefusa HM Himax"
              dim="Ø475x3,6/5,0 ø120"
              maskin="VS-66"
              title="Kanefusa VS-66 venstre"
              ID={tools && tools[34]._id}
              imgUrl={tools && tools[34].img}
              toolType={tools && tools[34].type}
              btnTitle={toolCardLinckBtnTitle}
            />
            <ToolCard
              img={nBlad}
              antallImaskin="4"
              antallTenner="30"
              type="Kanefusa Hi-MAX"
              dim="Ø475x3,2/4,8 ø120"
              maskin="VS-66"
              title="Kanefusa VS-66 N-blad"
              ID={tools && tools[35]._id}
              imgUrl={tools && tools[35].img}
              toolType={tools && tools[35].type}
              btnTitle={toolCardLinckBtnTitle}
            />
            <ToolCard
              img={vs66HF}
              antallImaskin="2"
              antallTenner="24"
              type="Kanefusa Hi-MAX"
              dim="Ø475x3,6/5,0/6,8 ø120"
              maskin="VS-66"
              title="Kanefusa VS-66 høyre flensblad"
              ID={tools && tools[36]._id}
              imgUrl={tools && tools[36].img}
              toolType={tools && tools[36].type}
              btnTitle={toolCardLinckBtnTitle}
            />
            <ToolCard
              img={vs66VF}
              antallImaskin="2"
              antallTenner="24"
              type="Kanefusa Hi-MAX"
              dim="Ø475x3,6/5,0/6,8 ø120"
              maskin="VS-66"
              title="Kanefusa VS-66 venstre flensblad"
              ID={tools && tools[37]._id}
              imgUrl={tools && tools[37].img}
              toolType={tools && tools[37].type}
              btnTitle={toolCardLinckBtnTitle}
            />
            <ToolCard
              img={nessjoH}
              antallImaskin="2"
              antallTenner="27"
              type=""
              dim="Ø475x3,6/5,0 ø120"
              maskin="VS-66"
              title="Nässjö VS-66 høyre"
              ID={tools && tools[38]._id}
              imgUrl={tools && tools[38].img}
              toolType={tools && tools[38].type}
              btnTitle={toolCardLinckBtnTitle}
            />
            <ToolCard
              img={nessjoV}
              antallImaskin="2"
              antallTenner="27"
              type=""
              dim="Ø475x3,6/5,0 ø120"
              maskin="VS-66"
              title="Nässjö VS-66 venstre"
              ID={tools && tools[39]._id}
              imgUrl={tools && tools[39].img}
              toolType={tools && tools[39].type}
              btnTitle={toolCardLinckBtnTitle}
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
          .machine-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
        `}
      </style>
    </>
  );
};

export default LinckBladesStartPage;
