import React from "react";

import G2Esports from "../images/teams/g2-esports.png";
import fazeClan from "../images/teams/faze-clan.png";
import moistEsports from "../images/teams/moist-esports.png";
import teamFalcons from "../images/teams/team-falcons.png";
import version1 from "../images/teams/version1.png";
import spacestationGaming from "../images/teams/spacestation-gaming.png";
import karmineCorp from "../images/teams/karmine-corp.png";
import pioneers from "../images/teams/pioneers.png";
import teamSecret from "../images/teams/team-secret.png";
import theClub from "../images/teams/the-club.png";
import teamLiquid from "../images/teams/team-liquid.png";
import pwr from "../images/teams/pwr.png";
import oxygenEsports from "../images/teams/oxygen-esports.png";
import quadrant from "../images/teams/quadrant.png";
import genGMobil1Racing from "../images/teams/gen-g-mobil1-racing.png";
import jamesCheese from "../images/teams/james-cheese.png";

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

      {playerTeam === "Quadrant" && (
        <img className="teamLogo" src={quadrant} alt="Team Logo" />
      )}
      {playerTeam === "Moist Esports" && (
        <img className="teamLogo" src={moistEsports} alt="Team Logo" />
      )}
      {playerTeam === "Gen.G Mobil1 Racing" && (
        <img className="teamLogo" src={genGMobil1Racing} alt="Team Logo" />
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
      {playerTeam === "G2 Esports" && (
        <img className="teamLogo" src={G2Esports} alt="Team Logo" />
      )}
      {playerTeam === "Pioneers" && (
        <img className="teamLogo" src={pioneers} alt="Team Logo" />
      )}
      {playerTeam === "PWR" && (
        <img className="teamLogo" src={pwr} alt="Team Logo" />
      )}
      {playerTeam === "The Club" && (
        <img className="teamLogo" src={theClub} alt="Team Logo" />
      )}
      {playerTeam === "Team Secret" && (
        <img className="teamLogo" src={teamSecret} alt="Team Logo" />
      )}
      {playerTeam === "Team Falcons" && (
        <img className="teamLogo" src={teamFalcons} alt="Team Logo" />
      )}
      {playerTeam === "James Cheese" && (
        <img className="teamLogo" src={jamesCheese} alt="Team Logo" />
      )}
    </div>
  );
}
