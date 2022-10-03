import "../styles/Home.css";
import React from 'react';
import Typewriter from 'typewriter-effect';

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
            <Typewriter className = "text"
              options={{ 
              strings:["CS @ UCSD", "Software Engineer", "LGBTQ Activist"],
              autoStart:true,
              delay:75,
              loop:true,
              wrapperClassName: "text",
              cursor: ""
            }}/> 
        </div>
    </div>
  );
}
