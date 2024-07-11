import React from "react";
import logo from "../images/header-logo.svg"

export default function Header() {
    return (
        <header>
            <img src={logo} alt="logo image" />
            <p>my travel journal.</p>
        </header>
        
    )
}