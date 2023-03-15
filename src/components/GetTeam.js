import React from "react";

import G2Esports from "../images/teams/g2-esports.png";
import fazeClan from "../images/teams/faze-clan.png";
import teamVitality from "../images/teams/team-vitality.png";
import teamFalcons from "../images/teams/team-falcons.png";
import complexityGaming from "../images/teams/complexity-gaming.png";
import dignitas from "../images/teams/dignitas.png";
import karmineCorp from "../images/teams/karmine-corp.png";
import pioneers from "../images/teams/pioneers.png";
import teamSecret from "../images/teams/team-secret.png";
import kruEsports from "../images/teams/kru-esports.png";
import teamLiquid from "../images/teams/team-liquid.png";
import groundZeroGaming from "../images/teams/ground-zero-gaming.png";
import oxygenEsports from "../images/teams/oxygen-esports.png";
import g1 from "../images/teams/g1.png";
import genGMobil1Racing from "../images/teams/gen-g-mobil1-racing.png";
import gaiminGladiators from "../images/teams/gaimin-gladiators.png";

export default function GetTeam(props) {
  const playerTeam = props.playerTeam;

  return (
    <div style={{ display: "flex", alignContent: "center" }}>
      {playerTeam === "Karmine Corp" && (
        <img className="teamLogo" src={karmineCorp} alt="Team Logo" />
      )}
      {playerTeam === "Team Liquid" && (
        <img className="teamLogo" src={teamLiquid} alt="Team Logo" />
      )}
      {playerTeam === "Oxygen Esports" && (
        <img className="teamLogo" src={oxygenEsports} alt="Team Logo" />
      )}
      {playerTeam === "Team Vitality" && (
        <img className="teamLogo" src={teamVitality} alt="Team Logo" />
      )}
      {playerTeam === "G1" && (
        <img className="teamLogo" src={g1} alt="Team Logo" />
      )}
      {playerTeam === "Gen.G Mobil1 Racing" && (
        <img className="teamLogo" src={genGMobil1Racing} alt="Team Logo" />
      )}
      {playerTeam === "FaZe Clan" && (
        <img className="teamLogo" src={fazeClan} alt="Team Logo" />
      )}
      {playerTeam === "Complexity Gaming" && (
        <img className="teamLogo" src={complexityGaming} alt="Team Logo" />
      )}
      {playerTeam === "Dignitas" && (
        <img className="teamLogo" src={dignitas} alt="Team Logo" />
      )}
      {playerTeam === "G2 Esports" && (
        <img className="teamLogo" src={G2Esports} alt="Team Logo" />
      )}
      {playerTeam === "Pioneers" && (
        <img className="teamLogo" src={pioneers} alt="Team Logo" />
      )}
      {playerTeam === "Ground Zero Gaming" && (
        <img className="teamLogo" src={groundZeroGaming} alt="Team Logo" />
      )}
      {playerTeam === "KRÜ Esports" && (
        <img className="teamLogo" src={kruEsports} alt="Team Logo" />
      )}
      {playerTeam === "Team Secret" && (
        <img className="teamLogo" src={teamSecret} alt="Team Logo" />
      )}
      {playerTeam === "Team Falcons" && (
        <img className="teamLogo" src={teamFalcons} alt="Team Logo" />
      )}
      {playerTeam === "Gaimin Gladiators" && (
        <img className="teamLogo" src={gaiminGladiators} alt="Team Logo" />
      )}
    </div>
  );
}
