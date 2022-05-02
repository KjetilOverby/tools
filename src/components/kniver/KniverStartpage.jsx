import React, { useContext, useEffect } from "react";
import fres2 from "../../../assets/kniver/vp34kniv.jpg";
import fres3 from "../../../assets/kniver/vp48kniv.jpg";
import noImage from "../../../assets/no_image.png";
import ToolCard from "../common/ToolCard";
import BoltCard from "../common/BoltCard";
import v40kniv from "../../../assets/kniver/v40kniv.jpg";
import v40motst from "../../../assets/kniver/v40motsl.jpg";
import v25motst from "../../../assets/kniver/v25motst.jpg";
import v40Bolt from "../../../assets/kniver/v40Bolt.jpg";
import v40justSkruer from "../../../assets/kniver/v40justskruer.jpg";
import vpp34kniv from "../../../assets/kniver/vpp34kniv.jpg";
import vpp34holder from "../../../assets/kniver/vpp34holder.jpg";
import vpp34motstHImg from "../../../assets/kniver/vpp34motstH.jpg";
import vpp34motstVImg from "../../../assets/kniver/vpp34motstV.jpg";
import vpp34Bolt from "../../../assets/kniver/vpp34Bolt.jpg";
import vpp34justSkrue from "../../../assets/kniver/vpp34justSkrue.jpg";
import vp34motstImg from "../../../assets/kniver/vp34motst.jpg";
import vp48motsH from "../../../assets/kniver/vp48motstH.jpg";
import vp48motsV from "../../../assets/kniver/vp48motstV.jpg";
import bruks from "../../../assets/kniver/bruks.jpg";
import bruksJust from "../../../assets/kniver/bruksJust.jpg";
import vp34bolt from "../../../assets/kniver/vp34bolt.jpg";
import vp34justSkrue from "../../../assets/kniver/vp34justSkrue.jpg";
import bruksMotst15 from "../../../assets/kniver/bruksmotst15.jpg";
import bruksMotst44 from "../../../assets/kniver/bruksmotst44.jpg";
import { MyContext } from "../../contexts/MyContext";
import ModalComponent from "../common/ModalComponent";
import ToolWasteCount from "../oversikt/ToolWasteCount";

import { useAuth0 } from "@auth0/auth0-react";

const KniverStartpage = () => {
  const {
    openModal,
    tools,
    toolCardBtnTitle,
    reduserKniv,
    motstV25,
    motstV40,
    vpp34Kniv,
    vpp32Knivholder,
    vpp34motstH,
    vpp34motstV,
    vp34Kniv,
    vp34motst,
    vp48Kniv,
    vp48motstH,
    vp48motstV,
    bruksKniv,
    setUserID,
  } = useContext(MyContext);
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    setUserID(user);
  });
  return (
    <>
      <ToolWasteCount />
      {openModal && <ModalComponent />}
      <div className="container">
        <div>
          <div>
            <h2 className="machine-header">Reduserere (ZD)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              title="Kniver"
              dim="92x105x12mm H945"
              antallTenner=""
              img={v40kniv}
              antallImaskin="30"
              maskin="ZD1/ZD2"
              type="V25-24-054"
              totalt={tools && tools[8].antall}
              ID={tools && tools[8]._id}
              imgUrl={tools && tools[8].img}
              toolType={tools && tools[8].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(reduserKniv)}
            />
            <ToolCard
              title="Motstål (første rekke)"
              img={v40motst}
              dim="92x80x30mm"
              antallTenner=""
              antallImaskin="30"
              maskin="ZD1/ZD2"
              type="V40-41-324"
              totalt={tools && tools[9].antall}
              ID={tools && tools[9]._id}
              imgUrl={tools && tools[9].img}
              toolType={tools && tools[9].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(motstV40)}
            />
            <ToolCard
              title="Motstål (rekke 2 og 3)"
              img={v25motst}
              dim="92x80x22"
              antallImaskin="30"
              antallTenner=""
              maskin="ZD1/ZD2"
              type="V25-24-055"
              totalt={tools && tools[10].antall}
              ID={tools && tools[10]._id}
              imgUrl={tools && tools[10].img}
              toolType={tools && tools[10].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(motstV25)}
            />
            <BoltCard img={v40Bolt} type="M20x45" antallImaskin="30" />
            <BoltCard img={v40justSkruer} type="M6x40" antallImaskin="60" />
            <div style={{ width: "30rem" }}></div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="machine-header">Fres 1/4 (VP34/VPP34 ombygd)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              title="Kniver"
              img={vpp34kniv}
              dim="41x105x8mm"
              antallTenner=""
              maskin="VP34/VPP34"
              antallImaskin="48"
              type="kniv"
              totalt={tools && tools[11].antall}
              ID={tools && tools[11]._id}
              imgUrl={tools && tools[11].img}
              toolType={tools && tools[11].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(vpp34Kniv)}
            />
            <ToolCard
              title="Knivholder"
              img={vpp34holder}
              antallImaskin="48"
              dim=""
              antallTenner=""
              maskin="VP34/VPP34"
              type="VPS-28-087"
              totalt={tools && tools[12].antall}
              ID={tools && tools[12]._id}
              imgUrl={tools && tools[12].img}
              toolType={tools && tools[12].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(vpp32Knivholder)}
            />

            <ToolCard
              title="motstål høyre"
              img={vpp34motstVImg}
              antallImaskin="24"
              antallTenner=""
              dim="41x88,5x27,5mm"
              maskin="VP34/VPP34"
              type="VPS-28-072"
              totalt={tools && tools[13].antall}
              ID={tools && tools[13]._id}
              imgUrl={tools && tools[13].img}
              toolType={tools && tools[13].type}
              btnTitle={toolCardBtnTitle}
              vrak={vpp34motstH}
            />
            <ToolCard
              title="Motstål venstre"
              img={vpp34motstHImg}
              antallImaskin="24"
              dim="41x88,5x27,5mm"
              antallTenner=""
              maskin="VP34/VPP34"
              type="VPS-28-071"
              totalt={tools && tools[14].antall}
              ID={tools && tools[14]._id}
              imgUrl={tools && tools[14].img}
              toolType={tools && tools[14].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(vpp34motstV)}
            />
            <BoltCard
              img={vpp34Bolt}
              type="M20x60 unbraco"
              antallImaskin="48"
            />
            <BoltCard img={vpp34justSkrue} type="M5x25" antallImaskin="48" />
          </div>
        </div>
        <div>
          <div>
            <h2 className="machine-header">Fres 2/3 horizontal (VP34)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              title="Kniv"
              dim=""
              img={fres2}
              antallImaskin="8"
              antallTenner=""
              type="kniv"
              maskin="VP34"
              totalt={tools && tools[15].antall}
              ID={tools && tools[15]._id}
              imgUrl={tools && tools[15].img}
              toolType={tools && tools[15].type}
              btnTitle={toolCardBtnTitle}
              vrak={vp34Kniv}
            />
            <ToolCard
              title="Motstål"
              img={vp34motstImg}
              dim=""
              antallImaskin="8"
              antallTenner=""
              maskin="VP34"
              type=""
              totalt={tools && tools[16].antall}
              ID={tools && tools[16]._id}
              imgUrl={tools && tools[16].img}
              toolType={tools && tools[16].type}
              btnTitle={toolCardBtnTitle}
              vrak={vp34motst}
            />
            <BoltCard img={vp34bolt} type="M16x45 unbraco" antallImaskin="16" />
            <BoltCard
              img={vp34justSkrue}
              type="M6x30 unbraco"
              antallImaskin="16"
            />
          </div>
        </div>
        <div>
          <div>
            <h2 className="machine-header">Fres 3 Vertical (VP48)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              title="Kniv"
              img={fres3}
              antallImaskin="8"
              dim="50x100x10mm"
              antallTenner=""
              maskin="VP48"
              type="VP48-08-037"
              totalt={tools && tools[17].antall}
              ID={tools && tools[17]._id}
              imgUrl={tools && tools[17].img}
              toolType={tools && tools[17].type}
              btnTitle={toolCardBtnTitle}
              vrak={vp48Kniv}
            />
            <ToolCard
              title="Motstål høyre"
              img={vp48motsH}
              dim="55x85x25x6mm"
              antallImaskin="8"
              antallTenner=""
              maskin="VP48"
              type="kniv"
              totalt={tools && tools[18].antall}
              ID={tools && tools[18]._id}
              imgUrl={tools && tools[18].img}
              toolType={tools && tools[18].type}
              btnTitle={toolCardBtnTitle}
              vrak={vp48motstH}
            />
            <ToolCard
              title="Motstål venstre"
              img={vp48motsV}
              antallImaskin="8"
              antallTenner=""
              maskin="VP48"
              dim="55x85x25x6mm"
              type="kniv"
              totalt={tools && tools[19].antall}
              ID={tools && tools[19]._id}
              imgUrl={tools && tools[19].img}
              toolType={tools && tools[19].type}
              btnTitle={toolCardBtnTitle}
              vrak={vp48motstV}
            />
            <BoltCard img={vp34bolt} type="M16x45 unbraco" antallImaskin="8" />
            <BoltCard
              img={vp34justSkrue}
              type="M6x30 unbraco"
              antallImaskin="8"
            />
            <div style={{ width: "30rem" }}></div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="machine-header">Råsortering/stikkhugger (Bruks)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              title="Kniv"
              img={bruks}
              antallImaskin="2"
              type="V-KH5300"
              antallTenner=""
              dim="575x185x15/16mm 6-214,2/332"
              maskin="Bruks 820 CS"
              totalt={tools && tools[20].antall}
              ID={tools && tools[20]._id}
              imgUrl={tools && tools[20].img}
              toolType={tools && tools[20].type}
              btnTitle={toolCardBtnTitle}
              vrak={bruksKniv}
            />
            <ToolCard
              title="Motstål"
              img={bruksMotst15}
              antallImaskin="8"
              antallTenner=""
              dim="580x59x15"
              type="V-KM7100"
              maskin="Bruks 820 CS"
              totalt={tools && tools[21].antall}
              ID={tools && tools[21]._id}
              imgUrl={tools && tools[21].img}
              toolType={tools && tools[21].type}
              btnTitle={toolCardBtnTitle}
            />
            <ToolCard
              title="Motstål"
              img={bruksMotst44}
              antallImaskin="8"
              antallTenner=""
              dim="580x59x44"
              type="V-KM5105"
              maskin="Bruks 820 CS"
              totalt={tools && tools[22].antall}
              ID={tools && tools[22]._id}
              imgUrl={tools && tools[22].img}
              toolType={tools && tools[22].type}
              btnTitle={toolCardBtnTitle}
            />
            <BoltCard img={bruksJust} type="M10x80" antallImaskin="16" />
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

export default KniverStartpage;
