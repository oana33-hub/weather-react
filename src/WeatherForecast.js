import React, {useState} from "react";
import axios from "axios";
import "./WeatherForecast.css";



export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);

function handleForecastResponse(response){
    setForecast(response.data);
    setLoaded(true);
   
}


if(loaded){
   
    return forecast.list[0].main.temp;
}else {
        const apiKey = "71d6dfd3b336163612f9cfac0fa5a0ed";  
        let url =`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
     axios.get(url).then(handleForecastResponse);   

         return null;
}
  }     