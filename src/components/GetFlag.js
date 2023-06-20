import React from "react";

import unitedStates from "../images/flags/united-states.png";
import england from "../images/flags/england.png";
import france from "../images/flags/france.png";
import portugal from "../images/flags/portugal.png";
import brazil from "../images/flags/brazil.png";
import saudiArabia from "../images/flags/saudi-arabia.png";
import poland from "../images/flags/poland.png";
import morocco from "../images/flags/morocco.png";
import belgium from "../images/flags/belgium.png";
import australia from "../images/flags/australia.png";
import ireland from "../images/flags/ireland.png";
import chile from "../images/flags/chile.png";
import argentina from "../images/flags/argentina.png";
import spain from "../images/flags/spain.png";
import japan from "../images/flags/japan.png";
import newZealand from "../images/flags/new-zealand.png";

export default function GetFlag(props) {
  const playerNationality = props.playerNationality;

  return (
    <div style={{ display: "flex", alignContent: "center" }}>
      {playerNationality === "France" && (
        <img className="flag" src={france} alt="Flag" />
      )}
      {playerNationality === "United States" && (
        <img className="flag" src={unitedStates} alt="Flag" />
      )}
      {playerNationality === "Brazil" && (
        <img className="flag" src={brazil} alt="Flag" />
      )}
      {playerNationality === "England" && (
        <img className="flag" src={england} alt="Flag" />
      )}
      {playerNationality === "Morocco" && (
        <img className="flag" src={morocco} alt="Flag" />
      )}
      {playerNationality === "Chile" && (
        <img className="flag" src={chile} alt="Flag" />
      )}
      {playerNationality === "Argentina" && (
        <img className="flag" src={argentina} alt="Flag" />
      )}
      {playerNationality === "Spain" && (
        <img className="flag" src={spain} alt="Flag" />
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
      {playerNationality === "Australia" && (
        <img className="flag" src={australia} alt="Flag" />
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
