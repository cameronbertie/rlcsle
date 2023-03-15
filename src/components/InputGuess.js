import React from "react";
import "../styles/InputGuess.css";

export default function InputGuess(props) {

    const guess = props.guess;
    const showGuessInput = props.showGuessInput;
    const currentGuessInput = props.currentGuessInput;
    const nextGuessInput = props.nextGuessInput;
    const value = props.value;
    const handleChange = props.handleChange;
    const disableButton = props.disableButton;
    const handleGuess = props.handleGuess;

    return (
        <div>
        {showGuessInput && (
          <div>
          <div className="inputGuessContainer">
        <p className="guessInput">
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Type your guess here"
            id="guessInput"
            autoComplete="off"
          />
          <button
          className="btn--submit--guess"
            disabled={disableButton}
            onClick={() =>
              handleGuess(guess, currentGuessInput, nextGuessInput)
            }
          >
            GUESS
          </button>
        </p>
        
        </div>
        <div className="description-container">
        <p className="input-description">You can only guess from players that qualified for the Winter Major. This does not include substitutes.</p>
        </div>
        </div>
        )}
        </div>
    )
}