import { Icon } from '@iconify/react';
import React from 'react';
import about from './about.json'

const AboutComponent = () => {
  return (
    <section id="about" className="pt-24 pb-12">
      <div>
        <div className="text-center mb-16">
          <h1 className="text-2xl font-semibold dark:text-light">About Me</h1>
          <p className="md:text-sm text-xs font-bold md:font-normal dark:text-slate-400 text-slate-500">
            My Introduction
          </p>
        </div>

        <div className="text-center mb-20">
          <p className="md:text-base md:px-20 text-sm dark:text-slate-400 text-slate-500">
            I am a versatile developer with expertise in both frontend and backend technologies, currently exploring a focused path in either area. On the frontend, I specialize in creating responsive, dynamic interfaces with React.js and Next.js. On the backend, I build scalable, high performance applications using Go and Node.js. Experienced in designing and implementing APIs, integrating third party APIs and collaborating in teams to produce innovative and adaptable technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-4 place-items-center md:px-24 md:m-auto md:w-3/4 mb-10 px-5 text-dark dark:text-light">
          {about.aboutIcon.map(({ href, icon }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 p-3 border-dark rounded-full cursor-pointer hover:text-light hover:scale-125 dark:hover:text-dark hover:bg-dark dark:hover:bg-light duration-500 ease-in-out dark:border-white"
            >
              <Icon icon={icon} width="25" height="25" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
