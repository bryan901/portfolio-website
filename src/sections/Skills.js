import React from 'react'
import '../styles/Skills.css'
import Skill from '../components/Skill.js'

export default function Skills() {
  return (
    <div className = "skills " id = "skills">
      <div className = "skills-header">
        <h1 className = "skills-title-text">skills</h1>
        <body className = 'skills-subtitle-text'>some of the technical skills I have developed- I am always earger to learn new things!</body>
      </div>
      <div className = "skill-container">
        <div className = "skills-column">
          <Skill/>
          <Skill/>
        </div>
        <div className = 'skills-column'>
          <Skill/>
          <Skill/>
        </div>
        <div className = 'skills-column'>
          <Skill/>
          <Skill/>
        </div>
      </div>
    </div>
  )
}
