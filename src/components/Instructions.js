import React from "react";
import "../styles/Instructions.css";

import unitedStates from "../images/flags/united-states.png";
import theGeneralNRG from "../images/teams/the-general-nrg.png";
import dignitas from "../images/teams/dignitas.png";
import scotland from "../images/flags/scotland.png";

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
            Each guess must be the alias of a player that played at the RLCS
            Winter Major LAN event in Los Angeles. Hit the guess button to
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
                <div className="tile blank"><p className="playerName">GarrettG</p></div>
                <div className="tile correct"><p className="playerRegion">NA</p></div>
                <div className="tile blank"><div>
                    <img className="teamLogo" src={theGeneralNRG} alt="Team Logo" />
                  </div></div>
                <div className="tile blank"><div>
                    <img className="flag" src={unitedStates} alt="Flag" />
                  </div></div>
              </div>
              <p>
                The mystery player represented the <strong>NA</strong> region at
                the Winter Major LAN event.
              </p>
            </div>

            <div className="example">
              <div className="tileRow">
                <div className="tile blank">
                <p className="playerName">Scrub Killa</p>
                </div>
                <div className="tile blank">
                <p className="playerRegion">EU</p>
                </div>
                <div className="tile blank">
                <div>
                    <img className="teamLogo" src={dignitas} alt="Team Logo" />
                  </div>
                </div>
                <div className="tile wrong">
                  <div>
                    <img className="flag" src={scotland} alt="Flag" />
                  </div>
                </div>
              </div>
              <p>
                The mystery players nationality is not {" "}
                <strong>Scotland</strong>.
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
