import React from 'react'
import '../styles/Project.css'

function Project(props) {
  return (
    <div className = "project-main-container">
        <img className ="project-logo" src={props.image} alt="" />
        <h1 className = "project-name-specific">{props.title}</h1>
        <body className = "project-description-specific">{props.description}</body>
    </div>
  )
}

export default Project