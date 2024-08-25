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
        <Routes>
          <Route
            path="/"
            element={
              <>
                {introComplete ? (
                  <>
                    {/* <Navbar/> */}
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
            path="/sources"
            element={<><Navbar/><Sources/><Footer/></>}
          />
          <Route
            path="/production"
            element={<><Navbar/><Production/><Footer/></>}
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
