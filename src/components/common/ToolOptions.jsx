import React from "react";

const ToolOptions = ({ handleChange }) => {
  return (
    <>
      <div className="container">
        <select name="tools" id="tools" onChange={handleChange}>
          <option value="a">Alle</option>
          <option value="Reduserer segment høyre">
            Reduserer segment høyre
          </option>
          <option value="Reduserer segment venstre">
            Reduserer segment venstre
          </option>
          <option value="Fres 1/4 segment høyre">Fres 1/4 segment høyre</option>
          <option value="Fres 1/4 segment venstre">
            Fres 1/4 segment venstre
          </option>
          <option value="Fres 2/3 segment høyre">Fres 2/3 segment høyre</option>
          <option value="Fres 2/3 segment venstre">
            Fres 2/3 segment venstre
          </option>
          <option value="Fres 3 segment høyre vertical">
            Fres 3 segment høyre vertical
          </option>
          <option value="Fres 3 segment venstre">
            Fres 3 segment venstrevertical{" "}
          </option>
          <option value="Fres 3 segment venstre ">
            Fres 3 segment venstre vertical{" "}
          </option>
          <option value="Reduserer kniv">Reduserer kniv</option>
          <option value="Reduserer motstål rekke 1">
            Reduserer motstål rekke 1
          </option>
          <option value="Reduserer motstål rekke 2 og 3">
            Reduserer motstål rekke 2 og 3
          </option>
          <option value="Fres 1/4 kniv">Fres 1/4 kniv</option>
          <option value="Fres 1/4 knivholder">Fres 1/4 knivholder</option>
          <option value="Fres 1/4 motstål høyre">Fres 1/4 motstål høyre</option>
          <option value="Fres 1/4 motstål venstre">
            Fres 1/4 motstål venstre
          </option>
          <option value="Fres 2/3 kniv (horizontal)">
            Fres 2/3 kniv (horizontal)
          </option>
          <option value="Fres 2/3 motstål (horizontal)">
            Fres 2/3 motstål (horizontal)
          </option>
          <option value="Fres 3 kniv (vertical)">Fres 3 kniv (vertical)</option>
          <option value="Fres 3 motstål høyre (vertical)">
            Fres 3 motstål høyre (vertical)
          </option>
          <option value="Fres 3 motstål venstre (vertical)">
            Fres 3 motstål venstre (vertical)
          </option>
        </select>
      </div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default ToolOptions;
