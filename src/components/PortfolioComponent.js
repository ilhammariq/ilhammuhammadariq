import React from 'react';

const PortfolioComponent = () => {
  return (
    <section id='portfolio' className='py-12'>
      <div>
        <div className='text-center mb-10 md:mb-24'>
          <h1 className='text-2xl font-semibold dark:text-light'>Portfolio</h1>
          <p className='md:text-sm text-xs font-bold md:font-normal dark:text-slate-400 text-slate-500'>
            My Portfolio
          </p>
        </div>

        <div className='text-center mb-10'>
          <p className='md:text-3xl md:px-20 text-2xl dark:text-slate-400 text-slate-500'>
            Soon
          </p>
        </div>
      </div>
    </section>
  )
};

export default PortfolioComponent;
