import React from "react";
import { Link } from "react-router-dom";

export default function Weather(props) {
  const { current, forcast0, forcast1, forcast2, W_location , 
    forcastDet0, forcastDet1,forcastDet2 , forastro0,forastro1,forastro2} = props;

  return (
    <div>
      <div className="Time">
        <h5>{W_location.localtime}</h5>
      </div>

      <div className="current_main">
        <h1>
          {Math.floor(current.temp_c)}
          <sup>o</sup>
        </h1>

        <h3>{W_location.name}</h3>
        <h5>{W_location.region}</h5>
        <p>{W_location.country}</p>
      </div>

      <hr />

      <div
        className="Forcast"
        data-toggle="modal"
        
        data-target=".bd-example-modal-lg"
      >
        <h3 style={{ textAlign: "center" }}>Forecast</h3>
        <div
          className="forcast"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div className="Today">
            <p>Today</p>
            <img src={forcast0.icon} alt="Error" />
            <p>{forcast0.text}</p>
          </div>

          <div className="Tomm">
            <p>Tommorow</p>
            <img src={forcast1.icon} alt="Error" />
            <p>{forcast1.text}</p>
          </div>

          <div className="DAT">
            <p>Aft Tomm..</p>
            <img src={forcast2.icon} alt="Error" />
            <p>{forcast2.text}</p>
          </div>
        </div>
      </div>

{/*(*****************) Model */}
      <div
        class="modal fade bd-example-modal-lg"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
         
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
              <h1>Forcast Details</h1>

             <div className="close_btn" style={{textAlign: "right" , margin:'-20px 30px'}}>
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" style={{fontSize:'30px' , color:'red' , fontWeight:'800'}}>&times;</span>
        </button>
             </div>

              <div className="Today">
            <p style={{fontWeight:700}}>Today</p>
            <img src={forcast0.icon} alt="Error" />
            <p>{forcast0.text}</p>

            <div className="details" style={{display: "flex" , justifyContent:'space-around'}}>
                
                <p>Max Temp: {Math.floor(forcastDet0.maxtemp_c)} <sup>o</sup></p>
                <p>Min Temp: {Math.floor(forcastDet0.mintemp_c)} <sup>o</sup></p>
                <p><i class="fas fa-wind winda"></i> {forcastDet0.maxwind_kph}/Kmph</p>
                <p><i class="fas fa-sun sunna"></i> {forastro0.sunrise}</p>
                <p><i class="fas fa-moon moona"></i> {forastro0.sunset}</p>

            </div>

          
          </div>
<hr />
          <div className="Tomm">
            <p style={{fontWeight:700}}>Tommorow</p>
            
            <img src={forcast1.icon} alt="Error" />
            <p>{forcast1.text}</p>
            <div className="details" style={{display: "flex" , justifyContent:'space-around'}}>
               
                <p>Max Temp: {Math.floor(forcastDet1.maxtemp_c)} <sup>o</sup></p>
                <p>Min Temp: {Math.floor(forcastDet1.mintemp_c)} <sup>o</sup></p>
                <p><i class="fas fa-wind winda"></i> {forcastDet1.maxwind_kph}/Kmph</p>
                <p><i class="fas fa-sun sunna"></i> {forastro1.sunrise}</p>
                <p><i class="fas fa-moon moona"></i> {forastro1.sunset}</p>

            </div>
           
          </div>
<hr />
          <div className="DAT">
            <p style={{fontWeight:700}}>Day After Tomm..</p>
            <img src={forcast2.icon} alt="Error" />
            <p>{forcast2.text}</p>
            <div className="details" style={{display: "flex" , justifyContent:'space-around'}}>
                
                <p>Max Temp: {Math.floor(forcastDet2.maxtemp_c)} <sup>o</sup></p>
                <p>Min Temp: {Math.floor(forcastDet2.mintemp_c)} <sup>o</sup></p>
                <p><i class="fas fa-wind winda"></i> {forcastDet2.maxwind_kph}/Kmph</p>
                <p><i class="fas fa-sun sunna"></i> {forastro2.sunrise}</p>
                <p><i class="fas fa-moon moona"></i> {forastro2.sunset}</p>

            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}
