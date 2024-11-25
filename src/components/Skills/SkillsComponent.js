import { Icon } from '@iconify/react';
import React from 'react';
import iconSkills from './skills.json';

const SkillItem = ({ item }) => (
  <div className="flex flex-col items-center gap-5 py-5">
    <Icon
      className={`saturate-0 ${item.id === '2' || item.id === '3' ? 'hover:contrast-100 contrast-0' : ''
        } hover:saturate-100 cursor-pointer duration-500 hover:scale-110`}
      icon={item.icon}
      width={item.width || 60}
      height={item.height || 60}
    />
    <span className="md:text-lg text-sm font-medium dark:text-slate-400 text-slate-500">
      {item.name}
    </span>
  </div>
);

const SkillsComponent = () => {
  return (
    <section id="skills" className="py-12">
      <div>
        <div className="text-center mb-10 md:mb-24">
          <h1 className="text-2xl font-semibold dark:text-light">Skills</h1>
          <p className="md:text-sm text-xs font-bold md:font-normal dark:text-slate-400 text-slate-500">
            My Development Skills
          </p>
        </div>
        <div className="md:w-3/4 mx-auto grid grid-cols-3 gap-10 place-items-center">
          {iconSkills.map((item, id) => (
            <SkillItem key={id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
