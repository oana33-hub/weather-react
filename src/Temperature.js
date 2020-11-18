import React,{useState} from "react";

export default function Temperature(props) {
  const[unit,setUnit]= useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit(){
    return(props.celsius *9) /5+32;
  }
  if(unit=== "celsius"){
    return (
    <div>
       <h2> 
        <span className="temperature">{Math.round(props.celsius)}°C  </span>

       <span class="units">°C | <a href="/" onClick={showFahrenheit}  >°F </a>
         </span>
      </h2>
    </div>
        
  );
  } else{
    return(
      <div>
       <h2> 
        <span className="temperature">{Math.round(fahrenheit())}  </span>

       <span class="units"> <a href="/" onClick={showCelsius}  >°C </a>
         </span>
      </h2>
    </div>
        
  ); 
  }
  }
  


       
