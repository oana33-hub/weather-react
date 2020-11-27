import React from "react";


import Weather from "./Weather";

import Footer from "./Footer";
import "./footer.css";

import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="card-body">
            <Weather city ="Paris"/>
            <Footer />
            </div>
          
          </div>
        </div>
      </div>
  
  );
}

             
           
           
           