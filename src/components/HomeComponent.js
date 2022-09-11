import { Icon } from '@iconify/react';
import React from 'react';

const HomeComponent = () => {
  return (
    <section id='profile' className='pt-20 md:pt-60'>
      <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-10'>
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
        <div className='w-full flex justify-center'>
          <img
            className='w-3/4 rounded-full'
            src='https://scontent.fcgk6-2.fna.fbcdn.net/v/t1.6435-9/81228594_1869294939882273_997827289200721920_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHFgYTCNZK2BZ8IX3W0eHYrzG5oV-u9TsjMbmhX671OyGtafjTj9IR3aRINyX7xoqfv8BcDWyUIY7hDjYHUlpIu&_nc_ohc=_Dvs1FFDn2EAX92wBSv&tn=QcaMcEMb6jMKlh9Q&_nc_ht=scontent.fcgk6-2.fna&oh=00_AT9GjGwUi0JjW10gHVlBdXu4cAv5089PG7FOax-dLuOgEw&oe=6342C324'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
