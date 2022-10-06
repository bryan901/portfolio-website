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
          <Project
            image = "assets/volleyball.png"
            title = "UCSD Club Volleyball"
            description = "I love sports and play for the UCSD Club Volleyball team in my free time!"
          />
        </div>
        <div className = 'column'>
          <Project
            image = "assets/webscraper.png"
            title = "Automated Webscraper"
            description = "Automated Python web-scraping script using BeautifulSoup, Twilio, and Requests that scrapes e-commerce website for cheapest product price and updates user through Messages every given interval"
          />
          <Project
            image = "assets/cses.png"
            title = "Computer Science and Engineering Society"
            description = "CSES is an organization that promotes a passionate community of computer scientists and engineers at UCSD"
          />
        </div>
        <div className = 'column'>
          <Project
            image = "assets/sortingalg.png"
            title = "Algorithm Visualizer"
            description = "Python tkinter GUI app that displays real-time sorting techniques including Merge, Insertion and other algorithms"
          />
          <Project
            image = "assets/acm.png"
            title = "Association for Computing Machinery"
            description = "ACM at UCSD is an inclusive community of students passionate about technology"
          />
        </div>
      </div>
    </div>
  )
}
