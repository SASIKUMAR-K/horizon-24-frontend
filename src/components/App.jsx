import React from "react";
import Navbar from "./Navbar"
import Horizongif from "./Horizongif";
import Time from "./Time";
import Dayevents from "./Dayevents";
import './App.css'
import './AppResponsive.css'
import CopyRights from './copyRights'
import EventsPage from './EventsPage'
import AboutPage from "./AboutPage";


function App(){
    return(
        <>
            <Navbar></Navbar>
            <Horizongif></Horizongif>
            <CopyRights></CopyRights>
        </>
        
    );
}
export default App;
