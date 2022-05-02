import React, { useContext, useEffect } from "react";
import { MyContext } from "../../contexts/MyContext";
import ToolCard from "../common/ToolCard";
import BoltCard from "../common/BoltCard";
import v40segmentH from "../../../assets/segmenter/v40segmentH.jpg";
import v40segmentV from "../../../assets/segmenter/v40segmentV.jpg";
import v40segmenterBolt from "../../../assets/segmenter/v40segmenterBolt.jpg";
import vpp32segmentH from "../../../assets/segmenter/vpp32segmentH.jpg";
import vpp32segmentV from "../../../assets/segmenter/vpp32segmentV.jpg";
import vpp32Bolt from "../../../assets/segmenter/vpp32Bolt.jpg";
import vp32segmentV from "../../../assets/segmenter/vp32segmentV.jpg";
import vp32segmentH from "../../../assets/segmenter/vp32segmentH.jpg";
import vp34segmentSkrue from "../../../assets/segmenter/vp34segmentskrue.jpg";
import vp48segmentH from "../../../assets/segmenter/vp48segmentH.jpg";
import vp48segmentV from "../../../assets/segmenter/vp48segmentV.jpg";
import ModalComponent from "../common/ModalComponent";
import ToolWasteCount from "../oversikt/ToolWasteCount";
import { useAuth0 } from "@auth0/auth0-react";

const SegmenterStartPage = () => {
  const {
    openModal,
    tools,
    setGetID,
    setGetImgUrl,
    toolCardBtnTitle,
    redSegmentH,
    redSegmentV,
    vpp34SegH,
    vpp34SegV,
    vp34SegH,
    vp34SegV,
    vp48segH,
    vp48segV,
    setUserID,

    setUpdate,
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
            <h2>Reduserer segment (ZD1/ZD2)</h2>

            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              img={v40segmentH}
              totalt={tools && tools[0].antall}
              antallImaskin="5"
              antallTenner="14"
              type="V40-41-117-SV"
              dim="ø854,2/698-4,5/3,5"
              maskin="V40"
              title="Reduserer segment høyre"
              ID={tools && tools[0]._id}
              imgUrl={tools && tools[0].img}
              toolType={tools && tools[0].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(redSegmentH)}
            />
            <ToolCard
              img={v40segmentV}
              totalt={tools && tools[1].antall}
              antallImaskin="5"
              antallTenner="14"
              type="V40-41-118-SV"
              dim="ø854,2/698-4,5/3,5"
              maskin="V40"
              title="Reduserer segment venstre"
              ID={tools && tools[1]._id}
              imgUrl={tools && tools[1].img}
              toolType={tools && tools[1].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(redSegmentV)}
            />
            <BoltCard img={v40segmenterBolt} type="M12x30" antallImaskin="15" />
          </div>
        </div>
        <div>
          <div>
            <h2>Fres 1/4 segment (VPS)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              img={vpp32segmentH}
              antallImaskin="6"
              antallTenner="10"
              type="VPS-28-053"
              dim="ø401/200,4-3,5/2,5/8,00"
              title="Fres 1/4 segment høyre"
              maskin="VP34/VPP34"
              totalt={tools && tools[2].antall}
              ID={tools && tools[2]._id}
              imgUrl={tools && tools[2].img}
              toolType={tools && tools[2].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(vpp34SegH)}
            />
            <ToolCard
              img={vpp32segmentV}
              antallImaskin="6"
              antallTenner="10"
              type="VPS-28-052"
              dim="ø401/200,4-3,5/2,5/8,00"
              title="Fres 1/4 segment venstre"
              maskin="VP34/VPP34"
              totalt={tools && tools[3].antall}
              ID={tools && tools[3]._id}
              imgUrl={tools && tools[3].img}
              toolType={tools && tools[3].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(vpp34SegV)}
            />
            <BoltCard img={vpp32Bolt} type="M10x20" antallImaskin="36" />
          </div>
        </div>
        <div>
          <div>
            <h2>Fres 2/3 segment horizontal</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              img={vp32segmentH}
              antallImaskin="4"
              antallTenner="8"
              type="VP34-08-056"
              dim="ø403/305-3,5/2,5/5,00"
              title="Fres 2/3 segment høyre"
              maskin="VP34"
              totalt={tools && tools[4].antall}
              ID={tools && tools[4]._id}
              imgUrl={tools && tools[4].img}
              toolType={tools && tools[4].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(vp34SegH)}
            />
            <ToolCard
              img={vp32segmentV}
              antallImaskin="4"
              antallTenner="8"
              type="VP34-08-055"
              dim="ø403/305-3,5/2,5/5,00"
              title="Fres 2/3 segment venstre"
              maskin="VP34"
              totalt={tools && tools[5].antall}
              ID={tools && tools[5]._id}
              imgUrl={tools && tools[5].img}
              toolType={tools && tools[5].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(vp34SegV)}
            />
            <BoltCard img={vp34segmentSkrue} type="M10x20" antallImaskin="32" />
          </div>
        </div>
        <div>
          <div>
            <h2>Fres 3 segment vertical</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              img={vp48segmentH}
              antallImaskin="4"
              antallTenner="8"
              type="VP48-08-008"
              dim="ø412/ø296-4,0/3,0/5,0"
              title="Fres 3 segment høyre"
              maskin="VP48"
              totalt={tools && tools[6].antall}
              ID={tools && tools[6]._id}
              imgUrl={tools && tools[6].img}
              toolType={tools && tools[6].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(vp48segH)}
            />
            <ToolCard
              img={vp48segmentV}
              antallImaskin="4"
              antallTenner="8"
              type="VP48-08-007"
              dim="ø412/ø296-4,0/3,0/5,0"
              title="Fres 3 segment venstre"
              maskin="VP48"
              totalt={tools && tools[7].antall}
              ID={tools && tools[7]._id}
              imgUrl={tools && tools[7].img}
              toolType={tools && tools[7].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(vp48segV)}
            />
            <BoltCard img={vp34segmentSkrue} type="M10x20" antallImaskin="32" />
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

export default SegmenterStartPage;
