import React from "react";
import { Select } from '@chakra-ui/react';
import logo from "../images/logo.png";
import "../landing_components/Header.css";

export default function Header() {

    return (
        <div className="header">
            <div className="logo-and-name">
                <img className="logo" src={logo}/>
                <div className="name">Danyuk Stores</div>
            </div>
        </div>
    );
}
