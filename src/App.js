import React from "react";


import Weather from "./Weather";
import Daily from "./Daily";
import Weekdays from "./Weekdays";
import Footer from "./Footer";
import "./footer.css";
import "./weekdays.css";
import "./styles.css";
import "./daily.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="card-body">
            <Weather city ="Paris"/>
           
             
           
            <Daily />
            <Weekdays />
            <Footer />
            </div>
          
          </div>
        </div>
      </div>
  
  );
}
