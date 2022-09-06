import React from "react";

import G2Esports from "../images/teams/g2-esports.png";
import fazeClan from "../images/teams/faze-clan.png";
import theGeneralNRG from "../images/teams/the-general-nrg.png";
import moistEsports from "../images/teams/moist-esports.png";
import teamBDS from "../images/teams/team-bds.png";
import endpointCex from "../images/teams/endpoint-cex.png";
import furiaEsports from "../images/teams/furia-esports.png";
import teamFalcons from "../images/teams/team-falcons.png";
import version1 from "../images/teams/version1.png";
import spacestationGaming from "../images/teams/spacestation-gaming.png";
import opticGaming from "../images/teams/optic-gaming.png";
import dignitas from "../images/teams/dignitas.png";
import karmineCorp from "../images/teams/karmine-corp.png";
import SMPREsports from "../images/teams/smpr-esports.png";
import renegades from "../images/teams/renegades.png";
import pioneers from "../images/teams/pioneers.png";
import teamSecret from "../images/teams/team-secret.png";
import theClub from "../images/teams/the-club.png";
import tokyoVerdyEsports from "../images/teams/tokyo-verdy-esports.png";
import gaiminGladiators from "../images/teams/gaimin-gladiators.png";
import veloceEsports from "../images/teams/veloce-esports.png";
import esports01 from "../images/teams/01-esports.png";
import orlandoPiratesExdee from "../images/teams/orlando-pirates-exdee.png";
import bravadoGaming from "../images/teams/bravado-gaming.png";

export default function GetTeam(props) {

    const playerTeam = props.playerTeam;

    return (
        <div style={{display: "flex", alignContent: "center"}}>
        
            {playerTeam === "G2 Esports" && (
              <img className="teamLogo" src={G2Esports} alt="Team Logo" />
            )}
            {playerTeam === "FaZe Clan" && (
              <img className="teamLogo" src={fazeClan} alt="Team Logo" />
            )}
            {playerTeam === "The General NRG" && (
              <img className="teamLogo" src={theGeneralNRG} alt="Team Logo" />
            )}
            {playerTeam === "Moist Esports" && (
              <img className="teamLogo" src={moistEsports} alt="Team Logo" />
            )}
            {playerTeam === "Team BDS" && (
              <img className="teamLogo" src={teamBDS} alt="Team Logo" />
            )}
            {playerTeam === "Endpoint CeX" && (
              <img className="teamLogo" src={endpointCex} alt="Team Logo" />
            )}
            {playerTeam === "FURIA Esports" && (
              <img className="teamLogo" src={furiaEsports} alt="Team Logo" />
            )}
            {playerTeam === "Team Falcons" && (
              <img className="teamLogo" src={teamFalcons} alt="Team Logo" />
            )}
            {playerTeam === "Version1" && (
              <img className="teamLogo" src={version1} alt="Team Logo" />
            )}
            {playerTeam === "Spacestation Gaming" && (
              <img className="teamLogo" src={spacestationGaming} alt="Team Logo" />
            )}
           {playerTeam === "OpTic Gaming" && (
              <img className="teamLogo" src={opticGaming} alt="Team Logo" />
            )}
            {playerTeam === "Dignitas" && (
              <img className="teamLogo" src={dignitas} alt="Team Logo" />
            )}
            {playerTeam === "Karmine Corp" && (
              <img className="teamLogo" src={karmineCorp} alt="Team Logo" />
            )}
            {playerTeam === "SMPR Esports" && (
              <img className="teamLogo" src={SMPREsports} alt="Team Logo" />
            )}
            {playerTeam === "Renegades" && (
              <img className="teamLogo" src={renegades} alt="Team Logo" />
            )}
            {playerTeam === "Pioneers" && (
              <img className="teamLogo" src={pioneers} alt="Team Logo" />
            )}
            {playerTeam === "Team Secret" && (
              <img className="teamLogo" src={teamSecret} alt="Team Logo" />
            )}
            {playerTeam === "The Club" && (
              <img className="teamLogo" src={theClub} alt="Team Logo" />
            )}
            {playerTeam === "Tokyo Verdy Esports" && (
              <img className="teamLogo" src={tokyoVerdyEsports} alt="Team Logo" />
            )}
            {playerTeam === "Gaimin Gladiators" && (
              <img className="teamLogo" src={gaiminGladiators} alt="Team Logo" />
            )}
            {playerTeam === "Veloce Esports" && (
              <img className="teamLogo" src={veloceEsports} alt="Team Logo" />
            )}
            {playerTeam === "01 Esports" && (
              <img className="teamLogo" src={esports01} alt="Team Logo" />
            )}
            {playerTeam === "Orlando Pirates Exdee" && (
              <img className="teamLogo" src={orlandoPiratesExdee} alt="Team Logo" />
            )}
            {playerTeam === "Bravado Gaming" && (
              <img className="teamLogo" src={bravadoGaming} alt="Team Logo" />
            )}
            
            
            
            
    </div>
    )
}