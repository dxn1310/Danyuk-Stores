import React from "react";
import location from "../images/location.png" 
import phone from "../images/phone.png"

export default function Footer() {
    return (
        <div className="footer">
            <h1>Danyuk Stores</h1>
            <div className="location">
                <img className="location-icon" src={location}/>
                <div className="address"><b>Opp Sri Padmavathi Mahila University, Tirupati.</b></div>
            </div>
            <div className="phone">
                <img className="phone-icon" src={phone}/>
                <div className="phone-number"><b>9844080328,9743120289</b></div>
            </div>
        </div>
    );
}