import React from 'react'
import '../styles/WorkExperience.css'
import Experience from '../components/Experience.js'

export default function WorkExperience() {
  return (
    <div className = "workexperience " id = "workexperience">
      <div className = "workexperience-header">
        <h1 className = "title-text">work experience</h1>
      </div>
      <div className = "experience-container">
        <Experience/>
        <Experience/>
        <Experience/>
        <Experience/>
      </div>
    </div>
  )
}
