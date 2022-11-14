import React from "react";
import "../styles/Statistics.css";
import close from "../close.svg";
import Countdown, { zeroPad } from "react-countdown";

export default function FirstStats(props) {
  const totalGames = props.totalGames;
  const totalWins = props.totalWins;
  const winPercentage = props.winPercentage;
  const currentStreak = props.currentStreak;
  const maxStreak = props.maxStreak;
  const showWin = props.showWin;
  const showLose = props.showLose;

  const showGameComplete = props.showGameComplete;
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

  // const [showLinkMessage, setShowLinkMessage] = useState(false);
  // const [linkMessage, setLinkMessage] = useState("SHARE");

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

  // const handleShareButton = () => {
  //   navigator.clipboard.writeText("https://rlcsle.com");
  //   setLinkMessage("COPIED!");
  //   setShowLinkMessage(true);
  // };

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
            <div className="statsContent">
              <div className="stat">{maxStreak}</div>
              <div className="stat-label">
                Max<br></br>Streak
              </div>
            </div>
          </div>
          {totalWins > 0 &&
          <>
          <p className="stats-heading">GUESS DISTRIBUTION</p>
          <div className="graph-container">
            <div className="graph-box">
              <div className="graph-label">1</div>
              <div
                className="graph-data"
                style={{ width: round1Percentage + "%", ...(round1Guess ? {background: "#538D4E"} : {background: "#3a3a3c"} ) }}
              >
                {round1Win}
              </div>
            </div>
            <div className="graph-box">
              <div className="graph-label">2</div>
              <div
                className="graph-data"
                  style={{ width: round2Percentage + "%", ...(round2Guess ? {background: "#538D4E"} : {background: "#3a3a3c"} )}}
              >
                {round2Win}
              </div>
            </div>
            <div className="graph-box">
              <div className="graph-label">3</div>
              <div
                className="graph-data"
                style={{ width: round3Percentage + "%", ...(round3Guess ? {background: "#538D4E"} : {background: "#3a3a3c"} ) }}
              >
                {round3Win}
              </div>
            </div>
            <div className="graph-box">
              <div className="graph-label">4</div>
              <div
                className="graph-data"
                style={{ width: round4Percentage + "%", ...(round4Guess ? {background: "#538D4E"} : {background: "#3a3a3c"} ) }}
              >
                {round4Win}
              </div>
            </div>
            <div className="graph-box">
              <div className="graph-label">5</div>
              <div
                className="graph-data"
                style={{ width: round5Percentage + "%", ...(round5Guess ? {background: "#538D4E"} : {background: "#3a3a3c"} ) }}
              >
                {round5Win}
              </div>
            </div>
            <div className="graph-box">
              <div className="graph-label">6</div>
              <div
                className="graph-data"
                style={{ width: round6Percentage + "%", ...(round6Guess ? {background: "#538D4E"} : {background: "#3a3a3c"} ) }}
              >
                {round6Win}
              </div>
            </div>
            <div className="graph-box">
              <div className="graph-label">7</div>
              <div
                className="graph-data"
                style={{ width: round7Percentage + "%", ...(round7Guess ? {background: "#538D4E"} : {background: "#3a3a3c"} ) }}
              >
                {round7Win}
              </div>
            </div>
          </div>
          </>
}
          {showGameComplete && (
            <div className="lowerBox-container">
            <div className="lowerBox">
              <div className="countdownBox">
                <p className="stats-heading">NEXT MYSTERY PLAYER IN:</p>
                <Countdown
                  date={new Date().setHours(24, 0, 0, 0)}
                  renderer={renderer}
                />
              </div>
              <div className="buttonBox">
              <p className="linkMessage">
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
          </div>
          )}
            
           {/* <p className="sideMessage-1">
            by{" "}
            <a
              href="https://www.youtube.com/channel/UCvcR7QuqJKN58J-sQ970fWw"
              target="_blank"
              rel="noreferrer"
            >
              Cameron Bertie
            </a>
          </p>  */}

          {/* <p className="sponsor-message">
            <a
              href="https://thatobjective.com/"
              target="_blank"
              className="sponsorship"
            >
              SPONSORED BY
            </a>
          </p>
          <div className="that-objective-container">
            <a href="https://thatobjective.com/" target="_blank">
              <img src={thatObjective} className="that-objective"></img>
            </a>
          </div>
          <p className="slogan">
            <a
              href="https://thatobjective.com/"
              target="_blank"
              className="sponsorship"
            >
              THE WORLD'S FIRST TO-DO LIST APP FOR GAMERS
            </a>
          </p> */}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
