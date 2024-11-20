import React from 'react';
import journey from "./journey.json"

const JourneyComponent = () => {
  return (
    <section id="journey" className="py-12">
      <div>
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-2xl font-semibold dark:text-light">Journey</h1>
          <p className="md:text-sm text-xs font-bold md:font-normal dark:text-slate-400 text-slate-500">
            My Journey
          </p>
        </div>

        <div className="relative md:w-3/4 mx-auto px-4">
          {/* Garis Vertikal */}
          <div className="absolute left-8 top-0 h-full border-l-2 border-dashed border-slate-300 dark:border-slate-600"></div>

          {journey.map((experience, index) => (
            <div
              key={index}
              className="relative mb-10 pl-12"
            >
              {/* Titik pada Garis */}
              <div className="absolute w-4 h-4 left-[8px] top-1/2 transform -translate-y-1/2 bg-dark dark:bg-light border-2 border-white dark:border-dark rounded-full"></div>

              {/* Kartu Pengalaman Kerja */}
              <div className="p-8 border rounded-md shadow-sm bg-white dark:bg-slate-800 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold dark:text-light">
                  {experience.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {experience.company}
                </p>
                <p className="text-sm font-light text-slate-600 dark:text-slate-400">
                  {experience.duration}
                </p>
                <ul className='list-disc pl-4'>
                  {
                    experience.description.map((desc) => (
                      <li className="mt-2 text-sm font-normal text-slate-500 dark:text-slate-400">
                        {desc}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default JourneyComponent;
