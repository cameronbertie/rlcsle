import React from "react";
import theGeneralNRG from "../images/teams/the-general-nrg.png";
import G2Esports from "../images/teams/g2-esports.png";
import fazeClan from "../images/teams/faze-clan.png";
import version1 from "../images/teams/version1.png";
import spacestationGaming from "../images/teams/spacestation-gaming.png";
import teamQueso from "../images/teams/team-queso.png";
import dignitas from "../images/teams/dignitas.png";
import teamBDS from "../images/teams/team-bds.png";
import endpointCex from "../images/teams/endpoint-cex.png";
import evilGeniuses from "../images/teams/evil-geniuses.png";
import renegades from "../images/teams/renegades.png";
import pioneers from "../images/teams/pioneers.png";
import teamSecret from "../images/teams/team-secret.png";
import furiaEsports from "../images/teams/furia-esports.png";
import detonator from "../images/teams/detonator.png";
import sandrockGaming from "../images/teams/sandrock-gaming.png";

export default function GetTeam(props) {

    const playerTeam = props.playerTeam;

    return (
        <div style={{display: "flex", alignContent: "center"}}>
        {playerTeam === "The General NRG" && (
              <img className="teamLogo" src={theGeneralNRG} alt="Team Logo" />
            )}
            {playerTeam === "G2 Esports" && (
              <img className="teamLogo" src={G2Esports} alt="Team Logo" />
            )}
            {playerTeam === "FaZe Clan" && (
              <img className="teamLogo" src={fazeClan} alt="Team Logo" />
            )}
            {playerTeam === "Version1" && (
              <img className="teamLogo" src={version1} alt="Team Logo" />
            )}
            {playerTeam === "Spacestation Gaming" && (
              <img className="teamLogo" src={spacestationGaming} alt="Team Logo" />
            )}
            {playerTeam === "Team Queso" && (
              <img className="teamLogo" src={teamQueso} alt="Team Logo" />
            )}
            {playerTeam === "Dignitas" && (
              <img className="teamLogo" src={dignitas} alt="Team Logo" />
            )}
            {playerTeam === "Team BDS" && (
              <img className="teamLogo" src={teamBDS} alt="Team Logo" />
            )}
            {playerTeam === "Endpoint CeX" && (
              <img className="teamLogo" src={endpointCex} alt="Team Logo" />
            )}
            {playerTeam === "Evil Geniuses" && (
              <img className="teamLogo" src={evilGeniuses} alt="Team Logo" />
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
            {playerTeam === "FURIA Esports" && (
              <img className="teamLogo" src={furiaEsports} alt="Team Logo" />
            )}
            {playerTeam === "DeToNator" && (
              <img className="teamLogo" src={detonator} alt="Team Logo" />
            )}
            {playerTeam === "Sandrock Gaming" && (
              <img className="teamLogo" src={sandrockGaming} alt="Team Logo" />
            )}
    </div>
    )
}