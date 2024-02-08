import React from "react";
import Navbar from "./Navbar";
import EventCard from "./eventCard";
import CopyRights from "./copyRights";
import eventImage from '../img/event1.jpg'
import './eventspage.css'
function EventsPage(){
    return(
        <div> 
        <Navbar></Navbar>
        <div className="headingDay">DAY 1</div>
        <div className="headingTech">TECHNICAL</div>
        <div className="eventListDiv">
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        </div>
        <div className="headingTech nonTechHead">NON-TECHNICAL</div>
        <div className="eventListDiv">
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        </div>
        <div className="headingDay">DAY 1</div>
        <div className="headingTech">TECHNICAL</div>
        <div className="eventListDiv">
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        </div>
        <div className="headingTech nonTechHead">NON-TECHNICAL</div>
        <div className="eventListDiv">
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        <EventCard eventImage={eventImage} eventName="CODE FEST" eventTime="10Am" eventVenue="1st Floor" eventDesc="hii all welcomehii all welcomehii all welcomehii all welcomehii all welcome"></EventCard>
        </div>
        <CopyRights></CopyRights>

        </div>
    );
}
export default EventsPage;