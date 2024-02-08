import React from "react";
import SistLogo2 from '../img/sistLogo2.png'
import AcmLogo from '../img/acmLogo.png'
import AcmWLogo from '../img/acmWLogo.png'
import './copyRights.css'

function CopyRights(){
    return(
        <>
        <div className="imgiContainer">
            <div class='sist'><img  src={SistLogo2} alt="" /></div>
            <div  class="acm acmm" ><img src={AcmLogo} alt="" /></div>
            <div class="acm"><img  src={AcmWLogo} alt="" /></div>
        </div>
        <center><div className="copyLine"></div></center>
        <div className="copyRightContent">Copyright ©2023 Association for Computing Machinery (ACM) SIST All rights reserved</div>
        </>
    );
}

export default CopyRights;
