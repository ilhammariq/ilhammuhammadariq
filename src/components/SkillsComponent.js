import { Icon } from '@iconify/react';
import React from 'react';
import { iconSkills } from '../config/constants';

const SkillsComponent = () => {
  return (
    <section id='skills' className='py-24'>
      <div>
        <div className='text-center mb-10 md:mb-24'>
          <h1 className='text-2xl font-semibold dark:text-light'>Skills</h1>
          <p className='md:text-sm text-xs font-bold md:font-normal dark:text-slate-400 text-slate-500'>
            My Development Skills
          </p>
        </div>
        <div className='md:w-3/4 m-auto'>
          <div className="hidden md:grid grid-cols-3 gap-10 place-items-center">
            {
              iconSkills.map((item, id) => (
                <div className='flex flex-col items-center gap-5'  key={id}>
                  <Icon className={`saturate-0 ${item.name === 'Bootstrap' && 'hover:contrast-100 contrast-0'} hover:saturate-100 cursor-pointer duration-500 hover:scale-110`} icon={item.icon} width={item.width} height={item.height} />
                  <span className='md:text-lg text-sm font-medium dark:text-slate-400 text-slate-500'>{item.name}</span>
                </div>
              ))
            }
          </div>
          <div className="md:hidden grid grid-cols-3 place-items-center">
            {
              iconSkills.map((item, id) => (
                <div className='py-5 flex flex-col items-center gap-5' key={id}>
                  <Icon className={`saturate-0 ${item.name === 'Bootstrap' && 'hover:contrast-100 contrast-0'} hover:saturate-100 cursor-pointer duration-500 hover:scale-110`} icon={item.icon} width='60' height='60' />
                  <span className='md:text-lg text-sm font-medium dark:text-slate-400 text-slate-500'>{item.name}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
};

export default SkillsComponent;
