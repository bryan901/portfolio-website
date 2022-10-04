import React from 'react'
import '../styles/Experience.css'

function Experience(props) {
  return (
    <div className = "main-container">
        <div className = "left-side">
            <img className="company-logo" src={props.image} alt="" />
        </div>
        <div className = "right-side">
            <div className = "top-part">
                <h2 className = "top-text">{props.location}</h2>
                <h2 className = "top-text">{props.date}</h2>
            </div>
            <div className = "description">
                <h1 className = "role">{props.role}</h1>
                <body className = "body-desc">- {props.description1} </body>
                <body className = "body-desc">- {props.description2} </body>
                <body className = "body-desc">- {props.description3}</body>
                <body className = "body-desc">- {props.description4} </body>
            </div>
        </div>
    </div>
  )
}

export default Experience