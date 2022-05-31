import React from "react";

import unitedStates from "../images/flags/united-states.png";
import canada from "../images/flags/canada.png";
import england from "../images/flags/england.png";
import france from "../images/flags/france.png";
import netherlands from "../images/flags/netherlands.png";
import scotland from "../images/flags/scotland.png";
import spain from "../images/flags/spain.png";
import finland from "../images/flags/finland.png";
import germany from "../images/flags/germany.png";
import austria from "../images/flags/austria.png";
import australia from "../images/flags/australia.png";
import brazil from "../images/flags/brazil.png";
import japan from "../images/flags/japan.png";
import saudiArabia from "../images/flags/saudi-arabia.png";
import newZealand from "../images/flags/new-zealand.png";

export default function GetFlag(props) {

    const playerNationality = props.playerNationality;

    return (
        <div style={{display: "flex", alignContent: "center"}}>
        {playerNationality === "United States" && (
              <img className="flag"  src={unitedStates} alt="Flag" />
            )}
            {playerNationality === "Canada" && (
              <img className="flag" src={canada} alt="Flag" />
            )}
            {playerNationality === "England" && (
              <img className="flag" src={england} alt="Flag" />
            )}
            {playerNationality === "France" && (
              <img className="flag" src={france} alt="Flag" />
            )}
            {playerNationality === "Netherlands" && (
              <img className="flag" src={netherlands} alt="Flag" />
            )}
            {playerNationality === "Scotland" && (
              <img className="flag" src={scotland} alt="Flag" />
            )}
            {playerNationality === "Spain" && (
              <img className="flag" src={spain} alt="Flag" />
            )}
            {playerNationality === "Finland" && (
              <img className="flag" src={finland} alt="Flag" />
            )}
            {playerNationality === "Germany" && (
              <img className="flag" src={germany} alt="Flag" />
            )}
            {playerNationality === "Austria" && (
              <img className="flag" src={austria} alt="Flag" />
            )}
            {playerNationality === "Australia" && (
              <img className="flag" src={australia} alt="Flag" />
            )}
            {playerNationality === "Brazil" && (
              <img className="flag" src={brazil} alt="Flag" />
            )}
            {playerNationality === "Japan" && (
              <img className="flag" src={japan} alt="Flag" />
            )}
            {playerNationality === "Saudi Arabia" && (
              <img className="flag" src={saudiArabia} alt="Flag" />
            )}
            {playerNationality === "New Zealand" && (
              <img className="flag" src={newZealand} alt="Flag" />
            )}
    </div>
    )
}