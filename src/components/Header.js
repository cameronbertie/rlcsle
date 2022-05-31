import React, { useState, useEffect } from "react";
import "../styles/Header.css";

import Instructions from "./Instructions.js";
import Statistics from "./Statistics.js";
import FirstStats from "./FirstStats.js";

import question from "../question.svg";
import stats from "../stats.svg";

export default function Header(props) {

  const totalGames = props.totalGames;
  const winPercentage = props.winPercentage;
  const currentStreak = props.currentStreak;

  const showWin = props.showWin;
  const showLose = props.showLose;
  const showGameComplete = props.showGameComplete;
  const firstStats = props.firstStats;
  const randomPlayer = props.randomPlayer;
  

  const [showInstructions, setShowInstructions] = useState(true);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showFirstStats, setShowFirstStats] = useState(false);
  

  useEffect(() => {
    setShowFirstStats(firstStats);
  }, [firstStats])


  useEffect(() => {
    setShowInstructions(JSON.parse(localStorage.getItem("showInstructions")  === null || JSON.parse(localStorage.getItem("showInstructions")) === true ? true:false));
    
  }, [])

  useEffect(() => {
    localStorage.setItem("showInstructions", JSON.stringify(showInstructions));
    
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
        winPercentage={winPercentage}
        currentStreak={currentStreak}
        showWin={showWin}
        showLose={showLose}
        showGameComplete={showGameComplete}
        randomPlayer={randomPlayer}
        
      />

<FirstStats
trigger={showFirstStats}
setTrigger={setShowFirstStats}
        
        totalGames={totalGames}
        winPercentage={winPercentage}
        currentStreak={currentStreak}
        showWin={showWin}
        showLose={showLose}
        showGameComplete={showGameComplete}
        randomPlayer={randomPlayer}
        
      />

      

      <header className="header-container">

        <div className="questionIconContainer">
        <img className="questionIcon" src={question} alt="Exit Icon" onClick={() => setShowInstructions(true)} />
        </div>

        <div className="headingContainer">
          <div>
        <h1 className="main-heading">
          RLCS<span style={{ color: "#345cfc" }}>LE</span><span className="beta-text">BETA</span>
        </h1>
        <h2 className="secondary-heading">2021-2022 WINTER MAJOR EDITION</h2>
        <h2 className="update-heading">SPRING SPLIT EDITION COMING SOON</h2>
        </div>
        </div>

        <div className="statsIconContainer">
        <img className="statsIcon" src={stats} alt="Statistics Icon" onClick={() => setShowStatistics(true)} />
        </div>



      </header>
    </div>
  );
}
