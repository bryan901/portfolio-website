import React from 'react'
import '../styles/Projects.css'
import Project from '../components/Project.js'

export default function Projects() {
  return (
    <div className = "projects " id = "projects">
      <div className = "projects-header">
        <h1 className = "projects-title-text">personal projects and other activities</h1>
        <body className = 'projects-subtitle-text'>below are some interest projects I have done in my own time, outiside class, as well as some of the activities I am currently involved in!</body>
      </div>
      <div className = "project-container">
        <div className = "column">
          <Project
            image = "assets/moodtracker.png"
            title = "VibeCheck"
            description = "Calendar web app that reflects user daily mood by extracting audio features from recently played songs and determining mood using Mage.AI categorization model"
          />
          <Project/>
        </div>
        <div className = 'column'>
          <Project/>
          <Project/>
        </div>
        <div className = 'column'>
          <Project/>
          <Project/>
        </div>
      </div>
    </div>
  )
}
