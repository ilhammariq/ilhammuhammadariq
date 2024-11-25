import { Icon } from '@iconify/react';
import React from 'react';
import ImageHome from '../assets/img/3d-2.png'
const HomeComponent = () => {
  return (
    <section id='profile' className='pt-2 pl-4 md:pt-28'>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='w-full flex flex-col justify-center md:gap-16 gap-10'>
          <div className='w-full flex flex-col justify-center'>
            <h1 className='text-4xl font-semibold text-dark mb-1 md:mb-3 dark:text-light'>
              Hi, I'am Ariq
            </h1>
            <h3 className='md:text-lg text-base font-semibold dark:text-slate-400 text-slate-500 mb-10'>
              Software Developer
            </h3>
            <p className='md:text-4xl italic text-lg font-medium md:font-normal dark:text-slate-400 text-slate-500'>
              "Innovating Beyond the Lines of Code"
            </p>
          </div>
          <div>
            <a href='#contactme'>
              <button className='dark:text-light hover:bg-dark dark:hover:bg-light hover:text-light dark:hover:text-dark duration-500 shadow-md cursor-pointer dark:bg-dark font-bold flex items-center gap-2 justify-center px-5 py-3 border-2 rounded-lg'>
                <span>Contact Me</span>
                <Icon icon='la:telegram' width='20' height='20' />
              </button>
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center py-8 md:py-0">
          <img
            src={ImageHome}
            alt=""
          />
        </div>

      </div>
    </section>
  );
};

export default HomeComponent;
