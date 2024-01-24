import React from "react";
import "./TextSummary.css";

const TextSummary = (props) => {
  const words = props.text.split(/\s+/).filter(word => word.length!==0).length;
  const chars = props.text.split("").length;
  const lines = props.text.split("\n").length;
  const vowels = (props.text.match(/[aeiou]/gi)||[]).length;
  const consonants = (props.text.match(/[bcdfghjklmnpqrstvwxyz]/gi)||[]).length;
  const spaces = props.text.split(" ").length-1;
  return (
    // <div className="center">
      <div className="contain center1">
        <h3 className="center1">Text Summary</h3>
        <ul className="contain">
          <li>Number of words: {words} </li>
          <li>Number of characters: {chars}</li>
          <li>Number of lines: {props.text.length !== 0 ? lines : 0}</li>
          <li>Number of vowels: {vowels}</li>
          <li>Number of consonants: {consonants}</li>
          <li>Number of spaces: {spaces}</li>
        </ul>
      </div>
    // </div>
  );
};

export default TextSummary;
