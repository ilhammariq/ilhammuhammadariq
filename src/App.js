import React, { useEffect } from 'react';
import Navbar from './components/Common/Navbar/Navbar';
import ContactMeComponent from './components/ContactMeComponent';
import HomeComponent from './components/HomeComponent';
import JourneyComponent from './components/Journey/JourneyComponent';
import PortfolioComponent from './components/PortfolioComponent';
import SkillsComponent from './components/Skills/SkillsComponent';
import { smoothScrolling } from './config/utils';
import AboutComponent from './components/About/AboutComponent';

const App = () => {
  useEffect(() => {
    smoothScrolling();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='dark:bg-dark duration-500'>
        <div className='px-7 md:px-10 max-w-7xl m-auto '>
          <HomeComponent />
          <AboutComponent />
          <SkillsComponent />
          <JourneyComponent />
          <PortfolioComponent />
          <ContactMeComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
