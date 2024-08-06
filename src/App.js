import About from "./components/NavBar/About/about";
import Education from "./components/NavBar/Education/education";
import Footer from "./components/NavBar/Footer";
import Intro from "./components/NavBar/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Portfolio from "./components/NavBar/Portfolio/portfolio";
import Skills from "./components/NavBar/Skills/skills";
import WorkExperience from "./components/NavBar/WorkExperience/workexperience";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Education/>
      <Skills/>
      <Portfolio/>
      <WorkExperience/>
      <Footer/>
    </div>
  );
}

export default App;
