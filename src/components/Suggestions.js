import React from "react";
import "../styles/Suggestions.css";

export default function Suggestions(props) {

    const showSuggestions = props.showSuggestions;
    const handleSuggestionClick = props.handleSuggestionClick;
    const suggestions = props.suggestions;

    return (
      
      <div>
        {showSuggestions && (
          <div className="upperContainer">
        <div className="suggestions">
          {suggestions.map((suggestion) => (
            <div className="suggestion"
              onClick={() => handleSuggestionClick(suggestion)}
              key={suggestion}
            >
              {suggestion}
            </div>
          ))}
        </div>
        </div>
        )}
        </div>

    )
}

