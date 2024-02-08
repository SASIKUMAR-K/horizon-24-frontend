import React from "react";
import horizon from "../img/homeHorizon.mp4"
import Time from './Time'
function Horizongif(){
    return(
        <>
         <div className="below-nav"></div>
		<div className="horizon-container">
		<video autoPlay loop muted className="horizon-video">
        <source src={horizon} type="video/mp4" />
      </video>
		</div>
		<div className="blueContainer">
		<div className="container">
			<div className="centerText">
				<div>25 & 26 FEBRUARY 2024</div>
				<div>SOME TEXT REGARDING EVENT</div>
			</div>
		</div>
		<Time></Time>
        </div>
		<div className="container">
			<button className="registerNow">REGISTER NOW</button>
		</div>
		</>
    );
}
export default Horizongif;