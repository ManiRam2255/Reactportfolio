import React from 'react';
import './education.css';

const Education = () => {
  return (
    <section id="education" className="educationSection">
      <h2>Education</h2>
      <div className="educationContainer">
        <div className="educationItem">
          <h3>Bachelor of Computer Science and Engineering</h3>
          <p>Gitam University, Hyderabad</p>
          <p className="duration">2021 - 2025 (pursuing)</p>
          <p className="cgpa">CGPA: 9.3</p>
        </div>
        <div className="educationItem">
          <h3>XII</h3>
          <p>Narayana Junior College, Hyderabad</p>
          <p className="duration">2019 - 2021</p>
          <p className="percentage">Percentage: 97.6%</p>
        </div>
        <div className="educationItem">
          <h3>X (SSC)</h3>
          <p>Trinity High School, Luxettipet</p>
          <p className="duration">2018 - 2019</p>
          <p className="cgpa">CGPA: 9.2</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
