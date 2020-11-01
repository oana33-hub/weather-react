import React from "react";

export default function Description() {
  return (
    <div>
      <div className="description-weather">
        <p>
          description: <span className="description" id="description"></span>
          <br />
          wind: <span className="wind" id="wind"></span>km/h
          <br />
          humidity: <span className="humidity" id="humidity"></span> %{" "}
        </p>
      </div>
      <img src="" id="icon" alt="" />
    </div>
  );
}
