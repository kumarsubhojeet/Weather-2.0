import React, { useState , useEffect } from "react";
import axios from "axios";
import Weather from '../Components/Weather'
require('dotenv').config()

const Home = () => {
  const [location, setname] = useState('london');

  const Key = process.env.React_App_API_KEY

  const [current , setcurrent] = useState({})

  const [forcast0 , setforcast0] = useState([])
  const [forcast1 , setforcast1] = useState([])
  const [forcast2 , setforcast2] = useState([])

  const [forcastDet0 , setforcastDet0] = useState([])
  const [forcastDet1 , setforcastDet1] = useState([])
  const [forcastDet2 , setforcastDet2] = useState([])

  const [forastro0 , setforastro0] = useState([])
  const [forastro1 , setforastro1] = useState([])
  const [forastro2 , setforastro2] = useState([])

  const [W_location , setW_location] = useState({})

  useEffect(() => {
    btnClick();
  }, [])


  const btnClick = async() => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${Key}&q=${location}&days=4&aqi=no&alerts=no`
      );
      setcurrent(res.data.current);

     setforcast0(res.data.forecast.forecastday[0].day.condition);
     setforcast1(res.data.forecast.forecastday[1].day.condition);
     setforcast2(res.data.forecast.forecastday[2].day.condition);

     setforcastDet0(res.data.forecast.forecastday[0].day);
     setforcastDet1(res.data.forecast.forecastday[1].day);
     setforcastDet2(res.data.forecast.forecastday[2].day);

     setforastro0(res.data.forecast.forecastday[0].astro)
     setforastro1(res.data.forecast.forecastday[1].astro)
     setforastro2(res.data.forecast.forecastday[2].astro)

      setW_location(res.data.location);
    } 
    
    catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <h1 style={{textAlign: 'center' , marginTop:'25px' , color:'black'}}>Weather Report Widget</h1>
      
      <div className="input_bar"style={{borderRadius: '12px'}}>
        <div className="input-group mb-3" >
          <input
            type="text"
            value={location}
            style={{textAlign: 'center'}}
            onChange={(e) => setname(e.target.value)}
            className="form-control"
            placeholder="City Name..."
          />

         
           
         
        </div>
        <button
              className="btn btn-outline-primary"
              onClick={btnClick}
              type="button"
            >
              Search
            </button>
      </div>

      <div className="weather_main">

        <Weather
        current={current}
        forcast0={forcast0}
        forcast1={forcast1}
        forcast2={forcast2}
        W_location={W_location}
        forcastDet0={forcastDet0}
        forcastDet1={forcastDet1}
        forcastDet2={forcastDet2}
        forastro0={forastro0}
        forastro1={forastro1}
        forastro2={forastro2}
        />
        
      </div>
    </>
  );
};

export default Home;
