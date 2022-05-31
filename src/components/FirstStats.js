import React, { useState } from "react";
import "../styles/Statistics.css";
import thatObjective from "../white-logo.svg";
import close from "../close.svg";
import Countdown, { zeroPad } from "react-countdown";

export default function FirstStats(props) {
  const totalGames = props.totalGames;
  const winPercentage = props.winPercentage;
  const currentStreak = props.currentStreak;
  const showWin = props.showWin;
  const showLose = props.showLose;

  const showGameComplete = props.showGameComplete;
  const randomPlayer = props.randomPlayer;

  const [showLinkMessage, setShowLinkMessage] = useState(false);
  const [linkMessage, setLinkMessage] = useState("SHARE");

  const Completionist = () => (
    <span className="stats-heading-available">REFRESH PAGE</span>
  );

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="stat">
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      );
    }
  };

  const handleShareButton = () => {
    navigator.clipboard.writeText("https://rlcsle.com");
    setLinkMessage("COPIED!");
    setShowLinkMessage(true);
  };

  return props.trigger ? (
    <div className="statsOuterContainer">
      <div className="statsContainer">
        <div className="statsInnerContainer">
          <div className="exitIconContainer">
            <img
              className="exitIcon"
              src={close}
              alt="Exit Icon"
              onClick={() => props.setTrigger(false)}
            />
          </div>
          {showWin && <p className="stats-heading-winner">WINNER!</p>}
          {showLose && (
            <div>
              <p className="stats-heading">THE MYSTERY PLAYER WAS</p>
              <p className="stats-heading-winner">{randomPlayer}</p>
            </div>
          )}
          <p className="stats-heading">STATISTICS</p>
          <div className="statsBox">
            <div className="statsContent">
              <div className="stat">{totalGames}</div>
              <div className="stat-label">Played</div>
            </div>
            <div className="statsContent">
              <div className="stat">{winPercentage}</div>
              <div className="stat-label">Win %</div>
            </div>
            <div className="statsContent">
              <div className="stat">{currentStreak}</div>
              <div className="stat-label">
                Current<br></br>Streak
              </div>
            </div>
          </div>
          {showGameComplete && (
            <div className="lowerBox">
              <div className="countdownBox">
                <p className="stats-heading">NEXT MYSTERY PLAYER IN:</p>
                <Countdown
                  date={new Date().setHours(24, 0, 0, 0)}
                  renderer={renderer}
                />
              </div>
              <div className="buttonBox">
                <button className="share-button" onClick={handleShareButton}>
                  {linkMessage}
                </button>
                {showLinkMessage && (
                  <p className="linkMessage">
                    A shareable link has been copied. Send it to your friends!
                  </p>
                )}
                <p className="ytMessage">
                  Watch my video to see how I made this game.
                </p>
                <a
                  href="https://youtu.be/pQKNzMJ1Ug8"
                  target="_blank"
                  rel="noreferrer"
                  className="yt-button-link"
                >
                  <button className="yt-button">WATCH</button>
                </a>
              </div>
            </div>
          )}
          <p className="sideMessage-1">
            by{" "}
            <a
              href="https://www.youtube.com/channel/UCvcR7QuqJKN58J-sQ970fWw"
              target="_blank"
              rel="noreferrer"
            >
              Cameron Bertie
            </a>
          </p>
          
            <p className="sponsor-message">
              <a href="https://thatobjective.com/" target="_blank" className="sponsorship">
                SPONSORED BY
              </a>
            </p>
            <div className="that-objective-container">
              <a href="https://thatobjective.com/" target="_blank">
                <img src={thatObjective} className="that-objective"></img>
              </a>
            </div>
            <p className="slogan">
              <a href="https://thatobjective.com/" target="_blank" className="sponsorship">
                THE WORLD'S FIRST TO-DO LIST APP FOR GAMERS
              </a>
            </p>
          
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
