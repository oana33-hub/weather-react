import React from "react";
import axios from 'axios';
 import Loader from 'react-loader-spinner';
export default function Weather(props){
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);

    }
    let apiKey= "71d6dfd3b336163612f9cfac0fa5a0ed";
    let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return(
       
            <Loader
         type="Puff"
         color="orange"
         height={100}
         width={100}
         timeout={3000} 
 
      />
       
    )
}