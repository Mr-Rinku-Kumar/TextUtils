import React from "react";

export default function About(props) {

  
  return (
    <>
      <h1 className="my-5">{props.toggleMode}</h1>
      <form className="my-box" >
        <div className="my-5">
          <p className="my-3 mx-3">
            TextUtils is a simple and powerful utility app designed to make text
            manipulation easy and efficient. Whether you're a student,
            developer, writer, or just someone who works with text frequently,
            TextUtils provides a suite of features to save time and boost
            productivity.
            <div className="my-3">
              <h2>Key Features</h2>
            </div>
            : <h4>Convert to Uppercase</h4>: Converts all characters in a given
            text to uppercase. For example, "hello world" becomes "HELLO WORLD."
            <h5>Use case</h5>: Emphasizing text, or when a format requires
            capital letters.
            <h4>Convert to Lowercase</h4>: Converts all characters in a given
            text to lowercase. For example, "HELLO WORLD" becomes "hello world."
            <h5>Use case</h5>: Standardizing text input or when lowercase
            letters are preferred for a uniform look.
            <h4>Clear Text</h4>: Removes all characters from the text, leaving
            an empty field.
            <h5>Use case</h5>: Resetting an input field or starting fresh
            without any content.
            <h4>Read Text</h4>: Retrieves and processes text for output or
            further actions, like displaying or reading aloud.
            <h5>Use case</h5>: Can be used when reading data from a file, form,
            or user input, or for accessibility features like screen readers.
          </p>
        </div>
      </form>
    </>
  );
}
