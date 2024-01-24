import React, { useState } from "react";
import "./InputText.css";
import TextSummary from "./TextSummary";
import SentimentAnalyses from "./Sentiment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const removeLeadingSpaces = (text) => {
  while (text[text.length - 1] === " ") {
    text = text.slice(0, text.length - 1);
  }
  let r = text.split("");
  for (let i = 0; i < text.length; i++) {
    if (r[i - 1] === " " && r[i] !== " ") {
      r[i] = r[i].toUpperCase();
    } else {
      r[i] = r[i].toLowerCase();
    }
  }
  return r.join("");
};

const InputText = () => {
  const [text, settext] = useState("");

  const handleChange = (e) => {
    // console.log(text);
    settext(e.target.value);
  };
  const handleClear = () => {
    settext("");
  };

  const handleUpper = () => {
    settext(text.toUpperCase());
  };

  const handleLower = () => {
    settext(text.toLowerCase());
  };

  const handleTitle = () => {
    settext((prevText) => {
      const word = removeLeadingSpaces(prevText);
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  };

  const handleSpaces = () => {
    settext(text.split(/\s+/g).join(" "));
  };

  const notify = () => {
    toast.success('Copied to clipboard!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    notify();
  };


  return (
    <div>
      <div className="center">
        <textarea
          onChange={handleChange}
          value={text}
          placeholder="Enter your text here"
          className="textarea"
          style={{ backgroundColor: "	#686868", fontSize: "20px" }}
          rows="10"
          cols="90"
        />
      </div>
      <br />
      <div className="buttons">
        <button onClick={handleClear} className="button">
          Clear text
        </button>
        <button onClick={handleUpper} className="button">
          Upper case
        </button>
        <button onClick={handleLower} className="button">
          Lower case
        </button>
        <button onClick={handleTitle} className="button">
          Title case
        </button>
        <button onClick={handleSpaces} className="button">
          remove extra spaces
        </button>
        <button onClick={handleCopy} className="button">
          Copy to clipboard
        </button>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
      </div>
      <TextSummary text={text} />
      <SentimentAnalyses text={text} />
    </div>
  );
};

export default InputText;
