export const menuNavbar = [
  {
    title: 'Home',
    icon: 'bx:home-alt',
    href: '#profile',
  },
  {
    title: 'About',
    icon: 'ant-design:user-outlined',
    href: '#about',
  },
  {
    title: 'Skills',
    icon: 'icons8:idea',
    href: '#skills',
  },
  {
    title: 'Journey',
    icon: 'bytesize:work',
    href: '#journey',
  },
  {
    title: 'Portfolio',
    icon: 'carbon:image',
    href: '#portfolio',
  },
  {
    title: 'ContactMe',
    icon: 'la:telegram',
    href: '#contactme',
  },
];

export const menuNavbarFloating = [
  ...menuNavbar,
  {
    title: 'Hide',
    icon: 'bx:hide',
    href: '#',
  },
];
