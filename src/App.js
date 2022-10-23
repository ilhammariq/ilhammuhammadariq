import React, { useEffect } from 'react';
import AboutComponent from './components/AboutComponent';
import Navbar from './components/Common/Navbar';
import ContactMeComponent from './components/ContactMeComponent';
import HomeComponent from './components/HomeComponent';
import JourneyComponent from './components/JourneyComponent';
import PortfolioComponent from './components/PortfolioComponent';
import SkillsComponent from './components/SkillsComponent';
import { smoothScrolling } from './config/utils';

const App = () => {
  useEffect(() => {
    smoothScrolling();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='dark:bg-dark duration-500'>
        <div className='px-7 md:px-20 max-w-7xl m-auto '>
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
