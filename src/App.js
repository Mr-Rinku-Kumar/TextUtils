import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (massage) => {
    setAlert({
      massage: massage,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#323031";
      const formControl = document.querySelector(".form-control");
      formControl.style.color = "#5f5b6b";
      formControl.style.backgroundColor = "white";
      showAlert("light mode enabled");
      document.title = "Textutils-light mode";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#323031";
      document.body.style.color = "white";
      showAlert("dark mode enabled");
      document.title = "Textutils-dark mode";
      const formControl = document.querySelector(".form-control");
      formControl.style.color = "#fff";
      formControl.style.backgroundColor = "#5f5b6b";
      // setInterval(() => {
      // document.title="Textutils-is Amazing website"
      // }, 1000);
      // setInterval(() => {
      // document.title=" Install-Textutils"
      // }, 1500);
    }
  };
  return (
    <>
      <Router>
        <Navbar
          About="About"
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About about={"About TextUtils"}/>
            </Route>
            <Route exact path="/">
              <Textarea
                showAlert={showAlert}
                heading="Enter your text to analyze"
                mode={mode}
              />
            </Route>
          </Switch> 
        </div>
       </Router>
    </>
  );
}
export default App;
