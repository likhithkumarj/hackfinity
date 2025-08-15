import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Registration from './components/Registration';
import Challenges from './components/Challenges';
import Prizes from './components/Prizes';
import Schedule from './components/Schedule';
import OrganizingCommittee from './components/OrganizingCommittee';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Registration />
      <Challenges />
      <Prizes />
      <Schedule />
      <OrganizingCommittee />
      <Sponsors />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;