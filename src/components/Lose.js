import React from "react";
import "../styles/Win.css";
import Countdown, {zeroPad} from 'react-countdown'

export default function Lose(props) {

    const showLose = props.showLose;
    const randomPlayer = props.randomPlayer;

    const Completionist = () => <span className="clock-available">REFRESH PAGE</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span className="clock">{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
  }
};

    return (
        <div>
        {showLose && (
        <div className="win-container">
          
          <p className="mystery-heading">THE MYSTERY PLAYER WAS </p>
          <p className="winner-heading">{randomPlayer}</p>
          <p className="mystery-heading">NEXT MYSTERY PLAYER IN:</p>
          <div className="clock-box">
          <Countdown date={new Date().setHours(24, 0, 0,0)} renderer={renderer} />
          </div>
        </div>
    )}
    </div>
    )
}