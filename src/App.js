import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  let [month, updateMonth] = useState("1");
  let [year, updateYear] = useState("1980");

  // async function getco2Data
  async function handleClick() {
    await fetch("/.netlify/functions/getco2", {
      method: "POST",
      body: JSON.stringify({
        year: "2021",
        month: "2",
      }),
    }).then((res) => console.log("response received is", res));
  }
  return (
    <div className="App">
      <div className="info">
        <div className="info-form">
          <div className="info-textbox">
            <label>
              Year: <input type="text" placeholder="Birth Year" />
            </label>
            <label>
              Months: <input type="text" placeholder="Birth Month" />
            </label>
          </div>
          <button type="submit" onClick={handleClick}>
            Get Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
