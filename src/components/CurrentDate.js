import React from "react";
import "./CurrentDate.css";

function CurrentDate({ date, theme, location, locations }) {
  return (
    <p className={`current-date current-date-${theme}`}>
      {date[0]}{" "}
      <a
        className={`year year-${theme}`}
        href={`https://www.islamskazajednica.ba/images/download/takvim_${date[1]}.pdf`}
      >
        {date[1]}
      </a>{" "}
    </p>
  );
}

export default CurrentDate;
