import React from 'react';
import './workexperience.css';

const WorkExperience = () => {
  return (
    <section id="workExperience">
      <h2>Work Experience</h2>
      <div className="workExperienceContainer">
        <div className="workExperienceCard">
          <h3>Python Programming Intern</h3>
          <p><strong>Company:</strong> Motion Cut (Remote)</p>
          <p><strong>Duration:</strong> 02/2024 to 03/2024</p>
          <ul>
            <li>Completed a virtual internship focused on creating dynamic projects using Python.</li>
            <li>Gained hands-on experience in real-world applications and enhanced problem-solving skills.</li>
          </ul>
        </div>
        <div className="workExperienceCard">
          <h3>Java Development Intern</h3>
          <p><strong>Company:</strong> Cognifyz Technologies (Remote)</p>
          <p><strong>Duration:</strong> 05/2024 to 06/2024</p>
          <ul>
            <li>Engaged in a virtual internship to develop dynamic projects using Java.</li>
            <li>Acquired practical coding skills and experience through hands-on project development.</li>
            <li>Contributed to project functionality and efficiency improvements by implementing innovative solutions.</li>
          </ul>
        </div>
        <div className="workExperienceCard">
          <h3>AI-ML Intern</h3>
          <p><strong>Company:</strong> IBM SkillsBuild (Remote)</p>
          <p><strong>Duration:</strong> 05/2024 to 06/2024</p>
          <ul>
            <li>Learned about various AI types and their practical applications.</li>
            <li>Applied IBM Watson Studio for developing AI solutions, including a kidney stone prediction model.</li>
            <li>Designed and tested chatbots to improve user experience and automate interactions.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
