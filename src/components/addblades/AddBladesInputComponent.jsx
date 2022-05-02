import React from "react";

const AddBladesInputComponent = ({
  setSelectorValue,
  setSerialInput,
  createNewBladeHandler,
  onSubmit,
}) => {
  return (
    <>
      <div className="container">
        <h4 className="header">Legg til nye blad</h4>
        <select
          onChange={(e) => setSelectorValue(e.target.value)}
          name="sagblad"
          id="sagblad"
          className="select"
        >
          <option value="">Velg sagblad</option>
          <option value="Kanefusa 2.2-3.6">Kanefusa 2.2-3.6</option>
          <option value="Kanefusa 2.4-3.8">Kanefusa 2.4-3.8</option>
          <option value="Kanefusa 2.6-4.0">Kanefusa 2.6-4.0</option>
          <option value="Kanefusa 2.8-4.2">Kanefusa 2.8-4.2</option>
          <option value="Kanefusa 3.0-4.4">Kanefusa 3.0-4.4</option>
          <option value="Kanefusa 3.2-4.6">Kanefusa 3.2-4.6</option>
          <option value="Kanefusa N-blad">Kanefusa N-blad</option>
          <option value="Kanefusa VS-66 venstre">Kanefusa VS-66 venstre</option>
          <option value="Kanefusa VS-66 høyre">Kanefusa VS-66 høyre</option>
          <option value="Kanefusa VS-66 venstre F">
            Kanefusa VS-66 venstre F
          </option>
          <option value="Kanefusa VS-66 høyre F">Kanefusa VS-66 høyre F</option>
          <option value="Nessjø VS-66 venstre">Nessjø VS-66 venstre</option>
          <option value="Nessjø VS-66 høyre">Nessjø VS-66 høyre</option>
        </select>
        <input
          onChange={(e) => setSerialInput(e.target.value)}
          placeholder="Serienummer"
          className="input"
          onKeyPress={onSubmit}
        />
        <button onClick={createNewBladeHandler} className="btn">
          LEGG TIL
        </button>
      </div>
      <style jsx>
        {`
          .btn {
            background: transparent;
            border: 1px solid #505c4e;
            padding: 0.5rem;
            border-radius: 10px;
            color: #505c4e;
            margin-top: 1rem;
            transition: 0.5s;
            grid-area: input;
          }
          .btn:hover {
            background: #879b823e;
            cursor: pointer;
          }
          .container {
            display: flex;
            flex-direction: column;
          }
          .header {
            color: #184a8b;
          }
          .input {
            border: none;
            padding: 0.5rem;
            margin: 0.5rem 0;
            border-radius: 5px;
            width: 12.5rem;
            background: #c9ecc0;
          }
          .select {
            border: none;
            padding: 0.5rem;
            margin: 0.5rem 0;
            border-radius: 5px;
            background-color: #c0cdec;
            color: #3f3f3f;
            width: 12.5rem;
          }
        `}
      </style>
    </>
  );
};

export default AddBladesInputComponent;
