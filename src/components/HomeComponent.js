import { Icon } from '@iconify/react';
import React from 'react';
import ImageHome from '../assets/img/img_home.png'
const HomeComponent = () => {
  return (
    <section id='profile' className='pt-28 md:pt-50'>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='w-full flex flex-col justify-center md:gap-16 gap-10'>
          <div className='w-full flex flex-col justify-center'>
            <h1 className='text-4xl font-semibold text-dark mb-1 md:mb-3 dark:text-light'>
              Hi, I'am Ariq
            </h1>
            <h3 className='md:text-lg text-base font-semibold dark:text-slate-400 text-slate-500 mb-3'>
              Frontend Developer
            </h3>
            <p className='md:text-base text-sm font-medium md:font-normal dark:text-slate-400 text-slate-500'>
              High level experience in web development knowledge, creating of
              responsive and interactive websites
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
        <div className='w-full flex justify-center md:pb-10'>
          <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
            <mask id='mask0' mask-type='alpha'>
              <path
                d='M64.5,-36.6C74.2,-20.3,66.4,6.8,52.7,27.9C39.1,49,19.5,64.1,-0.6,64.4C-20.7,64.7,-41.4,50.3,-55.3,29C-69.3,7.8,-76.6,-20.3,-66.2,-36.9C-55.9,-53.6,-27.9,-58.7,-0.3,-58.6C27.3,-58.4,54.7,-52.9,64.5,-36.6Z'
                transform='translate(100 100)'
              />
            </mask>
            <g mask='url(#mask0)'>
              <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M64.5,-36.6C74.2,-20.3,66.4,6.8,52.7,27.9C39.1,49,19.5,64.1,-0.6,64.4C-20.7,64.7,-41.4,50.3,-55.3,29C-69.3,7.8,-76.6,-20.3,-66.2,-36.9C-55.9,-53.6,-27.9,-58.7,-0.3,-58.6C27.3,-58.4,54.7,-52.9,64.5,-36.6Z'
                  transform='translate(100 100)'
                  className='fill-dark dark:fill-light duration-500'
                />
              </svg>
              <image
                y='20'
                x='10'
                className='w-[150px] scale-110'
                xlinkHref={ImageHome}
                alt=''
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
