import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MonthButton from "./components/month-btn";
function App() {
  let [month, updateMonth] = useState(null);
  let [year, updateYear] = useState(null);
  let navigate = useNavigate();

  function handleUpdateMonth(month) {
    updateMonth(month);
  }
  function handleonChange(e) {
    updateYear(e.target.value);
  }
  async function handleClick() {
    await fetch("/.netlify/functions/getco2", {
      method: "POST",
      body: JSON.stringify({
        year: year,
        month: `${month}` | 1,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        navigate(`/results/${data.data.bornYearData}/${data.data.currentData}`);
      });
  }
  return (
    <div>
      <h3>Climate Change is Real</h3>
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
        Please enter your birth year and select birth month to compare co2 data
        of your born-year with the current co2 in the atmosphere.
      </h4>
      <div className="info">
        <div className="info-form">
          <div className="info-textbox">
            <div>
              <label>Birth-Year </label>
              <input
                type="text"
                placeholder={`1980-${new Date().getFullYear()}`}
                onChange={handleonChange}
              />
            </div>
            <div className="month-btn">
              <MonthButton handleUpdateMonth={handleUpdateMonth} />
            </div>
          </div>
          <button type="submit" onClick={handleClick} className="info-btn">
            Get Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
