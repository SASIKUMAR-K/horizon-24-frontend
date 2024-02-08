import React from "react";
import Navbar from "./Navbar";
import CopyRights from './copyRights'
import './aboutpage.css'
import about1img from "../img/about1.jpeg";
import about2img from "../img/about2.jpeg";
import about3img from "../img/about3.jpeg";
function AboutPage(){
    return(
       <div>
       <Navbar></Navbar>
       <div className="full-width-box about-1">
        <div className="text-container">
        <p>
        ACM Student Chapter is the International Association for Computing Machinerys
        student society which is the worlds largest educational and scientific computing society.</p>
        <p>
        ACM is dedicated to advancing the field of computing and information technology. It
        provides opportunities for students for networking and sharing their knowledge. Its
        focus is on building and developing members passion for computer science.
        </p>
        </div>
        <div className="image-container">
            <img src={about1img} alt="Image" />
        </div>
        </div>
        <div className="box-2">
        <div className="full-width-box full-width-box-2">
        <div className="image-container">
            <img src={about2img} alt="Image" />
        </div>
        <div className="text-container">
        <p>
        ACM-W Student Chapter is a community of individuals and organizations working to
        improve the representation of women in computing fields worldwide. 
        </p>
        <p>
        The mission of ACM-W is to support, celebrate, and advocate for women in computing. It aims to
        create a welcoming and inclusive computing culture that encourages womens full
        participation in computing fields.
        </p>
        </div>
        </div>
        </div>
        <div className="full-width-box about-1">
        <div className="text-container">
        <p>
        ACM Student Chapter is the International Association for Computing Machinerys
        student society which is the worlds largest educational and scientific computing society.</p>
        <p>
        ACM is dedicated to advancing the field of computing and information technology. It
        provides opportunities for students for networking and sharing their knowledge. Its
        focus is on building and developing members passion for computer science.
        </p>
        </div>
        <div className="image-container">
            <img src={about3img} alt="Image" />
        </div>
        </div>
        <CopyRights></CopyRights>
       </div>
    );
}
export default AboutPage;