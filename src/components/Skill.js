import React from 'react'
import '../styles/Skill.css'

function Skill(props) {
  return (
    <div className = "skill-main-container">
        <img className ="skill-logo" src={props.image} alt="" />
        <h1 className = "skill-name-specific">{props.skill}</h1>
        <body className = "skill-description-specific">{props.body}</body>
    </div>
  )
}

export default Skill