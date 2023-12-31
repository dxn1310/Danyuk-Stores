import React from "react";
import { Select } from '@chakra-ui/react';
import logo from "../images/logo.png";
import "../landing_components/Header.css";
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <div className="header">
            <Link to="/">
                <div className="logo-and-name">
                    <div className="logo-img"><img className="logo" src={logo}/></div>
                    <div className="name">Danyuk Stores</div>
                </div>
            </Link>
        </div>
    );
}
