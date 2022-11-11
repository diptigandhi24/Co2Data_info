import { useState } from "react";
import "../App.css";
export default function MonthButton({ handleUpdateMonth }) {
  // local state if button to show user what is selected

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [currentSelectID, updateCurrentSelectID] = useState(null);
  //let's give state to each button which will be responsible to display select and default state of button
  const [currentSelectBg, updateCurrentSelectBg] = useState(
    Array(12).fill("btn-default-color")
  );

  function handleonClick(e) {
    updateCurrentSelectBg((prev) => {
      const temp = prev;
      if (currentSelectID !== null) {
        temp[currentSelectID] = "btn-default-color";
        temp[e.target.id] = "btn-active-color";
        handleUpdateMonth(Number(e.target.id) + 1);
        console.log("Selected month is", e.target.id);
      } else {
        temp[e.target.id] = "btn-active-color";
        handleUpdateMonth(Number(e.target.id) + 1);
        console.log("Selected month is", e.target.id);
      }
      return [...temp];
    });
    updateCurrentSelectID(e.target.id);
  }
  return (
    <>
      {months.map((month, index) => (
        <button
          onClick={handleonClick}
          id={index}
          key={index}
          className={currentSelectBg[index]}
        >
          {month}
        </button>
      ))}
    </>
  );
}
