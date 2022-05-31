import React, { useState, useEffect } from "react";
import data from "./data.json";
import "./App.css";

import Win from "./components/Win.js";
import Lose from "./components/Lose.js";
import DisplayGuess from "./components/DisplayGuess.js";
import InputGuess from "./components/InputGuess";
import Suggestions from "./components/Suggestions";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [value, setValue] = useState("");

  const [randomPlayer, setRandomPlayer] = useState("");
  const [randomPlayerDetails, setRandomPlayerDetails] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const [guess1, setGuess1] = useState([]);
  const [showGuess1Input, setShowGuess1Input] = useState(true);

  const [guess2, setGuess2] = useState([]);
  const [showGuess2Input, setShowGuess2Input] = useState(false);

  const [guess3, setGuess3] = useState([]);
  const [showGuess3Input, setShowGuess3Input] = useState(false);

  const [guess4, setGuess4] = useState([]);
  const [showGuess4Input, setShowGuess4Input] = useState(false);

  const [guess5, setGuess5] = useState([]);
  const [showGuess5Input, setShowGuess5Input] = useState(false);

  const [guess6, setGuess6] = useState([]);
  const [showGuess6Input, setShowGuess6Input] = useState(false);

  const [guess7, setGuess7] = useState([]);
  const [showGuess7Input, setShowGuess7Input] = useState(false);

  const [showWin, setShowWin] = useState(false);
  const [showLose, setShowLose] = useState(false);
  const [showGameOver, setShowGameOver] = useState(false);
  const [showGameComplete, setShowGameComplete] = useState(false);
  const [firstStats, setFirstStats] = useState(false);

  const [totalGames, setTotalGames] = useState(0);
  const [totalWins, setTotalWins] = useState(0);
  const [winPercentage, setWinPercentage] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  let players = [];
  for (let i = 0; i < data.length; i++) {
    players.push(data[i].Name);
  }

  useEffect(() => {
    // let now = new Date();
    // let resetStorage =
    //   new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0) -
    //   now;
    // if (resetStorage < 0) {
    //   resetStorage += 86400000;
    // }
    // setTimeout(function () {

    // }, resetStorage);

    Date.prototype.addDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };

    function getDates(startDate, stopDate) {
      var dateArray = [];
      var currentDate = startDate;
      while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate));
        currentDate = currentDate.addDays(1);
      }
      return dateArray;
    }

    const randomNumberArray = [
      34, 0, 12, 33, 14, 11, 18, 17, 43, 29, 32, 2, 25, 35, 30, 1, 19, 39, 22,
      9, 23, 3, 5, 13, 15, 36, 31, 38, 10, 41, 20, 26, 37, 28, 4, 40, 8, 21, 6,
      42, 16, 44, 24, 27, 7, 35, 0, 25, 14, 5, 22, 30, 33, 7, 19, 15, 29, 24, 6,
      28, 38, 3, 12, 11, 23, 36, 2, 39, 43, 9, 31, 34, 44, 27, 37, 20, 26, 8,
      16, 41, 42, 1, 32, 17, 13, 10, 40, 4, 18, 21, 3, 42, 38, 29, 23, 20, 15,
      43, 31, 10, 0, 11, 6, 36, 22, 14, 17, 33, 44, 5, 32, 16, 24, 19, 4, 28, 8,
      25, 2, 41, 7, 12, 35, 18, 27, 21, 13, 1, 37, 26, 9, 30, 39, 34, 40,
    ];

    function selectedDate(date = new Date()) {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    var dateArray = getDates(
      selectedDate(new Date(2022, 2, 23)),
      selectedDate(new Date(2022, 5, 30))
    );

    function removeTime(date = new Date()) {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    const currentDate = removeTime(new Date());

    for (let i = 0; i < dateArray.length; i++) {
      if (dateArray[i].toString() === currentDate.toString()) {
        // setRandomPlayer(JSON.parse(localStorage.getItem("randomPlayer"))?JSON.parse(localStorage.getItem("randomPlayer")):players[randomNumberArray[i]]);
        const oldRandomPlayerDetails = JSON.parse(
          localStorage.getItem("randomPlayerDetails")
        );
        const newRandomPlayerDetails = [
          data[randomNumberArray[i]].Name,
          data[randomNumberArray[i]].Region,
          data[randomNumberArray[i]].Team,
          data[randomNumberArray[i]].Nationality,
        ];

        setRandomPlayer(newRandomPlayerDetails[0]);

        if (
          JSON.stringify(oldRandomPlayerDetails) !==
          JSON.stringify(newRandomPlayerDetails)
        ) {
          // it is a new day or player is playing for the first time
          setRandomPlayerDetails(newRandomPlayerDetails);

          //Writer your code here
          // guess1-7 gone
          // showGuessInput1-7
          // showGameOver gone
          for (let i = 1; i <= 7; i++) {
            localStorage.removeItem(`guess${i}`);
            localStorage.removeItem(`showGuess${i}Input`);
            localStorage.removeItem(`showGameOver`);
            localStorage.removeItem(`showGameComplete`);
            localStorage.removeItem(`showWin`);
            localStorage.removeItem(`showLose`);
          }
        } else {
          //It is the same day
          setRandomPlayerDetails(oldRandomPlayerDetails);
        }
      }
    }

    setGuess1(
      JSON.parse(localStorage.getItem("guess1"))
        ? JSON.parse(localStorage.getItem("guess1"))
        : []
    );
    setGuess2(
      JSON.parse(localStorage.getItem("guess2"))
        ? JSON.parse(localStorage.getItem("guess2"))
        : []
    );
    setGuess3(
      JSON.parse(localStorage.getItem("guess3"))
        ? JSON.parse(localStorage.getItem("guess3"))
        : []
    );
    setGuess4(
      JSON.parse(localStorage.getItem("guess4"))
        ? JSON.parse(localStorage.getItem("guess4"))
        : []
    );
    setGuess5(
      JSON.parse(localStorage.getItem("guess5"))
        ? JSON.parse(localStorage.getItem("guess5"))
        : []
    );
    setGuess6(
      JSON.parse(localStorage.getItem("guess6"))
        ? JSON.parse(localStorage.getItem("guess6"))
        : []
    );
    setGuess7(
      JSON.parse(localStorage.getItem("guess7"))
        ? JSON.parse(localStorage.getItem("guess7"))
        : []
    );

    setShowGuess1Input(
      JSON.parse(localStorage.getItem("showGuess1Input")) === null ||
        JSON.parse(localStorage.getItem("showGuess1Input")) === true
        ? true
        : false
    );
    setShowGuess2Input(
      JSON.parse(localStorage.getItem("showGuess2Input"))
        ? JSON.parse(localStorage.getItem("showGuess2Input"))
        : false
    );
    setShowGuess3Input(
      JSON.parse(localStorage.getItem("showGuess3Input"))
        ? JSON.parse(localStorage.getItem("showGuess3Input"))
        : false
    );
    setShowGuess4Input(
      JSON.parse(localStorage.getItem("showGuess4Input"))
        ? JSON.parse(localStorage.getItem("showGuess4Input"))
        : false
    );
    setShowGuess5Input(
      JSON.parse(localStorage.getItem("showGuess5Input"))
        ? JSON.parse(localStorage.getItem("showGuess5Input"))
        : false
    );
    setShowGuess6Input(
      JSON.parse(localStorage.getItem("showGuess6Input"))
        ? JSON.parse(localStorage.getItem("showGuess6Input"))
        : false
    );
    setShowGuess7Input(
      JSON.parse(localStorage.getItem("showGuess7Input"))
        ? JSON.parse(localStorage.getItem("showGuess7Input"))
        : false
    );

    setTotalGames(
      JSON.parse(localStorage.getItem("totalGames"))
        ? JSON.parse(localStorage.getItem("totalGames"))
        : 0
    );
    setTotalWins(
      JSON.parse(localStorage.getItem("totalWins"))
        ? JSON.parse(localStorage.getItem("totalWins"))
        : 0
    );
    setWinPercentage(
      JSON.parse(localStorage.getItem("winPercentage"))
        ? JSON.parse(localStorage.getItem("winPercentage"))
        : 0
    );
    setCurrentStreak(
      JSON.parse(localStorage.getItem("currentStreak"))
        ? JSON.parse(localStorage.getItem("currentStreak"))
        : 0
    );
    setMaxStreak(
      JSON.parse(localStorage.getItem("maxStreak"))
        ? JSON.parse(localStorage.getItem("maxStreak"))
        : 0
    );

    setShowWin(
      JSON.parse(localStorage.getItem("showWin"))
        ? JSON.parse(localStorage.getItem("showWin"))
        : false
    );
    setShowLose(
      JSON.parse(localStorage.getItem("showLose"))
        ? JSON.parse(localStorage.getItem("showLose"))
        : false
    );
    setShowGameOver(
      JSON.parse(localStorage.getItem("showGameOver"))
        ? JSON.parse(localStorage.getItem("showGameOver"))
        : false
    );
    setShowGameComplete(
      JSON.parse(localStorage.getItem("showGameComplete"))
        ? JSON.parse(localStorage.getItem("showGameComplete"))
        : false
    );
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "randomPlayerDetails",
      JSON.stringify(randomPlayerDetails)
    );

    // localStorage.setItem("guess7", JSON.stringify(guess7));

    localStorage.setItem("guess1", JSON.stringify(guess1));
    localStorage.setItem("guess2", JSON.stringify(guess2));
    localStorage.setItem("guess3", JSON.stringify(guess3));
    localStorage.setItem("guess4", JSON.stringify(guess4));
    localStorage.setItem("guess5", JSON.stringify(guess5));
    localStorage.setItem("guess6", JSON.stringify(guess6));
    localStorage.setItem("guess7", JSON.stringify(guess7));

    localStorage.setItem("showGuess1Input", JSON.stringify(showGuess1Input));
    localStorage.setItem("showGuess2Input", JSON.stringify(showGuess2Input));
    localStorage.setItem("showGuess3Input", JSON.stringify(showGuess3Input));
    localStorage.setItem("showGuess4Input", JSON.stringify(showGuess4Input));
    localStorage.setItem("showGuess5Input", JSON.stringify(showGuess5Input));
    localStorage.setItem("showGuess6Input", JSON.stringify(showGuess6Input));
    localStorage.setItem("showGuess7Input", JSON.stringify(showGuess7Input));
    localStorage.setItem("totalGames", JSON.stringify(totalGames));
    localStorage.setItem("totalWins", JSON.stringify(totalWins));
    localStorage.setItem("winPercentage", JSON.stringify(winPercentage));
    localStorage.setItem("currentStreak", JSON.stringify(currentStreak));

    localStorage.setItem("showWin", JSON.stringify(showWin));
    localStorage.setItem("showLose", JSON.stringify(showLose));
    localStorage.setItem("showGameOver", JSON.stringify(showGameOver));
    localStorage.setItem("showGameComplete", JSON.stringify(showGameComplete));
  });

  const options = players.filter((option) =>
    option.toLowerCase().includes(value.toLowerCase())
  );
  const suggestionsSize = 3;
  const suggestions = options.slice(0, suggestionsSize);

  const handleChange = (event) => {
    setValue(event.target.value);
    setShowSuggestions(true);
    setDisableButton(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setValue(suggestion);
    setShowSuggestions(false);
    setDisableButton(false);
  };

  const handleGuess = (setGuess, guessInput, nextGuessInput) => {
    const getChosenPlayerID = players.find((element) => element === value);
    const chosenPlayerID = players.indexOf(getChosenPlayerID);

    const chosenPlayerData = data[chosenPlayerID];

    if (value === randomPlayer) {
      // When the game is over and the player won
      setShowWin(true);
      setShowGameComplete(true);
      setFirstStats(true);

      setGuess([
        chosenPlayerData.Name,
        chosenPlayerData.Region,
        chosenPlayerData.Team,
        chosenPlayerData.Nationality,
      ]);
      guessInput(false);

      let getTotalGames = totalGames + 1;
      setTotalGames(getTotalGames);

      let getTotalWins = totalWins + 1;
      setTotalWins(getTotalWins);

      setWinPercentage(Math.round((getTotalWins / getTotalGames) * 100));

      let getCurrentStreak = currentStreak + 1;
      setCurrentStreak(getCurrentStreak);
      setMaxStreak(Math.max(getCurrentStreak, maxStreak));
      console.log();
      localStorage.setItem("maxStreak", JSON.stringify(maxStreak));
    } else if (setGuess === setGuess7 && value !== randomPlayer) {
      // When the game is over and the player LOST
      setShowGameComplete(true);
      setShowLose(true);
      setFirstStats(true);
      setCurrentStreak(0);

      let getTotalGames = totalGames + 1;
      setTotalGames(getTotalGames);

      setGuess([
        chosenPlayerData.Name,
        chosenPlayerData.Region,
        chosenPlayerData.Team,
        chosenPlayerData.Nationality,
      ]);

      guessInput(false);
      nextGuessInput(true);
      setValue("");
      setDisableButton(true);

      setWinPercentage(Math.round((totalWins / getTotalGames) * 100));
    } else {
      setGuess([
        chosenPlayerData.Name,
        chosenPlayerData.Region,
        chosenPlayerData.Team,
        chosenPlayerData.Nationality,
      ]);

      guessInput(false);
      nextGuessInput(true);
      setValue("");
      setDisableButton(true);
    }
  };

  return (
    <div>
      <Header
        totalGames={totalGames}
        winPercentage={winPercentage}
        currentStreak={currentStreak}
        showWin={showWin}
        showLose={showLose}
        showGameComplete={showGameComplete}
        firstStats={firstStats}
        setFirstStats={setFirstStats}
        randomPlayer={randomPlayer}
      />

      <Win showWin={showWin} />

      <Lose showLose={showLose} randomPlayer={randomPlayer} />

      <div className="container">
        <div className="displayGuessSection">
          <DisplayGuess
            guessArray={guess1}
            randomPlayerDetailsArray={randomPlayerDetails}
          />

          <DisplayGuess
            guessArray={guess2}
            randomPlayerDetailsArray={randomPlayerDetails}
          />

          <DisplayGuess
            guessArray={guess3}
            randomPlayerDetailsArray={randomPlayerDetails}
          />

          <DisplayGuess
            guessArray={guess4}
            randomPlayerDetailsArray={randomPlayerDetails}
          />

          <DisplayGuess
            guessArray={guess5}
            randomPlayerDetailsArray={randomPlayerDetails}
          />

          <DisplayGuess
            guessArray={guess6}
            randomPlayerDetailsArray={randomPlayerDetails}
          />

          <DisplayGuess
            guessArray={guess7}
            randomPlayerDetailsArray={randomPlayerDetails}
          />
        </div>

        <Suggestions
          showSuggestions={showSuggestions}
          suggestions={suggestions}
          handleSuggestionClick={handleSuggestionClick}
        />

        <InputGuess
          value={value}
          handleChange={handleChange}
          disableButton={disableButton}
          handleGuess={handleGuess}
          showGuessInput={showGuess1Input}
          guess={setGuess1}
          currentGuessInput={setShowGuess1Input}
          nextGuessInput={setShowGuess2Input}
        />

        <InputGuess
          value={value}
          handleChange={handleChange}
          disableButton={disableButton}
          handleGuess={handleGuess}
          showGuessInput={showGuess2Input}
          guess={setGuess2}
          currentGuessInput={setShowGuess2Input}
          nextGuessInput={setShowGuess3Input}
        />

        <InputGuess
          value={value}
          handleChange={handleChange}
          disableButton={disableButton}
          handleGuess={handleGuess}
          showGuessInput={showGuess3Input}
          guess={setGuess3}
          currentGuessInput={setShowGuess3Input}
          nextGuessInput={setShowGuess4Input}
        />

        <InputGuess
          value={value}
          handleChange={handleChange}
          disableButton={disableButton}
          handleGuess={handleGuess}
          showGuessInput={showGuess4Input}
          guess={setGuess4}
          currentGuessInput={setShowGuess4Input}
          nextGuessInput={setShowGuess5Input}
        />

        <InputGuess
          value={value}
          handleChange={handleChange}
          disableButton={disableButton}
          handleGuess={handleGuess}
          showGuessInput={showGuess5Input}
          guess={setGuess5}
          currentGuessInput={setShowGuess5Input}
          nextGuessInput={setShowGuess6Input}
        />

        <InputGuess
          value={value}
          handleChange={handleChange}
          disableButton={disableButton}
          handleGuess={handleGuess}
          showGuessInput={showGuess6Input}
          guess={setGuess6}
          currentGuessInput={setShowGuess6Input}
          nextGuessInput={setShowGuess7Input}
        />

        <InputGuess
          value={value}
          handleChange={handleChange}
          disableButton={disableButton}
          handleGuess={handleGuess}
          showGuessInput={showGuess7Input}
          guess={setGuess7}
          currentGuessInput={setShowGuess7Input}
          nextGuessInput={setShowGameOver}
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;
