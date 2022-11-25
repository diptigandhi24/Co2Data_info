import "./App.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MonthButton from "./components/month-btn";
function App() {
  let [month, updateMonth] = useState(null);
  let [year, updateYear] = useState(null);
  let [isError, updateIsError] = useState(false);
  let navigate = useNavigate();
  const emailInput = useRef(null);

  useEffect(() => {
    if (emailInput.current) {
      emailInput.current.focus();
    }
  }, []);

  function handleUpdateMonth(month) {
    updateMonth(month);
  }
  function handleonChange(e) {
    updateYear(e.target.value);
  }

  async function getco2Data() {
    await fetch("/.netlify/functions/getco2", {
      method: "POST",
      body: JSON.stringify({
        year: year,
        month: `${month}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/results/${data.data.bornYearData}/${data.data.currentData}`);
      });
  }
  async function handleClick() {
    if (
      year !== null &&
      Number(year) >= 1980 &&
      Number(year) <= new Date().getFullYear()
    ) {
      getco2Data();
    } else {
      updateIsError(true);
      emailInput.current.style.outline = "2px solid red";
      emailInput.current.style.border = "none";
    }
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
        supercharging the natural greenhouse effect, causing earth's temperature
        to rise.
      </p>
      <p>
        Threshold for global change in temperature is set no more than 1.5
        degrees C above pre-industrial averages, before climate changes cause
        disastrous, unpredictable effects. We are already at 1.3 degrees C
      </p>
      <h4>
        To see how much more CO2 is in the air now from the year you were born
        enter the year and month you were born
      </h4>
      <div className="info">
        <div className="info-form">
          <div className="info-textbox">
            <div className="focus-input">
              <label>Birth-Year </label>
              <input
                type="text"
                className="search-input"
                placeholder={`1980-${new Date().getFullYear()}`}
                onChange={handleonChange}
                ref={emailInput}
              />
              {isError === true ? (
                <p className="year-error">
                  Please enter the bornyear between 1980-
                  {new Date().getFullYear()}
                </p>
              ) : null}
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
