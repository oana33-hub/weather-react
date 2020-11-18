import React from "react";

import Temperature from "./Temperature";
import Weather from "./Weather";
import Daily from "./Daily";
import Weekdays from "./Weekdays";
import Footer from "./Footer";
import "./footer.css";
import "./weekdays.css";
import "./styles.css";



import "./temperature.css";

import "./daily.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="card-body">
            <Weather defaultCity="Paris"/>
             <div className = "temperature">
             <Temperature/>
           </div>
            <Daily />
            <Weekdays />
            <Footer />
           
          
          </div>
        </div>
      </div>
    </div>
  );
}
