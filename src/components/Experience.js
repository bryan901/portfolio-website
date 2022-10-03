import React from 'react'
import '../styles/Experience.css'

function Experience() {
  return (
    <div className = "main-container">
        <div className = "left-side">
            <img className="company-logo" src="assets/google-logo.png" alt="" />
        </div>
        <div className = "right-side">
            <div className = "top-part">
                <h2 className = "top-text">San Diego, CA</h2>
                <h2 className = "top-text">June 2021 - September 2021</h2>
            </div>
            <div className = "description">
                <h1 className = "role">Software Engineer Intern at ProkoPark LLC</h1>
                <body className = "body-desc">- Programmed the new tesla model 3 rocket that </body>
                <body className = "body-desc">- Programmed the new tesla model 3 rocket that </body>
                <body className = "body-desc">- Programmed the new tesla model 3 rocket that </body>
                <body className = "body-desc">- Programmed the new tesla model 3 rocket that </body>
            </div>
        </div>
    </div>
  )
}

export default Experience