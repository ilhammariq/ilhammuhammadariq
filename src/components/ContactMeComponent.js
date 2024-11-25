import React from 'react';
import { Icon } from '@iconify/react';

const ContactMeComponent = () => {
  return (
    <section id="contactme" className="py-12 mb-12 px-4 md:px-10">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-semibold dark:text-light">Contact Me</h1>
        <p className="md:text-sm text-xs font-bold md:font-normal dark:text-slate-400 text-slate-500">
          Let's get in touch
        </p>
      </div>

      <div className="md:flex md:justify-between md:items-start md:space-x-12">
        {/* Bagian Info Kontak */}
        <div className="md:w-1/2 mb-10 md:mb-0 md:pl-16">
          <h2 className="text-lg font-semibold dark:text-light mb-4">Get in Touch</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Icon
                icon="line-md:email-twotone"
                width="24"
                className="mr-3 text-dark dark:text-light"
              />
              <span className="text-sm text-slate-500 dark:text-slate-400">
                ilhammuhammadariq1@gmail.com
              </span>
            </li>
            <li className="flex items-center">
              <Icon
                icon="line-md:phone"
                width="24"
                className="mr-3 text-dark dark:text-light"
              />
              <span className="text-sm text-slate-500 dark:text-slate-400">
                +62 822 8215 0225
              </span>
            </li>
            <li className="flex items-center">
              <Icon
                icon="line-md:location"
                width="24"
                className="mr-3 text-dark dark:text-light"
              />
              <span className="text-sm text-slate-500 dark:text-slate-400">
                Jakarta Selatan, Indonesia
              </span>
            </li>
          </ul>
        </div>

        {/* Bagian Formulir */}
        <div className="md:w-1/2">
          <h2 className="text-lg font-semibold dark:text-light mb-4">
            Send a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:focus:ring-blue-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 text-light bg-dark dark:text-dark dark:bg-light duration-500 shadow-md cursor-pointer rounded-md font-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMeComponent;
