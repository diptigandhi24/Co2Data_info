import "./App.css";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  // let [month, updateMonth] = useState("1");
  // let [year, updateYear] = useState("1980");
  let navigate = useNavigate();
  async function handleClick() {
    await fetch("/.netlify/functions/getco2", {
      method: "POST",
      body: JSON.stringify({
        year: "2021",
        month: "2",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        navigate("/results", { state: { data: data } });
      });
  }
  return (
    <div>
      <p>
        Each year, human activities release more carbon dioxide into the
        atmosphere than natural processes can remove.
      </p>
      <p>
        By adding more carbon dioxide to the atmosphere, people are
        supercharging the natural greenhouse effect, causing global temperature
        to rise.
      </p>
      <p>
        Threshold for global change in temperature is set no more than 1.5
        degrees C above pre-industrial averages, before climate changes cause
        disastrous, unpredictable effects. We are already at 1.3 degrees C
      </p>
      <h4>
        Please Enter your birth-year and select birth Month to get the co2 data
      </h4>
      <div className="info">
        <div className="info-form">
          <div className="info-textbox">
            <div>
              <label>Birth-Year </label>
              <input
                type="text"
                placeholder={`1980-${new Date().getFullYear()}`}
              />
            </div>
            <div className="month-btn">
              <button>Jan</button>
              <button>Feb</button>
              <button>Mar</button>
              <button>Apr</button>
              <button>May</button>
              <button>Jun</button>
              <button>Jul</button>
              <button>Aug</button>
              <button>Sep</button>
              <button>Oct</button>
              <button>Nov</button>
              <button>Dec</button>
            </div>
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
