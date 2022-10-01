import "../styles/Home.css";
import React from 'react';

export default function Home() {
  return (
    <div className="home" id= "home">
        <div className ="left">
            <div className="background-circle">
                <img className = "image" src = "assets/IMG_4859.png" alt= ""/>
            </div>
        </div>
        <div className = "bottom">
            <h2 className = "h2">Hello, I'm</h2>
            <h1 className = "h1">Bryan Lee</h1>
            <span className = "span">hihihihih</span>
        </div>
    </div>
  );
}
