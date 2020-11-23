import React,{useState} from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props){
 const[ready,setReady]= useState (false);  
 const[weatherData,setWeatherData]=useState(null);   
   
function handleResponse(response){
    console.log(response.data);

    setWeatherData({
       
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    wind: response.data.main.speed,
    city: response.data.name
    
    });
  setReady(true);
  
   
  
}
if(ready) {
return( 
    <div className="Weather">
<form>
    <div className="row">
     <div className="col-9"> 
    
    <input type="search" 
    placeholder="Enter a city..."
    className="form-control"
    autoFocus="on"
   />
    </div>  
    <div className="col-3">
    <input type="submit"
     value="Search" 
     className="btn btn-primary w-100" />
</div>
</div>
</form>

<h1>{weatherData.city}</h1>
<ul>
    <li><FormattedDate date={weatherData.date} /></li>
    <li className="text-capitalize">
       {weatherData.description}
    </li>
</ul>
<div className="row mt-3">
    <div className="col-6">
<div className="clearfix">

    <img 
    src={weatherData.iconUrl}
    alt={weatherData.description}
    className="float-left"
    />
<div className="float-left">
 <span className="temperature">{Math.round(weatherData.temperature)}</span>
     <span className="unit">°C</span>

 </div>  
</div>
</div>
<div className="col-6">
    <ul>
        <li> Precipitation: 15% </li>
         <li>  Humidity:{weatherData.humidity} % </li>
         <li>  Wind: {weatherData.wind} km/h  </li>
         
    </ul>
</div>
</div>
</div>
    
 );
} else{
   const apiKey= "71d6dfd3b336163612f9cfac0fa5a0ed";

let units ="metric";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;   
  axios.get(apiUrl).then(handleResponse); 
return " Loading..";
}     

}







      
       
          
       
   