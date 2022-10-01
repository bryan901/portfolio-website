import React from 'react';
import '../styles/Header.css';
import {Mail, LocalPhone} from '@material-ui/icons'

export default function Header(){
    return(
        <nav className = "nav">
            <div className = "left-navbar">
                <a href = "#home" className = "title"> bryan's portfolio. </a>
                <div className = "contact-container">    
                    <Mail className = "icon"/>
                    <span>leehaokai@gmail.com</span>
                </div>
                <div className = "contact-container">    
                    <LocalPhone className = "icon"/>
                    <span>(949)992-6833</span>
                </div>
            </div>
            <ul >
                <li>
                    <a href = "#about"> ABOUT </a>
                </li>
                <li>
                    <a href = "#skills"> SKILLS </a>
                </li>
                <li>
                    <a href = "#workexperience"> EXPERIENCE </a>
                </li>
                <li>
                    <a href = "#projects"> PROJECTS </a>
                </li>
            </ul>
        </nav>
    )
}