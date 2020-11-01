import React from "react";

export default function Temperature() {
  return (
    <div>
      <h2 className="temperature">
        <span className="temperature" id="temperature"></span>

        <span class="units">
          <a href="#" id="celsius-link" className="active" />
          °C
          <a href="#" id="fahrenheit-link" />
          °F{" "}
        </span>
      </h2>
    </div>
  );
}
