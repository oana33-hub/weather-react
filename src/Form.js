 import React, { useState } from "react";
import axios from "axios";
import "./form.css";
export default function Form() {
  let [city, setCity] = useState("");
  let [response, setResponse] = useState("");

  function showTemperature(response) {
    if (city === "") {
      setResponse(`Searching for ${city}`);
    } else {
      setResponse(
       <div>
          <h1 class="city"> {city}</h1>
          <h2>Temperature: {Math.round(response.data.main.temp)}°C </h2>
          <ul>
          <li>Description: {response.data.weather[0].main} </li>
          <li>Humidity: {Math.round(response.data.main.humidity)}% </li>
          <li>Wind Speed: {response.data.wind.speed} km/h </li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              alt=""
            ></img>
          </li>
        </ul>
        </div>
      );
    }
  }
  function getData(event) {
    event.preventDefault();
    let apiKey = "71d6dfd3b336163612f9cfac0fa5a0ed";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function City(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form>
        <input type="search" onChange={City} placeholder="Search for a city" autoCapitalize="on" autoComplete="off"autoFocus="on"/>
        <input type="submit" value="search" onClick={getData} />
      </form>
      <h1>{response}</h1>
    </div>
  );
}
