import { useEffect, useState } from "react";
import Intro from "./components/Intro/Intro";
import LandPage from "./components/LandingPage/LandPage";
import Services from "./components/Services/Services";
import { ThemeProvider } from './ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Calculator from "./components/Calculator/Calculator";
import AboutPage from "./components/AboutPage/AboutPage";
import FAQ from "./components/FAQ/Faq";
import './App.css';
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Sources from "./components/Sources/Sources";
import Navbar from "./components/Navbar/Navbar";
import Production from "./components/Production/Production";
import Storage from "./components/Storage/Storage";
import Application from "./components/Application/Application";
import HydroSolution from "./components/HydroSolution/HydroSolution";
import ParticlesComponent from "./components/LandingPage/Particles";
import EnginSolution from "./components/EnginSolution/EnginSolution";
import ITSolution from "./components/ITSolution/ITSolution";
import Scrolltotop from "./Scrolltotop";
import TermOfUse from "./components/TermOfUse/TermOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import ScrollToSection from "./ScrollToSection";

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setIntroComplete(true);
    } else {
      setTimeout(() => {
        setIntroComplete(true);
        localStorage.setItem('hasSeenIntro', 'true');
      }, 7000);
    }
  }, []);

  return (
    <div>
      <ThemeProvider>
        <ScrollToSection/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {introComplete ? (
                  <>
                    <Navbar/>
                    <LandPage/>
                    <Services/>
                    <Calculator/>
                    <AboutPage/>
                    <FAQ/>
                    <Contact/>
                    <Footer/>
                  </>
                ) : (
                  <>
                    {!introComplete && <Intro />}
                  </>
                )}
              </>
            }
          />
          <Route
            path="/signup"
            element={<Login/>}
          />
          <Route
            path="/signin"
            element={<Login/>}
          />
          <Route
            path="/password_reset"
            element={<Login/>}
          />
          <Route
            path="/password_resett"
            element={<Login/>}
          />
          <Route
            path="/sources"
            element={<><Scrolltotop/><Navbar/><Sources/><Footer/></>}
          />
          <Route
            path="/production"
            element={<><Scrolltotop/><Navbar/><Production/><Footer/></>}
          />
          <Route
            path="/storage"
            element={<><Scrolltotop/><Navbar/><Storage/><Footer/></>}
          />
          <Route
            path="/application"
            element={<><Scrolltotop/><Navbar/><Application/><Footer/></>}
          />
          <Route
            path="/HydrogenSolutions"
            element={<><Scrolltotop/><ParticlesComponent/><Navbar/><HydroSolution/><Footer/></>}
          />
          <Route
            path="/EngineeringSolutions"
            element={<><Scrolltotop/><ParticlesComponent/><Navbar/><EnginSolution/><Footer/></>}
          />
          <Route
            path="/ITSolutions"
            element={<><Scrolltotop/><ParticlesComponent/><Navbar/><ITSolution/><Footer/></>}
          />
          <Route
            path="/TermsOfUse"
            element={<><Scrolltotop/><ParticlesComponent/><Navbar/><TermOfUse/><Footer/></>}
          />
          <Route
            path="/Privacy&Policy"
            element={<><Scrolltotop/><ParticlesComponent/><Navbar/><PrivacyPolicy/><Footer/></>}
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
