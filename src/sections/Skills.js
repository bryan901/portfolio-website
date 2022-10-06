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
          <Skill
            image = "assets/java.png"
            skill = "Java"
          />
          <Skill
            image = "assets/javascript.png"
            skill = "JavaScript, HTML, CSS"
          />
        </div>
        <div className = 'skills-column'>
          <Skill
            image = "assets/python.png"
            skill = "Python"
          />
          <Skill
            image = "assets/node.png"
            skill = "Node, Express and DBs"
          />
        </div>
        <div className = 'skills-column'>
          <Skill
            image = "assets/git.png"
            skill = "Git and Version Control"
          />
          <Skill
            image = "assets/cpp.png"
            skill = "C++"
          />
        </div>
      </div>
    </div>
  )
}
