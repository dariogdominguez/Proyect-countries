import React from "react";
import { StyledInputTwo } from "../../styles/CreateActivityStyles";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";



export default function PredictiveInput ({ suggestions, callBack }) {    
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");
  console.log(filteredSuggestions)
    const onChange = (e) => {
      const userInput = e.target.value;
  
      // Filter our suggestions that don't contain the user's input
      const unLinked = suggestions.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
  
      setInput(e.target.value);
      setFilteredSuggestions(unLinked);
      setActiveSuggestionIndex(0);
      setShowSuggestions(true);
    };
  
    const onClick = (e) => {
    callBack(e.target.innerText)
    setFilteredSuggestions([]);
    setInput("");
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
    };
  
    const onKeyDown = (e) => {
      // User pressed the enter key
      if (e.keyCode === 13) {
        setInput(filteredSuggestions[activeSuggestionIndex]);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
      }
      // User pressed the up arrow
      else if (e.keyCode === 38) {
        if (activeSuggestionIndex === 0) {
          return;
        }
  
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
      // User pressed the down arrow
      else if (e.keyCode === 40) {
        if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
          return;
        }
  
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    };
  
    const SuggestionsListComponent = () => {
      return filteredSuggestions.length ? (
        <ul class="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            let className;
  
            // Flag the active suggestion with a class
            if (index === activeSuggestionIndex) {
              className = "suggestion-active";
            }
  
            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      ) : (
        <div class="no-suggestions">
          <span role="img" aria-label="tear emoji">
            😪
          </span>{" "}
          <em>sorry no suggestions</em>
        </div>
      );
    };
  
    return (
      <>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={input}
        />
        {showSuggestions && input && <SuggestionsListComponent />}
      </>
    );
  };