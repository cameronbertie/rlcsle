import React, { useState, useEffect } from "react";
import "../styles/Header.css";

import Instructions from "./Instructions.js";
import Statistics from "./Statistics.js";
import FirstStats from "./FirstStats.js";

import question from "../question.svg";
import stats from "../stats.svg";

export default function Header(props) {

  const totalGames = props.totalGames;
  const totalWins = props.totalWins;
  const winPercentage = props.winPercentage;
  const currentStreak = props.currentStreak;
  const maxStreak = props.maxStreak;

  const showWin = props.showWin;
  const showLose = props.showLose;
  const showGameComplete = props.showGameComplete;
  const firstStats = props.firstStats;
  const randomPlayer = props.randomPlayer;

  const round1Win = props.round1Win;
  const round2Win = props.round2Win;
  const round3Win = props.round3Win;
  const round4Win = props.round4Win;
  const round5Win = props.round5Win;
  const round6Win = props.round6Win;
  const round7Win = props.round7Win;

  const round1Guess = props.round1Guess;
  const round2Guess = props.round2Guess;
  const round3Guess = props.round3Guess;
  const round4Guess = props.round4Guess;
  const round5Guess = props.round5Guess;
  const round6Guess = props.round6Guess;
  const round7Guess = props.round7Guess;

  const round1Percentage = props.round1Percentage;
  const round2Percentage = props.round2Percentage;
  const round3Percentage = props.round3Percentage;
  const round4Percentage = props.round4Percentage;
  const round5Percentage = props.round5Percentage;
  const round6Percentage = props.round6Percentage;
  const round7Percentage = props.round7Percentage;
  

  const [showInstructions, setShowInstructions] = useState(true);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showFirstStats, setShowFirstStats] = useState(false);

  
  
 


  useEffect(() => {
    setShowFirstStats(firstStats);
  }, [firstStats])


  useEffect(() => {
    setShowInstructions(JSON.parse(localStorage.getItem("showInstructionsWinter23")  === null || JSON.parse(localStorage.getItem("showInstructionsWinter23")) === true ? true:false));
    
  }, [])

  useEffect(() => {
    localStorage.setItem("showInstructionsWinter23", JSON.stringify(showInstructions));
    
  })



  

  return (
    <div>
      <Instructions
        trigger={showInstructions}
        setTrigger={setShowInstructions}
      />

<Statistics
trigger={showStatistics}
setTrigger={setShowStatistics}
        
        totalGames={totalGames}
        totalWins={totalWins}
        winPercentage={winPercentage}
        currentStreak={currentStreak}
        maxStreak={maxStreak}
        showWin={showWin}
        showLose={showLose}
        showGameComplete={showGameComplete}
        randomPlayer={randomPlayer}
        round1Win={round1Win}
        round2Win={round2Win}
        round3Win={round3Win}
        round4Win={round4Win}
        round5Win={round5Win}
        round6Win={round6Win}
        round7Win={round7Win}
        round1Percentage={round1Percentage}
        round2Percentage={round2Percentage}
        round3Percentage={round3Percentage}
        round4Percentage={round4Percentage}
        round5Percentage={round5Percentage}
        round6Percentage={round6Percentage}
        round7Percentage={round7Percentage}
        round1Guess={round1Guess}
        round2Guess={round2Guess}
        round3Guess={round3Guess}
        round4Guess={round4Guess}
        round5Guess={round5Guess}
        round6Guess={round6Guess}
        round7Guess={round7Guess}
        
      />

<FirstStats
trigger={showFirstStats}
setTrigger={setShowFirstStats}
        
        totalGames={totalGames}
        totalWins={totalWins}
        winPercentage={winPercentage}
        currentStreak={currentStreak}
        maxStreak={maxStreak}
        showWin={showWin}
        showLose={showLose}
        showGameComplete={showGameComplete}
        randomPlayer={randomPlayer}
        round1Win={round1Win}
        round2Win={round2Win}
        round3Win={round3Win}
        round4Win={round4Win}
        round5Win={round5Win}
        round6Win={round6Win}
        round7Win={round7Win}
        round1Percentage={round1Percentage}
        round2Percentage={round2Percentage}
        round3Percentage={round3Percentage}
        round4Percentage={round4Percentage}
        round5Percentage={round5Percentage}
        round6Percentage={round6Percentage}
        round7Percentage={round7Percentage}
        round1Guess={round1Guess}
        round2Guess={round2Guess}
        round3Guess={round3Guess}
        round4Guess={round4Guess}
        round5Guess={round5Guess}
        round6Guess={round6Guess}
        round7Guess={round7Guess}
      />

      

      <header className="header-container">

        <div className="questionIconContainer">
        <img className="questionIcon" src={question} alt="Exit Icon" onClick={() => setShowInstructions(true)} />
        </div>

        <div className="headingContainer">
          <div>
        <h1 className="main-heading">
          RLCS<span style={{ color: "#345cfc" }}>LE</span>
        </h1>
        <h2 className="secondary-heading">2022-2023 WINTER MAJOR EDITION</h2>
        {/* <h2 className="update-heading">SPRING SPLIT EDITION COMING SOON</h2> */}
        </div>
        </div>

        <div className="statsIconContainer">
        <img className="statsIcon" src={stats} alt="Statistics Icon" onClick={() => setShowStatistics(true)} />
        </div>



      </header>
    </div>
  );
}
