import React, { useState } from "react";

const TypeInputRetip = ({}) => {
  const sawblades = [
    {
      value: "Kanefusa 2.2-3.6",
      label: "Kanefusa 2.2-3.6",
    },
    {
      value: "Kanefusa 2.4-3.8",
      label: "Kanefusa 2.4-3.8",
    },
    {
      value: "Kanefusa 2.6-4.0",
      label: "Kanefusa 2.6-4.0",
    },
    {
      value: "Kanefusa 2.8-4.2",
      label: "Kanefusa 2.8-4.2",
    },
    {
      value: "Kanefusa 3.0-4.4",
      label: "Kanefusa 3.0-4.4",
    },
    {
      value: "Kanefusa 3.2-4.6",
      label: "Kanefusa 3.2-4.6",
    },
    {
      value: "Kanefusa N-blad",
      label: "Kanefusa N-blad",
    },
    {
      value: "Kanefusa VS-66 venstre",
      label: "Kanefusa VS-66 venstre",
    },
    {
      value: "Kanefusa VS-66 høyre",
      label: "Kanefusa VS-66 høyre",
    },
    {
      value: "Kanefusa VS-66 venstre F",
      label: "Kanefusa VS-66 venstre F",
    },
    {
      value: "Kanefusa VS-66 høyre F",
      label: "Kanefusa VS-66 høyre F",
    },

    {
      value: "Nessjø VS-66 venstre",
      label: "Nessjø VS-66 venstre",
    },
    {
      value: "Nessjø VS-66 høyre",
      label: "Nessjø VS-66 høyre",
    },
  ];

  // const getTypeInputHandler = (e) => {
  //   setgetTypeRetip(e.target.value);
  // };
  return (
    <div>
      <select id="">
        {sawblades.map((item) => {
          return (
            <>
              <option value={item.value} label={item.label} />
            </>
          );
        })}
      </select>
    </div>
  );
};

export default TypeInputRetip;
