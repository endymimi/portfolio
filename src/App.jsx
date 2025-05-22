import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './layout/Header';
import Hero from './layout/Hero';
import FeaturedProjects from "./layout/FeaturedProjects";
import About from "./layout/About";
import Contact from './layout/Contact';
import Footer from './layout/Footer';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FeaturedProjects />
            <About />
            <Contact />
            
          </>
        } />
        
        
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
