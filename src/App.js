import React from "react";
import Form from "./Form";
import Temperature from "./Temperature";

import Daily from "./Daily";
import Weekdays from "./Weekdays";
import Footer from "./Footer";
import "./footer.css";
import "./weekdays.css";
import "./styles.css";


import "./form.css";
import "./temperature.css";

import "./daily.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="card-body">
            <Form />
            <Temperature />
           
            <Daily />
            <Weekdays />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
