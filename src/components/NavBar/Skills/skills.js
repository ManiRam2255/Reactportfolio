import React from 'react';
import './skills.css';

const SkillCard = ({ skillName, proficiencyLevel, percentage }) => (
  <div className='skillCard'>
    <div className='skillCardContent'>
      <h2>{skillName}</h2>
      <div className='progress'>
        <div className='progressBar' style={{ width: `${percentage}%` }}></div>
      </div>
      <span className='proficiency'>{proficiencyLevel}</span>
      <span className='percentage'>{percentage}%</span>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skillsGrid">
        <SkillCard skillName="Java" proficiencyLevel="Advanced" percentage={80} />
        <SkillCard skillName="SQL" proficiencyLevel="Advanced" percentage={80} />
        <SkillCard skillName="HTML" proficiencyLevel="Intermediate" percentage={75} />
        <SkillCard skillName="CSS" proficiencyLevel="Intermediate" percentage={60} />
        <SkillCard skillName="JavaScript" proficiencyLevel="Intermediate" percentage={70} />
        <SkillCard skillName="ReactJs" proficiencyLevel="Intermediate" percentage={70} />
        <SkillCard skillName="Python" proficiencyLevel="Intermediate" percentage={60} />
        <SkillCard skillName="C" proficiencyLevel="Intermediate" percentage={60} />
        <SkillCard skillName="AngularJs" proficiencyLevel="Beginner" percentage={50} />
      </div>
      <div className="softSkills">
        <h3>Soft Skills</h3>
        <ul>
          <li>Adaptability</li>
          <li>Team Collaboration</li>
          <li>Time Management</li>
          <li>Creativity</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
