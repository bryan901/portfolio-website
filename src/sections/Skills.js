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
            body = "4 years of development experience with Java, the first language I learnt! I have many smaller scope Java projects that I introduced me to the world of programming, and the first big project I ever did was in Java!"
          />
          <Skill
            image = "assets/javascript.png"
            skill = "JavaScript, HTML, CSS"
            body = "Almost of the full-stack projects I have worked on consists of JavaScript, HTML, and CSS and other JS libraries or frameworks."
          />
        </div>
        <div className = 'skills-column'>
          <Skill
            image = "assets/python.png"
            skill = "Python"
            body = "Explored the language extensively within the scopes of ML, and CV. Experience with TensorFlow, PyTorch and Pandas, and presently expanding technical skills in this realm!"
          />
          <Skill
            image = "assets/node.png"
            skill = "Node, Express and DBs"
            body = "Many past projects include backend, requiring modules like Node/ Express to facilitate interaction between apps and DBs (MongoDB, Firebase, MySQL!)"
          />
        </div>
        <div className = 'skills-column'>
          <Skill
            image = "assets/git.png"
            skill = "Git and Version Control"
            body = "I use Git/ Github for a variety "
          />
          <Skill
            image = "assets/cpp.png"
            skill = "C++"
            body = "I use Git/ Github for a variety "
          />
        </div>
      </div>
    </div>
  )
}
