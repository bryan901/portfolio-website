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
        <Experience 
        image = "assets/prokopark.png"
        date = "June 2022 - Sept 2022" 
        location = "San Diego, CA" 
        role = "Software Engineer Intern @ Proko Tech LLC" 
        description1 = "Developed user account deletion feature for the Proko Park mobile application by implementing new code and refactoring  codebase"
        description2 = "Utilized React Native, Redux for creating/ modifying frontend components"
        description3 = "Utilized Express, Node.js, Knex.js, MySQL for developing API routes and database manipulation"
        description4 = "Wrote and maintained design docs to encapsulate feature implementation progress"

        />
        <Experience
        image = "assets/lengineer.png"
        date = "June 2022 - Sept 2022" 
        location = "San Diego, CA" 
        role = "Software Engineer Intern @ LeNgineer LLC" 
        description1 = "Worked on the development of OutTheDoor, an analytics based vehicle purchasing web application that eliminates buyer uncertainty with ML pipeline"
        description2 = "Implemented unit-tested dynamic web-pages using MERN stack, Redux, and CSS "
        description3 = "Maintained and developed REST API features for structuring vehicle data and analytics visualization for • calculation/ prediction"
        description4 = "Trained in Scrum methodology"
        />
        <Experience
        image = "assets/ingram.png"
        date = "July 2021 - Sept 2021" 
        location = "Shanghai, CN" 
        role = "RPA Developer Intern - Pre-sales Team @ Ingram Micro Inc." 
        description1 = "Worked in a team to develop automated processes for improving Ingram invoice processing workflow"
        description2 = "Incorporated OCR technology to identify information and complete invoice filing/ query"
        description3 = "Utilized UiPath Studio, Orchestrator and Robot to deploy processes, resulting in increased efficiency and estimated 3600 minutes per week saved on invoice processing"
        description4 = "Assisted pre-sales team to set up RPA demonstrations/presentations for potential clients, resulting in 2 new enterprise customers"
        />
        <Experience
        image = "assets/perfit.png"
        date = "Jan 2020 - Apr 2020" 
        location = "Shanghai, CN" 
        role = "Software Engineer Intern @ PerFit Fitness Center" 
        description1 = "Spearheaded design and development of Android mobile app for trainers to schedule/ manage client reservations"
        description2 = "Produced an intuitive and effective solution utilized by ~500 and counting clients, and ~20 personal trainers,
resulting in 100% satisfaction by all users"
        description3 = "Implemented product using Android Studio SDK tool, Java, XML, SQLite, and MVC architecture" 
        description4 = "Engaged in constant communication with clients to meet all requirements and expected functionalities" 
        />
      </div>
    </div>
  )
}
