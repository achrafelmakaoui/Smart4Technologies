import { useEffect, useState } from "react";
import './App.css';
import Intro from "./components/Intro/Intro";
import LandPage from "./components/LandingPage/LandPage";
import Services from "./components/Services/Services";
import { ThemeProvider } from './ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Calculator from "./components/Calculator/Calculator";
import AboutPage from "./components/AboutPage/AboutPage";
import FAQ from "./components/FAQ/Faq";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
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
import OurTeam from "./components/OurTeam/OurTeam";
// import Login from "./components/Login/Login";
import { Helmet } from 'react-helmet-async';

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setIntroComplete(true);
    } else {
      const timeoutId = setTimeout(() => {
        setIntroComplete(true);
        localStorage.setItem('hasSeenIntro', 'true');
      }, 7000);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <div>
      <ThemeProvider>
        <ScrollToSection/>
        <Scrolltotop />
        <Navbar/>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Smart4Technologies</title>
                  <meta name="description" content="Smart4Technologies offers advanced software for planning and optimizing hydrogen system value chains, tailored for experts, consultants, and project developers." />
                  <link rel="canonical" href="https://www.smart4technologies.com/" />
                </Helmet>
                {introComplete ? (
                  <>
                    <ParticlesComponent />
                    <LandPage/>
                    <Services/>
                    <Calculator/>
                    <AboutPage/>
                    <FAQ/>
                    <Contact/>
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
            path="/OurTeam"
            element={
              <>
                <Helmet>
                  <title>Smart4Technologies - Team</title>
                  <meta 
                    name="description" 
                    content="Meet the expert team at Smart4Technologies, delivering software to plan and optimize hydrogen system value chains for experts, consultants, and project developers." 
                  />
                  <link rel="canonical" href="https://www.smart4technologies.com/Ourteam" />
                </Helmet>
                <ParticlesComponent />
                <OurTeam />
              </>
            }
          />
          <Route
            path="/sources"
            element={
              <>
                <Helmet>
                  <title>Smart4Technologies - Hydrogen Sources</title>
                  <meta 
                    name="description" 
                    content="Discover sustainable energy sources for hydrogen production with Smart4Technologies, optimizing renewable inputs to fuel the future of clean energy." 
                  />
                  <link rel="canonical" href="https://www.smart4technologies.com/sources" />
                </Helmet>
                <ParticlesComponent />
                <Sources />
              </>
            }
          />

          <Route
            path="/production"
            element={
              <>
                <Helmet>
                  <title>Smart4Technologies - Hydrogen Production</title>
                  <meta 
                    name="description" 
                    content="Maximize hydrogen production efficiency with Smart4Technologies. Our advanced tools ensure optimized output for sustainable energy systems." 
                  />
                  <link rel="canonical" href="https://www.smart4technologies.com/production" />
                </Helmet>
                <ParticlesComponent />
                <Production />
              </>
            }
          />

          <Route
            path="/storage"
            element={
              <>
                <Helmet>
                  <title>Smart4Technologies - Hydrogen Storage</title>
                  <meta 
                    name="description" 
                    content="Enhance hydrogen storage solutions with Smart4Technologies' innovative designs, ensuring safe, efficient, and scalable storage for renewable energy." 
                  />
                  <link rel="canonical" href="https://www.smart4technologies.com/storage" />
                </Helmet>
                <ParticlesComponent />
                <Storage />
              </>
            }
          />

          <Route
            path="/application"
            element={
              <>
                <Helmet>
                  <title>Smart4Technologies - Hydrogen Applications</title>
                  <meta 
                    name="description" 
                    content="Unlock the potential of hydrogen applications with Smart4Technologies, providing insights for industries to adopt clean energy and drive innovation." 
                  />
                  <link rel="canonical" href="https://www.smart4technologies.com/application" />
                </Helmet>
                <ParticlesComponent />
                <Application />
              </>
            }
          />
          <Route
            path="/HydrogenSolutions"
            element={
              <>
                <Helmet>
                  <title>Smart4Technologies - Hydrogen Solutions</title>
                  <meta 
                    name="description" 
                    content="Optimize the hydrogen value chain with Smart4Technologies' H2chain software, enhancing safety, storage efficiency, and decision-making for a sustainable future." 
                  />
                  <link rel="canonical" href="https://www.smart4technologies.com/HydrogenSolutions" />
                </Helmet>
                <ParticlesComponent />
                <HydroSolution />
              </>
            }
          />
          <Route
            path="/EngineeringSolutions"
            element={
              <>
                <Helmet>
                  <title>Smart4Technologies - Engineering Solutions</title>
                  <meta 
                    name="description" 
                    content="Smart4Technologies offers precise engineering solutions with CAD/CAM expertise, covering prototyping and design for industries like aerospace and consumer goods." 
                  />
                  <link rel="canonical" href="https://www.smart4technologies.com/EngineeringSolutions" />
                </Helmet>
                <ParticlesComponent />
                <EnginSolution />
              </>
            }
          />
          <Route
            path="/ITSolutions"
            element={
              <>
                <Helmet>
                  <title>Smart4Technologies - IT Solutions</title>
                  <meta 
                    name="description" 
                    content="Smart4Technologies harnesses AI for predictive analytics, chatbots, and automation, improving operational efficiency and business performance." 
                  />
                  <link rel="canonical" href="https://www.smart4technologies.com/ITSolutions" />
                </Helmet>
                <ParticlesComponent />
                <ITSolution />
              </>
            }
          />
          <Route
            path="/TermsOfUse"
            element={
              <>
                <Helmet>
                  <title>Smart4Technologies - Terms of Use</title>
                  <meta 
                    name="description" 
                    content="Review the terms of use for Smart4Technologies, outlining the guidelines for utilizing our advanced software solutions." 
                  />
                  <link rel="canonical" href="https://www.smart4technologies.com/TermsOfUse" />
                </Helmet>
                <ParticlesComponent />
                <TermOfUse />
              </>
            }
          />

          <Route
            path="/Privacy&Policy"
            element={
              <>
                <Helmet>
                  <title>Smart4Technologies - Privacy Policy</title>
                  <meta 
                    name="description" 
                    content="Read the privacy policy of Smart4Technologies, detailing how we protect and manage your data when using our services." 
                  />
                  <link rel="canonical" href="https://www.smart4technologies.com/Privacy&Policy" />
                </Helmet>
                <ParticlesComponent />
                <PrivacyPolicy />
              </>
            }
          />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
