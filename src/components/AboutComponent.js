import { Icon } from '@iconify/react';
import React from 'react';

const AboutComponent = () => {
  return (
    <section id='about' className='py-32'>
      <div>
        <div className='text-center mb-10'>
          <h1 className='text-2xl font-semibold dark:text-light'>About me</h1>
          <p className='md:text-sm text-xs font-bold md:font-normal dark:text-slate-400 text-slate-500'>
            My Introduction
          </p>
        </div>

        <div className='text-center mb-10'>
          <p className='md:text-base text-sm dark:text-slate-400 text-slate-500'>
            Web developer, which is currently still focused on Frontend
            developer. work responsibly and and provide the best quality in
            website development
          </p>
        </div>

        <div className='grid grid-cols-4 place-items-center md:m-auto md:w-3/4 mb-10 px-5 text-dark dark:text-light'>
          <a
            href='/'
            className='border-2 p-3 rounded-full cursor-pointer hover:text-light dark:hover:text-dark hover:bg-dark dark:hover:bg-light duration-700'>
            <Icon icon='line-md:instagram' width='25' height='25' />
          </a>
          <a
            href='/'
            className='border-2 p-3 rounded-full cursor-pointer hover:text-light dark:hover:text-dark hover:bg-dark dark:hover:bg-light duration-700'>
            <Icon icon='line-md:linkedin' width='25' height='25' />
          </a>
          <a
            href='/'
            className='border-2 p-3 rounded-full cursor-pointer hover:text-light dark:hover:text-dark hover:bg-dark dark:hover:bg-light duration-700'>
            <Icon icon='line-md:facebook' width='25' height='25' />
          </a>
          <a
            href='/'
            className='border-2 p-3 rounded-full cursor-pointer hover:text-light dark:hover:text-dark hover:bg-dark dark:hover:bg-light duration-700'>
            <Icon icon='line-md:github-loop' width='25' height='25' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
