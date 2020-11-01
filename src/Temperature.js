import React from "react";

export default function Temperature() {
  return (
    <div>
      <h2 className="temperature">
        <span className="temperature" id="temperature"></span>

        <span class="units">
          <a href="/" id="celsius-link" className="active" rel="noopener norefferrer" > °C</a>
         
          <a href="/" id="fahrenheit-link"  rel="noopener norefferrer">  °F{" "}</a>
         
        </span>
      </h2>
    </div>
  );
}
