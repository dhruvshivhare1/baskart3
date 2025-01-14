import React from 'react';
import Header from './components/Header'; // Ensure Header is imported
import Hero from './components/Hero'; // Ensure Hero is imported
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ModelViewer from './components/ModelViewer';
import SplineSection from './components/SplineSection';

function App() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <SplineSection />
      <Services />
      <Portfolio />
      <Clients />
      <Pricing />
      <Contact />
      <ModelViewer />
      <Footer />
    </div>
  );
}

export default App;