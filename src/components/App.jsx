import React from "react";
import Navbar from "./Navbar"
import Horizongif from "./Horizongif";
import './App.css'
import './AppResponsive.css'
import CopyRights from './copyRights'
import Form from "./Form";


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
