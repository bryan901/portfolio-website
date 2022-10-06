import React from "react";
import "../styles/About.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from '@mui/material/Button'; 

export default function About() {
  const style = {
    backgroundColor: "#483d8b",
    color: "#FFFFFF"
  };
  return (
    <div className="about" id="about">
      <div className="side-container">
        <div className="left-elements">
          <img className="small-image" src="assets/IMG_2387.png" alt="" />
          <div className="socials">
            <InstagramIcon className="about-icon" />
            <FacebookIcon className="about-icon" />
            <LinkedInIcon className="about-icon" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="text">
          <h1 className="about-h1">Bryan Lee Hao Kai</h1>
          <h2 className = "about-h2">UCSD '2024, Expected B.S. in Computer Science</h2>
          <body className = "about-body">
          I am an undergraduate student majoring in Computer Science at UCSD. My most relevant technical experience lies in Java, Python, the MERN (MongoDB, Express.js, React.js, Node.js) stack, SQL, and basic C, but I am always excited to learn new technologies and innovate. I am interested in software engineering and have a passion for mobile app development. 
          I play for the UCSD Men's Club Volleyball team in my free time and love basketball!
          </body>
          <a href="https://drive.google.com/file/d/13TkHDRL03XpWsa-teEq_4ixuYMo2fkxh/view?usp=sharing" target = "_blank">
            <Button style = {style}> Resume </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
