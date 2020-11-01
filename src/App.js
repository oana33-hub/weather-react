import React from "react";
import Form from "./Form";
import City from "./City";
import Date from "./Date";
import Temperature from "./Temperature";
import Description from "./Description";
import Daily from "./Daily";
import Weekdays from "./Weekdays";
import Footer from "./Footer";
import "./footer.css";
import "./weekdays.css";
import "./styles.css";
import "./city.css";
import "./date.css";
import "./form.css";
import "./temperature.css";
import "./description.css";
import "./daily.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="card-body">
            <Form />
            <City />
            <Date />
            <Temperature />
            <Description />
            <Daily />
            <Weekdays />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
