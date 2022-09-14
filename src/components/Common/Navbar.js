import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { menuNavbar, menuNavbarFloating } from '../../config/constants';
import useDarkMode from '../../config/useDarkMode';

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();
  const [hide, setHide] = useState(false);
  const [navFixed, setNavFixed] = useState('');
  const [navShow, setNavShow] = useState('scale-0 translate-x-20');
  const [navFloat, setNavFloat] = useState('translate-x-full right-0');
  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setNavFloat('')
      : setNavFloat('translate-x-full right-0');
    window.scrollY > 10 ? setNavFixed('-translate-y-full') : setNavFixed('');
    window.scrollY > 10
      ? setNavShow('scale-100')
      : setNavShow(
          `${hide ? 'scale-0 -translate-x-0' : 'scale-0 translate-x-20'}`
        );
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <nav>
      <div className='hidden md:block'>
        <div
          className={`fixed ${navFixed} top-0 py-8 w-full duration-500 bg-light dark:bg-dark shadow-lg`}>
          <div className='px-10 max-w-7xl m-auto flex justify-between text-dark dark:text-light'>
            <h1 className='text-2xl font-medium'>Ariq</h1>
            <ul className='flex text-lg items-center gap-6'>
              {menuNavbar.map((item, id) => (
                <a key={id} href={item.href} className='cursor-pointer'>
                  <li className='font-medium'>{item.title}</li>
                </a>
              ))}
              <li
                onClick={() => setTheme(colorTheme)}
                className='hover:bg-dark dark:hover:bg-light hover:text-light dark:hover:text-dark p-2 duration-500 ease-in-out rounded-full font-medium cursor-pointer'>
                {colorTheme === 'light' ? (
                  <Icon icon='akar-icons:sun' width='25' height='25' />
                ) : (
                  <Icon icon='bxs:moon' width='25' height='25' />
                )}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div
            className={`${
              hide ? `${navShow}` : `scale-0 translate-x-20`
            } bg-dark dark:bg-light dark:border-dark right-0 duration-1000 ease-out text-light dark:text-dark rounded-lg border-2 shadow-lg px-4 py-5  fixed bottom-10`}>
            <div onClick={() => setHide(!hide)} className='group'>
              <div className='cursor-pointer  hover:scale-150 duration-500 ease-in-out'>
                <Icon icon='akar-icons:eye-open' width='30' height='30' />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            hide && 'translate-x-full right-0'
          } ${navFloat} inset-x-1/4 fixed bottom-10 duration-700 z-10`}>
          <div
            className={`grid grid-cols-7 px-3 py-5 place-items-center rounded-lg border-2 dark:bg-light bg-dark dark:border-dark text-light dark:text-dark shadow-lg`}>
            {menuNavbarFloating.map((item, i) => (
              <a
                href={item.href}
                onClick={() => setHide(!hide)}
                className='group'
                key={i}>
                <div className='cursor-pointer hover:scale-[1.8] duration-500 ease-in-out'>
                  <Icon icon={item.icon} width='30' height='30' />
                  <span className='absolute hidden group-hover:flex -top-10 right-1 translate-x-full w-auto p-2 bg-dark dark:bg-light dark:text-dark rounded-lg text-center text-light text-[10px]'>
                    {item.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className='md:hidden'>
        <div className='bottom-0 fixed w-full dark:bg-dark dark:text-light z-20 duration-500 border-t-2 dark:border-dark bg-light '>
          <div className='py-4 px-7 flex items-center justify-between gap-3'>
            <span className='text-lg font-semibold'>Ariq</span>
            <div className='flex items-center gap-5'>
              <div
                onClick={() => setTheme(colorTheme)}
                className='font-medium cursor-pointer'>
                {colorTheme === 'light' ? (
                  <Icon icon='akar-icons:sun' width='25' height='25' />
                ) : (
                  <Icon icon='bi:moon' width='25' height='25' />
                )}
              </div>
              <Icon
                icon='uil:bars'
                width='30'
                height='30'
                className='cursor-pointer'
                onClick={() => setToggleNavbar(!toggleNavbar)}
              />
            </div>
          </div>
          <div
            className={`${
              toggleNavbar ? '-translate-y-72' : ''
            } px-7 pt-10 py-4 absolute -bottom-72 dark:border-dark rounded-t-lg dark:bg-dark bg-light w-full duration-500`}>
            <div className='grid grid-cols-3 gap-10 mb-10 place-items-center'>
              {menuNavbar.map((item, i) => (
                <a
                  href={item.href}
                  onClick={() => setToggleNavbar(!toggleNavbar)}
                  key={i}
                  className='flex flex-col justify-center cursor-pointer items-center gap-1'>
                  <Icon icon={item.icon} width='20' height='20' />
                  <span className='text-xs font-medium'>{item.title}</span>
                </a>
              ))}
            </div>

            <div className='flex justify-end'>
              <Icon
                icon='ph:x-bold'
                width='30'
                height='30'
                className='cursor-pointer'
                onClick={() => setToggleNavbar(!toggleNavbar)}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
