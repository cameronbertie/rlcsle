import React from "react";

import teamVitality from "../images/teams/team-vitality.png";
import complexityGaming from "../images/teams/complexity-gaming.png";
import karmineCorp from "../images/teams/karmine-corp.png";
import kruEsports from "../images/teams/kru-esports.png";
import teamLiquid from "../images/teams/team-liquid.png";
import groundZeroGaming from "../images/teams/ground-zero-gaming.png";
import genGMobil1Racing from "../images/teams/gen-g-mobil1-racing.png";
import spacestationGaming from "../images/teams/spacestation-gaming.png";
import FURIAEsports from "../images/teams/furia-esports.png";
import teamBDS from "../images/teams/team-bds.png";
import opticGaming from "../images/teams/optic-gaming.png";
import ninjasInPyjamas from "../images/teams/ninjas-in-pyjamas.png";
import ruleOne from "../images/teams/rule-one.png";
import moistEsports from "../images/teams/moist-esports.png";
import pwr from "../images/teams/pwr.png";
import elevate from "../images/teams/elevate.png";

export default function GetTeam(props) {
  const playerTeam = props.playerTeam;

  return (
    <div style={{ display: "flex", alignContent: "center" }}>
      {playerTeam === "Team Vitality" && (
        <img className="teamLogo" src={teamVitality} alt="Team Logo" />
      )}
      {playerTeam === "Spacestation Gaming" && (
        <img className="teamLogo" src={spacestationGaming} alt="Team Logo" />
      )}
      {playerTeam === "FURIA Esports" && (
        <img className="teamLogo" src={FURIAEsports} alt="Team Logo" />
      )}
      {playerTeam === "Team BDS" && (
        <img className="teamLogo" src={teamBDS} alt="Team Logo" />
      )}
      {playerTeam === "KRÜ Esports" && (
        <img className="teamLogo" src={kruEsports} alt="Team Logo" />
      )}
      {playerTeam === "OpTic Gaming" && (
        <img className="teamLogo" src={opticGaming} alt="Team Logo" />
      )}
      {playerTeam === "Karmine Corp" && (
        <img className="teamLogo" src={karmineCorp} alt="Team Logo" />
      )}
      {playerTeam === "Complexity Gaming" && (
        <img className="teamLogo" src={complexityGaming} alt="Team Logo" />
      )}
      {playerTeam === "Team Liquid" && (
        <img className="teamLogo" src={teamLiquid} alt="Team Logo" />
      )}
      {playerTeam === "Ground Zero Gaming" && (
        <img className="teamLogo" src={groundZeroGaming} alt="Team Logo" />
      )}
      {playerTeam === "Ninjas in Pyjamas" && (
        <img className="teamLogo" src={ninjasInPyjamas} alt="Team Logo" />
      )}
      {playerTeam === "Rule One" && (
        <img className="teamLogo" src={ruleOne} alt="Team Logo" />
      )}
      {playerTeam === "Gen.G Mobil1 Racing" && (
        <img className="teamLogo" src={genGMobil1Racing} alt="Team Logo" />
      )}
      {playerTeam === "Moist Esports" && (
        <img className="teamLogo" src={moistEsports} alt="Team Logo" />
      )}
      {playerTeam === "PWR" && (
        <img className="teamLogo" src={pwr} alt="Team Logo" />
      )}
      {playerTeam === "Elevate" && (
        <img className="teamLogo" src={elevate} alt="Team Logo" />
      )}
    </div>
  );
}
