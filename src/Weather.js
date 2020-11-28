import React,{useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props){
 
 const[weatherData,setWeatherData]=useState({ready: false});   
 const [city,setCity] = useState(props.city);  
function handleResponse(response){
    console.log(response.data);

    setWeatherData({
     ready: true, 
    feels_like: response.data.main.feels_like, 
    temp_max: response.data.main.temp_max,  
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon:response.data.weather[0].icon,
    wind: response.data.wind.speed,
    city: response.data.name
    
    });
    }
    function search() {

const apiKey= "71d6dfd3b336163612f9cfac0fa5a0ed";
let units ="metric";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;   
  axios.get(apiUrl).then(handleResponse); 
    }
  
   
  
 function handleSubmit(event) {
     event.preventDefault();
   search();
 }  
  function handleCityChange (event){
setCity(event.target.value);

  }

if(weatherData.ready) {
return( 
    <div className="Weather">
<form onSubmit={handleSubmit}>
    <div className="row">
     <div className="col-9"> 
    
    <input type="search" 
    placeholder="Enter a city..."
    className="form-control"
    autoFocus="on"
    onChange= {handleCityChange}
   />
    </div>  
    <div className="col-3">
    <input type="submit"
     value="Search" 
     className="btn btn-primary w-100" />
</div>
</div>
</form>
<WeatherInfo data = {weatherData}/>
 <WeatherForecast city ={weatherData.city}/>
</div>
    
 );
} else{
search();
return " Loading..";
}     

}







      
       
          
       
   