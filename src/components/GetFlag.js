import React from "react";

import canada from "../images/flags/canada.png";
import unitedStates from "../images/flags/united-states.png";
import england from "../images/flags/england.png";
import france from "../images/flags/france.png";
import portugal from "../images/flags/portugal.png";
import brazil from "../images/flags/brazil.png";
import saudiArabia from "../images/flags/saudi-arabia.png";
import netherlands from "../images/flags/netherlands.png";
import poland from "../images/flags/poland.png";
import morocco from "../images/flags/morocco.png";
import belgium from "../images/flags/belgium.png";
import newZealand from "../images/flags/new-zealand.png";
import australia from "../images/flags/australia.png";
import japan from "../images/flags/japan.png";
import ireland from "../images/flags/ireland.png";

export default function GetFlag(props) {
  const playerNationality = props.playerNationality;

  return (
    <div style={{ display: "flex", alignContent: "center" }}>
      {playerNationality === "Morocco" && (
        <img className="flag" src={morocco} alt="Flag" />
      )}
      {playerNationality === "France" && (
        <img className="flag" src={france} alt="Flag" />
      )}
      {playerNationality === "Portugal" && (
        <img className="flag" src={portugal} alt="Flag" />
      )}
      {playerNationality === "Poland" && (
        <img className="flag" src={poland} alt="Flag" />
      )}
      {playerNationality === "Belgium" && (
        <img className="flag" src={belgium} alt="Flag" />
      )}
      {playerNationality === "England" && (
        <img className="flag" src={england} alt="Flag" />
      )}
      {playerNationality === "Netherlands" && (
        <img className="flag" src={netherlands} alt="Flag" />
      )}
      {playerNationality === "United States" && (
        <img className="flag" src={unitedStates} alt="Flag" />
      )}
      {playerNationality === "Canada" && (
        <img className="flag" src={canada} alt="Flag" />
      )}
      {playerNationality === "Australia" && (
        <img className="flag" src={australia} alt="Flag" />
      )}
      {playerNationality === "Brazil" && (
        <img className="flag" src={brazil} alt="Flag" />
      )}
      {playerNationality === "Saudi Arabia" && (
        <img className="flag" src={saudiArabia} alt="Flag" />
      )}
      {playerNationality === "Ireland" && (
        <img className="flag" src={ireland} alt="Flag" />
      )}
      {playerNationality === "Japan" && (
        <img className="flag" src={japan} alt="Flag" />
      )}
      {playerNationality === "New Zealand" && (
        <img className="flag" src={newZealand} alt="Flag" />
      )}
    </div>
  );
}
