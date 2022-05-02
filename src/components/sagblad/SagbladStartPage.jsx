import React, { useContext, useEffect } from "react";
import { MyContext } from "../../contexts/MyContext";
import ToolCard from "../common/ToolCard";
import trimmerBordImg from "../../../assets/sagblad/trimmerBord.jpg";
import trimmerJusterverk from "../../../assets/sagblad/trimmerJusterverk.jpg";
import eksaktKappe from "../../../assets/sagblad/eksaktKappe.jpg";
import endekappImg from "../../../assets/sagblad/endekapp.jpg";
import ModalComponent from "../common/ModalComponent";
import ToolWasteCount from "../oversikt/ToolWasteCount";
import { useAuth0 } from "@auth0/auth0-react";

const SagbladStartPage = () => {
  const {
    openModal,
    tools,
    toolCardBtnTitle,
    trimmerJust,
    eksaktKapp,
    endekapp,
    trimmerBord,
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
            <h2 className="machine-header">Trimmer justerverk</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              title="Trimmer"
              dim="ø500x4,0/2,8ø30mm -5˚"
              antallTenner="96"
              img={trimmerJusterverk}
              antallImaskin="21"
              maskin="-"
              type="V-SH0985 SUPER Hi-MAX"
              totalt={tools && tools[23].antall}
              ID={tools && tools[23]._id}
              imgUrl={tools && tools[23].img}
              toolType={tools && tools[23].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(trimmerJust)}
            />
            <ToolCard
              title="Eksaktkappe"
              img={eksaktKappe}
              dim="ø400x3,5/2,5 ø30 -5˚"
              antallTenner="96"
              antallImaskin="1"
              maskin="Eksaktkappe"
              type="V-SH1003"
              totalt={tools && tools[24].antall}
              ID={tools && tools[24]._id}
              imgUrl={tools && tools[24].img}
              toolType={tools && tools[24].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(eksaktKapp)}
            />
            <ToolCard
              title="Endekapp"
              img={endekappImg}
              dim="ø610x4,4/3,3-ø30 10˚"
              antallImaskin="30"
              antallTenner="96"
              maskin=""
              type="V-SH0675"
              totalt={tools && tools[25].antall}
              ID={tools && tools[25]._id}
              imgUrl={tools && tools[25].img}
              toolType={tools && tools[25].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(endekapp)}
            />
          </div>
        </div>
        <div>
          <div>
            <h2 className="machine-header">Trimmer bordsortering</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              title="Trimmer bordsortering"
              img={trimmerBordImg}
              dim="ø450x4,0/2,8 ø30"
              antallImaskin="6"
              antallTenner="72"
              maskin=""
              type="V-SH1008"
              totalt={tools && tools[26].antall}
              ID={tools && tools[26]._id}
              imgUrl={tools && tools[26].img}
              toolType={tools && tools[26].type}
              btnTitle={toolCardBtnTitle}
              vrak={Math.abs(trimmerBord)}
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

export default SagbladStartPage;
