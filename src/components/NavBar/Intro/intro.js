import React, { useState } from 'react';
import './intro.css';
import bg from '../../../assets/Myimage.png';
import btnImg from '../../../assets/hireme.png';
import HireMeForm from '../HireMeForm/hiremeform';
const Intro = () => {
  const [showHireMeForm, setShowHireMeForm] = useState(false);

  const handleHireMeClick = () => {
    setShowHireMeForm(true);
  };

  const handleCloseForm = () => {
    setShowHireMeForm(false);
  };

  return (
    <div>
      <section id="intro">
        <div className='introContent'>
          <span className="hello">Hello,</span>
          <span className='introText'>
            I'm <span className='introName'>ManiRam</span><br />Software Engineer
          </span>
          <p className='introPara'>I am a skilled software engineer with experience in various technologies and a passion for solving complex problems.</p>
          <button className='btn' onClick={handleHireMeClick}>
            <img src={btnImg} alt='Hire me' className='btnImg' />Hire Me
          </button>
        </div>
        <img src={bg} alt="profile" className='bg'/>
      </section>
      {showHireMeForm && <HireMeForm onClose={handleCloseForm} />}
    </div>
  );
};

export default Intro;
