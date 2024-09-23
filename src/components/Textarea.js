import React, { useState } from "react";

export default function Textarea(props) {
  const handleUpperClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase")
  };
  const handleLowerClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase")
  };
  const handleClearClick = () => {
    let newtext = " ";
    setText(newtext);
    props.showAlert("Text has been cleared")
  };
  const handleReadText = () => {
    const speech = window.speechSynthesis;
    if (speech) {
      const utterance = new SpeechSynthesisUtterance(text);
      speech.speak(utterance);
    }
    props.showAlert("Reading Text start")

  }  

  const wordCount = (text)=>{
    let regex = /\s+\S+/;
    let numOfWords = text.split(regex);
    return numOfWords.length;
  }  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control" 
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className=" btn btn-info" onClick={handleUpperClick}>
          Convert to Uppercase
        </button>
        <button className=" btn btn-info mx-3" onClick={handleLowerClick}>
          Convert to Lowercase
        </button>
        <button className=" btn btn-info mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className=" btn btn-info mx-2" onClick={handleReadText}>
          Read Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <h5 className="my-3">
          <p>
            {text===""?0:wordCount(text)}words & {text.length}character
          </p>
        </h5>
        <h3 className="my-3">
          <p>{text===""?0*0.008:wordCount(text)*0.008}Minutes read</p>
        </h3>
      </div>
       <h2 className="my-2 mx-2">Preview</h2>
        <h4 className="mx-3"><p>{text.length>0?text:"Enter the text Above in the box to preview it...."}</p></h4>
    </>
  );
}
