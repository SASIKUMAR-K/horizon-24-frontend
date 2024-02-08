import React from "react";
import './eventCard.css'
import Popup from './Popup'

const EventCard = (props) => {
    return (

        <>
        <div className="container">
        <div className="eventDiv">
            <div className="eventImage">
                <img src={props.eventImage} alt="" />
            </div>
            <div className="eventDetails">
                <div className="eventName">{props.eventName}</div>
                <div className="eventTime">Time : {props.eventTime}</div>
                <div className="eventVenue">Venue : {props.eventVenue}</div>
                <div className="eventDescription">{props.eventDesc}</div>
                <Popup></Popup>
                <div className="eventViewMoreButton"><button>View More &#62;&#62;</button></div>
            </div>
        </div>
        </div>
        </>
    );
  };

export default EventCard;