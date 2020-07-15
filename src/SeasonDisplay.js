import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "Brrr it's chilly",
        iconName: "snoflake"
    }
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude < 0 ? "summer" : "winter";
  } else {
    return latitude < 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth);
  const {text, iconName} = seasonConfig[season];
  return (
    <div class={`season-display ${season}`}>
        <i className={`icon-left ${iconName} huge icon`} />
        <h1>{text}</h1>
        <i className={`icon-right ${iconName} huge icon`} />
    </div>
  );
};

export default SeasonDisplay;
