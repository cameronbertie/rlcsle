import React from "react";

import "../styles/DisplayGuess.css";
import GetFlag from "./GetFlag.js";
import GetTeam from "./GetTeam.js";

export default function DisplayGuess(props) {
  
  const randomPlayerDetails = props.randomPlayerDetailsArray;

  
    const guess = props.guessArray;
  

  
  return (
    <div className="displayGuessContainer">
      
        <div className="displayGuessRow">
          <div className="displayGuessBox"
            style={{
              backgroundColor:
                guess.length === 4 && guess[0] === randomPlayerDetails[0] ? "#538d4e" :
                guess.length === 4 && guess[0] !== randomPlayerDetails[0] ? "#3a3a3c" : "none",

                borderColor:
                guess.length === 4 && guess[0] === randomPlayerDetails[0] ? "#538d4e" :
                guess.length === 4 && guess[0] !== randomPlayerDetails[0] ? "#3a3a3c" : "#3a3a3c",
            }}
          >
            {guess.length === 4 && (
            
            <p className="playerName">{guess[0]}</p>
            
            )}
          </div>
          <div className="displayGuessBox"
            style={{
              backgroundColor:
                guess.length === 4 && guess[1] === randomPlayerDetails[1] ? "#538d4e" :
                guess.length === 4 && guess[1] !== randomPlayerDetails[1] ? "#3a3a3c" : "none",

                borderColor:
                guess.length === 4 && guess[1] === randomPlayerDetails[1] ? "#538d4e" :
                guess.length === 4 && guess[1] !== randomPlayerDetails[1] ? "#3a3a3c" : "#3a3a3c",
            }}
          >
            <p className="playerRegion">{guess[1]}</p>
          </div>

          <div className="displayGuessBox"
            style={{
              backgroundColor:
                guess.length === 4 && guess[2] === randomPlayerDetails[2] ? "#538d4e" :
                guess.length === 4 && guess[2] !== randomPlayerDetails[2] ? "#3a3a3c" : "none",

                borderColor:
                guess.length === 4 && guess[2] === randomPlayerDetails[2] ? "#538d4e" :
                guess.length === 4 && guess[2] !== randomPlayerDetails[2] ? "#3a3a3c" : "#3a3a3c",
            }}
          >
            
            < GetTeam playerTeam={guess[2]} />
          </div>

          <div className="displayGuessBox"
            style={{
              backgroundColor:
                guess.length === 4 && guess[3] === randomPlayerDetails[3] ? "#538d4e" :
                guess.length === 4 && guess[3] !== randomPlayerDetails[3] ? "#3a3a3c" : "none",

                borderColor:
                guess.length === 4 && guess[3] === randomPlayerDetails[3] ? "#538d4e" :
                guess.length === 4 && guess[3] !== randomPlayerDetails[3] ? "#3a3a3c" : "#3a3a3c",
            }}
          >
            < GetFlag playerNationality={guess[3]} />
          </div>
        </div>
      
    </div>
  );
}
