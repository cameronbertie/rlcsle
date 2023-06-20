import React from "react";
import "../styles/Instructions.css";

import france from "../images/flags/france.png";
import teamVitality from "../images/teams/team-vitality.png";
import spacestationGaming from "../images/teams/spacestation-gaming.png";
import unitedStates from "../images/flags/united-states.png";

import close from "../close.svg";

export default function Instructions(props) {
  return props.trigger ? (
    <div className="instructionsContainer">
      <div className="instructionsInnerContainer">
        <div className="instructions">
          <div className="instructionsHeader">
            <div className="instructionsHeaderBlank"></div>
          <div className="instructionsTitle"><p>HOW TO PLAY</p></div>
          <div className="exitIconContainer">
          <img  className="exitIcon" src={close} alt="Exit Icon" onClick={() => props.setTrigger(false)} />
          </div>
          </div>
          
          <p>
            Guess the <strong>RLCS</strong> mystery player in seven tries.
          </p>
          <p>
            Each guess must be the alias of a player that qualified for the RLCS
            Spring Major in Boston. This does not include substitutes. Hit the guess button to
            submit.
          </p>
          <p>
            After each guess, the colour of the tiles will change to show how
            close your guess was to the mystery player.
          </p>
          <div className="examples">
            <p>
              <strong>Examples</strong>
            </p>

            <div className="example">
              <div className="tileRow">
                <div className="tile blank"><p className="playerName">Alpha54</p></div>
                <div className="tile correct"><p className="playerRegion">EU</p></div>
                <div className="tile blank"><div>
                    <img className="teamLogo" src={teamVitality} alt="Team Logo" />
                  </div></div>
                <div className="tile blank"><div>
                    <img className="flag" src={france} alt="Flag" />
                  </div></div>
              </div>
              <p>
                The mystery player represented the <strong>EU</strong> region at
                the Spring Major.
              </p>
            </div>

            <div className="example">
              <div className="tileRow">
                <div className="tile blank">
                <p className="playerName">Arsenal</p>
                </div>
                <div className="tile blank">
                <p className="playerRegion">NA</p>
                </div>
                <div className="tile blank">
                <div>
                    <img className="teamLogo" src={spacestationGaming} alt="Team Logo" />
                  </div>
                </div>
                <div className="tile wrong">
                  <div>
                    <img className="flag" src={unitedStates} alt="Flag" />
                  </div>
                </div>
              </div>
              <p>
                The mystery players nationality is not {" "}
                <strong>United States</strong>.
              </p>
            </div>
          </div>
          <p>
            <strong>A new mystery player will be available each day!</strong>
          </p>
          <p className="sideMessage">by <a href="https://www.youtube.com/channel/UCvcR7QuqJKN58J-sQ970fWw" target="_blank" rel="noreferrer">Cameron Bertie</a></p>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
