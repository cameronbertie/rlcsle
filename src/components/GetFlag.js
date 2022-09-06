import React from "react";

import canada from "../images/flags/canada.png";
import unitedStates from "../images/flags/united-states.png";
import england from "../images/flags/england.png";
import france from "../images/flags/france.png";
import finland from "../images/flags/finland.png";
import brazil from "../images/flags/brazil.png";
import saudiArabia from "../images/flags/saudi-arabia.png";
import netherlands from "../images/flags/netherlands.png";
import scotland from "../images/flags/scotland.png";
import morocco from "../images/flags/morocco.png";
import belgium from "../images/flags/belgium.png";
import newZealand from "../images/flags/new-zealand.png";
import australia from "../images/flags/australia.png";
import japan from "../images/flags/japan.png";
import indonesia from "../images/flags/indonesia.png";
import ireland from "../images/flags/ireland.png";
import singapore from "../images/flags/singapore.png";
import southAfrica from "../images/flags/south-africa.png";

export default function GetFlag(props) {
  const playerNationality = props.playerNationality;

  return (
    <div style={{ display: "flex", alignContent: "center" }}>
      {playerNationality === "Canada" && (
        <img className="flag" src={canada} alt="Flag" />
      )}
      {playerNationality === "United States" && (
        <img className="flag" src={unitedStates} alt="Flag" />
      )}
      {playerNationality === "England" && (
        <img className="flag" src={england} alt="Flag" />
      )}
      {playerNationality === "France" && (
        <img className="flag" src={france} alt="Flag" />
      )}
      {playerNationality === "Finland" && (
        <img className="flag" src={finland} alt="Flag" />
      )}
      {playerNationality === "Brazil" && (
        <img className="flag" src={brazil} alt="Flag" />
      )}
      {playerNationality === "Saudi Arabia" && (
        <img className="flag" src={saudiArabia} alt="Flag" />
      )}
      {playerNationality === "Netherlands" && (
        <img className="flag" src={netherlands} alt="Flag" />
      )}
      {playerNationality === "Scotland" && (
        <img className="flag" src={scotland} alt="Flag" />
      )}
      {playerNationality === "Morocco" && (
        <img className="flag" src={morocco} alt="Flag" />
      )}
      {playerNationality === "Belgium" && (
        <img className="flag" src={belgium} alt="Flag" />
      )}
      {playerNationality === "New Zealand" && (
        <img className="flag" src={newZealand} alt="Flag" />
      )}
      {playerNationality === "Australia" && (
        <img className="flag" src={australia} alt="Flag" />
      )}
      {playerNationality === "Japan" && (
        <img className="flag" src={japan} alt="Flag" />
      )}
      {playerNationality === "Indonesia" && (
        <img className="flag" src={indonesia} alt="Flag" />
      )}
      {playerNationality === "Ireland" && (
        <img className="flag" src={ireland} alt="Flag" />
      )}
      {playerNationality === "Singapore" && (
        <img className="flag" src={singapore} alt="Flag" />
      )}
      {playerNationality === "South Africa" && (
        <img className="flag" src={southAfrica} alt="Flag" />
      )}
    </div>
  );
}
